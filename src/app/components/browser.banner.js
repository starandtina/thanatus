(function (wndw) {
  'use strict';

  function BrowserBanner($, UserAgent) {
    function browserFileAccept(inputButton) {
      var userAgent = new UserAgent();
      if ('safari' === userAgent.browserName.toLowerCase()) {
        $(inputButton).removeAttr('accept');
      }
    }

    function isSupportedBrowser() {
      // Assume supported, and just return false for browser versions
      // that we definitely have no interest in supporting.
      var userAgent = new UserAgent();
      if (userAgent.browserName === 'ie' && userAgent.browserVersion < 9) {
        return false;
      }
      if (userAgent.browserName === 'firefox' && userAgent.browserVersion < 12) {
        return false;
      }
      if (userAgent.browserName === 'safari' && userAgent.browserVersion < 5) {
        return false;
      }

      return true;
    }

    function maybeShowBanner() {
      if (!isSupportedBrowser()) {
        if ($('.dbaas-browser-banner').length > 0) {
          return;
        }

        var $browserBanner = $('<div class="dbaas-browser-banner">');
        $browserBanner.css({
          'text-align': 'center',
          'font-size': '16px',
          'padding': '10px 0px',
          'background': '#FFEEA9',
          'margin-top': '-100px',
          'border-bottom': '1px solid #CCC'
        });
        $browserBanner.html(
          'You are using an unsupported browser, so some features may not work. <br> Please upgrade to a <a style="font-size:larger"' +
          ' href="http://www.google.com/chrome" target="_blank">Google Chrome</a> <a style="font-size:larger" ' +
          ' href="http://www.firefox.com/" target="_blank">Firefox</a> or <a style="font-size:larger" ' +
          ' href="http://www.apple.com/safari/" target="_blank">Safari</a>.'
        );
        $(document.body).prepend($browserBanner);
        $browserBanner.animate({
          'margin-top': '+=100px'
        }, 100);
      }
    }

    $(document).ready(maybeShowBanner);

    return {
      isSupportedBrowser: isSupportedBrowser,
      browserFileAccept: browserFileAccept
    };
  }
  if ('function' === typeof define && define.amd) {
    define(['jquery', 'components/useragent'], function ($, UserAgent) {
      return new BrowserBanner($, UserAgent);
    });
  } else {
    new BrowserBanner(wndw.$, wndw.UserAgent);
  }
}(window));