window.onload = init;
export function init() {
  const heading = document.createElement("div");
  heading.className = "heading";
  const div = document.getElementById("content");
  heading.innerHTML = "<h1>Alex's Burgers & Fries</h1>";
  div.appendChild(heading);

  const img = document.createElement("img");
  img.src = "../src/food.png";
  div.appendChild(img);

  const info = document.createElement("p");
  info.innerHTML =
    "A great restaurant to eat at if you like burgers and fries!";
  div.appendChild(info);
}
