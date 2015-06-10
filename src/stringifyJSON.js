// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  
  var recursion = function(input){
    if(input === null || input === undefined){
      return String(input);
    // if input is an array
    } else if (Array.isArray(input)){
      var result = [];
      _.each(input,function(value){
        result.push(recursion(value));
      });
      return '[' + result.join(',') + ']';

    // if input is an object
    } else if (typeof input === 'object'){
      var result = [];
      _.each(input,function(value,key){
        if(typeof value != 'undefined' && typeof value !== 'function'){
          result.push('"' + String(key) + '":' + recursion(value)); 
        }
      });
      return '{' + result.join(',') + '}';

    // if input is a string
    } else if ( typeof input === 'string') {
      return '"' + input + '"';

      //if input is anything else
    } else {
      return String(input);
    }//end of if/else chain
  }//end of recursion function

  return recursion(obj);
};
