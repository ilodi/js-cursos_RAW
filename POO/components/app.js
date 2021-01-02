import { Component } from "../lib/react.js";
import User from "./user.js";
import UserStyled from "./user-styled.js";
import Wrapper from "./wrapper.js";

class App extends Component {
  render() {
    return `
    <div class="app">
    ${new Wrapper({
      children: `
      <h1>
      React js
      </h1>
        ${new UserStyled({
          name: "Ash",
          avatar: "./images/ash.jpg",
        }).render()}
      `,
    }).render()}
    </div>
    `;
  }
}

export default App;
