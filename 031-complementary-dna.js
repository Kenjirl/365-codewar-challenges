// https://www.codewars.com/kata/554e4a2f232cdd87d9000038/

const complementary = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
};

function dnaStrand(dna){
    return dna.split('').map(e => complementary[e]).join('');
}

console.log(dnaStrand('ATTGC'));
console.log(dnaStrand('GTAT'));