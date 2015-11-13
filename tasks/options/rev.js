module.exports = function () {
  'use strict';

  return {
    dist: {
      options: {
        encoding: 'utf8',
        algorithm: 'md5',
        length: 8
      },
      files: {
        src: [
          '<%= destDir %>/app/{,*/}*.js',
          '!<%= destDir %>/app/app.js',
          '!<%= destDir %>/app/descriptors/*.js',
          '<%= destDir %>/visual/styles/{,*/}*.css',
          //'<%= destDir %>/visual/icons/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
          //'<%= destDir %>/visual/fonts/*'
        ]
      }
    }
  };
};