// https://www.codewars.com/kata/54ba84be607a92aa900000f1/

function isIsogram(str){
    str = str.toLowerCase().split('');
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        if (arr.includes(str[i])) {
            return false;
        }
        arr.push(str[i]);
    }
    return true;

    // Buat array baru tanpa duplikat menggunakan Set()
    // return new Set(str.toUpperCase()).size == str.length;

    // Wut de hel is dis?
    // return !/(\w).*\1/i.test(str)
}

console.log(isIsogram('kenji'))
console.log(isIsogram('apa'))