var add = function(a) {
	return function(b) {
	  return a+b;
	}
};

var addToFive = add(5)
addToFive(1); // returns 6

