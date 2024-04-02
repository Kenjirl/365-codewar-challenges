// https://www.codewars.com/kata/5842df8ccbd22792a4000245/
    
function expandedForm(num) {
    let arr = num.toString().split('').reverse();
    let plus = '';

    for (let i = 0; i < arr.length; i++) {
        arr[i] += plus;
        plus += '0';
    }
    return arr.reverse().filter(e => +e !== 0).join(' + ');
}

console.log(expandedForm(12))
console.log(expandedForm(42))
console.log(expandedForm(70304))