import React from 'react';
import './Home.css';
const clientId = process.env.REACT_APP_CLIENT_ID; 
const redirectUri = process.env.REACT_APP_REDIRECT_URI;
const authUri = process.env.REACT_APP_AUTH_URI;
const scope = "user-top-read";
function Home() {
  const handleClick = () => {
   
    window.location.href = `${authUri}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=token&show_dialog=true`;
  };

  return (
    <div className='container'>
        <h1>Stats.Spty</h1>
        <button className="home-button" onClick={handleClick}>Connect to Spotify</button>
    </div>
  );
}

export default Home;
