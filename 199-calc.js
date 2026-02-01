// https://www.codewars.com/kata/5810085c533d69f4980001cf/
// 11 February 2025
// 8 Kyu

function calculator(a,b,sign){
    let signs = ['+','-','*','/'];
    if (typeof(a) != 'number' || typeof(b) != 'number' || !signs.includes(sign)) return 'unknown value';
    return sign == '+' ? a+b 
        : sign == '-' ? a-b 
        : sign == '*' ? a*b 
        : a/b;
}

// function calculator(a,b,sign) {
//     try { 
//         return eval(a+sign+b); 
//     } catch(e) { 
//         return "unknown value"; 
//     }
// }

console.log(
    calculator(1,2,'+'));
