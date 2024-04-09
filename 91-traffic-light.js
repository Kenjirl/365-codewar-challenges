// https://www.codewars.com/kata/58649884a1659ed6cb000072/

function updateLight(current) {
    const trafficLight = ['green', 'yellow', 'red'];
    return trafficLight.indexOf(current) === trafficLight.length - 1 ?
        trafficLight[0] : trafficLight[trafficLight.indexOf(current)+1];
}

// const updateLight = current => ({
//     green: 'yellow',
//     yellow: 'red',
//     red: 'green',
// })[current]

console.log(updateLight('green'))
console.log(updateLight('yellow'))
console.log(updateLight('red'))