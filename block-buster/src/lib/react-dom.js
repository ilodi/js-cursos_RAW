function render(element, container) {
  //saber si el elemento es un texto o un html con instanceof Element
  if (typeof element === "string" || element instanceof Element) {
    return container.append(element);
  }
  //
  function reRender(newChild) {
    container.replaceChild(newChild, childElement);
    childElement = newChild;
  }

  element.update = reRender;

  let childElement = element.build();
  //append agrega elemento al final del elemento al cual se le acciona
  container.append(childElement);
  //aquí comienza el ciclo de vida
  element.componentDidMount()
}

export { render };
