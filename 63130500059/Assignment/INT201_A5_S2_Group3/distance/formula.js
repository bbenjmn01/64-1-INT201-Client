// * Export "function howLong(p1, p2)" เป็น Module เพื่อสามารถเอาไปใช้ใน script อื่น ๆ ได้
// * howLong(p1, p2) เป็น function สำหรับคำนวณระยะห่างระหว่างจุด โดยรับ parameter เป็นคู่อันดับของจุด 2 จุด
// * return เป็นผลลัพธ์ของระยะห่างระหว่างจุด 2 จุด
export function howLong(p1, p2) {
    return Math.sqrt(Math.pow((p1[0]-p2[0]), 2) + Math.pow((p1[1]-p2[1]), 2), 2)
}

// * Export "function sortLength(...lines)" เป็น Module เพื่อสามารถเอาไปใช้ใน script อื่น ๆ ได้
// * sortLength(...lines) เป็น function สำหรับเรียงค่าจากน้อยไปมาก
// * return array ของ lines ที่ถูกเรียงแล้ว
export function sortLength(...lines) {
    return lines.sort((a, b) => a - b);
}
