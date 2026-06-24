export const isNonEmptyString = (value) => {
  return typeof value === 'string' && value.length > 0;
};
