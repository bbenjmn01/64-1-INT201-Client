
// * Function ในการคำนวณพื้นที่ของรูปต่าง ๆ
export function area(fn, n1, n2 ) {
    // * return ผลลัพธ์​ของ function กลับไปยัง area โดย Function จะได้รับมาจาก Paremeter -> fn ของ area และส่งค่า n1,n2 ไปยัง fn ที่ได้รับมา
    return fn(n1, n2);
}

// * Function ในการคำนวณพื้นที่ของวงกลม
export function circle(n1, n2 = 0) {
    // * return มาเป็นพื้นที่ของวงกลม
    // * กำหนด defualt parameter เนื่องจากการคำนวณพื้นที่วงกลมใส่ค่าเข้ามาเพียงค่าเดียว เพื่อไม่ให้เกิด error จากการใส่ค่าไม่ครบ
    return Math.PI * n1 * n1;
}

// * Function ในการคำนวณพื้นที่ของสามเหลี่ยม
export function triangle(n1, n2) {
    // * return มาเป็นพื้นที่ของสามเหลี่ยม
    return 0.5 * n1 * n2;
}

// * Function ในการคำนวณพื้นที่ของสี่เหลี่ยม
export function rectangle(n1, n2) {
    // * return มาเป็นพื้นที่ของสี่เหลี่ยม
    return n1 * n2;
}