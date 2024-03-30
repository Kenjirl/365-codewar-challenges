// https://www.codewars.com/kata/57a429e253ba3381850000fb/

function bmi(w, h) {
    const bmi = w/(h*h);
    if (bmi<=18.5) {
        return "Underweight"
    } else if (bmi<=25) {
        return "Normal"
    } else if (bmi<=30) {
        return "Overweight"
    }
    return "Obese"
}

// const bmi = (w,h) => w/(h*h)<=18.5 ? "Underweight" : w/(h*h)<=20 ? "Normal" : w/(h*h)<= 30 ? "Overweight" : "Obese";

console.log();