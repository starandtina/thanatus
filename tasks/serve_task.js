module.exports = function (grunt) {
  'use strict';

  grunt.registerTask('serve', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'open', 'json-server', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'csscomb',
      'less:src',
      'concat:css',
      'jadeamd:build',
      'connect:dev',
      'open',
      'json-server',
      'watch'
    ]);
  });
};