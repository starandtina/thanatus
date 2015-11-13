module.exports = function () {
  'use strict';

  return {
    options: {
      separator: ';'
    },
    css: {
      options: {
        separator: ''
      },
      files: {
        '<%= tempDir %>/css/common.css': [
          '<%= tempDir %>/css/base/reset.css',
          '<%= tempDir %>/css/base/base.css',
          '<%= tempDir %>/css/base/layout.css',
          '<%= srcDir %>/bower_components/bootstrap/dist/css/bootstrap.css',
          '<%= tempDir %>/css/ui/**/*.css',
          '<%= tempDir %>/css/base/home.css'
        ]
      }
    }
  };
};