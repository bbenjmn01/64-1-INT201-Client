import { cartEvents, updateAmount } from "./cart.js";

cartEvents.recove();

// Cart
let div_cart = document.querySelector("#cart");
div_cart.setAttribute("class", "flex items-center");

let cart_btn = document.createElement("button");
cart_btn.setAttribute(
  "class",
  "p-1 rounded-full text-gray-400 transition duration-500 ease-in-out transform hover:scale-150"
);
cart_btn.innerHTML = `<svg class="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-1.99.9-1.99 2L3 20c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm0 10c-2.76 0-5-2.24-5-5h2c0 1.66 1.34 3 3 3s3-1.34 3-3h2c0 2.76-2.24 5-5 5z"/></svg>`;
div_cart.appendChild(cart_btn);

let cart_amount = document.createElement("span");
cart_amount.setAttribute("id", "cart-amount");
cart_amount.setAttribute("class", "p-1 w-16 text-bold text-l");
cart_amount.textContent = `Bag: ${cartEvents.count()}`;
div_cart.appendChild(cart_amount);

// Delete
let div_delete = document.querySelector("#delete");
let delete_btn = document.createElement("button");
delete_btn.setAttribute(
  "class",
  "p-1 mx-2 rounded-full text-gray-400 transition duration-500 ease-in-out transform hover:scale-150"
);
delete_btn.innerHTML = `<svg class="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0V0z" fill="none"/><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"/></svg>`;
delete_btn.addEventListener("click", cartEvents.cancel, updateAmount);
div_delete.appendChild(delete_btn);


