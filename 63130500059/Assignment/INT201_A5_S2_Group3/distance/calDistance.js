// * Import "function howLong(p1, p2) กับ sortLength(...lines)" ด้วยชื่อ howLong กับ sortLength จาก ./formula.js เพื่อเอามาใช้ภายใน script นี้
import { howLong, sortLength } from './formula.js';

// * สร้าง TestCase เพื่อทดสอบ
// * โดยใส่ argument เป็น array ของคู่อันดับ
let l1 = howLong([3, 2], [7, 2]);
let l2 = howLong([5, 10], [5, 27]);
let l3 = howLong([36, 40], [2, 34]);

console.log(`The length of l1 is ${l1}`);
console.log(`The length of l2 is ${l2}`);
console.log(`The length of l3 is ${l3}`);

// * เรียกใช้ sortLength เพื่อเรียงลำดับความยาว
console.log(sortLength(l1, l2, l3));