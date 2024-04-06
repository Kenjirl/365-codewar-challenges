// https://www.codewars.com/kata/54da5a58ea159efa38000836/

// Mine
function findOdd(A) {
    let done = [];
    for (let i = 0; i < A.length; i++) {
        if (done.includes(A[i])) {
            continue;
        }
        let count = 1;

        for (let j = i+1; j < A.length; j++) {
            if (A[i] === A[j]) {
                count++;
            }
        }

        if (count%2 !== 0) {
            return A[i];
        }
        done.push(A[i])
    }
    return 0;
}

// Using Object
// function findOdd(A) {
//     var obj = {};
//     A.forEach(function(el){
//         obj[el] ? obj[el]++ : obj[el] = 1;
//     });

//     for(prop in obj) {
//         if(obj[prop] % 2 !== 0) return Number(prop);
//     }
// }

// Damn one liner -_-
// const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]));