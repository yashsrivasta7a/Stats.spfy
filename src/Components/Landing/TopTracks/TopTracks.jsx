import React, { useEffect, useState } from 'react';
import '../Landing.css';

function TopTracks({ token }) {
  const [topTracks, setTopTracks] = useState([]);

  useEffect(() => {
    if (token) {
      fetch("https://api.spotify.com/v1/me/top/tracks?time_range=medium_term&limit=15", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          if (!response.ok) {
            if (response.status === 403) {
              throw new Error('Access denied. Please check your permissions.');
            }
            throw new Error(`Error: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => setTopTracks(data.items))
        .catch((error) => {
          console.error('Error fetching tracks:', error.message);
        });
    }
  }, [token]);

  return (
    <div>
      <h2>Top Tracks</h2>
      {topTracks.length === 0 ? (
        <p>No top tracks found</p>
      ) : (
        <ul>
          {topTracks.map((track, index) => (
            <li key={index}>
              <img src={track.album.images[0]?.url} alt={track.name} width={50} />
              <div className="name-container">
                <h3>{track.name}</h3>
                <p>Artist: {track.artists[0]?.name}</p>
                <p>Album: {track.album.name}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TopTracks;
