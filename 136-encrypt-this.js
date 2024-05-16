// https://www.codewars.com/kata/5848565e273af816fb000449/
// 15 Mei 2024

var encryptThis = function(text) {
    return text.split(' ').map(e => {
        if (e.length == 1) {
            return '' + e.charCodeAt(0);
        }
        if (e.length == 2) {
            return '' + e.charCodeAt(0) + e[1];
        }

        let arr = e.split(''); 
        let a = arr.shift()
        a = a.charCodeAt(0);
        let b = arr.shift();
        let c = arr.pop();
        return a + c + arr.join('') + b;
    }).join(' ');
}

// const encryptThis = text => text
//     .split(' ')
//     .map(word => word
//     .replace(/(^\w)(\w)(\w*)(\w$)/, `$1$4$3$2`)
//     .replace(/^\w/, word.charCodeAt(0)))
//     .join(' ');

console.log(
    encryptThis('Hello'))
console.log(
    encryptThis('good'))
console.log(
    encryptThis('hello world'))
console.log(
    encryptThis('A'))