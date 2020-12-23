function component(strings, ...dynamicValues) {
  return function (props) {
    //slice genera una copia en memoria para mutarlo
    let newContent = strings.slice();
    dynamicValues.forEach((value, index) => {
      newContent[index] += props[value];
    });
    //join función para mezclar arrays ayuda a de array a string
    return newContent.join("");
  };
}

export { component };
