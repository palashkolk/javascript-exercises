const sumAll = function(number1, number2) {
    if(number1<0 || number2<0 ||(Math.floor(number1)!=number1)||(Math.floor(number2)!=number2)|| typeof(number1)!= "number"||typeof(number2)!= "number"){
        return "ERROR";
    }else{
        let startingNumber;
        let endingNumber;
        if(number1>number2){
            startingNumber=number2;
            endingNumber=number1;
            
        }else{
            startingNumber=number1;
            endingNumber=number2;
            
        }
        let sum=0;
        while(startingNumber <= endingNumber) {
            sum+=startingNumber;
            startingNumber++;
        }
        return sum;
    }


};
sumAll(4,1);
// Do not edit below this line
module.exports = sumAll;
