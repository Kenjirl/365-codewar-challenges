// https://www.codewars.com/kata/539de388a540db7fec000642/solutions/javascript
// 4 September 2024

function checkCoupon(    enteredCode, correctCode, currentDate, expirationDate){
    return (enteredCode === correctCode && Date.parse(currentDate) <= Date.parse(expirationDate));
}

console.log(checkCoupon(
    "123", "123", "July 9, 2015", "July 9, 2015"))
console.log(checkCoupon(
    "123", "123", "July 9, 2015", "July 2, 2015"))
console.log(checkCoupon(
    '123','123','September 5, 2014','October 1, 2014'))