// https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/

function zero(n) {return n!= null ?  parseInt(eval(0+n)) : 0}
function one(n) {return n!= null ? parseInt(eval(1+n)) : 1}
function two(n) {return n!= null ? parseInt(eval(2+n)) : 2}
function three(n) {return n!= null ? parseInt(eval(3+n)) : 3}
function four(n) {return n!= null ? parseInt(eval(4+n)) : 4}
function five(n) {return n!= null ? parseInt(eval(5+n)) : 5}
function six(n) {return n!= null ? parseInt(eval(6+n)) : 6}
function seven(n) {return n!= null ? parseInt(eval(7+n)) : 7}
function eight(n) {return n!= null ? parseInt(eval(8+n)) : 8}
function nine(n) {return n!= null ? parseInt(eval(9+n)) : 9}

function plus(n) {return '+'+n}
function minus(n) {return '-'+n}
function times(n) {return '*'+n}
function dividedBy(n) {return '/'+n}

console.log(
    seven(times    (five ())),
    four (plus     (nine ())),
    eight(minus    (three())),
    six  (dividedBy(two  ()))
);