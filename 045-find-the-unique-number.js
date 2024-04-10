// https://www.codewars.com/kata/585d7d5adb20cf33cb000235/

function findUniq(arr){
    // loop through array
    for (let i = 0; i <= arr.length; i++) {
        let count = 0;

        // loop through the same array
        for (let j = 0; j <= arr.length; j++) {
            // if same count goes up
            if (arr[i] === arr[j]) {
                count++;
            }

            // if count more than 1, then it's surely the duplicated number
            if (count > 1) {
                break;
            }
        }

        // return the non duplicated number
        if (count == 1) {
            return arr[i];
        }
    }

    // arr.sort((a,b)=>a-b);
    // return arr[0]==arr[1]?arr.pop():arr[0]
}

console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]));