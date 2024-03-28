function solution(str){
    let res = '';
    // let arr = str.split('');
    // console.log(arr);
    // for (let i = arr.length; i < 0; i--) {
    //     console.log(arr[i]);
    //     res += arr[i];
    // }
    // return str.split('').reverse().join('');
    return str == '' ? str : str.split('').reduce((a,b) => a = b+a);
}

console.log(solution(''));
