import { products } from "./products.js";
import { addProduct } from "./product-cart.js";

let header = document.querySelector("#header");
header.setAttribute(
  "class",
  `flex w-full text-gray-900 text-4xl text-bold justify-center pt-10`
);
header.textContent = "iPhone รุ่นไหนที่ใช่สำหรับคุณ";

let products_list = document.querySelector("#productsList");
products_list.setAttribute(
  "class",
  "mb-20 max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8"
);

let products_container = document.createElement("div");
products_container.setAttribute("id", "products");
products_container.setAttribute(
  "class",
  "mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
);

for (const pd of products) {
  let product = document.createElement("div");
  product.setAttribute("id", pd.product_id);
  product.setAttribute(
    "class",
    "pd bg-white max-w-sm rounded-xl overflow-hidden shadow-lg"
  );

  let image = document.createElement("img");
  image.setAttribute(
    "class",
    "w-full min-h-80 transition duration-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-80 lg:h-80 lg:aspect-none cursor-pointer"
  );
  image.style.height = "350px";
  image.setAttribute("src", pd.product_image);
  product.appendChild(image);

  let text = document.createElement("div");
  text.setAttribute("class", "px-6 py-4");

  let name = document.createElement("div");
  name.setAttribute("class", "font-bold text-xl mb-2");
  name.textContent = pd.product_name;

  let price = document.createElement("p");
  price.setAttribute("class", "text-gray-700 text-xl");
  price.textContent = `${pd.product_price} ฿`;
  text.appendChild(name);
  text.appendChild(price);
  product.appendChild(text);

  let add = document.createElement("div");
  add.setAttribute("class", "mt-5 mb-1 flex justify-center");
  let buy_btn = document.createElement("button");

  buy_btn.textContent = "Add to Cart";
  if (pd.priduct_stock > 0) {
    buy_btn.setAttribute("type", "submit");
    buy_btn.setAttribute(
      "class",
      "bg-gray-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-500 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    );
    buy_btn.textContent = "Add to Cart";
    buy_btn.addEventListener("click", addProduct);
  } else {
    buy_btn.setAttribute(
      "class",
      "opacity-50 bg-gray-900 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    );
    buy_btn.textContent = "Out Of Stock";
  }
  add.appendChild(buy_btn);
  product.appendChild(add);

  let stock = document.createElement("p");
  stock.setAttribute("class", "mb-3 text-center text-gray-700 text-base");
  if (pd.priduct_stock > 0) {
    //   stock.textContent = `${pd.priduct_stock}`;
    stock.textContent = "Available";
    stock.style.cssText = `color: green;`;
  } else {
    stock.textContent = "Currently unavailable";
    stock.style.cssText = `color: red;`;
  }
  product.appendChild(stock);

  products_container.appendChild(product);
}

products_list.appendChild(products_container);

{
  /* <div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div> */
}
