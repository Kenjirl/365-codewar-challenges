// https://www.codewars.com/kata/5a34b80155519e1a00000009/

function multipleOfIndex(array) {
    return array.filter((e, i) => i === 0 ? e === 0 : e % i === 0);
}

console.log(
    multipleOfIndex([0, 22, -6, 32, 82, 9, 25]))