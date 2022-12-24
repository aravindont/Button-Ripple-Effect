const btnEl = document.querySelector(".btn");

btnEl.addEventListener("mouseover", (e) => {
  const y = e.pageY - btnEl.offsetTop;
  const x = e.pageX - btnEl.offsetLeft;

  btnEl.style.setProperty("--xPos", x + "px");
  btnEl.style.setProperty("--yPos", y + "px");
});
