// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:


var stringifyJSON = function(obj) {
	var newValue;

	var stringIt = function(param){
		if(typeof param == 'number'){
			newValue = String(param);
		}
		else if(typeof param == 'object' && param == null){
			newValue = String(param);
		}
		else if(typeof param == 'boolean'){
			newValue = String(param);	
		}
		else if(typeof param == 'string'){
			newValue = "\"" + param + "\"";
		}
		else if(typeof param == 'object' && param.length == 0){
			newValue = "[]";
		}
		else if(typeof param == 'object' && param.length > 0){
			var newArray = [];
			for(var i = 0; i<param.length; i++){
				newArray.push(stringIt(param[i]));
			}
			newValue = "[" + newArray + "]";
		}
		else if(typeof param == 'object' && param !== null && !param.length && Object.keys(obj).length === 0){
			newValue = "{}";
		}

		else if(typeof param == 'object' && param !== null && !param.length){
			var newArray = [];
			var abort = false;
						
			for(var key in param){
				if(typeof param[key] == 'function' || typeof param[key] == 'undefined'){
					abort = true;
				}
				else {
					var newKey = stringIt(key);
					var newString = stringIt(param[key]);
					newArray.push(newKey + ":" + newString);
				}
			}
			
			if(abort){
				newValue = "{}";
			}	
			else {
				newValue = "{" + newArray + "}";
			}
		}

		else if(typeof param == 'function'){
			newValue = "{}";
		}

		return newValue;
	};
	
	stringIt(obj);
	return newValue;
};