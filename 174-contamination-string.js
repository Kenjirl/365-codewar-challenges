// https://www.codewars.com/kata/596fba44963025c878000039/
// 16 September 2024
// 8 Kyu

function contamination(text, char){
    return text == "" || char == "" ? "" : char.repeat(text.length);

    // return char.repeat(text.length);
}
