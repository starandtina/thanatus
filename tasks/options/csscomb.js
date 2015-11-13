module.exports = function () {
  'use strict';

  return {
    source: {
      expand: true,
      cwd: '<%= srcDir %>/css',
      dest: '<%= srcDir %>/css',
      src: ['**/*.less']
    }
  };
};