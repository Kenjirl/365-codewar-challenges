// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/

function duplicateCount(text){
    let res = [];
    let arr = text.toLowerCase().split('');
    for (let i = 0; i < arr.length-1; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (res.includes(arr[i])) {
                break;
            }

            if (arr[i] === arr[j]) {
                res.push(arr[i])
            }
        }
    }

    return res.length;

    // 💀💀💀
    // return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}

console.log(duplicateCount('abcde'))
console.log(duplicateCount('aabbcde'))
console.log(duplicateCount('aaBbcde'))
console.log(duplicateCount('indivisibility'))
console.log(duplicateCount('Indivisibilities'))
console.log(duplicateCount('aA11'))
console.log(duplicateCount('ABBA'))