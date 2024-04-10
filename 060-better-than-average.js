// https://www.codewars.com/kata/5601409514fc93442500010b/

function betterThanAverage(classPoints, yourPoints) {
    let avg = yourPoints;
    classPoints.map(e => {
        avg += e
    });
    return avg/(classPoints.length+1) < yourPoints; 
}

console.log(
    betterThanAverage([2, 3], 5));
console.log(
    betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));
console.log(
    betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9));