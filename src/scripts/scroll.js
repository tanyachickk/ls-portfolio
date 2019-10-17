const scrollBtn = document.querySelector(".scroll-down__btn");
const reqBlock = document.querySelector("section.about");

scrollBtn.addEventListener("click", e => {
  e.preventDefault();

  reqBlock.scrollIntoView({ block: "center", behavior: "smooth" });
});
