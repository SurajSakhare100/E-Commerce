if (location.href == 'http://127.0.0.1:5501/index.html') {
  const shop_cart = document.getElementById("shop_cart");
  const cut_click = document.getElementById("cut_click");
  const shop_btn = document.getElementById("shop_btn");
  const shop_msg = document.getElementsByClassName("shop_msg")[0];
  const menu = document.getElementById("menu");
  const popbox = document.getElementById("popbox");
  let click = false;
  shop_cart.onclick = (e) => {
    e.preventDefault()
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
}
// var product = document.querySelectorAll('.card_img_list');
// product.forEach((e)=>{
//   e.addEventListener('click',()=>{
    
//   })
// })
