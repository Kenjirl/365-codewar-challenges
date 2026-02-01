function adjacentElementsProduct(array) {
    let res = array[0] * array[1];
    for (let i = 1; i < array.length-1; i++) {
        let a = array[i] * array[i + 1];
        if (res < a) {
            res = a;
        }
    }
    return res;

    // return Math.max(...a.map((x,i)=>x*a[i+1]).slice(0,-1))
}

// function adjacentElementsProduct(array) {
//     return array.slice(1)
//         .reduce((max, num, i) => Math.max(max, num * array[i]), array[0] * array[1]);
// }

console.log(
    adjacentElementsProduct([5,8]))
console.log(
    adjacentElementsProduct([1,2,3]))
console.log(
    adjacentElementsProduct([1,5,10,9]))
console.log(
    adjacentElementsProduct([4,12,3,1,5]))
console.log(
    adjacentElementsProduct([5,1,2,3,1,4]))