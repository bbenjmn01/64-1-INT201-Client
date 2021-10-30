// * Export "function getPrice(priceList)" เป็น Module เพื่อสามารถเอาไปใช้ใน script อื่น ๆ ได้
// * getPrice(priceList) เป็น function สำหรับรับค่ารายการสินค้าที่ยังไม่รวมภาษี 
export function getPrice(priceList) {
    
    // * calculateTax(tax) เป็น function คำนวณภาษีแต่ละสินค้าชิ้น
    // * แล้ว return เป็นผลรวมของรายการสินค้าที่รวมภาษีแล้ว
    function calculateTax(tax) { 
        
        // * sumPriceWithTax เป็นการรับค่าก่อนหน้า, และค่าปัจจุบัน แล้ว return ออกมาเป็นผลรวมของทั้งสองค่า
        // * ใช้ reduce โดยรับ parameter เป็น arrow function ที่รับค่าก่อนหน้า, และค่าปัจจุบัน แล้ว return ออกมาเป็นผลรวมของทั้งสองค่า
        // * กับ priceList เพื่อบวกค่าหาผลรวมทั้งหมด
        return priceList.map((price) => price + (price * tax)).reduce((previousValue, currentValue) => previousValue + currentValue)
    }
    
    // * return มาเป็นค่าผลรวมราคาของแต่ละชิ้นทั้งหมดที่รวมภาษีแล้ว
    return calculateTax
}
