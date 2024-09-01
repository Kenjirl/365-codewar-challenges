// https://www.codewars.com/kata/56efc695740d30f963000557/
// 2 September 2024

String.prototype.toAlternatingCase = function () {
    return this.split('')
        .map(e => e == e.toLowerCase() ? e.toUpperCase() : e.toLowerCase())
        .join('');
}

console.log(
    "hello world".toAlternatingCase())
console.log(
    "HELLO WORLD".toAlternatingCase())
console.log(
    "hello WORLD".toAlternatingCase())
console.log(
    "HeLLo WoRLD".toAlternatingCase())
console.log(
    "12345".toAlternatingCase())
console.log(
    "1a2b3c4d5e".toAlternatingCase())
console.log(
    "String.prototype.toAlternatingCase".toAlternatingCase())