/* jshint node:true */

module.exports = function (grunt) {
  'use strict';

  var config = {
    pkg: grunt.file.readJSON('package.json'),
    baseDir: '.',
    srcDir: 'src',
    destDir: 'dist',
    tempDir: 'tmp',
    docsDir: 'docs',
    testDir: 'test',
    unitTests: 'test/unit/specs/**/*.js',
    unitTestDir: 'test/unit/',
    tasksDir: 'tasks',
    liveReloadPort: 35729,
    port: 5601
  };

  // show elapsed time at the end
  require('time-grunt')(grunt);

  // load plugins
  require('load-grunt-tasks')(grunt);

  // load task definitions
  grunt.loadTasks('tasks');

  // Utility function to load plugin settings into config
  function loadConfig(config, path) {
    require('glob').sync('*', {
      cwd: path
    }).forEach(function (option) {
      var key = option.replace(/\.js$/, '');
      // If key already exists, extend it. It is your responsibility to avoid naming collisions
      config[key] = config[key] || {};
      grunt.util._.extend(config[key], require(path + option)(config, grunt));
    });
    // technically not required
    return config;
  }

  // Merge that object with what with whatever we have here
  loadConfig(config, './tasks/options/');

  // pass the config to grunt
  grunt.initConfig(config);
};
