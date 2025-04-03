const add = function(number1, number2) {
  return number1+ number2;
	
};

const subtract = function(number1, number2) {
  return number1-number2;
	
};

const sum = function(array) {
  let sum=0;
  for (let element of array){
    sum+=element;
  }
  return sum;
	
};

const multiply = function(array) {
  let sum=1;
  for (let element of array){
    sum*=element;
  }
  return sum;

};

const power = function(number1, number2) {
  let sum=1;
  for (let i=0; i< number2; i++){
    sum*=number1;

  } 
  return sum;
	
};

const factorial = function(number) {
  if(number==0){
    return 1;
  }else{
    let sum=1;
    while(number>0){
      sum *=number;
      number--;
    }
    return sum;
  }
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
