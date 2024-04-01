// https://www.codewars.com/kata/5656b6906de340bd1b0000ac

function longest(s1, s2) {
    s3 = [...s1, ...s2].sort();
    return s3.filter((e,i) => e !== s3[i+1]).join('');

    // return [...s1, ...s2].filter(function(item, pos) {
    //     return [...s1, ...s2].indexOf(item) == pos;
    // }).sort().join('');

    // return [...new Set([...s1, ...s2])].sort().join('');
}

// const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')

console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"));
