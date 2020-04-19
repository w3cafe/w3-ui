import { create } from '@storybook/theming/create';

export default create({
  base: 'light',

  colorPrimary: '#3e55f9',
  colorSecondary: '#3e55f9',

  // UI
  appBg: 'white',
  appContentBg: 'white',
  appBorderColor: 'grey',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'white',
  barSelectedColor: 'white',
  barBg: '#3e55f9',

  // Form colors
  inputBg: 'white',
  inputBorder: 'white',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'w3-ui',
  brandUrl: 'https://example.com',
  brandImage: 'https://placehold.it/350x150',
});