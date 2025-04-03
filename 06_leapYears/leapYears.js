const leapYears = function(year) {
    if (typeof(year)=="number"){
        if(year%4==0){
            if(year%100==0){
                if (year%400==0){
                    return true;
                }
                return false;
            }
            return true;
        }else{
            return false;
        }
    }else{
        return "ERROR";
    }

};

// Do not edit below this line
module.exports = leapYears;
