// https://www.codewars.com/kata/542c0f198e077084c0000c2e/

function getDivisorsCnt(n){
    let res = 1;
    for (let i = 1; i < n; i++) {
        if (n%i == 0) {
            res++;
        }
    }
    return res;
}

// function getDivisorsCnt(n) {
//     let res = 0;
//     for (let i = 1; i * i <= n; i++) {
//         if (n % i == 0) {
//             if (i * i == n) {
//                 res++;
//             } else {
//                 res += 2;
//             }
//         }
//     }
//     return res;
// }

console.log(getDivisorsCnt(1))
console.log(getDivisorsCnt(4))
console.log(getDivisorsCnt(5))
console.log(getDivisorsCnt(10))
console.log(getDivisorsCnt(11))
console.log(getDivisorsCnt(12))
console.log(getDivisorsCnt(30))
console.log(getDivisorsCnt(54))