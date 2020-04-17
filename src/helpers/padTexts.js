export const padTexts = (name, value, symbol, length) => {
  value = value || 'xx';
  const output = `
      ${name.toString()}${symbol.repeat(
    length - (value.toString().length + name.toString().length)
  )}${value.toString()}`;
  return output;
};
