// https://www.codewars.com/kata/5547929140907378f9000039/
// 25 Agustus 2024

function shortcut (string) {
    return string.split('').map(e => ['a','e','i','u','o'].includes(e)?'':e).join('');

    // return string.replace(/[aeiou]/g,'')
}

console.log(shortcut('hello'));
console.log(shortcut('HELLO'));