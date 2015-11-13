module.exports = function (config, grunt) {
  'use strict';
  console.log(grunt.template.process('11  <%= tempDir %>'));
  return {
    html: ['<%= tempDir %>/{,*/}*.html'],
    options: {
      dest: '<%= destDir %>'
    }
  };
};
