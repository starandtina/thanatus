module.exports = function (grunt) {
  'use strict';

  grunt.registerTask('docs', ['clean:docs', 'docco:docs', /*'styleguide:docs'*/ ]);
};
