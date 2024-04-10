// https://www.codewars.com/kata/55908aad6620c066bc00002a/

function XO(str) {
    str = str.toLowerCase().split('');
    const x = str.filter(e=>e==='x').join('');
    const o = str.filter(e=>e==='o').join('');
    return x.length === o.length;
}

console.log(XO("ooxx"));