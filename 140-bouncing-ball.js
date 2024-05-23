// https://www.codewars.com/kata/5544c7a5cb454edb3c000047/
// 19 Mei 2024

function bouncingBall(h, bounce, window) {
    if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) return -1;

    let count = 0;
    while (h > window) {
        count++;
        h *= bounce;
        if (h > window) {
            count++;
        }
    }
    return count;
}

console.log(bouncingBall(3, 0.66, 1.5))
console.log(bouncingBall(3, 1, 1.5))