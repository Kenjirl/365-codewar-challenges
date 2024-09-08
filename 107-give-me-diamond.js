// https://www.codewars.com/kata/5503013e34137eeeaa001648/

function diamond(n) {
    if (n % 2 === 0 || n < 0) {
        return null;
    }

    let res = '';

    for (let i = 0; i < n; i++) {
        const spaces = Math.abs(Math.floor(n / 2) - i);
        const stars = n - 2 * spaces;
        res += ' '.repeat(spaces) + '*'.repeat(stars) + '\n';
    }

    return res;
}

console.log(diamond(1))
console.log(diamond(2))
console.log(diamond(-2))
console.log(diamond(3))
console.log(diamond(5))