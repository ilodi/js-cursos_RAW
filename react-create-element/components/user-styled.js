import { createElement } from "../lib/react/index.js";
import { Component } from "../lib/react/src/react.js";
import styled from "../lib/styled.js";

const UserStyled = styled.div`
  background-image: linear-gradient(
    to bottom,
    ${(props) => props.primaryColor} 0%,
    ${(props) => props.primaryColor} 130px,
    ${(props) => props.tertiaryColor} 130px,
    ${(props) => props.tertiaryColor} 131px,
    ${(props) => props.secondaryColor} 131px,
    ${(props) => props.secondaryColor} 100%
  );
  color: ${({ fontColor }) => fontColor};
  text-align: center;
  overflow: hidden;
  padding: 20px;
  font-family: system-ui;
  border-radius: 0.3rem;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  user-select: none;
`;

const AvatarStyled = styled.img`
  max-width: 150px;
  border-radius: 50%;
  border: 5px solid white;
  box-shadow: 0 0 2px black;
`;

const theme = {
  light: {
    primaryColor: "#f9f9f9",
    secondaryColor: "white",
    tertiaryColor: "rgba(0,0,0,.15)",
    fontColor: "black",
  },
  dark: {
    primaryColor: "#212429",
    secondaryColor: "#212429",
    tertiaryColor: "white",
    fontColor: "white",
  },
};

class User extends Component {
  state = {
    mode: "light",
  };
  setMode = (event) => {
    if (event.matches) {
      return this.setState({
        mode: "dark",
      });
    }
    this.setState({
      mode: "light",
    });
  };
  componentDidMount() {
    //método para media query con js
    //con esto sabemos en que modo estas las preferencias
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    this.setMode(mediaQuery);
    mediaQuery.addEventListener("change", this.setMode);
  }
  render() {
    const { name, avatar } = this.props;
    const { mode } = this.state;
    const colors = mode === "light" ? theme.light : theme.dark;
    return UserStyled(
      {
        ...colors,
        children: [
          AvatarStyled({
            src: avatar,
          }),
          createElement("h2", null, name),
        ],
      },
      ""
    );
  }
}

export default User;
