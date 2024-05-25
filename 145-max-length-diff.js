// https://www.codewars.com/kata/5663f5305102699bad000056/
// 24 Mei 2024

function mxdiflg(a1, a2) {
    if (a1.length === 0 || a2.length === 0) {
        return -1;
    }

    let length1 = a1.map(e => e.length);
    let length2 = a2.map(e => e.length);

    let maxA1 = Math.max(...length1);
    let minA1 = Math.min(...length1);
    let maxA2 = Math.max(...length2);
    let minA2 = Math.min(...length2);

    return Math.max(Math.abs(maxA1 - minA2), Math.abs(maxA2 - minA1));
}

var s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
var s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];
console.log(
    mxdiflg(s1, s2))