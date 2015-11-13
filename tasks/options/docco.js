module.exports = function () {
  'use strict';

  return {
    docs: {
      src: [
        '<%= srcDir %>/app/**/*.js'
      ],
      options: {
        output: '<%= docsDir %>/docco'
      }
    }
  };
};