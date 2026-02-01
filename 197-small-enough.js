// https://www.codewars.com/kata/57cc981a58da9e302a000214/
// 9 February 2025
// 7 Kyu

function smallEnough(a, limit){
    return !a.map(e => e > limit ? false : true).includes(false);
}

// function smallEnough(a, limit){
//     return Math.max(...a) <= limit
// }

// smallEnough = (a, l) => a.every(e => e <= l)

console.log(
    smallEnough([66, 101], 200));
console.log(
    smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100));
console.log(
    smallEnough([101, 45, 75, 105, 99, 107], 107));
console.log(
    smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120));
