import React, { useEffect, useState } from 'react';
import Home from './Components/Home/Home';
import Landing from './Components/Landing/Landing';

function App() {
  const [token, setToken] = useState(localStorage.getItem('access_token') || '');

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const params = new URLSearchParams(hash.substring(1));
      const accessToken = params.get('access_token');
      const expiresIn = params.get('expires_in');

      if (accessToken) {
        setToken(accessToken);
        localStorage.setItem('access_token', accessToken);
        if (expiresIn) {
          const expirationTime = new Date().getTime() + parseInt(expiresIn, 10) * 1000;
          localStorage.setItem('token_expiration', expirationTime);
        }
        window.location.hash = ''; // Clear the URL
      }
    }
  }, []);

  // Check token expiration
  useEffect(() => {
    const expirationTime = localStorage.getItem('token_expiration');
    if (expirationTime && new Date().getTime() > expirationTime) {
      localStorage.removeItem('access_token');
      localStorage.removeItem('token_expiration');
      setToken('');
    }
  }, []);

  return (
    <div>
      {token ? <Landing token={token} setToken={setToken} /> : <Home />}
    </div>
  );
}

export default App;
