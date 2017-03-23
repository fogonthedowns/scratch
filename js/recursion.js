// recursion.js

let add = function(n){
	if(n<=0){
		return 0;
	} else {
		return n + add(n-1);
	}
};

//

function(3){
	return 3 + function(2) {
		return 2 + function(1) {
			return 1 + function(0) {
				return 0;
			}
		}
	}
}

// javascript does a poor job at recursion because call
// stack is limited to 15000 is chrome
// browser dependent value

