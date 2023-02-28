export function initContact() {
  const page = document.getElementById("content");

  const contactPage = document.createElement("div");
  contactPage.id = "contact-page";
  contactPage.innerHTML = `
    <div id="heading">
    <h1>Contact Us!</h1>
    </div>
    <div id="picture">
    <img src = "../src/food.png" alt="Cheeseburger with lettuce and tomato on sesame seed bun" width="300px">
    </div>
    <div id="info">
    <p>Call us at (555)555-5555!<p>
    </div>
    `;
  page.appendChild(contactPage);
}
