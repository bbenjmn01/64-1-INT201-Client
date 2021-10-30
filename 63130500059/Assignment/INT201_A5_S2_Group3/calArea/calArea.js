// * Import "area, circle, triangle, rectangle" จาก ./shapes.js เพื่อเอามาใช้ภายใน script นี้
import { area, circle, triangle, rectangle } from "./shapes.js";

// * เรียกใช้งาน Method area แล้วส่ง Function การทำงานที่ได้สร้างไว้ผ่าน Parameter ของ area
let shape1 = area(circle, 10);
let shape2 = area(triangle, 3, 4);
let shape3 = area(rectangle, 25, 25);

// * แสดงผลลัพธ์ที่ return มาจาก area
console.log(`shape1: ${shape1}`);
console.log(`shape2: ${shape2}`);
console.log(`shape3: ${shape3}`);