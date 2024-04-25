// https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/

multiplicationTable = function(size) {
    let res = [];
    for (let i = 0; i < size; i++) {
        let arr = [];
        for (let j = 0; j < size; j++) {
            arr.push((j+1)*(i+1))
        }
        res.push(arr);
    }
    return res;
}

console.log(multiplicationTable(3))