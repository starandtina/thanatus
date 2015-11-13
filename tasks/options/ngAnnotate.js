module.exports = function () {
  'use strict';

  return {
    // rebuild all annotations
    options: {
      add: true,
      remove: true,
      singleQuotes: true
    },
    build: {
      expand: true,
      cwd: '<%= tempDir %>',
      src: [
        'app/components/**/*.js',
        'app/controllers/**/*.js',
        'app/directives/**/*.js',
        'app/factories/**/*.js',
        'app/services/**/*.js',
        'app/modules/**/*.js',
        'app/app.js'
      ],
      dest: '<%= tempDir %>'
    }
  };
};