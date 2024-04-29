// https://www.codewars.com/kata/56cd44e1aa4ac7879200010b/

String.prototype.isUpperCase = function() {
    let arr = this.replaceAll(' ','').split('')

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i].toLowerCase()) {
            return false;
        }
    }

    return true;
}

console.log('HELLO I AM DONALD'.isUpperCase());
console.log('HELLO I AM DONALd'.isUpperCase());
console.log('ACSKLDFJSgSKLDFJSKLDFJ'.isUpperCase());
console.log('BOB WALKS HIS DOG EVERY DAY'.isUpperCase());
