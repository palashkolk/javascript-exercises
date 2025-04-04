const fibonacci = function(term) {
    const termInSeries= Number(term);
    const zerothTerm=0;
    const firstTerm=1;
    let sum1 =firstTerm;
    let sum2 =zerothTerm;
    if (termInSeries<0){
        return "OOPS"
    }
    else if(termInSeries==0){
        return zerothTerm;
    }else if (termInSeries==1){
        return firstTerm;
    }else{
        for (let i=2;i<=termInSeries;i++){
            sum = sum1+sum2; 
            sum2=sum1;
            sum1=sum;                                                                                                                                                                 
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = fibonacci;
