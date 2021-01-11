import { Component, createElement } from "../lib/react/index.js";

import Wrapper from "./wrapper.js";
import User from "./user.js";
class App extends Component {
  render() {
    return createElement(
      "div",
      {
        class: "app",
        children: new Wrapper({
          children: [
            new User({
              name: "ash",
              avatar: "./images/ash.jpg",
            }),
          ],
        }),
      },
      "Esta es la app!"
    );
  }
}

export default App;
