// https://www.codewars.com/kata/566fc12495810954b1000030/

function nbDig(n, d) {
    let count = 0;
    Array.from({length: n+1}, (_,i) => i)
        .map(e => {
            e = e*e
            String(e).split('').map(f => {
                if (f.includes(String(d))) {
                    count++;
                }
            })
    });
    return count;
}

console.log(nbDig(10, 1));
console.log(nbDig(25, 1));