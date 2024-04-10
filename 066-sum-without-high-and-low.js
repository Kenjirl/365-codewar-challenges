// https://www.codewars.com/kata/576b93db1129fcf2200001e6/

function sumArray(array) {
    return array === null || array == undefined ? 0 : !array.length ? 0 : array.length < 3 ? 0 : 
    array.sort((a,b) => a-b).slice(1,-1).reduce((a,b) => a + b);

    // return array ? array.sort((a,b) => a-b).slice(1,-1).reduce((a,b) => a + b,0) : 0;
}

console.log(sumArray(null));
console.log(sumArray([]));
console.log(sumArray([ 6, 2, 1, 8, 10 ]));