export function getValue(value, unit) {
  if (typeof value === 'string') {
    return value;
  }
  if (typeof value === 'number') {
    return value*unit + 'px';
  }
};