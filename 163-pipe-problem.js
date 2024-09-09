// https://www.codewars.com/kata/56b29582461215098d00000f/solutions/javascript
// 10 September 2024

function pipeFix(numbers){
    return Array.from({length: Math.max(...numbers) - Math.min(...numbers) + 1}, (_, i) => i + Math.min(...numbers))
}
