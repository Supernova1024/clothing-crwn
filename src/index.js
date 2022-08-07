import React from 'react';
import ReactDOM from 'react-dom/client';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';


import './index.scss';
import App from './App';
import { UserProvider } from './context/user.context';
import { CategoiresProvider } from './context/categories.context';
import { CartProvider } from './context/cart.context';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CategoiresProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </CategoiresProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
