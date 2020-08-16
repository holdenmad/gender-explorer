import React from 'react';
import ReactDOM from 'react-dom';
// import {BrowserRouter} from 'react-router-dom'
import './index.css';
import App from './App';
import {Grommet} from 'grommet'

const theme = {
  global: {
    font: {
      family: 'Roboto',
    },
    
  },
  anchor: {

  },
};

ReactDOM.render(
  <React.StrictMode>
  
    <Grommet full theme={theme}>
      <App />
    </Grommet>
  
  </React.StrictMode>,
  document.getElementById('root')
);