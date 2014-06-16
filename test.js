/* jshint expr: true */
'use strict';

require('node-jsx').install();

var assert = require('assert');
//var React = require('react');
var rtest = require('react-addons').TestUtils;

var paginator = require('./');

describe('Paginator', function() {
  it('should be a react component', function() {
    var cmp = paginator();
    assert(rtest.isComponentOfType(cmp, paginator));
    assert(rtest.isCompositeComponent(cmp));
  });
});
