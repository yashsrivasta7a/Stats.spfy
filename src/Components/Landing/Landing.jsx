import React, { useState } from "react";
import "./Landing.css";
import Home from "../Home/Home";
import TopArtist from "./TopArtist/TopArtist";
import TopTracks from "./TopTracks/TopTracks";

function Landing({ token, setToken }) {
  const [view, setView] = useState(null);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken("");
    setView(null);
  };

  return (
    <div>
      <h1>STATS.SPTY</h1>
      {!token ? (
        <Home />
      ) : (
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      )}

      {
      view ? (
        <div className="top-container">
          <button onClick={() => setView("artist")}>TOP ARTIST</button>
          <button onClick={() => setView("track")}>TOP TRACKS</button>
        </div>
      ) : (
        <div className="middle">
  <button onClick={() => setView('artist')}>TOP ARTIST</button>
  <button onClick={() => setView('track')}>TOP TRACKS</button>
</div>

      )}

      {view === "artist" && <TopArtist token={token} setToken={setToken} />}
      {view === "track" && <TopTracks token={token} setToken={setToken} />}
    </div>
  );
}

export default Landing;
