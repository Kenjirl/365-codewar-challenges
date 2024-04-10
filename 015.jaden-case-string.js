// https://www.codewars.com/kata/5390bac347d09b7da40006f6/

String.prototype.toJadenCase = function () {
    // REMEMBER! USING "THIS"
    // return this.split(' ').map((a) => 
    //     a.split('').map((b,j) => 
    //         j==0 && b.match(/^[a-zA-Z]+$/) ? b.toUpperCase() : b)
    //         .join(''))
    //     .join(' ');

    return this.split(' ').map((a) => 
        a.charAt(0).toUpperCase() + a.slice(1))
        .join(' ');
};

let str = "How can mirrors be real if our eyes aren't real";

console.log(str.toJadenCase());