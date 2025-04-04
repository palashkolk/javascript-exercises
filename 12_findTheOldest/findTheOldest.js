const findTheOldest = function(array) {
    let age;
    let cleanedArray=[];
    let ageArray=[];
    for (let object of array ){
        if (typeof(object.yearOfDeath)=="undefined"){
            const yearOfDeath = new Date().getFullYear();
            age=yearOfDeath-object.yearOfBirth;

        }else{
            age=object.yearOfDeath-object.yearOfBirth;
        }
        cleanedArray.push({"name":object.name, "age":age});
        ageArray.push(age);
    }
    const maxAge=ageArray.reduce(getMax);
    
    for (let element of cleanedArray){
        if(element.age==maxAge){
            return element;
        }
    }
    
};

function getMax(num1, num2){
    if(num1>num2){
        return num1;
    }else{
        return num2;
    }

}

// Do not edit below this line
module.exports = findTheOldest;
