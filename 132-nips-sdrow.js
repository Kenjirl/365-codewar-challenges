// https://www.codewars.com/kata/5264d2b162488dc400000001/
// 11 Mei 2024

function spinWords(string){
    return string.split(' ').map(e => e.length > 4 ? e.split('').reverse().join('') : e).join(' ');
}

console.log(spinWords("Hey fellow warriors"))
console.log(spinWords("This is a test"))
console.log(spinWords("This is another test"))