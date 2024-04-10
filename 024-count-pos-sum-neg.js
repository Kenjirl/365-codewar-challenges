// https://www.codewars.com/kata/576bb71bbbcf0951d5000044/solutions/javascript

function countPositivesSumNegatives(input) {
    if (!input || !input.length) return [];

    let pos = 0;
    let neg = 0;
    // input.map((e) => {
    //     if (e > 0) {
    //         pos += 1
    //     } else if (e < 0) {
    //         neg += e;
    //     }
    // });
    input.map((e) => e>0 ? pos+=1 : neg+=e);
    return [pos, neg];

    // return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
}

console.log(
    countPositivesSumNegatives(
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]
    )
);

console.log(
    countPositivesSumNegatives(
        []
    )
);