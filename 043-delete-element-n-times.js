// https://www.codewars.com/kata/554ca54ffa7d91b236000023

function deleteNth(arr,n){
    for (let i = 0; i <= arr.length; i++) {
        let count = 0;
        for (let j = 0; j <= arr.length; j++) {
            if (arr[i] === arr[j]) {
                count++;
                if (count > n) {
                    arr.splice(j, 1);
                }
            }
        }
    }
    return arr;
}

console.log(deleteNth([20,37,20,21], 1));
console.log(deleteNth([12,39,19,39,39,19,12], 1));