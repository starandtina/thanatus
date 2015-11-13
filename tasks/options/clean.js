module.exports = function () {
  'use strict';

  return {
    on_start: ['<%= destDir %>', '<%= tempDir %>'],
    on_stop: ['<%= destDir %>/bower_components', '<%= tempDir %>'],
    temp: ['<%= tempDir %>'],
    docs: ['<%= docsDir %>/docco', '<%= docsDir %>/styleguide']
  };
};
