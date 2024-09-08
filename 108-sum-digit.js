// https://www.codewars.com/kata/52f3149496de55aded000410/

function sumDigits(number) {
    return (''+Math.abs(number)).split('').map(e=>+e).reduce((a,b)=>a+b);
}

console.log(sumDigits(-32));