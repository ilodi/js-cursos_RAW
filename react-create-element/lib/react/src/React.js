class Component {
  //1.- constructor para las propiedades
  //2.- se pone una opción predeterminada
  //3.- se usa el this para poder usar estas propiedades
  //en clase
  constructor(props = {}) {
    this.props = props;
  }
}

export { Component };
