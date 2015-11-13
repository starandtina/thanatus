// Lint and build CSS
module.exports = function (grunt) {
  'use strict';

  grunt.registerTask('default', ['jshint:source', 'less:src', 'docs']);
};