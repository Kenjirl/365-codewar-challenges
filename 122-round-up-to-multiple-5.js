// https://www.codewars.com/kata/55d1d6d5955ec6365400006d/

function roundToNext5(n){
    while (n%5 !== 0) {
        n++;
    }
    return n;

    // return Math.ceil(n/5)*5;
}

console.log(roundToNext5(21))