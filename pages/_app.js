import '../styles/globals.css'
import React from 'react';

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/serviceWorker.js')
          .then((registration) => {
            console.log('Service Worker registered with scope:', registration.scope);
          })
          .catch((error) => {
            console.log('Service Worker registration failed:', error);
          });
      });
    }
  }, []);

  return <Component {...pageProps} />
}

export default MyApp