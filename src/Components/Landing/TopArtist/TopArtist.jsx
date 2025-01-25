import React, { useEffect, useState } from 'react';
import '../Landing.css';

function TopArtist({ token }) {
  const [topArtists, setTopArtists] = useState([]);

  useEffect(() => {
    if (token) {
      fetch("https://api.spotify.com/v1/me/top/artists?time_range=medium_term&limit=15", {
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
        .then((data) => setTopArtists(data.items))
        .catch((error) => {
          console.error('Error fetching artists:', error.message);
        });
    }
  }, [token]);

  return (
    <div className="Tracks">
      <h2>Top Artists</h2>
      {topArtists.length === 0 ? (
        <p>No top artists found</p>
      ) : (
        <ul>
          {topArtists.map((artist, index) => (
            <li key={index}>
              <img src={artist.images[0]?.url} alt={artist.name} width={50} />
              <div className="name-container">
                <h3>{artist.name}</h3>
                <p>Genres: {artist.genres[0]}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TopArtist;
