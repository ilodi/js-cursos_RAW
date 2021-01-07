import { Component, createElement } from "../lib/react/index.js";

const element = createElement(
  "h1",
  {
    class: "title",
  },
  "Hola mundo desde create element!"
);
console.log(element);
class App extends Component {
  render() {
    return createElement(
      "div",
      {
        class: "app",
      },
      "Esta es la app!"
    );
  }
}

export default App;
