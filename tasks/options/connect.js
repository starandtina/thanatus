module.exports = function (config) {
  'use strict';

  return {
    options: {
      hostname: '0.0.0.0',
      useAvailablePort: true
    },
    dev: {
      options: {
        port: config.port,
        base: config.srcDir,
        middleware: function (connect) {
          return [
            require('connect-livereload')({
              port: config.liveReloadPort || 35729
            }),
            require('connect-modrewrite')([
              '!\\.html|/api|\\.js|\\.svg|\\.css|\\.png|\\.gif|\\.ico|\\.md$ /index.html [L]',
              '^/api/(.*)$ http://localhost:3000/$1 [P]'
            ]),
            connect.static(require('path').resolve(config.tempDir)),
            connect.static(require('path').resolve(config.srcDir))
          ];
        }
      }
    },
    dist: {
      options: {
        port: config.port,
        base: config.destDir,
        middleware: function (connect) {
          return [
            require('connect-modrewrite')([
              '!\\.html|/api|\\.js|\\.svg|\\.css|\\.png|\\.gif|\\.ico|\\.md$ /index.html [L]',
              '^/api/(.*)$ http://localhost:3000/$1 [P]'
            ]),
            require('compression')(),
            connect.static(require('path').resolve(config.destDir))
          ];
        }
      }
    },
    unit_tests: {
      options: {
        port: config.port,
        keepalive: true,
        middleware: function (connect) {
          return [
            // mainly just for index.html
            connect.static(config.unitTestDir),
            // for the modules to test
            connect.static(config.srcDir),
            // contains mocha.js
            connect.static('node_modules/mocha'),
            // contains expect.js
            connect.static('node_modules/expect.js'),
            // bundle the spec files into one file that changes when needed
            function (req, resp, next) {
              if (req.url !== '/specs.js') {
                return next();
              }

              var Kat = require('kat');
              resp.statusCode = 200;
              resp.setHeader('Content-Type', 'application/javascript');
              var read = new Kat();
              require('glob')(config.unitTests, function (err, files) {
                if (err) {
                  next(err);
                  return;
                }

                files.forEach(function (file) {
                  read.add(file);
                });
                read.pipe(resp);
              });
            }
          ];
        }
      }
    }
  };
};