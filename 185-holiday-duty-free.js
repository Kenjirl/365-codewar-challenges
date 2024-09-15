// https://www.codewars.com/kata/57e92e91b63b6cbac20001e5/
// 16 September 2024
// 8 Kyu

function dutyFree(normPrice, discount, hol) {    
    return Math.floor(hol / (normPrice * (discount / 100)));
}
