import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root')); // react creates its own virtual dom
root.render(
  <React.StrictMode> {/*//used for no nonsense development prevents anonmilies*/}
     <App /> {/*renders app.js which is indeed a function */}
  </React.StrictMode>
);

