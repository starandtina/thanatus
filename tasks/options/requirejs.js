module.exports = function (config, grunt) {
  'use strict';

  // refer to https://github.com/jrburke/r.js/blob/master/build/example.build.js
  var _c = {
    build: {
      options: {
        appDir: '<%= tempDir %>',
        baseUrl: 'app',

        dir: '<%= destDir %>',

        mainConfigFile: '<%= tempDir %>/app/components/require.config.js',
        modules: [], // populated below

        optimize: 'none',
        preserveLicenseComments: false,
        optimizeCss: 'standard.keepComments', // https://github.com/jrburke/r.js/blob/master/build/example.build.js#L218
        optimizeAllPluginResources: false,

        removeCombined: true,
        findNestedDependencies: true,
        normalizeDirDefines: 'all',
        inlineText: true,
        skipPragmas: true,

        done: function (done, output) {
          var duplicates = require('rjs-build-analysis').duplicates(output);

          if (duplicates.length > 0) {
            grunt.log.subhead('Duplicates found in requirejs build:');
            grunt.log.warn(duplicates);
            done(new Error('r.js built duplicate modules, please check the excludes option.'));
          }

          done();
        }
      }
    }
  };

  // setup the modules require will build
  //var requireModules = _c.build.options.modules = [{
  _c.build.options.modules = [{
    // main/common module
    name: 'app',
    include: [
      'jquery',
      'lodash',
      'components/all',
      'controllers/all',
      'factories/all',
      'services/all',
      'directives/all',
      'angular',
      'angular-animate',
      'angular-cookies',
      'angular-resource',
      'angular-route',
      'angular-sanitize',
      'angular-bootstrap'
    ]
  }];
  /*
  var fs = require('fs');
  var modulePath = config.srcDir + '/app/components'

  // create a module for each directory in src/app/components/
  fs.readdirSync(modulePath).forEach(function (moduleName) {
    if (fs.lstatSync(modulePath + '/' + moduleName).isDirectory()) {
      if (!grunt.file.exists(modulePath + '/' + moduleName + '/' + moduleName + '.controller.js')) {
        fs.readdirSync(modulePath + "/" + moduleName).forEach(function (subName) {
          requireModules.push({
            name: 'components/' + moduleName + '/' + subName + '/' + moduleName + '.' + subName + '.' + 'controller',
            exclude: ['app']
          });
        })
      } else {
        requireModules.push({
          name: 'components/' + moduleName + '/' + moduleName + '.controller',
          exclude: ['app']
        });
      }
    }
  });

  // exclude the literal config definition from all components
  requireModules
    .forEach(function (module) {
      module.excludeShallow = module.excludeShallow || [];
      module.excludeShallow.push('config');
    });
*/
  return _c;
};