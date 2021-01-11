import { render } from "../../react-dom.js";

function renderChildren(children, container) {
  //si es un array
  if (Array.isArray(children)) {
    return children.forEach((child) => {
      render(child, container);
    });
  }
  return render(children, container);
}

function setProperties(prop, value, element) {
  //validar para soportar children
  if (prop === "children") {
    return renderChildren(value, element);
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
  if (props) {
    Object.keys(props).forEach((prop) => {
      setProperties(prop, props[prop], element);
    });
  }
  return element;
}
