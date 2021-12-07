import React from 'react';
import ReactDOM from 'react-dom';
import { reportWebVitals } from './features';
import './index.css';
import { Dashboard } from './screens';

ReactDOM.render(
  <React.StrictMode>
    <Dashboard />
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
