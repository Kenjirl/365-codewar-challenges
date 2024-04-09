// https://www.codewars.com/kata/57ea5b0b75ae11d1e800006c/

function sortByLength (array) {
    let obj = array.reduce((a,b) => ({...a, [b]: b.length}), {});
    let arr = [];
    for (const value in obj) {
        arr.push([value, obj[value]]);
    }
    arr.sort((a,b) => {
        return a[1] - b[1];
    });
    let res = [];
    arr.map((e,i) => {
        res.push(e[0])
    })
    return res;

    // Alright at this point I'm just so dumb
    // return array.sort((a,b) => a.length - b.length);
}

console.log(
    sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"]))