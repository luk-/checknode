var assert = require('assert')
var check_node = require('../')

var versions = [
  '0.5.1'
, '0.5.2'
, '0.5.3'
, '0.5.4'
, '0.5.5'
, '0.5.6'
, '0.5.7'
, '0.5.8'
, '0.5.9'
, '0.5.10'
, '0.6.0'
, '0.6.1'
, '0.6.2'
, '0.6.3'
, '0.6.4'
, '0.6.5'
, '0.6.6'
, '0.6.7'
, '0.6.8'
, '0.6.9'
, '0.6.10'
, '0.6.11'
, '0.6.12'
, '0.6.13'
, '0.6.14'
, '0.6.15'
, '0.6.16'
, '0.6.17'
, '0.6.18'
, '0.6.19'
, '0.6.20'
, '0.6.21'
, '0.7.0'
, '0.7.1'
, '0.7.2'
, '0.7.3'
, '0.7.4'
, '0.7.5'
, '0.7.6'
, '0.7.7'
, '0.7.8'
, '0.7.9'
, '0.7.10'
, '0.7.11'
, '0.7.12'
, '0.8.0'
, '0.8.1'
, '0.8.2'
, '0.8.3'
, '0.8.4'
, '0.8.5'
, '0.8.6'
, '0.8.7'
, '0.8.8'
, '0.8.9'
, '0.8.10'
, '0.8.11'
, '0.8.12'
, '0.8.13'
, '0.8.14'
, '0.8.15'
, '0.8.16'
, '0.9.0'
, '0.9.1'
, '0.9.2'
, '0.9.3'
, '0.9.4'
, '0.9.5']

var invalid = [
  'high'
, 'fructose'
, 'corn'
, 'syrup']

var no_exist = [
  '42.2.1'
, '60.6.6'
, '100.1.1']

versions.forEach(function (ver) {
  check_node(ver, function (err, res) {
    assert.equal(res, 200, 'version does not exist')
    console.log('node v%s exists', ver )
  })
})

invalid.forEach(function (ver) {
  check_node(ver, function (err, res) {
    assert.equal(err.toString(), 'Error: invalid semver')
    console.log('"%s" is positively invalid semver', ver)
  })
})

no_exist.forEach(function (ver) {
  check_node(ver, function (err, res) {
    assert.equal(res, 404)
    console.log('node v%s does not yet exist', ver)
  })
})
