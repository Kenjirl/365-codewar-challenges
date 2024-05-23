// https://www.codewars.com/kata/563b662a59afc2b5120000c6/
// 20 Mei 2024

function nbYear(p0, percent, aug, p) {
    let years = 0;
    let population = p0;

    while (population < p) {
        population += population * (percent / 100) + aug;
        population = Math.floor(population); 
        years++;
    }

    return years;
}

console.log(nbYear(1500, 5, 100, 5000))
console.log(nbYear(1500000, 2.5, 10000, 2000000))