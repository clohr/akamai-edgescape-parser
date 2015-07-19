Akamai Edgescape Header Parser
===============================

[![Build Status](https://travis-ci.org/clohr/akamai-edgescape-parser.svg?branch=master)](https://travis-ci.org/clohr/akamai-edgescape-parser)

A utility that parses an Akamai Edgescape string into a key/value pair object. Designed for Node, but can also be used in the browser via [Browserify](http://browserify.org/).

Usage
=====
```js
var akamaiEdgescapeParser = require('akamai-edgescape-parser');
var exampleEdgescapeString = 'city=Bainbridge Island,state=WA,zip=98110';
var keyValuePairs = akamaiEdgescapeParser(exampleEdgescapeString);

console.log('keyValuePairs:', keyValuePairs);
/* outputs
{
    city: 'Bainbridge Island',
    state: 'WA',
    zip: '98110'
}
*/
```

