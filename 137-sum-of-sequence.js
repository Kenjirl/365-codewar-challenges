// https://www.codewars.com/kata/586f6741c66d18c22800010a/
// 16 Mei 2024

function sequenceSum(begin, end, step) {
    if (begin > end) {
        return 0;
    }
    
    let sum = 0;
    for (let i = begin; i <= end; i += step) {
        sum += i;
    }
    
    return sum;
}

console.log(sequenceSum(2, 2, 2));
console.log(sequenceSum(2, 6, 2));
console.log(sequenceSum(1, 5, 1));
console.log(sequenceSum(1, 5, 3));
