const styled = {
  h1: function (styles) {
    return function (content) {
      return `
          <h1 style="${styles}">
            ${content}
          </h1>
        `;
    };
  },
  h2: "",
  div: function (styles) {
    return function (content) {
      return `
          <div style="${styles}">
            ${content}
          </div>
        `;
    };
  },
  img: function (styles) {
    return function (content) {
      return `
          <img ${content} style="${styles}" />

        `;
    };
  },
};

export default styled;
