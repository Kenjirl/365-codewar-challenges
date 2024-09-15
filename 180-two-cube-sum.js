// https://www.codewars.com/kata/55fd4919ce2a1d7c0d0000f3/
// 16 September 2024
// 6 Kyu

function hasTwoCubeSums(n) {
    let cubeSums = new Map();

    for (let a = 1; a * a * a < n; a++) {
        for (let b = a + 1; a * a * a + b * b * b <= n; b++) {
            let sum = a * a * a + b * b * b;

            if (sum === n) {
                if (cubeSums.has(sum)) {
                    return true;
                }
                cubeSums.set(sum, [a, b]);
            }
        }
    }

    return false;
}
