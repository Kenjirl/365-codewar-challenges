// https://www.codewars.com/kata/583f158ea20cfcbeb400000a/
// 6 September 2024

function arithmetic(a, b, operator){
    const res = {
        'add': a+b,
        'subtract': a-b,
        'multiply': a*b,
        'divide': a/b,
    }

    return res[operator];
}

// const arithmetic = (a, b, operator) => ({
//     'add'     : a + b,
//     'subtract': a - b,
//   'multiply': a * b,
//     'divide'  : a / b
// }[operator]);

// function arithmetic(a, b, operator){
//     optable = { "add":"+", "subtract": "-", "multiply": "*" , "divide":"/"};
//     return eval(a + optable[operator] + b); 
// }

console.log(arithmetic(5,2, 'add'))
console.log(arithmetic(8,2, 'subtract'))
console.log(arithmetic(5,2, 'multiply'))
console.log(arithmetic(5,2, 'divide'))