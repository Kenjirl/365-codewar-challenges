// https://www.codewars.com/kata/56b1f01c247c01db92000076

function doubleChar(str) {
    return str.split('').map(e => e+e).join('');
}

console.log(doubleChar('String'));
console.log(doubleChar('Hello World'));