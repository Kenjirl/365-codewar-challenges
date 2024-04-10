// https://www.codewars.com/kata/57f24e6a18e9fad8eb000296/

function howMuchILoveYou(nbPetals) {
    const answer = {
        1: "I love you", 
        2: "a little", 
        3: "a lot", 
        4: "passionately", 
        5: "madly", 
        0: "not at all"
    }

    return answer[nbPetals%6];
}

console.log(howMuchILoveYou(7))
console.log(howMuchILoveYou(8))
console.log(howMuchILoveYou(9))
console.log(howMuchILoveYou(10))
console.log(howMuchILoveYou(11))
console.log(howMuchILoveYou(12))
console.log(howMuchILoveYou(13))