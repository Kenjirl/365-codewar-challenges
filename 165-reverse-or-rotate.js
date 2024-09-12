// https://www.codewars.com/kata/56b5afb4ed1f6d5fb0000991/
// 12 September 2024

function revrot(str, sz) {
    if (sz <= 0 || str == '' || sz > str.length) return "";

    let arr = [];
    while (str.length >= sz) {
        arr.push(str.slice(0, sz));
        str = str.slice(sz);
    }

    arr = arr.map(e => {
        let sum = e.split('').reduce((a, b) => +a + (+b), 0);
        if (sum % 2 === 0) {
            return e.split('').reverse().join('');
        } else {
            return e.slice(1) + e[0];
        }
    });

    return arr.join('');
}

console.log(
    revrot("123456987654", 6))
console.log(
    revrot("123456987653", 6))
console.log(
    revrot("66443875", 4))
console.log(
    revrot("66443875", 8))
console.log(
    revrot("664438769", 8))
console.log(
    revrot("123456779", 8))
console.log(
    revrot("", 8))
console.log(
    revrot("123456779", 0))
console.log(
    revrot("563000655734469485", 4))