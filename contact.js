const boxtitle = document.querySelectorAll(".boxtitle");
const block = document.querySelectorAll(".block");
boxtitle.forEach((e, i) => {
    e.addEventListener(
        "click",
        () => {
        setTimeout(() => {
        block[i].classList.toggle("hide");
        e.lastElementChild.classList.toggle("bi-caret-right-fill");
        e.lastElementChild.classList.toggle("bi-caret-down-fill");
      },
      100
      );
    });
});
