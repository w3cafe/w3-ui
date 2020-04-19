import './titleAddon';
import { addons } from '@storybook/addons';
import w3Theme from './w3.theme';
addons.setConfig({
  theme: w3Theme,
  selectedPanel: 'DocsPage'
});