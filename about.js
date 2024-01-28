const bannerbox = document.getElementById("bannerbox");
const width = document.getElementById("bannerbox").offsetWidth;
const imgBox = document.querySelectorAll(".imgBox");
const scoreChange = document.querySelectorAll(".score-change");
// console.log(imgBox);
// const width;
const bannerSlider = () => {
  imgBox.forEach((e) => {
    e.style.transform = `translateX(-${width}px)`;
    e.style.transition = `ease-in-out 1s transform`;
  });
  setTimeout(() => {
      imgBox.forEach((e) => {
          e.style.transform = `translateX(0)`;
          e.style.transition = "none";
        });
        bannerbox.append(bannerbox.firstElementChild);
  }, 1000);
};
setInterval(() => {
  bannerSlider();
}, 2000);
const counter=()=>{
    scoreChange.forEach((e,i)=>{
        e.innerText=`${ Number.parseInt(e.innerText)+1} +`;
    })
    if(Number.parseInt(scoreChange[0].innerText)==5000){
        clearInterval(mycouter);
    }
}
const mycouter=setInterval(() => {
    counter();
},5);
