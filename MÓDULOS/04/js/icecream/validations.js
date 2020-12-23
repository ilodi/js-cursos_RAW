function isRequired(param) {
  throw new Error(`${param} el parámetro es requerido`);
}

export { isRequired };
