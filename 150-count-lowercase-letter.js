// https://www.codewars.com/kata/56a946cd7bd95ccab2000055/solutions/javascript
// 18 Agustus 2024

function lowercaseCount(str){
    return str.replace(/([^a-z])+/g, '').length;
}

console.log(lowercaseCount('abc'));
console.log(lowercaseCount('abcABC123'));