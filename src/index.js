import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { Auth0Provider } from '@auth0/auth0-react';
import store from './Redux/store';
import AuthWrapper from './component/signupAndLogin/AuthWrapper';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider
    domain="sharukhmirza88.us.auth0.com"
    clientId="XQF85FTYI87P9tX4z18Nlw1npy1N8Bnx"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <Provider store={store}>
      <React.StrictMode>
        <AuthWrapper>
        <App />
        </AuthWrapper>
      </React.StrictMode>
    </Provider>
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
