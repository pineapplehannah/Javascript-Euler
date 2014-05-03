var myMultiples = [];

for (i = 0; i < 1000; i +=1){
	if(i % 3 === 0 || i % 5 === 0 ){
	myMultiples.push(i);
	};
};

var myTotal = myMultiples.reduce(function(a,b){return a + b;});
console.log(myTotal);