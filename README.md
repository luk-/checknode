#checknode

[![Build Status](https://secure.travis-ci.org/st-luke/checknode.png)](http://travis-ci.org/st-luke/checknode)

Check to see if a .tar.gz of the node source you want exists on the official website.

Supports looking for versions 0.5.1 and up.

#### Installation:

`npm install checknode`

#### Usage:

```javascript
var checknode = require('checknode')

checknode('0.8.4', function (err, res) {
  if (!err) {
    res === 200 && console.log('version exists')
    res === 404 && console.log('version does not exist')
  }
})
```

checknode uses isaacs' [node-semver module](http://github.com/isaacs/node-semver) to clean version input, so you can get a little crazy with version formatting if you really want.

For example: `v0.8.10` or `=v.8.10` will both work because isaacs' module is really good like that.

#### test:
`npm test`

###License
MIT
