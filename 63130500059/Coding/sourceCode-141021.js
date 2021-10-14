let VAT = 0.07; //global variable (let)

//priceWithVat - global function/Outer function

function priceWithVat(price) {

  //price is a local scope

  //header is a local scope

  let header = 'SIT, KMUTT';



  //staff is a nested(inner) function

  function staff(name) {

    let staffName = name;

    return header + price + staffName + VAT;

  }

  return price * VAT + price;

}

console.log(priceWithVat(100));