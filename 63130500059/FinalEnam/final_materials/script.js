function updateAmount() {
  let pending = document.querySelector("#countPendingItems");
  pending.textContent = cart.countItemPending();
  let done = document.querySelector("#countDoneItems");
  done.textContent = cart.countDone();
}

function clearList() {
  let list = document.querySelectorAll(".pd");
  list.forEach((i) => i.remove());
}

function showItemList() {
  let itemList = document.querySelector("#buying-list");
  clearList();
  for (const i in cart.cartItem) {
    let list = document.createElement("li");
    list.setAttribute("id", `${cart.cartItem[i].prodName}`);
    list.setAttribute("class", "pd");
    list.innerHTML = `${cart.cartItem[i].prodName}, <span id="${cart.cartItem[i].prodName}qty">${cart.cartItem[i].qty}</span> units `;
    let icon = document.createElement("img");
    icon.setAttribute("src", "./images/pending.svg");
    icon.addEventListener("click", () => {
      icon.setAttribute("src", "./images/done.svg");
      list.setAttribute("style", " color:gray; text-decoration: line-through;");
    });
    icon.addEventListener("click", cart.addDone);

    list.appendChild(icon);
    itemList.appendChild(list);
  }
}

function deleteItem(id) {
  cart.cartItem.splice(
    cart.cartItem.findIndex((find) => find.prodName == id),
    1
  );
  updateAmount();
  localStorage.setItem("cartItem", JSON.stringify(cart.cartItem));
  console.log(cart.cartItem);
  console.log(cart.done);
}

let cart = {
  cartItem: [],

  done: [],

  addItem: function () {
    let item = document.querySelector("#item");
    let qty = document.querySelector("#qty");
    let checkItem = cart.cartItem.filter(
      (check) => check.prodName == item.value
    );
    if (checkItem == false) {
      cart.cartItem.push({
        prodName: item.value,
        qty: Number(qty.value),
      });
    } else {
      cart.cartItem[
        cart.cartItem.findIndex((find) => find.prodName == item.value)
      ].qty += Number(qty.value);
    }
    updateAmount();
    showItemList();
    item.value = "";
    localStorage.setItem("cartItem", JSON.stringify(cart.cartItem));
    console.log(cart.cartItem);
  },

  countItemPending: function () {
    return Object.values(cart.cartItem).reduce(
      (temp, { qty }) => temp + qty,
      0
    );
  },

  addDone: function (event) {
    let id = event.target.parentNode.id;
    cart.done.push(
      cart.cartItem[cart.cartItem.findIndex((find) => find.prodName == id)]
    );
    updateAmount();
    deleteItem(id);
    localStorage.setItem("cartDone", JSON.stringify(cart.done));
    console.log(cart.done);
  },

  countDone: function () {
    return Object.values(cart.done).reduce((temp, { qty }) => temp + qty, 0);
  },

  deleteAll: function () {
    alert(`Empty List`);
    cart.cartItem = [];
    updateAmount();
    clearList();
    localStorage.setItem("cartItem", "");
    localStorage.setItem("cartDone", "");
    console.log(cart.cartItem);
  },
};

// 1.2.1
let btnSubmit = document.querySelector("#btn-submit");
btnSubmit.addEventListener("click", cart.addItem);

// 1.2.2
let btnClear = document.querySelector("#btn-clear");
btnClear.addEventListener("click", cart.deleteAll);
