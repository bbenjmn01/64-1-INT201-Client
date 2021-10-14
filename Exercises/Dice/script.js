function Dice() {
  this._faceValue = 0;
  this.roll = function () {
    // สุ่มหน้าลูกเต๋่าออกมา
    return Math.floor(Math.random() * 6) + 1;
  };
}

function play(gameDice, player1, player2, rounds) {
  let p1Win = 0;
  let p2Win = 0;
  for (let i = 0; i < rounds; i++) {
    // print รอบที่เล่นรอบที่เท่าไหร่
    console.log(`round# ${i + 1}`);
    // เอาค่าของลูกเต๋าที่สุ่มมาใส่เป็นข้อมูลของ Player
    player1.faceValues[i] = gameDice.roll();
    player2.faceValues[i] = gameDice.roll();
    // print เลขหน้าของลูกเต๋าที่ผู้เล่นแต่ละคนสุ่มได้
    console.log(`player1 value: ${player1.faceValues[i]}`);
    console.log(`player2 value: ${player2.faceValues[i]}`);
    // check ค่าของเลขหน้าลูกเต๋า / if ถ้า p2 ชนะ / else if ถ้า p1 ชนะ / else ถ้าเสมอ /
    // แล้วบันทึกผล แพ้-ชนะ ในแต่ละรอบ
    if (player1.faceValues[i] < player2.faceValues[i]) {
      player1.results[i] = "Lose";
      player2.results[i] = "Win";
      p2Win++;
    } else if (player1.faceValues[i] > player2.faceValues[i]) {
      player1.results[i] = "Win";
      player2.results[i] = "Lose";
      p1Win++;
    } else {
      player1.results[i] = "draw";
      player2.results[i] = "draw";
    }
    // print ผู้ชนะในรอบนั้น ๆ
    console.log(`player1 : ${player1.results[i]}`);
    console.log(`player2 : ${player2.results[i]}`);
  }
  return p1Win > p2Win // ถ้า p1 มีรอบที่ชนะมากกว่า
    ? player1.name
    : p2Win > p1Win // ถ้า p2 มีรอบที่ชนะมากกว่า
    ? player2.name
    : "No Player";
}

// สร้างลูกเต๋า
let dice = new Dice();
// สร้างผู้เล่น
p1 = { name: "Joe", faceValues: [], results: [] };
p2 = { name: "Ann", faceValues: [], results: [] };

console.log(`${play(dice, p1, p2, 3)} Win!`);
console.log(p1);
console.log(p2);
