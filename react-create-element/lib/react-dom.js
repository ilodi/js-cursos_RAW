function render(element, container) {
  const childElement = element.render();
  //append agrega elemento al final del elemnto al cual se le acciona
  container.append(childElement);
}

export { render };
