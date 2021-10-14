function randNumber() {
  // Math.floor() เพื่อปัดค่าให้เป็นจำนวนเต็มบวก โดยปัดเศษทิศนิยมทิ้งทั้งหมด
  // Math.floor(Math.random() * max) +1 เพราะถ้าไม่ถึง 1 จะปัดเหลือ 0;
  return Math.floor(Math.random() * 10) + 1;
}

//ค่าที่สุ่มได้
const randValue = randNumber(); //ค่าที่สุ่มได้
//ตัวเลขที่ผู้เล่นเดา
// let guessValue = 5;
let guessValue = prompt(`What do you think this value is?`);
// check ว่าตัวเลขที่ผู้เล่นใส่เข้ามาอยู่ระหว่าง 1-10 หรือไม่
// if (randValue >= 1 && randValue <= 10) {
//   if (randValue > guessValue) {
//     // ถ้าเลขที่สุ่ม > เลขที่เดา
//     console.log(`Too Low, the random number is ${randValue}`);
//   } else if (randValue < guessValue) {
//     // ถ้าเลขที่สุ่ม < เลขที่เดา;
//     console.log(`Too High, the random number is ${randValue}`);
//   } else console.log("You Win!"); // ถ้าเดาเลขถูก;
// }
if (randValue >= 1 && randValue <= 10) {
  if (randValue > guessValue) {
    // ถ้าเลขที่สุ่ม > เลขที่เดา
    alert(`Too Low, the random number is ${randValue}`);
  } else if (randValue < guessValue) {
    // ถ้าเลขที่สุ่ม < เลขที่เดา;
    alert(`Too High, the random number is ${randValue}`);
  } else alert("You Win!"); // ถ้าเดาเลขถูก;
}
