// https://www.codewars.com/kata/5503013e34137eeeaa001648/
// 17 Agustus 2024

function diamond(n){
    if (n <= 0 || n%2 == 0) return null;

    let res = '';
    const middle = Math.floor(n / 2);

    for (let i = 0; i < n; i++) {
        const stars = n - Math.abs(middle - i) * 2;
        const spaces = (n - stars) / 2;
        res += ' '.repeat(spaces) + '*'.repeat(stars) + '\n';
    }

    return res;
}

console.log(diamond(1));
console.log(diamond(-3));
console.log(diamond(2));
console.log(diamond(8));
console.log(diamond(3));
