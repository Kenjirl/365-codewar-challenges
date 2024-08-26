// https://www.codewars.com/kata/59c633e7dcc4053512000073/
// 26 Agustus 2024

// function solve(s) {
//     return s.replace(/[aiueo]/g, ' ').split(' ').map(e => {
//         return e.split('').reduce((a,b) => a + b.charCodeAt(0)-96, 0);
//     }).sort((a,b) => b-a)[0];
// };

const solve = (s) => s.replace(/[aiueo]/g, ' ').split(' ').map(e => e.split('').reduce((a,b) => a + b.charCodeAt(0)-96, 0)).sort((a,b) => b-a)[0];

console.log(solve('zodiacs'));