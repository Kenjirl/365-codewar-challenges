// https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/

// function findAverage(array) {
//     if (array.length) {
//         let total = 0;
//         array.forEach(e => {
//             total += e;
//         });
//         let res = total/array.length;
//         return res;
//     }
//     return 0;
// }

const findAverage = arr => (arr.length ? arr.reduce((a,b)=> a+b,0)/arr.length : 0);

console.log(findAverage([]));