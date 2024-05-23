// https://www.codewars.com/kata/561e9c843a2ef5a40c0000a4/
// 23 Mei 2024

function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

function gap(g, m, n) {
    let previousPrime = null;
    for (let i = m; i <= n; i++) {
        if (isPrime(i)) {
            if (previousPrime !== null && i - previousPrime === g) {
                return [previousPrime, i];
            }
            previousPrime = i;
        }
    }
    return null;
}