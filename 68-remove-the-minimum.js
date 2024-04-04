// https://www.codewars.com/kata/563cf89eb4747c5fb100001b/

function removeSmallest(numbers) {
    let obj = Object.assign({}, numbers);

    let newArr = [];
    for (const value in obj) {
        newArr.push([value, obj[value]]);
    }

    return [].concat(
        ...newArr
            .sort((a, b) => a[1] - b[1])
            .slice(1)
            .sort((a, b) => a[0] - b[0]))
        .filter(e => typeof e === 'number');

    // let indexOfMin = numbers.indexOf(Math.min(...numbers));
    // return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];

    // const min = Math.min.apply(this, numbers);
    // return numbers.filter((num, idx, arr) => idx !== arr.indexOf(min));
}

console.log(
    removeSmallest([1, 2, 3, 4, 5]));
console.log(
    removeSmallest([5, 3, 2, 1, 4]));
console.log(
    removeSmallest([2, 2, 1, 2, 1]));
console.log(
    removeSmallest([]));