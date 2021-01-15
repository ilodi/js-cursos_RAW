class Component {
  //1.- constructor para las propiedades
  //2.- se pone una opción predeterminada
  //3.- se usa el this para poder usar estas propiedades
  //en clase
  constructor(props = {}, state = {}) {
    this.props = props;
    this.state = state;
  }
  //se llama antes de que se renderice el componente
  componentWillMount() {

  }
  //Ya esta montado en el navegador
  componentDidMount() {

  }
  //cuando el componente se actualizo
  componentDidUpdate() {

  }

  //crear campo privado con un #
  update() {}
  #updater() {
    this.update(this.render());
    //te voy a avisar que se actualizo
    this.componentDidUpdate()
  }
  setState(newState) {
    this.state = {
      //sprite operation al actualizar el estad
      ...this.state,
      ...newState,
    };
    //método privado
    this.#updater();
  }
  //va a armar antes de montar el componente
  build(){
    this.componentWillMount()
    return this.render()
  }
}

export { Component };
