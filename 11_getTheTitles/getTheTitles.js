const getTheTitles = function(array) {
    let titles=[];
    for (let member of array){
        titles.push(member.title);
    }
    return titles;

};
// Do not edit below this line
module.exports = getTheTitles;
