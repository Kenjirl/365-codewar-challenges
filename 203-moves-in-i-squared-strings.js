function vertMirror(strng) {
    return strng.split('\n').map(e => e.split('').reverse().join('')).join('\n');
}
function horMirror(strng) {
    return strng.split('\n').reverse().join('\n');
}
function oper(fct, s) {
    return fct(s);
}

const s = "hSgdHQ\nHnDMao\nClNNxX\niRvxxH\nbqTVvA\nwvSyRu";

console.log(
    oper(vertMirror, s))
console.log(
    oper(horMirror, s))