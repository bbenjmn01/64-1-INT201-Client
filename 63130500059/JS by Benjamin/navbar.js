let navbar = document.querySelector("#navbar");

let nav = document.createElement("nav");
nav.setAttribute("class", "bg-gray-100");
// nav.setAttribute("class", "bg-gray-200");
nav.innerHTML = `
  <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div class="relative flex items-center justify-between h-16">
      <div id="mobile-menu-button">
        <!-- Mobile menu button -->
      </div>
      <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
        <div id="logo">
          <!-- LOGO -->
        </div>
        <div id="web-menu">
          <!-- Web menu -->
        </div>
      </div>
      <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <div id="search">
          <!-- Search -->
        </div>
        <div id="cart">
          <!-- Cart -->
        </div>
        <div id="delete">
          <!-- Delete -->
        </div>
        <div id="change-theme">
          <!-- Change theme button -->
        </div>
      </div>
    </div>
  </div>

  <!-- Mobile menu, show/hide based on menu state. -->
  <div id="mobile-menu">
  
  </div>`;
navbar.appendChild(nav);

// LOGO
let div_logo = document.querySelector("#logo");
div_logo.setAttribute("class", "flex-shrink-0 flex items-center");

let logo1 = document.createElement("span");
logo1.setAttribute("class", "block lg:hidden h-8 w-auto");
logo1.innerHTML = `<svg class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="30px" width="24px" style="enable-background:new 0 0 456.008 560.035;" version="1.1" viewBox="0 0 456.008 560.035" width="456.008px" xml:space="preserve"><path d="M380.844,297.529c0.787,84.752,74.349,112.955,75.164,113.314c-0.622,1.988-11.754,40.191-38.756,79.652 c-23.343,34.117-47.568,68.107-85.731,68.811c-37.499,0.691-49.557-22.236-92.429-22.236c-42.859,0-56.256,21.533-91.753,22.928 c-36.837,1.395-64.889-36.891-88.424-70.883C10.822,419.585-25.931,292.64,23.419,206.95 c24.516-42.554,68.328-69.501,115.882-70.192c36.173-0.69,70.315,24.336,92.429,24.336c22.1,0,63.59-30.096,107.208-25.676 c18.26,0.76,69.517,7.376,102.429,55.552C438.715,192.614,380.208,226.674,380.844,297.529 M310.369,89.418 C329.926,65.745,343.089,32.79,339.498,0C311.308,1.133,277.22,18.785,257,42.445c-18.121,20.952-33.991,54.487-29.709,86.628 C258.712,131.504,290.811,113.106,310.369,89.418"/></svg>`;

let logo2 = document.createElement("span");
logo2.setAttribute("class", "hidden lg:block h-8 w-auto");
logo2.innerHTML = `<svg class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="30px" width="24px" style="enable-background:new 0 0 456.008 560.035;" version="1.1" viewBox="0 0 456.008 560.035" width="456.008px" xml:space="preserve"><path d="M380.844,297.529c0.787,84.752,74.349,112.955,75.164,113.314c-0.622,1.988-11.754,40.191-38.756,79.652 c-23.343,34.117-47.568,68.107-85.731,68.811c-37.499,0.691-49.557-22.236-92.429-22.236c-42.859,0-56.256,21.533-91.753,22.928 c-36.837,1.395-64.889-36.891-88.424-70.883C10.822,419.585-25.931,292.64,23.419,206.95 c24.516-42.554,68.328-69.501,115.882-70.192c36.173-0.69,70.315,24.336,92.429,24.336c22.1,0,63.59-30.096,107.208-25.676 c18.26,0.76,69.517,7.376,102.429,55.552C438.715,192.614,380.208,226.674,380.844,297.529 M310.369,89.418 C329.926,65.745,343.089,32.79,339.498,0C311.308,1.133,277.22,18.785,257,42.445c-18.121,20.952-33.991,54.487-29.709,86.628 C258.712,131.504,290.811,113.106,310.369,89.418"/></svg>`;

