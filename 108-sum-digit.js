function sumDigits(number) {
    return (''+Math.abs(number)).split('').map(e=>+e).reduce((a,b)=>a+b);
}

console.log(sumDigits(-32));