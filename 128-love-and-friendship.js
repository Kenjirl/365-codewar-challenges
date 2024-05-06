// https://www.codewars.com/kata/59706036f6e5d1e22d000016/

function wordsToMarks(string){
    return string.split('').map(e => e.charCodeAt(0)-96).reduce((a,b) => a+b);
}

console.log(wordsToMarks('attitude'))