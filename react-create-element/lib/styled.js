import { createElement } from "./react/index.js";
const styled = {};
const element = ["h1", "p", "div", "img", "article", "footer", "header"];

element.forEach((tag) => {
  styled[tag] = function (styles) {
    return function (props, content) {
      return createElement(
        tag,
        {
          //mandar propiedades
          ...props,
          style: styles,
        },
        content
      );
    };
  };
});

export default styled;
