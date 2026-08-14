import React from "react";
import Window from "../../windows/Windows";
import "./Link.scss";
import links from "./LinkData";

function Link({ windowName, setWindowState }) {
  return (
    <Window
      title="Links"
      windowName={windowName}
      setWindowState={setWindowState}
    >
      <div className="links-container">
        {links.map((item) => (
          <div
            className="link-card"
            key={item.id}
            style={{ "--accent": item.accent }}
          >
            <div className="card-header">
              <div className="dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>

              <div className="terminal-title">
                <img src={item.logo} alt="" />
                <span>{item.name}</span>
              </div>
            </div>

            {/* BODY */}
            <div className="card-body">
              {/* faint bg logo */}
              <img src={item.logo} className="bg-logo" alt="" />

              <div className="content">
                <img
                  src={item.profileImage}
                  alt={item.username}
                  className="profile-img"
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=${item.username}`;
                  }}
                />

                <h3>{item.username}</h3>

                <div className="followers">
                  <span>followers</span>
                  <strong>{item.followers}</strong>
                </div>

                <button
                  className="contact-btn"
                  onClick={() => window.open(item.url, "_blank")}
                >
                  <img src={item.logo} alt="" />
                  Contact
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Window>
  );
}

export default Link;
