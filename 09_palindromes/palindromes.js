const palindromes = function (string) {
    const stringArray=removeFromArray(string.toLowerCase().split(""), "!", ",", ".", " ", "-");
    const cleanedString=stringArray.join("");
    const reverseString=stringArray.reverse().join("");
    console.log(reverseString, cleanedString)
    if (reverseString==cleanedString){
        return true;
    }else{
        return false;
    }
    
};
const removeFromArray = function(array, ...args) {
    for (let arg of args){
        let index = array.indexOf(arg);
        while(index > -1){
            array.splice(index, 1);
            index = array.indexOf(arg);
        }

    }
    return array;
};
// Do not edit below this line
module.exports = palindromes;
