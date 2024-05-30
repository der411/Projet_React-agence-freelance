import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import Home from './pages/Home/';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);
