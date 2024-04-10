// https://www.codewars.com/kata/523f5d21c841566fde000009/

function arrayDiff(a, b) {
    if (b && b.length) {
        for (let i = 0; i < a.length; i++) {
            for (let j = 0; j < b.length; j++) {
                if (a[i] === b[j]){
                    a[i] = false;
                }
            }
        }
    }
    return a.filter(e => e !== false);
    // return a.filter(e => !b.includes(e));
}

console.log(arrayDiff([1,2,2,2,3],[2]));
// console.log(arrayDiff([1,2,2,2,3],[]));
console.log(arrayDiff(
    [6,17,-3,1,-16,-14,1,-5,15,-11,-17,7,2,-11,-7,17,15,-13,2],
    [6,17,-3,1,-16,-14,1,-5,15]
    // []
));