// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/

function abbrevName(name){
    return name.split(' ').map( e => e.charAt(0).toUpperCase()).join('.');
}

console.log(abbrevName("kenji Lehot"));