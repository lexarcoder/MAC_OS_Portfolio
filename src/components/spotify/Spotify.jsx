import React from 'react'
import Window from "../../windows/Windows"
import './Spotify.scss'
function Spotify({ windowName, setWindowState }) {
  return (
    <>
      <Window
        title="Spotify"
        windowName={windowName}
        setWindowState={setWindowState}
      >
        <div className="music-player">
          <iframe
            data-testid="embed-iframe"
            style={{ borderRadius: "12px", display: "block" }}
            src="https://open.spotify.com/embed/album/4TJCkEg2d87LQ6CLjbmXee?utm_source=generator&theme=0"
            width="100%"
            height="100%"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </Window>
    </>
  );
}

export default Spotify
