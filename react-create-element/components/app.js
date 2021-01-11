import { Component, createElement } from "../lib/react/index.js";

import Wrapper from "./wrapper.js";
import User from "./user.js";
class App extends Component {
  render() {
    return createElement("div", {
      onClick: function () {
        console.log("hola mundo");
      },
      class: "app",
      children: new Wrapper({
        children: [
          new User({
            name: "ash",
            avatar: "./images/ash.jpg",
          }),
        ],
      }),
    });
  }
}

export default App;
