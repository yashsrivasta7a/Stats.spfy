import React, { useState } from "react";
import "./Landing.css";
import Home from "../Home/Home";
import TopArtist from "./TopArtist/TopArtist";
import TopTracks from "./TopTracks/TopTracks";

function Landing({ token, setToken }) {
  const [view, setView] = useState(null);

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('token_expiration');
    setToken('');
    setView(null);
  };

  return (
    <div>
      <h1>STATS.SPTY</h1>
      <button className="logout-button" onClick={handleLogout}>Logout</button>

      <div className="middle">
        <button onClick={() => setView('artist')}>Top Artists</button>
        <button onClick={() => setView('track')}>Top Tracks</button>
      </div>

      {view === "artist" && <TopArtist token={token} />}
      {view === "track" && <TopTracks token={token} />}
    </div>
  );
}

export default Landing;
