import { render } from "../../react-dom";

function setProperties(prop, value, element) {
  //validar para soportar children
  if (prop === "children") {
    renderChildren();
  }

  //Support for attributes
  const attribute = value;
  //asignar al elemento
  //a que atributo y que va a tener ese atributo
  return element.setAttribute(prop, attribute);
}

export function createElement(type, props, content) {
  // Creando tipo de elemento
  const element = document.createElement(type);
  // Tenemos contenido
  if (content) {
    // Si hay contenido se agrega al elemento creado
    element.textContent = content;
  }
  //Soporte de propiedades
  //las propiedades son un objeto
  //console.log(props);/---/Un objeto noes iterable
  //Creas un array con las keys del objeto para ser iterable
  // console.log(Object.keys(props));
  //las propiedades
  Object.keys(props).forEach((prop) => {
    setProperties(prop, props[prop], element);
  });

  return element;
}
