export function renderMovieListFromMap(list, map) {
  cleanMovieList();
  list.forEach((movieId) => renderElement(map.get(movieId)));
}

//render elementos
function renderElement(movie) {
  //crear elemento de HTML
  const element = buildElement(movie);
  //append manda un elemento HTML a pantalla
  window.container.append(element);
}
function buildElement({ title, poster_path, vote_average, id, recommended }) {
  const template = `
  <article class="movie ${recommended ? "recommended" : ""} ">
        <img class="movie-poster" src="//image.tmdb.org/t/p/w220_and_h330_face/${poster_path}" alt="${title}">
        <p class="movie-title">${title}</p>
        <p class="movie-id">${id}</p>
        <span class="movie-rate">${vote_average}</span>
      </article>
  `;
  //convertirlo en HTML
  const movie = document.createElement("div");
  //agrega un HTML a un HTML que ya existe
  movie.innerHTML = template;
  //nos devuelve su primer hijo en otras palabras
  //el div que se crea antes nunca se usara solo lo que tiene interno
  return movie.firstElementChild;
}

function cleanMovieList() {
  window.container.innerHTML = "";
}

export default function renderMovieList(list) {
  //primer limpiar si existe algo antes
  cleanMovieList();
  // console.table(list);
  // de esta manera solo se muestran los campos requeridos
  // console.table(list, ["title", "backdrop_path", "id"]);
  list.forEach(renderElement);
}
