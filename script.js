
const shop_cart = document.getElementById("shop_cart");
const cut_click = document.getElementById("cut_click");
const shop_btn = document.getElementById("shop_btn");
const shop_msg = document.getElementsByClassName("shop_msg")[0];
const menu = document.getElementById("menu");
const popbox = document.getElementById("popbox");
let click = false;
shop_cart.onclick = (e) => {
  e.preventDefault();
  console.log("object");
  shop_msg.classList.remove("hide");
};
cut_click.addEventListener("click", (e) => {
  shop_msg.classList.add("hide");
});
menu.onclick = () => {
  popbox.className = "pop";
};
remove.onclick = () => {
  popbox.className = "hide";
};
const item = document.querySelectorAll(".item");
item.forEach((e) => {
  e.onclick = (el) => {
    location.href = "product.html";
  };
});