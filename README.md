#checknode

[![Build Status](https://secure.travis-ci.org/st-luke/osconfig.png)](http://travis-ci.org/st-luke/osconfig)

Check to see if a .tar.gz of the node source you want exists on the official website.

Supports versions 0.5.1 and up.

#### Installation:

`npm install checknode`

#### Usage:

`var checknode = require('checknode')`

```javascript
checknode('0.8.4', function (res) {
  if (err) return console.log(err)
  console.log(res)
})
```

checknode uses isaacs' [node-semver module](http://github.com/isaacs/node-semver) to clean version input, so you can get a little crazy with version formatting if you really want.

For example: `v0.8.10` or `=v.8.10` will both work because isaacs' module is really good like that.

#### test:
`npm test`

###License
MIT