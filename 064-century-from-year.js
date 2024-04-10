// https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/

function century(year) {
    // return year%100 ? Math.floor(year/100) : Math.floor(year/100+1);
    return Math.floor(year/100 + (year%100 ? 1 : 0));
    // return Math.ceil(year/100);
}

console.log(century(1))
console.log(century(1705))
console.log(century(1900))
console.log(century(1601))
console.log(century(2000))