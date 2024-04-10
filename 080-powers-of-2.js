// https://www.codewars.com/kata/57a083a57cb1f31db7000028/

function powersOfTwo(n){
    let res = [];
    for (let i = 0; i <= n; i++) {
        res.push(2**i)
    }
    return res;
}

console.log(powersOfTwo(0))
console.log(powersOfTwo(1))
console.log(powersOfTwo(2))