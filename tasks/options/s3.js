module.exports = function () {
  'use strict';

  return {
    dist: {
      bucket: 'download.dbaas.org',
      access: 'private',
      debug: true, // uncommment to prevent actual upload
      upload: [{
        src: '<%= tempDir %>/<%= pkg.name %>-latest.zip',
        dest: 'portal/portal/<%= pkg.name %>-latest.zip',
      }, {
        src: '<%= tempDir %>/<%= pkg.name %>-latest.tar.gz',
        dest: 'portal/portal/<%= pkg.name %>-latest.tar.gz',
      }]
    },
    release: {
      bucket: 'download.dbaas.org',
      access: 'private',
      debug: true, // uncommment to prevent actual upload
      upload: [{
        src: '<%= tempDir %>/<%= pkg.name %>-<%= pkg.version %>.zip',
        dest: 'portal/portal/<%= pkg.name %>-<%= pkg.version %>.zip',
      }, {
        src: '<%= tempDir %>/<%= pkg.name %>-<%= pkg.version %>.tar.gz',
        dest: 'portal/portal/<%= pkg.name %>-<%= pkg.version %>.tar.gz',
      }]
    }
  };
};