// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className){
	
	var results = [];

	var elements = document;

	var traverse = function(node) {
		// console.log(node.childNodes)
		for(var i = 0; i < node.childNodes.length; i++){

			if(node.childNodes[i].getAttribute && node.childNodes[i].getAttribute('class')){
				if(node.childNodes[i].classList.contains(className)){
					results.push(node.childNodes[i]);
				}	
			}

			if(node.childNodes[i].childNodes.length > 0){
				traverse(node.childNodes[i]);
			}

			
		}
	}

	traverse(elements);
	return results;
};
