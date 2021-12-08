import { CookieUtil } from "./cookie.js";

let cart = [];

export const cartEvents = {
  add: function addProduct(event) {
    let get_id = event.target.parentNode.parentNode.id;
    let check_id = cart.filter((item) => item.cart_product_id == get_id);
    if (check_id == false) {
      cart.push({ cart_product_id: get_id, qty: 1 });
      console.log(cart);
    } else {
      cart[cart.findIndex((item) => item.cart_product_id == get_id)].qty++;
      console.log(cart);
    }
    // update_amount.textContent = `Bag: ${cartEvents.count()}`;
    CookieUtil.set("cart", JSON.stringify(cart));
    console.log(CookieUtil.get("cart"));
    updateAmount();
  },

  count: function countItems() {
    let sum = Object.values(cart).reduce((t, { qty }) => t + qty, 0);
    console.log(`cart amount : ${sum}`);
    return sum;
  },

  cancel: function deleteAll() {
    cart = [];
    // update_amount.textContent = `Bag: ${cartEvents.count()}`;
    CookieUtil.set("cart", JSON.stringify(cart));
    updateAmount();
  },

  recove: function recoveItems() {
    if (CookieUtil.get("cart") === null) {
      CookieUtil.set("cart", JSON.stringify(cart));
    } else {
      cart = JSON.parse(CookieUtil.get("cart"));
    }
  },
};

export function updateAmount() {
  let update_amount = document.querySelector("#cart-amount");
  update_amount.textContent = `Bag:  ${cartEvents.count()}`;
}
