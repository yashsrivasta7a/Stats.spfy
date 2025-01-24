import React, { useEffect, useState } from 'react';
import Home from './Components/Home/Home';
import Landing from './Components/Landing/Landing';

function App() {
  const [token, setToken] = useState('');

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const token = hash.substring(1).split("&")[0].split("=")[1];
      setToken(token);
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
