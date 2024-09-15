// https://www.codewars.com/kata/5761a717780f8950ce001473/
// 16 September 2024
// 8 Kyu

function  calculateAge(a,b) {
    return a<b ? `You are ${b-a} year${b-a == 1 ? '' : 's'} old.` 
        : a>b ? `You will be born in ${a-b} year${a-b == 1 ? '' : 's'}.` 
        : "You were born this very year!"
}
