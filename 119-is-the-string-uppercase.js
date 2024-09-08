// https://www.codewars.com/kata/56cd44e1aa4ac7879200010b/

String.prototype.isUpperCase = function() {
    return !(this.replace(/[^a-z]+/g, '').length);
}

console.log('HELLO I AM DONALD'.isUpperCase());
console.log('HELLO I AM DONALd'.isUpperCase());
console.log('ACSKLDFJSgaSKLDFJSKLDFJ'.isUpperCase());
console.log('BOB WALKS HIS DOG EVERY DAY'.isUpperCase());
console.log('BOB WALKS HIS DOG EVERY DAY.'.isUpperCase());
