import { initFrontPage } from "./frontPage";
import { initMenu } from "./menu";
import { initContact } from "./contact";

const page = document.getElementById("content");
const buttons = document.createElement("div");

const renderPage = function () {
  buttons.innerHTML = `
<div id="heading">
<button id="home">Home</button>
<button id="menu">Menu</button>
<button id="contact">Contact Us</button>
</div>
`;
  page.appendChild(buttons);
  const homeBtn = document.getElementById("home");
  const menuBtn = document.getElementById("menu");
  const contactBtn = document.getElementById("contact");
  homeBtn.onclick = function () {
    page.innerHTML = "";
    renderPage();
    initFrontPage();
  };

  menuBtn.onclick = function () {
    page.innerHTML = "";
    renderPage();
    initMenu();
  };

  contactBtn.onclick = function () {
    page.innerHTML = "";
    renderPage();
    initContact();
  };
};

renderPage();
initFrontPage();
