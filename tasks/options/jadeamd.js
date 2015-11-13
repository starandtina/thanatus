module.exports = function () {
  'use strict';

  return {
    build: {
      options: {},
      expand: true,
      cwd: '<%= srcDir %>/app',
      src: ['**/*.{jade,html}']
    }
  };
};