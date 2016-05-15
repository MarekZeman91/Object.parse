# Object.parse
Object.parse is enhanced version of JSON.parse with extra support for functions inside stringified object.

### Usage:

Parse complex object with function.
```js
var obj = '{' +
'   "string": "string",' +
'   "number": 999,' +
'   "object": {' +
'       "array": [' +
'           "abcd",' +
'           1234,' +
'           true,' +
'           null,' +
'           null' +
'       ],' +
'       "boolean": false' +
'   },' +
'   "boolean": true,' +
'   "function": "function FN(a, b, c) {a += b; c += b; return a * c;}"' +
'}';
 
var result = Object.parse(obj);
 
/*
result = {
    string: 'string',
    number: 999,
    object: {
        array: ['abcd', 1234, true, null, null],
        boolean: false
    },
    boolean: true,
    function: function FN(a, b, c) {
        a += b; c += b;
        return a * c;
    }
}
*/
```
