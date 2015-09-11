var ffi = require('ffi');
var ref = require('ref');

var libm = ffi.Library('./libtest', {
  'hello': [ 'void', [ref.refType(ref.types.uchar), 'int']]
});

var buf = new Buffer('abcd');
libm.hello(buf, 4); 
