// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/

var countSheep = function (num){
    let res = '';
    for (let i = 0; i < num; i++) {
        res += i+1 + ' sheep...';
    }
    return res;
}

console.log(countSheep(3));