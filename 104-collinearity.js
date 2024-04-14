// https://www.codewars.com/kata/65ba420888906c1f86e1e680/

function collinearity( x1,y1, x2,y2 ) {
    if ((x1 == 0 && y1 == 0) || (x2 == 0 && y2 == 0)) return true;
    if (((x1 == 0) && (x2 == 0)) || ((y1 == 0) && (y2 == 0))) return true;

    if (x2/x1 == y2/y1) return true;

    return false;

    // return x1*y2===y1*x2
}

console.log(collinearity(1,1,1,1))
console.log(collinearity(1,2,2,4))
console.log(collinearity(1,1,6,1))
console.log(collinearity(1,2,-1,-2))
console.log(collinearity(0,0,1,0))
console.log(collinearity(5,7,0,0))