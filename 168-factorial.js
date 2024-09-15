// https://www.codewars.com/kata/57a049e253ba33ac5e000212/
// 16 September 2024
// 7 Kyu

function factorial(n){
    let res = n;

    if (n === 0 || n === 1) 
        return 1; 

    while (n > 1) { 
        n--;
      res = res * n; 
    }

    return res;
}