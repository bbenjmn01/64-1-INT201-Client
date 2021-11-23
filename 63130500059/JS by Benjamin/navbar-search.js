import { products } from "./products.js";

// Search
let div_search = document.querySelector("#search");
div_search.setAttribute("class", "flex items-center ml-5 pr-2 hidden md:flex");

let search_box = document.createElement("input");
search_box.setAttribute("type", "text");
search_box.setAttribute("id", "search-box");
search_box.setAttribute("placeholder", "Search for names..");
search_box.setAttribute(
  "class",
  "rounded-2xl py-3 px-3 mr-5 flex items-center justify-center text-base font-sm text-black"
);
search_box.style.visibility = "hidden";
div_search.appendChild(search_box);

let search_btn = document.createElement("button");
search_btn.setAttribute(
  "class",
  "p-1 rounded-full text-gray-400 transition duration-500 ease-in-out transform hover:scale-150"
);
search_btn.innerHTML = `<svg class="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>`;
div_search.appendChild(search_btn);

search_btn.addEventListener("click", () => {
  let searchBox = document.querySelector("#search-box");
  if (searchBox.style.visibility === "hidden") {
    searchBox.style.visibility = "visible";
  } else {
    searchBox.style.visibility = "hidden";
  }
});

document.querySelector("#search-box").addEventListener("keyup", filter);

function filter(e) {
  let filterProduct = document.querySelectorAll(".pd");
  let text = e.target.value;
  console.log(text);
  for (let i = 0; i < filterProduct.length; i++) {
    let productName = products[i].product_name;
    if (productName.toLowerCase().trim().includes(text.toLowerCase())) {
      filterProduct[i].style.display = "";
    } else {
      filterProduct[i].style.display = "none";
    }
  }
}

// export { searchProductName, filter };
