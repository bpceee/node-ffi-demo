var ffi = require('ffi');
var ref = require('ref');

var libm = ffi.Library('./libtestcpp', {
  'hellocpp': [ 'void', []]
});

libm.hellocpp(); 
