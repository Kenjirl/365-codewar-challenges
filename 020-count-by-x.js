// https://www.codewars.com/kata/5513795bd3fafb56c200049e

function countBy(x, n) {
    let z = [];
    for (let i = 1; i <= n; i++) {
        z.push(x*i);
    }
    return z;
}

// const countBy = (x, n) => Array.from({length: n}, (v, k) => (k + 1) * x)
// const countBy = (x, n) => [...Array(n)].map((_, idx) => ++idx * x);

console.log(countBy(1,10));
console.log(countBy(2,5));