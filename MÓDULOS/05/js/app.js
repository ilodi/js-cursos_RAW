window.video.addEventListener("click", function () {
  console.log("cli");
  //como tenemos ya un super objeto
  this.classList.add("hidden");
  //dynamic import
  //con el call back podemos
  import("./player.js").then(({ player }) => {
    setTimeout(() => {
      player.play();
    }, 150);
  });
});
