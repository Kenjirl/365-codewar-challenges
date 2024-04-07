// https://www.codewars.com/kata/568d0dd208ee69389d000016/

function rentalCarCost(d) {
    return d >= 7 ? d*40-50 : d >=3 ? d*40-20 : d*40
}

console.log(rentalCarCost(1))
console.log(rentalCarCost(5))
console.log(rentalCarCost(10))