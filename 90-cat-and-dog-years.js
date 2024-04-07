// https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b/

var humanYearsCatYearsDogYears = function(hy) {
    const cy = 15 + (hy>1 ? 9 : 0) + (hy>2 ? (hy-2)*4 : 0);
    const dy = 15 + (hy>1 ? 9 : 0) + (hy>2 ? (hy-2)*5 : 0);
    return [hy,cy,dy];
}

console.log(humanYearsCatYearsDogYears(1))
console.log(humanYearsCatYearsDogYears(2))
console.log(humanYearsCatYearsDogYears(3))