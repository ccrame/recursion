// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var result = "";

  var recursion = function(item){
    if(Array.isArray(item)){

    } else if (typeof item === 'object') {

    } else {
      result += String(item);
    }//end of if/else chain
  }//end of recursion function

  recursion(obj);
  return result;
};
