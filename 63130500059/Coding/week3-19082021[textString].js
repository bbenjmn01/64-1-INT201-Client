const text = "Hello World";

// const menu = `Menu\n1.Reverse text\n2.Replace vowel with *\n3.Count vowel`;

// let text = prompt(`${menu} \n\nEnter some text :`);
// let selected = prompt(`${menu} \n\nSelect the command:`);
// console.log(selected);
// alert(`${textString(selected)}`);

function textString(n) {
  let tmp;
  switch (n) {
    case 1:
      // แยกออกมาเป็นตัว ๆ แล้ว reverse แล้วเอากลับมาต่อกัน
      tmp = text.split("").reverse().join("");
      return tmp;
    case 2:
      // ใช้ method ของ string ที่ชื่อว่า .replace() ที่ทำหน้าที่แทนค่าใหม่ลงในค่าที่เรากำหนด
      // โดยแทนที่ตัวที่พบในวงเล็บ [] ด้วย * ซึ่งมีเงื่อนไข /ig
      // ตัว i จะเป็น non case sensitive แล้วก็ g เป็น global คือแทนที่ทั้งหมด
      tmp = text.replace(/[aeiou]/gi, "*");
      return tmp;
    case 3:
      let count = 0;
      tmp = text.match(/[aeiou]/gi);
      console.log(tmp);
      return tmp.length;
    default:
      break;
  }
}

console.log(textString(1));
console.log(textString(2));
console.log(textString(3));
