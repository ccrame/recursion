// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  var result = [];

  var recursion = function(item){
    _.each(item.classList,function(element){
      if(element === className){
        result.push(item);
      }//end of if
    });//end of each

    if(item.children.length > 0){
      _.each(item.children,function(element){
        recursion(element);
      });//end of each
    }//end of if
  }; //end of recursion function

  recursion(document.body);
  return result;
};
