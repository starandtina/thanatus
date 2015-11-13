module.exports = function (grunt) {
  'use strict';

  grunt.registerMultiTask('jadeamd', 'Convert Jade Template to JS client-side functions', function () {
    var jade = require('jade');
    var path = require('path');
    var minify = require('html-minifier').minify;
    var tally = 0;
    var jadeOptions = {
      compileDebug: false,
      self: false,
      pretty: false,
      debug: false
    };
    var htmlMinifierOptions = {
      removeComments: true,
      collapseWhitespace: true
    };

    var tpl = [
      '! (function (wndw) {',
      'var jadify = function (jade, _t) {',
      'var yudify = <%= compiledJadeStr %>',
      'return function (locals) {',
      'if (locals && locals._t) _t = locals._t.merge(_t);',
      'return yudify(locals);',
      '}',
      '};',
      '"function" == typeof define && define.amd ? define("<%= templateName %>", ["components/jade", "<%= i18n %>"], function (e, _t) {',
      'return jadify(e, _t); ',
      '}) : wndw.jade.templates["<%= templateBaseName %>"]= jadify(wndw.jade.helpers);',
      '}(window));'
    ].join('\n');

    this.files.forEach(function (filePair) {
      filePair.src.forEach(function (file) {
        try {
          var templateName = file.replace(/^src\/app\/|\.jade$/g, '');
          var i18n = 'i18n!' + path.dirname(templateName) + '/nls/' + path.basename(templateName);
          var compiledJadeStr = '';
          var outputFilepath = file.replace(/\.jade$/, '.js');

          if (path.extname(file) === '.html' && grunt.file.exists(file)) {
            compiledJadeStr = [
              'function template(locals) {',
              'var buf = [];',
              'var jade_mixins = {};',
              'var jade_interp;',
              'buf.push("' + minify(grunt.file.read(file), htmlMinifierOptions).toString().replace(/\"/g, '\\"') + '");',
              ';return buf.join("");',
              '}'
            ].join('\n');
            outputFilepath = file + '.js';
          } else {
            compiledJadeStr = jade.compileClient(grunt.file.read(file), jadeOptions).toString();
          }
          grunt.file.write(outputFilepath, grunt.template.process(tpl, {
            data: {
              compiledJadeStr: compiledJadeStr,
              templateName: templateName,
              i18n: i18n.replace(/\.html$/g, ''),
              templateBaseName: file.replace(/^src\/app\/|\.html\.jade$/g, '')
            }
          }));
        } catch (err) {
          grunt.fatal(err);
        }

        tally += 1;
        grunt.log.debug('Jade ' + file);
      });
    });
    grunt.log.debug('Convert Jade Templates on ' + String(tally).cyan + ' files.');
  });
};