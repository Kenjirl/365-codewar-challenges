// https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/

function invert(array) {
    return array.map((e)=>-e);
}

console.log(invert([1,2,3,4,5]));
console.log(invert([1,-2,3,-4,5]));
console.log(invert([]));