// * Import "function getPrice(priceList)" ด้วยชื่อ getPrice จาก ./getPrice.js เพื่อเอามาใช้ภายใน script นี้
import { getPrice } from './getPrice.js'

// * สร้าง TestCase เพื่อทดสอบ
let priceList = { 
    testCase1: [10, 20, 30, 40, 50], 
    testCase2: [50, 300, 80, 100, 460], 
    testCase3: [168, 1890, 1987, 1237, 1984]
}
// * กำหนดภาษี
let tax = 0.07

// * เรียกใช้งาน Method getPrice แล้ว Assign ค่าให้ตัวแปรเพื่อให้สามารถเรียกใช้ Inner Function ผ่านตัวแปรได้
let calTotalPriceWithTax_case1 = getPrice(priceList.testCase1)

// * เรียกใช้งาน calTotalPriceWithTax_case1(tax) เพื่อค่านวณภาษีแล้วหาผลรวมของรายการสินค้าที่รวมภาษีแล้ว
console.log(`Price List : ${priceList.testCase1}\nTax : ${(tax * 100).toFixed(0)}%\nTotal Price : ${calTotalPriceWithTax_case1(tax)}`)

let calTotalPriceWithTax_case2 = getPrice(priceList.testCase2)
console.log(`Price List : ${priceList.testCase2}\nTax : ${(tax * 100).toFixed(0)}%\nTotal Price : ${calTotalPriceWithTax_case2(tax)}`)

let calTotalPriceWithTax_case3 = getPrice(priceList.testCase3)
console.log(`Price List : ${priceList.testCase3}\nTax : ${(tax * 100).toFixed(0)}%\nTotal Price : ${calTotalPriceWithTax_case3(tax)}`)