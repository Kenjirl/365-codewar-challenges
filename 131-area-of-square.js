// https://www.codewars.com/kata/5748838ce2fab90b86001b1a/
// 10 Mei 2024

function squareArea(A){
    let r = (A * 4)/(2 * Math.PI);
    return +(r*r).toFixed(2);
}

console.log(squareArea(2))