// let logo1 = document.createElement("img");
// logo1.setAttribute("class", "block lg:hidden h-8 w-auto");
// logo1.setAttribute("src", "images/Apple_logo_black.svg");

// let logo2 = document.createElement("img");
// logo2.setAttribute("class", "hidden lg:block h-8 w-auto");
// logo2.setAttribute("src", "images/Apple_logo_black.svg");

div_logo.appendChild(logo1);
div_logo.appendChild(logo2);

// Mobile menu button
let mobile_menu_button = document.querySelector("#mobile-menu-button");
mobile_menu_button.setAttribute(
  "class",
  "absolute inset-y-0 left-0 flex items-center sm:hidden"
);
let hamburger_btn = document.createElement("button");
hamburger_btn.setAttribute(
  "class",
  "inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
);
hamburger_btn.setAttribute("aria-controls", "mobile-menu");
hamburger_btn.setAttribute("aria-expanded", "false");
hamburger_btn.innerHTML = `<span class="sr-only">Open main menu</span>
          <!--
            Icon when menu is closed.

            Heroicon name: outline/menu

            Menu open: "hidden", Menu closed: "block"
          -->
          <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <!--
            Icon when menu is open.

            Heroicon name: outline/x

            Menu open: "block", Menu closed: "hidden"
          -->
          <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>`;
mobile_menu_button.appendChild(hamburger_btn);

const menu = ["Mac", "iPad", "iPhone", "Watch", "AirPods"];

// Web menu
let web_menu = document.querySelector("#web-menu");
web_menu.setAttribute("class", "hidden sm:block sm:ml-6");
let web_menu_container = document.createElement("div");
web_menu_container.setAttribute("class", "web-menu-container flex space-x-4");

for (let i = 0; i < menu.length; i++) {
  let menu_txt = document.createElement("a");
  if (i == 0) {
    // menu_txt.setAttribute("id", `menu_txt_${i}`);
    menu_txt.setAttribute("href", "#");
    menu_txt.setAttribute(
      "class",
      "bg-gray-200 underline px-3 py-2 rounded-lg text-sm font-medium"
    );
    menu_txt.setAttribute("aria-current", "page");
    menu_txt.textContent = `${menu[i]}`;
  } else {
    // menu_txt.setAttribute("id", `menu_txt_${i}`);
    menu_txt.setAttribute("href", "#");
    menu_txt.setAttribute(
      "class",
      "menu transition duration-500 ease-in-out transform hover:scale-125 hover:underline px-3 py-2 rounded-md text-sm font-medium"
    );
    menu_txt.textContent = `${menu[i]}`;
  }
  web_menu_container.appendChild(menu_txt);
}

web_menu.appendChild(web_menu_container);

// Mobile menu, show/hide based on menu state.
let mobile_menu = document.querySelector("#mobile-menu");
mobile_menu.setAttribute("class", "sm:hidden");
let mobile_menu_container = document.createElement("div");
mobile_menu_container.setAttribute("class", "px-2 pt-2 pb-3 space-y-1");

for (let i = 0; i < menu.length; i++) {
  let menu_txt = document.createElement("a");
  if (i == 0) {
    // menu_txt.setAttribute("id", `menu_txt_${i}`);
    menu_txt.setAttribute("href", "#");
    menu_txt.setAttribute(
      "class",
      "bg-gray-900 text-white underline block px-3 py-2 rounded-md text-base font-medium"
    );
    menu_txt.setAttribute("aria-current", "page");
    menu_txt.textContent = `${menu[i]}`;
  } else {
    // menu_txt.setAttribute("id", `menu_txt_${i}`);
    menu_txt.setAttribute("href", "#");
    menu_txt.setAttribute(
      "class",
      "text-gray-800 hover:underline block px-3 py-2 rounded-md text-base font-medium"
    );
    menu_txt.textContent = `${menu[i]}`;
  }
  mobile_menu_container.appendChild(menu_txt);
}

mobile_menu.appendChild(mobile_menu_container);

