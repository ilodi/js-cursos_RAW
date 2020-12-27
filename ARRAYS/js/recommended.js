import movies from "./movies.js";
import render from "./render.js";

//seleccionar element 3 formas
const $button = window.recommended;
//const $button = document.querySelector("#recommended");
//const $button = document.getElementById("recommended");

$button.addEventListener("click", () => {
  render(setRecommendedMovies(movies));
});

function setRecommendedMovies(movies) {
  //un map devuelve un nuevo elemento
  return movies.map((movie, index) => {
    //NUEVA FORMA
    return { ...movie, recommended: movie.vote_average > 7 };
    //FORMA COMPLETA
    //if (movie.vote_average > 7) {
    //spread para solo modificar un valor clonando lo que ya se tenia
    //return { ...movie, recommended: true };
    //}
    //return movie;
  });

  console.table(newMovies, ["title", "vote_average", "recommended"]);
}
