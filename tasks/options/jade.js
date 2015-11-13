module.exports = function () {
  'use strict';

  return {
    src: {
      options: {
        pretty: true
      },
      files: [{
        expand: true,
        cwd: '.',
        src: '<%= srcDir %>/app/**/*.jade',
        ext: '.html'
      }]
    },
    build: {
      options: {
        pretty: true
      },
      files: [{
        expand: true,
        cwd: '.',
        src: '<%= tempDir %>/app/**/*.jade',
        ext: '.html'
      }]
    }
  };
};