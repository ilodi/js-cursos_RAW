import rawMovies from "./movies.js";

//mapas un objeto iterable
//un mapa tiene una clave valor
//por eso en el set se pone primero la clave luego el valor de esta
const movieList = rawMovies.reduce((list, movie) => {
  list.set(movie.id, movie);
  return list;
}, new Map());

const all = rawMovies.map((movie) => movie.id);

//el reduce necesita los valores
//previo
//actual
//index
// y pot ultimo  necesita el segundo parámetro que es el inicial
// este ultimo valor lo puedes dejar en un array vació
//const popular = rawMovies.reduce((prevValue, actualValue, index) => {
const popular = rawMovies.reduce((list, movie) => {
  if (movie.vote_average > 7) {
    // si se cumple se añade a la lista
    list.push(movie.id);
  }
  return list;
}, []);

const notPopular = rawMovies.reduce((list, movie) => {
  if (movie.vote_average <= 7) {
    // si se cumple se añade a la lista
    list.push(movie.id);
  }
  return list;
}, []);

export { movieList, all, popular, notPopular };
