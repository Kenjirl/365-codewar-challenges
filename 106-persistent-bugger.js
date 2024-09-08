// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/

function persistence(num) {
    let count = 0;
    while (String(num).split('').length > 1) {
        num = String(num).split('').reduce((a,b) => +a * +b, 1);
        count++;
    }
    return count;
}

console.log(persistence(39))
console.log(persistence(999))
console.log(persistence(4))