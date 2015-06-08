// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  var result = [];
  var recursion = function(item){
    if(Array.isArray(item)){

    } else if ( typeof item === 'object') {

    } else {

    } //end of if chain

  }; //end of recursion

  recursion();
  return result;
};
