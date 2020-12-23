import store from "./store.js";
import { BURN } from "./actions/index.js";

store.subscribe(() => {
  window.result.textContent = `Haz quemado ${store
    .getState()
    .toFixed(2)} calorías`;
  console.log("ha cambiado algo en el store |||", store.getState());
});

const burn = () => {
  store.dispatch({
    type: BURN,
    payload: 1.42,
  });
};
window.burn.addEventListener("click", burn);
