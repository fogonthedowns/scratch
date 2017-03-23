// iife (self invoked function)

function increment(i) {
	return i+1;
}

var increment = function(i){
	return i+1;
};

increment(i);

// functional Expression
// also anonymous function - no name
(function(i){
	return i+1;
})(j);

// if you are not returning anything
// this is the same as above
!function(i){
	return i+1;
}();

// if you are not returning anything
// this is the same as above
~function(i){
	return i+1;
}();

// if you are not returning anything
// this is the same as above
-function(i){
	return i+1;
}();

// if you are not returning anything
// this is the same as above
+function(i){
	return i+1;
}();

//Jquery
(function($){
  $(this).addClass('MyClass');
})(window.Jquery)


// write your own lib

var counter = (function(){
	var i=0;
	return {
		get:function(){
			return i;
		},
		set: function(val) {
			i=val;
		},
		increment: function(){
			i++;
		}
	}
})();