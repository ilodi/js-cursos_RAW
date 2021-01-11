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

//las funciones que desencadenan eventos son callback
function setEvents(element, event, callback) {
  return element.addEventListener(event, callback);
}

function setProperties(prop, value, element) {
  //event support
  //startsWith si arranca el strings con ()
  if (prop.startsWith("on")) {
    //busca primero que quiero cambiar y segundo porque lo quiero cambiar
    const event = prop.replace("on", "").toLowerCase();
    //primer a que elemento
    //que evento se va a enviar,
    //el valor de esto
    return setEvents(element, event, value);
  }

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
