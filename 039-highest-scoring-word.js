// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/

function high(x){
    let res = '';
    let highest = 0;

    x.split(' ').map((e,i) => {
        let score = 0;
        e.split('').map(f => score += f.toLowerCase().charCodeAt(0)-96);
        console.log(e, score);
        if (score > highest) {
            res = e;
            highest = score;
        }
    });

    return res;

    // let as = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
    // return s.split(' ')[as.indexOf(Math.max(...as))];
}

console.log(high('man i need a taxi up to ubud'));
console.log(high('what time are we climbing up the volcano'));