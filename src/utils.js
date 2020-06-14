import DefaultThemeProps from "./Theme/DefaultThemeProps";
export function getValue(value, unit = 1) {
  if (typeof value === 'string') {
    return value;
  }
  if (typeof value === 'number') {
    return value*unit + 'px';
  }
};




export function getColor({themeColors = DefaultThemeProps.colors, color = 'primary', index = 0}) {
  console.log('themeColors', themeColors);
  console.log('color', color);
  if (themeColors[color]) {
    return themeColors[color][index];
  } else {
    return color;
  }
}