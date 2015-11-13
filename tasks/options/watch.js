module.exports = function (config) {
  'use strict';

  return {
    css: {
      files: ['<%= srcDir %>/**/*.less'],
      tasks: ['less:src', 'concat:css']
    },
    js: {
      files: ['<%= srcDir %>/app/**/*.js'],
      tasks: ['newer:jshint:source']
    },
    test: {
      files: ['<%= testDir %>/spec/**/*.js'],
      tasks: ['newer:jshint:test', 'karma:unit:run']
    },
    jade: {
      files: ['<%= srcDir %>/app/**/*.jade', '<%= srcDir %>/app/components/**/*.html'],
      tasks: ['jadeamd:build']
    },
    dev: {
      options: {
        livereload: config.liveReloadPort || 35729
      },
      files: [
        '<%= tempDir %>/**/*.{html,js,css,json}',
        '<%= srcDir %>/**/*.{html,js,css,json}',
        '<%= srcDir %>/img/{,*/}**/*.{png,jpg,jpeg,gif,webp,svg}'
      ]
    }
  };
};