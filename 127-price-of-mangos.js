// https://www.codewars.com/kata/57a77726bb9944d000000b06/

function mango(quantity, pricePerMango) {
    let fullSets = Math.floor(quantity / 3);
    let remainder = quantity % 3;

    let costFullSets = fullSets * 2 * pricePerMango;
    let costRemaining = remainder * pricePerMango;

    let totalCost = costFullSets + costRemaining;

    return totalCost;

    // return price * (quantity - Math.floor(quantity / 3));
}

console.log(mango(2, 3));   // Output: 6
console.log(mango(3, 3));   // Output: 6
console.log(mango(5, 3));   // Output: 12
console.log(mango(9, 5));   // Output: 30
