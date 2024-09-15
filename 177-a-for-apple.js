// https://www.codewars.com/kata/55de3f83e92c3e521a00002a/
// 16 September 2024
// 6 Kyu

function a(n){
    if (n < 4) return "";

    if (n % 2 != 0) n--;

    let res = ' '.repeat(n-1) + 'A' + ' '.repeat(n-1) + '\n';
    let x = n/2;

    for (let i = 1; i < n; i++) {
        if (i == x) {
            res += ' '.repeat(n-i-1) + 'A' + ' A'.repeat(x-1) + ' A' + ' '.repeat(n-i-1) + '\n';
        } else if (i < x) {
            res += ' '.repeat(n-i-1) + 'A' + ' '.repeat(i*2-1) + 'A' + ' '.repeat(n-i-1) + '\n';
        } else {
            res += ' '.repeat(n-i-1) + 'A' + ' '.repeat(i*2-1) + 'A' + ' '.repeat(n-i-1) + '\n';
        }
    }

    return res.substring(0, res.length-1);
}

console.log(a(4))
console.log(a(7))
console.log(a(0))
