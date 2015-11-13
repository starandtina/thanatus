module.exports = function () {
  'use strict';

  return {
    unit: {
      configFile: '<%= baseDir %>/karma.conf.js',
      browsers: ['Chrome'],
      //background: true,
      singleRun: true,
      reporters: ['progress', 'coverage']
    }
  };
};