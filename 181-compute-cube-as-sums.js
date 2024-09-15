// https://www.codewars.com/kata/58af1bb7ac7e31b192000020/
// 16 September 2024
// 6 Kyu

function findSummands(n){
    let firstOdd = n * n - n + 1;
    let result = [];

    for (let i = 0; i < n; i++) {
        result.push(firstOdd + 2 * i);
    }

    return result;
}

const findSummands = n =>
    Array.from(
        { length: n }, 
        (_, i) => n * n - n + i * 2 + 1
    );
