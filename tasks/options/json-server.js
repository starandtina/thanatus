module.exports = function () {
  'use strict';

  return {
    dev: {
      src: ['<%= baseDir %>/test/mock/**/*.json']
    }
  };
};