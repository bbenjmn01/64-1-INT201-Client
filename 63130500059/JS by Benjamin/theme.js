let div_change_theme = document.querySelector("#change-theme");
div_change_theme.setAttribute(
  "class",
  "ml-4 flex items-center inline-block hidden md:flex"
);

let btn = document.createElement("div");
div_change_theme.appendChild(btn);

let change_theme_swt = document.createElement("input");
change_theme_swt.setAttribute("type", "checkbox");
change_theme_swt.setAttribute("name", "toggle");
change_theme_swt.setAttribute("id", "toggle");
change_theme_swt.setAttribute("class", "hidden");
btn.appendChild(change_theme_swt);

let change_theme_btn = document.createElement("label");
change_theme_btn.setAttribute("for", "toggle");
btn.appendChild(change_theme_btn);

let bg_change_theme_btn = document.createElement("div");
bg_change_theme_btn.setAttribute(
  "class",
  "mx-1 w-10 h-5 flex items-center bg-gray-300 rounded-full p1"
);
change_theme_btn.appendChild(bg_change_theme_btn);

let inner_change_theme_btn = document.createElement("div");
inner_change_theme_btn.setAttribute(
  "class",
  "toggle-dot ml-1 w-4 h-4 bg-black rounded-full shadow-md transform duration-300 ease-in-out"
);
bg_change_theme_btn.appendChild(inner_change_theme_btn);

let light_icon = document.createElement("span");
light_icon.setAttribute("class", "inline-block");
light_icon.innerHTML = `<svg class="icon" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><rect fill="none" height="24" width="24"/><path d="M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0 c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2 c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1 C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06 c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41 l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41 c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36 c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z"/></svg>`;
div_change_theme.insertBefore(light_icon, btn);

let dark_icon = document.createElement("span");
dark_icon.setAttribute("class", "inline-block");
dark_icon.innerHTML = `<svg class="icon" xmlns="http://www.w3.org/2000/svg"enable-background="new 0 0 24 24"height="24px"viewBox="0 0 24 24"width="24px" fill="#000000"><rect fill="none" height="24" width="24" /><path d="M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36c-0.98,1.37-2.58,2.26-4.4,2.26 c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z" /></svg>`;
div_change_theme.appendChild(dark_icon);

let bg = document.querySelector("body");
let header = document.querySelector("#header");
let checkbox = document.getElementById("toggle");
let theme = localStorage.getItem("theme");
let nav = document.querySelector("nav");
let menu = document.querySelectorAll(".menu");
// let svg = document.querySelectorAll("svg");
let icon = document.getElementsByClassName("icon");

if (theme == "dark") {
  darkTheme();
  checkbox.checked = true;
} else {
  lightTheme();
}

checkbox.addEventListener("click", toggle_dark_mode);

function toggle_dark_mode() {
  if (checkbox.checked) {
    darkTheme();
    localStorage.setItem("theme", "dark");
    console.log("Baby shark");
  } else {
    lightTheme();
    localStorage.setItem("theme", "light");
    console.log("Little star");
  }
}

function darkTheme() {
  header.setAttribute(
    "style",
    "font-family: 'Prompt', sans-serif; font-size: 2.5em; color: white;"
  );
  nav.classList.add("bg-gray-700");
  bg.classList.add("bg-gray-900");
  menu.forEach((m) => m.classList.add("text-white"));
  // svg.forEach((s) => s.setAttribute("fill", "#fff"));
  for (const i of icon) {
    i.setAttribute("fill", "#fff");
  }
}

function lightTheme() {
  header.setAttribute(
    "style",
    "font-family: 'Prompt', sans-serif; font-size: 2.5em; color: black;"
  );
  nav.classList.remove("bg-gray-700");
  bg.classList.remove("bg-gray-900");
  menu.forEach((m) => m.classList.remove("text-white"));
  // svg.forEach((s) => s.setAttribute("fill", "#000"));
  for (const i of icon) {
    i.setAttribute("fill", "#000");
  }
}
