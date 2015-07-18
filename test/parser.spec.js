'use strict';

var edgescapeParser = require('../lib/index');
var test = require('tape');

test('non-string returns same value passed in', function(t) {
    t.plan(1);
    var nonString = 99;
    t.equal(edgescapeParser(nonString), nonString);
});

test('empty string returns empty string', function(t) {
    t.plan(1);
    var emptyString = '';
    t.equal(edgescapeParser(emptyString), emptyString);
});

test('string without commas but has an equal sign returns a single key/value pair', function(t) {
    t.plan(1);
    var singleValue = 'state=WA';
    t.deepEqual(edgescapeParser(singleValue), {
        state: 'WA'
    });
});

test('string with multiple commas and equal signs returns parsed object', function(t) {
    t.plan(1);
    var singleValue = 'city=Bainbridge Island,state=WA,zip=98110';
    t.deepEqual(edgescapeParser(singleValue), {
        city: 'Bainbridge Island',
        state: 'WA',
        zip: '98110'
    });
});