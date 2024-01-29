/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    newArray=[];
    arr.forEach((x,i)=>{
        if(fn(x,i)){
            newArray.push(x);
        }
    });
    return newArray;
};

module.exports = filter;