// Interview Question
// 08/02/2025

let text = 'Hello World, HELLO everyone, hello my ass!'
let a = 'hello'
let b = 'bye'

let res = text.split(' ').map(e => {
    if (e.toLowerCase() == a) {
        if (e[0] == a[0]) { // lowercase
            e = b;
        } else if (e[0] == a[0].toUpperCase() && e[1] == a[1].toUpperCase()) { // uppercase
            e = b.toUpperCase();
        } else if (e[0] == a[0].toUpperCase() && e[1] == a[1]) { // capitalize
            e = b[0].toUpperCase() + b.slice(1);
        }
    }
    return e;
}).join(' ');

console.log(text, res);
