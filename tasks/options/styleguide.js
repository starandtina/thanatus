module.exports = function () {
  'use strict';

  return {
    docs: {
      options: {
        framework: {
          name: 'kss'
        },
        template: {
          src: '<%= docsDir %>/kss/template'
        },
        name: 'Style Guide'
      },
      files: {
        '<%= docsDir %>/styleguide': '<%= srcDir %>/css/**/*.less'
      }
    }
  };
};