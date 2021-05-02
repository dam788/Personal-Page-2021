import React from 'react';
import { render } from 'react-dom';
import App from './App.jsx';
import { FilterProvider } from './context/filterContext';

render(
  <FilterProvider>
    <App />
  </FilterProvider>,

  document.getElementById('root')
);
