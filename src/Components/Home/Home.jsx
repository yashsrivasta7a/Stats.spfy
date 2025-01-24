import React from 'react';
import './Home.css';
const clientId = import.meta.env.VITE_CLIENT_ID;
// const redirectUri = "http://localhost:5173/callback";
 const redirectUri = "https://your-app.vercel.app/callback";
const authUri = "https://accounts.spotify.com/authorize"
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
