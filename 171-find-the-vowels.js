// https://www.codewars.com/kata/5680781b6b7c2be860000036/
// 16 September 2024
// 7 Kyu

function vowelIndices(word){
    let vowel = 'aiueoyAIUEOY';
    return word.split('').map((e,i) => vowel.includes(e) ? i+1 : -1).filter(e => e > 0);
}