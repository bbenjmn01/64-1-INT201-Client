const zodiac = {
    0: 'Monkey',
    1: 'Rooster',
    2: 'Dog',
    3: 'Pig',
    4: 'Rat',
    5: 'Ox',
    6: 'Tiger',
    7: 'Rabbit',
    8: 'Dragon',
    9: 'Snake',
    10: 'Horse',
    11: 'Sheep',
}

function findZodiac(n) {
    return `Your zodiac is ${zodiac[n%12]}`;
    // switch (n % 12) {
    //     case 0:
    //         return zodiac[0];
    //     case 1:
    //         return zodiac[1];
    //     case 2:
    //         return zodiac[2];
    //     case 3:
    //         return zodiac[3];
    //     case 4:
    //         return zodiac[4];
    //     case 5:
    //         return zodiac[5];
    //     case 6:
    //         return zodiac[6];
    //     case 7:
    //         return zodiac[7];
    //     case 8:
    //         return zodiac[8];
    //     case 9:
    //         return zodiac[9];
    //     case 10:
    //         return zodiac[10];
    //     case 11:
    //         return zodiac[11];
    //     default:
    //         break;
}

console.log(findZodiac(2002));