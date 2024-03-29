// https://www.codewars.com/kata/5556282156230d0e5e000089/

function DNAtoRNA(dna) {
    return dna.replaceAll('T','U');
}

console.log(DNAtoRNA('TTTT'))
console.log(DNAtoRNA('GCAT'))
console.log(DNAtoRNA('GACCGCCGCC'))