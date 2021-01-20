import { Component } from "../lib/react/index.js";
import styled from "../lib/styled.js";
import Header from "./header.js";
import Actions from "./actions.js";

const AppStyled = styled.div``;

class App extends Component {
  render() {
    return AppStyled({
      children: [new Header(),new Actions({
        children:[]
      })],
    });
  }
}

export default App;
