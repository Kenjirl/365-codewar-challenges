// https://www.codewars.com/kata/572059afc2f4612825000d8a/
// 24 September 2024
// 8 Kyu

function howManydays(month){
    switch(month){
        case 2:
            return 28;
        case 4:
            return 30;
        case 6:
            return 30;
        case 9:
            return 30;
        case 11:
            return 30;
        default:
            return 31;
    }
}

// function howManydays(month){
//     switch ( month ){
//         case 2 : return 28
//         case 4: case 6: case 9: case 11: return 30
//         default: return 31
//     }
// }
