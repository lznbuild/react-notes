import React from 'react';

const ThemeContext = React.createContext('light');

const { Provider, Consumer } = ThemeContext;

export { Provider, Consumer };
