import movies from "./movies.js";
import render from "./render.js";
//seleccionar por el ID con un guion
const search = window["search-form"];

//escuchar el evento submit
search.addEventListener("submit", function (event) {
  //para que la pagina no se recargue
  event.preventDefault();
  // FormData es una clase que recibe el formulario
  //this hace referencia a search
  //RECUERDA this no funciona en los arrows function
  const formData = new FormData(this);
  const query = formData.get("title");
  const movies = searchMovie(query);
  if (movies) {
    //termina ejecución
    return render(movies);
  }
  alert("No encontramos tu película");
});

function filterByTitle(title) {
  //el filter retorna un boolean
  return movies.filter((movie) => {
    return movie.title.toLocaleLowerCase().includes(title.toLocaleLowerCase());
  });
}

function findById(id) {
  //no retorna un array solo el elemento solo
  return movies.find((movie) => {
    return movie.id === parseInt(id, 10);
  });
}

function searchMovie(query) {
  //parseInt('2', 10) => 1
  //isNaN(query)
  if (isNaN(query)) {
    return filterByTitle(query);
  }
  //el resultado al estar dentro de un array es valido para nuestro render
  return [findById(query)];
}
