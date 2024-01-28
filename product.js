const card = document.querySelectorAll(".card");
const circle = document.querySelector(".circle");
const cardBox = document.getElementById("cardBox");
var counter = 0;
card.forEach((e) => {
  e.onclick = () => {
    mainImg.src = e.firstElementChild.firstElementChild.src;
  };
});
const addToCart = () => {
  ++counter;
  non.innerText='';
 circle.innerText = counter;
  cardBox.innerHTML += `<li style="display:flex; gap:40px; ">
    <a href="" class="" >
		<img width="50" height="50" src="card_img/edible-oil-400x400.jpg">
       </a>
    <div  style="display:flex; flex-direction:column;" >
    <p>edible oil</p>
    <span class="quantity">2 x<bdi><span >£</span>35.00</bdi>
    </span>
    </div>
</li>`;
};
