export function initFrontPage() {
  const page = document.getElementById("content");

  const homePage = document.createElement("div");
  homePage.id = "home-page";
  homePage.innerHTML = `
  <div id="heading">
  <h1>Alex's Burgers & Fries</h1>
  </div>
  <div id="picture">
  <img src = "../src/food.png" alt="Cheeseburger with lettuce and tomato on sesame seed bun" width="300px">
  </div>
  <div id="info">
  <p>A great place to come for burgers and fries!<p>
  </div>
  `;
  page.appendChild(homePage);
}
