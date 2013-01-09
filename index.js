var http = require('http')
var semver = require('semver')

module.exports = checknode = function (version, cb) {

  version = semver.clean(version)
  if (!semver.valid(version)) {
    return cb(new Error('invalid semver'))
  }

  var opts = {
    hostname: 'nodejs.org',
    port: 80,
    path: '/dist/vNODE_VERSION/node-vNODE_VERSION.tar.gz',
    method: 'HEAD'
  }
  opts.path = opts.path.replace(/NODE_VERSION/g, version)

  var req = http.request(opts, function (res) {
    res.setEncoding('utf8')
    cb(null, res.statusCode)
  })

  req.on('error', function (err) {
    return cb(err)
  })
  req.end()

}
