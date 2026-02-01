function divCon(x){
    let divArr = x.filter(e => typeof e == 'number');
    let conArr = x.filter(e => typeof e == 'string').map(e => +e);

    let div = divArr.reduce((a,b) => a+b,0);
    let con = conArr.reduce((a,b) => a+b,0);

    return div-con;

    // return x.reduce((sum, e) => sum + (typeof e === 'number' ? e : -Number(e)), 0);
    // return x.reduce((acc, cur) => typeof cur === 'number'? acc + cur : acc - Number(cur),0)
}

console.log(
    divCon([9, 3, '7', '3']))