// https://www.codewars.com/kata/56606694ec01347ce800001b/

function isTriangle(a,b,c) {
    if (a<=0 || b<=0 || c<=0) return false;

    return a+b>c && a+c>b && b+c>a;
}

console.log(isTriangle(1,2,2));
console.log(isTriangle(4,2,3));
console.log(isTriangle(2,2,2));
console.log(isTriangle(1,2,3));
console.log(isTriangle(-5,1,3));
console.log(isTriangle(0,2,3));
console.log(isTriangle(1,2,9));