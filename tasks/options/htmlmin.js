module.exports = function () {
  'use strict';

  return {
    build: {
      expand: true,
      cwd: '<%= tempDir %>',
      src: [
        'index.html'
      ],
      dest: '<%= tempDir %>'
    }
  };
};