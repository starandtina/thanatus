module.exports = function () {
  'use strict';

  return {
    src: {
      options: {
        compress: true,
        cleancss: true
      },
      files: [{
        expand: true,
        cwd: '<%= srcDir %>/css/',
        src: ['**/*.less'],
        dest: '<%= tempDir %>/css/',
        ext: '.css',
        extDot: 'last'
      }]
    }
  };
};