// https://www.codewars.com/kata/5a431c0de1ce0ec33a00000c/
// 31 Agustus 2024

function evenNumbers(array, number) {
    return array.filter(e => e%2 == 0).slice(-number);
}

console.log(
    evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3))
console.log(
    evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2))