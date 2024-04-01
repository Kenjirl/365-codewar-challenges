// https://www.codewars.com/kata/53dc54212259ed3d4f00071c
// Sum Numbers
function sum (numbers) {
    "use strict";
    let res = 0;
    if (numbers.length) {
        for (let i=0; i<numbers.length; i++) {
            res += numbers[i];
            res;
        }
    }
    return res;

    // return numbers.reduce((a,b) => a + b,0);
};

console.log(sum([1, 5.2, 4, 0, -1]));