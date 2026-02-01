// https://www.codewars.com/kata/57faf7275c991027af000679/
// 11 February 2025
// 8 Kyu

function remove(s,n){
    return s.split('').map(e => {
        if (e == '!' && n > 0) {
            e = '';
            n--;
        }
        return e;
    }).join('');
}

// function remove(s,n){
//     for (var i=0;i<n;i++) s=s.replace("!","");
//     return s;
// }

// function remove(s,n){
//     while(n) {
//         s = s.replace("!", "");
//         n--;
//     }
//     return s;
// }

console.log(
    remove("Hi!",1));
console.log(
    remove("Hi!",100));
console.log(
    remove("Hi!!!",1));
console.log(
    remove("Hi!!!",100));
console.log(
    remove("!Hi!",1));
console.log(
    remove("!Hi!",100));