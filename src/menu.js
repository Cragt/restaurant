export function initMenu() {
  const page = document.getElementById("content");

  const menuPage = document.createElement("div");
  menuPage.id = "menu-page";
  menuPage.innerHTML = `
    <div id="heading">
    <h1>Menu</h1>
    </div>
    <div id="picture">
    <img id="cheeseburger" src = "../src/food.png" alt="Cheeseburger with lettuce and tomato on sesame seed bun" width="300px">
    </div>
    <div id="info">
    <p>Cheeseburger - $2<p>
    </div>
    `;
  page.appendChild(menuPage);
}
