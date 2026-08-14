import React from "react";
import "./Nav.scss";
import DateTime from "../DateTime/DateTime";
import appleLogo from "../../../assets/nav-Icons/apple.svg" 
import wifiLogo from "../../../assets/nav-Icons/wifi.svg" 

function Nav() {
  return (
    <>
      <nav>
        <div className="left">
          <div className="apple-icon">
            <img src={appleLogo} alt="" />
          </div>

          <div className="nav-item">
            <p>Nitesh Pandey</p>
          </div>
          <div className="nav-item">
            <p>File</p>
          </div>
          <div className="nav-item">
            <p>Window</p>
          </div>
          <div className="nav-item">
            <p>Terminal</p>
          </div>
        </div>

        <div className="right">
          <div className="wifi-icon">
            <img src={wifiLogo} alt="" />
          </div>
          <div className="nav-item">
            <DateTime />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
