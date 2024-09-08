// https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa

function openOrSenior(data){
    // let res = [];

    // data.map(e => {
    //     if (e[0] >= 55 && e[1] > 7) {
    //         res.push("Senior");
    //     } else {
    //         res.push("Open");
    //     }
    // });

    // data.map(e => res.push(e[0] >= 55 && e[1] > 7 ? "Senior" : "Open"));

    // return res;

    return data.map(e => e[0] >= 55 && e[1] > 7 ? "Senior" : "Open");
}

console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]));