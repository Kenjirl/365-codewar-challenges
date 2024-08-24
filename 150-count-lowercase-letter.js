// https://www.codewars.com/kata/56a946cd7bd95ccab2000055/solutions/javascript
// 18 Agustus 2024

function lowercaseCount(str){
    return str.replace(/([^a-z])+/g, '').length;

    // return (str.match(/[a-z]/g) || []).length;
}

console.log(lowercaseCount('abc'));
console.log(lowercaseCount('abcABC123'));

// function lowercaseCount(str){
    // str = str.replace(/([^a-z])+/g, '');
    // let res = 0;
    // for (let i = 0; i < str.length; i++) {
    //     res+= str[i] === str[i].toLowerCase() ? 1 : 0;
    // }
    // return res;
// }