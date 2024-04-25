// https://www.codewars.com/kata/539ee3b6757843632d00026b/

var capitals = function (word) {
    let res = [];
    word.split('').map((e,i) => {
        if (e.toUpperCase() === e) {
            res.push(i);
        }
    });
    return res;
};

console.log(capitals('CodEWaRs'));