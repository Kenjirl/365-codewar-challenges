// https://www.codewars.com/kata/52fba66badcd10859f00097e/

function disemvowel(str) {
    const vowel = 'aeiou';
    return str.split('').filter(e => !vowel.includes(e.toLowerCase())).join('');
    
    // return str.replace(/[aeiou]/gi, '');
}

console.log(disemvowel('This website is for losers LOL!'))
console.log(disemvowel(`No offense but,\nYour writing is among the worst I've ever read`))
console.log(disemvowel('What are you, a communist?'))