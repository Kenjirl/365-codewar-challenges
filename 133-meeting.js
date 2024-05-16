// https://www.codewars.com/kata/59df2f8f08c6cec835000012/
// 12 Mei 2024

function meeting(s) {
    return arr = s.split(';')
                .map(e => {
                    return '(' + e.toUpperCase().split(':').reverse().join(', ') + ')';
                })
                .sort()
                .join('');
}

console.log(
    meeting("Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"))