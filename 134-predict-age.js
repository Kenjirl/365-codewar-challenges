// https://www.codewars.com/kata/5aff237c578a14752d0035ae/
// 13 Mei 2024

function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    return Math.floor(
        Math.sqrt(
            ([]+[...arguments])
            .split(',')
            .map(e => {
                return (+e)**2
            })
            .reduce((a,b) => a+b,0)
        )/2
    );
}

// const predictAge = (...ages) => Math.hypot(...ages) / 2 | 0;

console.log(
    predictAge(65, 60, 75, 55, 60, 63, 64, 45))