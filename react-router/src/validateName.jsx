const validNames = ["popeye", "spinach", "default"];

export const isValidName = (name) => {
  return validNames.includes(name);
};