// https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/
// 14 Mei 2024

function maxSequence(arr) {
    if (arr.length === 0) return 0;

    let maxCurrent = 0;
    let maxGlobal = 0;

    for (let num of arr) {
        maxCurrent = Math.max(num, maxCurrent + num);
        maxGlobal = Math.max(maxGlobal, maxCurrent);
    }

    return maxGlobal;
}

console.log(
    maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]))