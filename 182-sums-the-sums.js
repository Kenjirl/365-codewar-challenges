// https://www.codewars.com/kata/60d2325592157c0019ee78ed/
// 16 September 2024
// 6 Kyu

function sumOfSums(n) {
    let arr = [];

    for (let i = 1; i <= n; i++) {
        arr.push([...Array(i+1).keys()].reduce((a,b) => a + b,0));
    }

    let m = arr.reduce((a,b) => a+b,0);

    for (let i = 1; i <= m; i++) {
        arr.push([...Array(i+1).keys()].reduce((a,b) => a + b,0));
    }

    return arr[arr.length - 1];
}

// function sumOfSums(N) {
//     let bigN = BigInt(N);

//     let Z_N = (bigN * (bigN + 1n) * (bigN + 2n)) / 6n;

//     let S_Z_N = (Z_N * (Z_N + 1n)) / 2n;

//     return S_Z_N;
// }

// function sumOfSums(n){
//     const S = (n) => (n*(n+1n))/2n ;
//     const Z = (n) => (n*(n+1n)*(n+2n))/6n ;
//     return S(Z(n)) ; }

console.log(
    sumOfSums(3n))
console.log(
    sumOfSums(4n))
console.log(
    sumOfSums(5n))
