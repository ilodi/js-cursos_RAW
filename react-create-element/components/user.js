import { Component, createElement } from "../lib/react/index.js";

class User extends Component {
  ///////// Por metodo
  //1.- metodo constructor
  //primero obtiene las propiedades cuando
  //se construye la instancia de la clase
  //   constructor(props) {
  //     // _todo this esta disponible en todo el component
  //     super(props);
  //     //metodo bind
  //     this.handleClick = this.handleClick.bind(this);
  //   }
  //   //las funciones normales tiene 3 metodos para cambiar su this
  // // esto es un metodo
  //   handleClick(event) {
  //     console.log(this.props.name, event);
  //   }
  ////////////////
  /////Por arrow
  state = {
    age: this.props.age,
  };
  handleClick = (event) => {
    console.log(this.state.age);
    //mandar las cosas que quieres remplazar del objeto
    this.setState({
      age: this.state.age + 1,
    });
  };
  render() {
    const { avatar, name } = this.props;
    const { age } = this.state;
    return createElement("div", {
      class: "user",
      onClick: this.handleClick,
      children: [
        createElement("div", {
          class: "avatar",
          children: createElement("img", { src: avatar }),
        }),
        createElement("h2", null, `Hola soy ${name} y tengo ${age}`),
      ],
    });
  }
}

export default User;
