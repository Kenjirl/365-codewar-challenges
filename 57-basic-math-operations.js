// https://www.codewars.com/kata/57356c55867b9b7a60000bd7

function basicOp(operation, value1, value2){
    let res = 0;
    switch (operation) {
        case '+':
            res = value1 + value2;
            break;
        case '-':
            res = value1 - value2;
            break;
        case '*':
            res = value1 * value2;
            break;
        case '/':
            res = value1 / value2;
            break;
        default:
            break;
    }
    return res;
    // return eval(a+o+b);
}

console.log(basicOp('+', 4, 7));
console.log(basicOp('-', 15, 18));
console.log(basicOp('*', 5, 5));
console.log(basicOp('/', 49, 7));