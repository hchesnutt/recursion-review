// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:


var getElementsByClassName = function(className
) {
  //initialize nodeList
  let nodeList = [];
  //function traverse
  const traverse = function(node) {
    //  if classname equals target add to nodelist
    if (node.classList.contains(className)) {
      nodeList.push(node);
    }
    //  if children recurse on each child
    if (node.children.length > 0) {
      for (let i = 0; i < node.children.length; ++i) {
        traverse(node.children[i]);
      }
    }
  };
  traverse(document.body);
  return nodeList;
};