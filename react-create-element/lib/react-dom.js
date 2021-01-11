function render(element, container) {
  //saber si el elemento es un texto o un html con instanceof Element
  if (typeof element === "string" || element instanceof Element) {
    return container.append(element);
  }
  const childElement = element.render();
  //append agrega elemento al final del elemento al cual se le acciona
  container.append(childElement);
}

export { render };
