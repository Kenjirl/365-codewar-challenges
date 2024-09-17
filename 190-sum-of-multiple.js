// https://www.codewars.com/kata/57241e0f440cd279b5000829/
// 18 September 2024
// 8 Kyu

function sumMul(n,m){
    if (n <= 0 || m <= 0) {
        return "INVALID";
    }

    let sum = 0;
    for (let i = n; i < m; i += n) {
        sum += i;
    }

    return sum;

    // const p = Math.floor((m - 1) / n);
    // return n * p * (p + 1) / 2;
}
