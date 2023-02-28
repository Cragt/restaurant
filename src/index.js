import { initFrontPage } from "./frontPage";
import { initMenu } from "./menu";
import { initContact } from "./contact";

const page = document.getElementById("content");
const buttons = document.createElement("div");

buttons.innerHTML = `
<div id="heading">
<button id="home">Home</button>
<button id="menu">Menu</button>
<button id="contact">Contact Us</button>
</div>
`;
page.appendChild(buttons);

initFrontPage();
initMenu();
initContact();

const homeBtn = document.getElementById("home");
const menuBtn = document.getElementById("menu");
const contactBtn = document.getElementById("contact");

const removeHome = document.getElementById("home-page");
const removeMenu = document.getElementById("menu-page");
const removeContact = document.getElementById("contact-page");
removeMenu.style.display = "none";
removeContact.style.display = "none";

homeBtn.onclick = function () {
  // removeMenu.remove();
  // removeContact.remove();
  // initFrontPage();
  // removeHome.remove();
  removeHome.style.display = "block";
  removeMenu.style.display = "none";
  removeContact.style.display = "none";
};

menuBtn.onclick = function () {
  // removeHome.remove();
  // removeContact.remove();
  // removeMenu.remove();
  removeMenu.style.display = "block";
  removeHome.style.display = "none";
  removeContact.style.display = "none";
};

contactBtn.onclick = function () {
  removeContact.style.display = "block";
  removeHome.style.display = "none";
  removeMenu.style.display = "none";
  // const removeHome = document.getElementById("home-page");
  // const removeMenu = document.getElementById("menu-page");
  // const removeContact = document.getElementById("contact-page")
  // removeHome.remove();
  // removeMenu.remove();
  // removeContact.remove();
  // initContact();
};
