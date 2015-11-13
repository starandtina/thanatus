module.exports = function () {
  'use strict';

  return {
    dest: {
      expand: true,
      src: ['**/*.js', '!bower_components/**/*.js'],
      dest: '<%= destDir %>',
      cwd: '<%= destDir %>',
      options: {
        quite: true,
        compress: true,
        preserveComments: false,
        banner: '<%= meta.banner %>'
      }
    }
  };
};