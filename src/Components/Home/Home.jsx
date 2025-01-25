import React from 'react';
import './Home.css';
const clientId = "e2daf0389bed41ad9f0c57e6ae9cddc1";
const redirectUri =  "https://statsspotify.vercel.app/" 
const authUri = "https://accounts.spotify.com/authorize"
function Home() {
  const handleClick = () => {
    
    window.location.href = `${authUri}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=user-top-read&response_type=token&show_dialog=true`;
  };

  return (
    <div className='container'>
        <h1>Stats.Spty</h1>
        <button className="home-button" onClick={handleClick}>Connect to Spotify</button>
    </div>
  );
}

export default Home;
