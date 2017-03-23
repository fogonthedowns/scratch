var add = function(a) {
	return function(b) {
	  return a+b;
	}
};

var addToFive = add(5)
addToFive(1); // returns 6

"use strict"
var avg = function(...n){
	let tot=0;
	for(let i=0; i<n.length; i+=1){
		tot +=n[i];
	}
	return tot/n.length;
};

// ...n this accepts n number of arguments
var spiceUp = function(fn, ...n){
  return function(...m){
    return fn.apply(this, n.concat(m));
  }
}

var doAve = spiceUp(avg, 1,2,3);
doAve(2)