class Component {
  //1.- constructor para las propiedades
  //2.- se pone una opción predeterminada
  //3.- se usa el this para poder usar estas propiedades
  //en clase
  constructor(props = {}, state = {}) {
    this.props = props;
    this.state = state;
  }
  //crear campo privado con un #
  update() {}
  #updater() {
    this.update(this.render());
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
}

export { Component };
