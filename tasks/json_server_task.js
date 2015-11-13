module.exports = function (grunt) {
  'use strict';

  grunt.registerMultiTask('json-server', 'mock web back-end locally', function () {
    var server = require('json-server');
    var fs = require('fs');

    this.filesSrc.forEach(function (file) {
      var data = fs.readFileSync(file, 'utf8');

      data = JSON.parse(data);

      Object.keys(data).forEach(function (key) {
        server.low.db[key] = data[key];
      });

      // write data back to db.json file
      server.low.path = 'test/mock/db.json';
    });

    server.listen(3000);
  });
};