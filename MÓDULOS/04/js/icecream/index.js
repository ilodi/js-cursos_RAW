import { makeIceCream } from "./icecream-machine.js";
//selector
//el dolar es que no son datos puros son objetos HTML
const $flavors = document.querySelectorAll(".flavor");
//  console.log($flavors)
//un NodeList tiene la función de forEach
$flavors.forEach(($el) => $el.addEventListener("click", selectFlavor));
function selectFlavor() {
  //this solo existe en functions normales
  this.classList.toggle("is-active");
}

window.btn.addEventListener("click", () => {
  const $flavors = document.querySelectorAll(".flavor.is-active");
  console.log($flavors.length);
  if ($flavors.length === 2) {
    try {
      makeIceCream($flavors[0], $flavors[1]);
    } catch (error) {
      console.log(error);
      alert("Aun no completas los sabores del helado");
    }
  } else {
    $flavors.classList.toggle("is-active");
  }
});
