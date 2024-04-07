// https://www.codewars.com/kata/55f73be6e12baaa5900000d4/

function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return [...arguments].reduce((a,b) => a+b)
}

console.log(goals(0,0,0))
console.log(goals(4,4,2))
console.log(goals(28,5,2))