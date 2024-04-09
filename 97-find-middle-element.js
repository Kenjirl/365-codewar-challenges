// https://www.codewars.com/kata/545a4c5a61aa4c6916000755/

function gimme (triplet) {
    let arr = [...triplet];
    return triplet.indexOf(arr.sort((a,b) => a-b)[1]);
}

console.log(gimme([2, 3, 1]))