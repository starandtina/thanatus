module.exports = function () {
  'use strict';

  return {
    html: ['<%= destDir %>/{,*/}*.html'],
    css: ['<%= destDir %>/visual/styles/{,*/}*.css'],
    options: {
      assetsDirs: ['<%= destDir %>']
    }
  };
};
