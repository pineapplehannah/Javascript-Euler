	var firstNumber =0;
	var secondNumber =1;
	var sum;
	var evenTerms = [];


for (i = 0; i <= 1000; i+=1){
	sum = firstNumber + secondNumber
	firstNumber = secondNumber;
	secondNumber = sum;
	 if (sum % 2 === 0 && sum <= 4000000){
 	evenTerms.push(sum);
 	};

};

 var myTotal = evenTerms.reduce(function(a,b){return a + b;});
 console.log(myTotal);
