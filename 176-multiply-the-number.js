// https://www.codewars.com/kata/5708f682c69b48047b000e07/
// 16 September 2024
// 8 Kyu

function multiply(number){
    return number * Math.pow(5, (''+number).replace('-','').length);

    // return number * Math.pow(5, Math.abs(number).toString().length);
}
