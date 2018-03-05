// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // declare stringifiedJSON
  var stringifiedJSON = '';
  // Invoke evaluate on each key in obj
  for (var key of obj) {
    
  }
  // concat to stringifiedJSON
};


var evaluate = function(val) {
  switch (typeof val) {
  case 'undefined':
    return 'undefined';
    break;
  case 'boolean':
    return val ? 'true' : 'false';
    break;
  case 'number':
    return val.toString();
    break;
  case 'string':
    return `${val}`;
    break;
  default:
    if (Array.isArray(val)) {
      for (var i = 0; i < val.length - 1; i++) {
        return stringifyJSON(val[i]);
      }
    } else {
      return stringifyJSON(val);
    }
  } 
};