define([
  'require',
  'jquery',
  'lodash',
  'config',
  'moment',
  'components/language',
  'components/log',
  'components/multitracker',
  'i18n!components/nls/moment.lang',
], function (require, $, _, config, Moment, Language, log, MultiTracker) {
  'use strict';

  Moment.lang(Language.getLanguageCode());

  var Tmpst = {};

  Tmpst.config = config;
  Tmpst.log = log({
    level: config.log
  });

  //handle page errors
  window.onerror = function (message, url, lineNum) {
    // First check the URL and line number of the error
    url = url || window.location.href;
    // 99% of the time, errors without line numbers arent due to our code,
    // they are due to third party plugins and browser extensions
    if (lineNum === undefined || lineNum == null) return;

    // Now figure out the actual error message
    // If it's an event, as triggered in several browsers
    if (message.target && message.type) {
      message = message.type;
    }
    if (!message.indexOf) {
      message = 'Non-string, non-event error: ' + (typeof message);
    }

    var errorDescrip = {
      message: message,
      script: url,
      line: lineNum,
      url: document.URL
    };

    Tmpst.multitracker.push(['page.error.javascript', errorDescrip]);
  };

  if (config.debug) {
    require.onError = function (Error) {
      Tmpst.multitracker.push(['page.error.requirejs', {
        url: location.href,
        message: Error.message,
        type: Error.requireType,
        modules: Error.requireModules
      }]);

      Tmpst.log.error(Error);

      var match = Error.message.match(/context:\s*(.*)\s*\n/);
      if (match && '_' === match[1]) {
        var message = '<div>oooops! something unexpected happened, please <a href="" + location.href + "">refresh</a> your browser</div>';
        var $screen = $('<div>').addClass('fullscreen');
        Tmpst.message.add($(message).addClass('message'));
        $screen.appendTo('body').show();
      }
    };
  }

  Tmpst.multitracker = new MultiTracker({
    logger: Tmpst.log
  });

  Tmpst.multitracker.register('204', []);
  Tmpst.multitracker.register('ga', window._gaq = [], 'google');

  //sometimes we need to track what pages user alwasy like to scroll
  var $window = $(window);
  var scrollTracker = function () {
    var source = _.compact((window.location.pathname || '').split('/')).join('-') || 'homepage';
    Tmpst.multitracker.push(['user.scroll.' + source, $window.scrollTop()]);
  };
  $window.scroll(_.throttle(scrollTracker, 2e3));

  return Tmpst;
});