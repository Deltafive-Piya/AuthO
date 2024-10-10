import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
  domain='dev-m26nhparnwirc7a0.us.auth0.com' /*! fill in from Autho0 */
  clientId='CCizEngt41TvDA0mhX90JgBDHWzZQkzg' /*! fill in from Autho0 */
  authorizationParams={{ redirect_uri: window.location.origin }}>
  <App />
</Auth0Provider>
);