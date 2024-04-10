// https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/

function validatePIN (pin) {
    return pin.match(/^\d+$/) ? pin.length == 4 || pin.length == 6 : false;

    // return /^(\d{4}|\d{6})$/.test(pin)
}

console.log(validatePIN("-1234"));
console.log(validatePIN("1.234"));
console.log(validatePIN("-1.234"));
console.log(validatePIN("12.0"));
