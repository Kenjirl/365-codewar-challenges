// https://www.codewars.com/kata/556196a6091a7e7f58000018/

function largestPairSum (numbers) {
    return numbers.sort((a,b) => b-a).slice(0,2).reduce((a,b) => a + b);
}

console.log(
    largestPairSum([10,14,2,23,19]))
console.log(
    largestPairSum([-100,-29,-24,-19,19]))