// https://www.codewars.com/kata/5a3dd29055519e23ec000074/

function checkExam(array1, array2) {
    let res = 0;
    for (let i = 0; i < array1.length; i++) {
        if (array2[i] === array1[i]) {
            res+=4;
        } else if (array2[i] === '') {
            res+=0;
        } else {
            res-=1;
        }
    }
    return res > 0 ? res : 0;
}

console.log(
    checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]),
    checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"])
)