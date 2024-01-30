const shop_cart = document.getElementById("shop_cart");
const cut_click = document.getElementById("cut_click");
const shop_btn = document.getElementById("shop_btn");
const shop_msg = document.getElementsByClassName("shop_msg")[0];
const menu = document.getElementById("menu");
const popbox = document.getElementById("popbox");
const cardBox = document.getElementById("cardBox");
const itemPrice=document.querySelectorAll('.itemPrice')
const itemTag=document.querySelectorAll('.itemTag')
let click = false;
shop_cart.onclick = (e) => {
  e.preventDefault();
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
const itemBox = document.querySelectorAll(".itemBox");
itemBox.forEach((e,i) => {
  e.onclick = (el) => {
    location.href = "product.html";
   localStorage.setItem("src",e.firstElementChild.firstElementChild.src) 
   localStorage.setItem("price",itemPrice[i].innerText)
   localStorage.setItem("tag",itemTag[i].innerText)
  };
});


const circle = document.querySelector(".circle");
cardBox.innerHTML=localStorage.getItem('ul');
circle.innerText=localStorage.getItem('counter');

if(circle.innerText==''){
  circle.innerText=0;
}

