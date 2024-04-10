// https://www.codewars.com/kata/586a1af1c66d18ad81000134/

function driver(data) {
    const [foreName, midName, surName, birthDate, gender] = data;
    const date = birthDate.split('-');
    const month = new Date(Date.parse(date[1] + ' 1, 2024')).getMonth()+1;

    const a = surName.slice(0,5).toUpperCase() + '9'.repeat(surName.length <=5 ? 5-surName.length : 0); 
    const b = date[2].slice(2,3);
    const c = String(gender === 'F' ? month+50 : month<10 ? '0'+month : month);
    const d = date[0]
    const e = date[2].slice(3,4);
    const f = foreName[0] + (midName.length ? midName[0] : '9');
    const g = "9AA";

    return e;
    return a+b+c+d+e+f+g;
}

console.log(
    driver(["John","James","Smith","01-Jan-2000","M"]));
console.log(
    driver(["Johanna","","Gibbson","13-Dec-1981","F"]));
console.log(
    driver(["Johanna","","Gib","13-Dec-1981","F"]));