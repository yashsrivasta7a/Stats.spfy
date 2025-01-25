import React, { useEffect, useState } from 'react';
import Home from './Components/Home/Home';
import Landing from './Components/Landing/Landing';

function App() {
  const [token, setToken] = useState('');

  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      const token = new URLSearchParams(hash.substring(1)).get('access_token');
      if (token) {
        setToken(token);
        localStorage.setItem('access_token', token); // Store the token securely
        window.history.replaceState(null, null, window.location.pathname); // Remove the token from the URL
      }
    } else {
      const savedToken = localStorage.getItem('access_token'); // Corrected line
      if (savedToken) {
        setToken(savedToken);
      }
    }
  }, []);

  return (
    <div>
      {token ? (
        <Landing token={token} setToken={setToken} />
      ) : (
        <Home />
      )}
    </div>
  );
}

export default App;
