// https://www.codewars.com/kata/546f922b54af40e1e90001da/

function alphabetPosition(text) {
    return text.split('')
        .filter(a => a.match(/^[a-zA-Z]+$/))
        .map(a => a.toLowerCase().charCodeAt(0) - 96)
        .join(' ');
}

// let alphabetPosition = (text) => text.toUpperCase().replace(/[^A-Z]/g, '').split('').map(ch => ch.charCodeAt(0) - 64).join(' ');

console.log(alphabetPosition("The sunset sets at twelve o' clock."));