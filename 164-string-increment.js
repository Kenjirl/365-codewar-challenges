// https://www.codewars.com/kata/54a91a4883a7de5d7800009c/
// 11 September 2024

function incrementString (strng) {
    if (!strng[strng.length-1].match(/[0-9]/g)) {
        return strng+1;
    }

    let arrNum = [];

    let i = 0;
    for (i = strng.length-1; i >= 0; i--) {
        if (strng[i].match(/[0-9]/g)) {
            arrNum.push(strng[i]);
        } else {
            break;
        }
    }

    let char = strng.slice(0, i+1);

    let nums = arrNum.reverse().join('').split('0');

    let ln1 = nums[nums.length-1].length;
    nums[nums.length-1] = +(nums[nums.length-1])+1;
    let ln2 = (''+nums[nums.length-1]).length;

    let incrStr = nums.join('0');

    if (ln1 !== ln2 && incrStr.charAt(0) == '0') {
        incrStr = incrStr.substring(1);
    }

    return char + incrStr;
}

function incrementString(strng) {
    // If the string doesn't end with a digit, append '1' and return
    if (isNaN(strng[strng.length - 1])) {
        return strng + '1';
    }

    // Find the index where the numeric part starts
    let numStart = strng.length;
    while (numStart > 0 && !isNaN(strng[numStart - 1])) {
        numStart--;
    }

    // Separate the string into the non-numeric and numeric parts
    let charPart = strng.slice(0, numStart);
    let numPart = strng.slice(numStart);

    // Increment the numeric part
    let incrementedNum = (parseInt(numPart) + 1).toString();

    // Pad the number with leading zeros if necessary
    while (incrementedNum.length < numPart.length) {
        incrementedNum = '0' + incrementedNum;
    }

    return charPart + incrementedNum;
}

console.log(
    incrementString('foo'))
console.log(
    incrementString('foobarr23'))
console.log(
    incrementString('foo0042'))
console.log(
    incrementString('foo9'))
console.log(
    incrementString('foo099'))
console.log(
    incrementString('fo99obar99'))
