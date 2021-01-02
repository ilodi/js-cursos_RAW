import { render } from "./lib/react-dom.js";
import App from "./components/app.js";

const container = document.querySelector("#root");

//instancias la clase
//objeto de configuración para el constructor
render(new App(), container);
