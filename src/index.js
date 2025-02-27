import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { Auth0Provider } from '@auth0/auth0-react';
import { HelmetProvider } from 'react-helmet-async';
import store from './Redux/store';
import ShareButtons from './component/shareButton/ShareButtons'; // Adjust path if needed

// Create root for the main app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Hydrate the ShareButtons component if it exists (for post.php pages)
const shareButtonsElement = document.getElementById('share-buttons');
if (shareButtonsElement) {
    const url = window.location.href;
    const title = document.title;
    const image = document.querySelector('meta[property="og:image"]')?.getAttribute('content') || '';

    ReactDOM.hydrateRoot(
        shareButtonsElement,
        <HelmetProvider>
            <Auth0Provider
                domain="sharukhmirza88.us.auth0.com"
                clientId="XQF85FTYI87P9tX4z18Nlw1npy1N8Bnx"
                authorizationParams={{
                    redirect_uri: window.location.origin,
                }}
            >
                <Provider store={store}>
                    <ShareButtons url={url} title={title} image={image} />
                </Provider>
            </Auth0Provider>
        </HelmetProvider>
    );
}

// Render the full app (for non-post pages or other routes)
root.render(
    <HelmetProvider>
        <Auth0Provider
            domain="sharukhmirza88.us.auth0.com"
            clientId="XQF85FTYI87P9tX4z18Nlw1npy1N8Bnx"
            authorizationParams={{
                redirect_uri: window.location.origin,
            }}
        >
            <Provider store={store}>
                <App />
            </Provider>
        </Auth0Provider>
    </HelmetProvider>
);

// Measure performance
reportWebVitals();
