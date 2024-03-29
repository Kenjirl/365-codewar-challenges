// function areYouPlayingBanjo(name) {
//     if (name.charAt(0).toLowerCase() === 'r') {
//         return name+" plays banjo";
//     }
//     return name + " does not play banjo";

//     return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
// }

const areYouPlayingBanjo = n => n.charAt(0).toLowerCase() === 'r' ? n+" plays banjo" : n+" does not play banjo";

console.log(areYouPlayingBanjo('Kenji'));