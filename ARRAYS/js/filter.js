import { renderMovieListFromMap } from "./render.js";

import {
  movieList,
  all,
  popular as mostValued,
  notPopular as lestValued,
} from "./normalize.js";

window.filter.addEventListener("change", function () {
  switch (this.value) {
    case "most-valued":
      return renderMovieListFromMap(mostValued, movieList);
    case "lest-value":
      return renderMovieListFromMap(lestValued, movieList);
    default:
      return renderMovieListFromMap(all, movieList);
  }
});
