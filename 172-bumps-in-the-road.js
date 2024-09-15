// https://www.codewars.com/kata/57ed30dde7728215300005fa/
// 16 September 2024
// 7 Kyu

function bump(x){
    return x.split('').filter(e => e!='_').length <= 15 ? 'Woohoo!' : 'Car Dead';
}

// const bump=x=>x.split('n').length>16?"Car Dead":"Woohoo!"

console.log(
    bump('n'))
console.log(
    bump("__nn_nnnn__n_n___n____nn__nnn"))
console.log(
    bump('nnn_n__n_n___nnnnn___n__nnn__'))
console.log(
    bump('_nnnnnnn_n__n______nn__nn_nnn'))
console.log(
    bump('______n___n_'))
