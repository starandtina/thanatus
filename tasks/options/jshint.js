module.exports = function () {
  'use strict';

  return {
    options: {
      jshintrc: '<%= baseDir %>/.jshintrc',
      force: true, //report JSHint errors but not fail the task
      reporter: require('jshint-stylish')
    },
    // just lint the source dir
    source: {
      files: {
        src: [
          'Gruntfile.js',
          '<%= srcDir %>/app/**/*.js',
          '<%= tasksDir %>/**/*.js',
          '!<%= srcDir %>/app/components/require.js',
          '!<%= srcDir %>/bower_components/**/*.js',
          '!<%= srcDir %>/bower_components/**/*.js',
          '!<%= srcDir %>/app/components/require.config.js',
          '!<%= srcDir %>/app/components/i18n.js',
          '!<%= srcDir %>/app/components/jade.js',
          '!<%= srcDir %>/app/components/jquery.bbq.js',
          '!<%= srcDir %>/app/components/jquery.migrate.js',
          '!<%= srcDir %>/app/components/json2.js',
          '!<%= srcDir %>/app/components/moment.js',
          '!<%= srcDir %>/app/components/nls/**/*.js',
          '!<%= srcDir %>/app/**/*.html.js'
        ]
      }
    },
    // lint the test dir
    test: {
      options: {
        jshintrc: '<%= testDir %>/.jshintrc'
      },
      src: ['<%= testDir %>/spec/**/*.js']
    }
  };
};