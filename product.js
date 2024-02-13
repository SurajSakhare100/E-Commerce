
const itemTag = document.querySelectorAll(".itemTag");
const itemPrice = document.querySelectorAll(".itemPrice");
const card = document.querySelectorAll(".card");
const cartPrice = document.querySelectorAll(".cartPrice");
const circle = document.querySelector(".circle");
const cardBox = document.getElementById("cardBox");
let shop_btn = document.getElementById("shop_btn");
let non = document.getElementById("non");
let str=0;
var counter = 0;
card.forEach((e,i) => {
  e.onclick = () => {
    let a,b,c;
    a= e.firstElementChild.firstElementChild.src;
   b=itemPrice[i].innerHTML;
c=itemTag[i].innerText;
e.firstElementChild.firstElementChild.src=mainImg.src;
itemPrice[i].innerHTML=price.innerHTML;
itemTag[i].innerText=pTitle.innerText;
    mainImg.src = a;
    price.innerHTML=b;
    pTitle.innerText=c;
  };
});
let i=0;
let n,sum=0;
const addToCart = () => {
    non.innerText='';
    counter= localStorage.getItem('counter');
    circle.innerText = ++counter;
  //  localStorage.setItem('cartImg',mainImg.src);
    cardBox.innerHTML += `<li class="cartList">
      <a href="" class="" >
      <img width="70" height="70" src="" class='cardImg'>
         </a>
      <div class='cartBox' >
      <p class='catdTitle'>edible oil</p>
      <span ><span class="quantity">2 </span> x <bdi class='cartPrice'></bdi>
      </span>
      </div>
  </li>`;
  i=localStorage.getItem('value');
  if(i==null){
    i=0;
    console.log(i);
  }
  let cardImg=document.querySelectorAll(".cardImg");
  let catdTitle=document.querySelectorAll(".catdTitle");
  let quantity=document.querySelectorAll(".quantity");
  let cartPrice=document.querySelectorAll(".cartPrice")
  quantity[i].innerText=`${quantity_num.value}`;
  catdTitle[i].innerText=pTitle.innerText
  cardImg[i].src=mainImg.src
  // pr=null?pr.innerText=price.innerText:'';
  let h=price.innerText;
  price.firstElementChild!=null?h=price.lastElementChild.innerText:'';
  cartPrice[i].innerText=h;
  
  sum+=(Number.parseInt(quantity_num.value)*Number.parseInt(cartPrice[i].innerText.slice(1)));
  
  total.innerText=`£${sum}.00`;
  localStorage.setItem('total',total.innerText)
  localStorage.setItem(`title${i}`,catdTitle[i].innerText)
  localStorage.setItem(`price${i}`,Number.parseInt(cartPrice[i].innerText.slice(1)*quantity_num.value))
  localStorage.setItem(`quantity_num${i}`,Number.parseInt(quantity_num.value))
  i++;
  console.log(quantity_num.value);
  localStorage.setItem('value',i)
  str=cardBox.innerHTML;
  localStorage.setItem('ul',str)
  localStorage.setItem('counter',counter)
  
};
if(!localStorage.getItem("src")){
  mainImg.src='itemListImg/item-list-6.jpg'
  price.innerText="£17.00"
}else{
  mainImg.src=localStorage.getItem("src")
  price.innerText=localStorage.getItem('price')
  pTitle.innerText=localStorage.getItem('tag')
}