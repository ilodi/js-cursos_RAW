import { createElement } from "./react/index.js";
const styled = {};
const element = ["h1", "p", "div", "img", "article", "footer", "header"];

function buildStyles(strings, dynamicValues, props) {
  //copiar el array siempre que sea una dimension
  let style = strings.slice();

  dynamicValues.forEach((value, index) => {
    //multarlo y sumar el valor dinámico
    style[index] += value(props);
  });
  //join para unir
  return style.join("");
}

element.forEach((tag) => {
  styled[tag] = function (strings, ...dynamicValues) {
    return function (props, content) {
      const style = buildStyles(strings, dynamicValues, props);
      return createElement(
        tag,
        {
          //mandar propiedades
          ...props,
          style: style,
        },
        content
      );
    };
  };
});

export default styled;
