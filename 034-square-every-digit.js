// https://www.codewars.com/kata/546e2562b03326a88e000020/

function squareDigits(num){
    return +num.toString().split('').map(e => e**2).join('');
    // return +(''+num).split('').map(e => e**2).join('');
}

console.log(squareDigits(3212));