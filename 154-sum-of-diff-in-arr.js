// https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e/
// 27 Agustus 2024

// function sumOfDifferences(arr) {
//     let res = 0;
//     arr.sort((a,b) => b-a);
//     for (let i = 0; i < arr.length-1; i++) {
//         res += arr[i] - arr[i+1]
//     }
//     return res;

//     return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
// }

const sumOfDifferences = arr => arr.sort((a,b) => b-a).slice(1).reduce((acc, cur, i) => acc + (arr[i] - cur), 0);

console.log(sumOfDifferences([1, 2, 10]));