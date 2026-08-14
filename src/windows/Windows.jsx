import React, { useState } from "react";
import { Rnd } from "react-rnd";
import "./Windows.scss";

let globalZ = 10;

function MacWindow({ title, children, windowName, setWindowState }) {
  const isMobile = window.innerWidth < 768;

  const [zIndex, setZIndex] = useState(globalZ);

  const bringToFront = () => {
    globalZ += 1;
    setZIndex(globalZ);
  };

  return (
    <Rnd
      default={{
        width: isMobile ? "45vw" : "38vw",
        height: isMobile ? "60vh" : "50vh",
        x: isMobile ? 10 : 180,
        y: isMobile ? 20 : 100,
      }}
      minWidth={320}
      minHeight={300}
      bounds="window"
      dragHandleClassName="nav"
      enableResizing={!isMobile}
      style={{ zIndex }}
      onMouseDown={bringToFront}
      enableUserSelectHack={false}
    >
      <div className="window">
        <div className="nav">
          <div className="controls">
            <span className="dot close"
            onClick={()=>setWindowState(state =>({...state, [windowName]: false}))}
             
            ></span>
            <span className="dot minimize"></span>
            <span className="dot maximize"></span>

            <div className="userTitle">
              <p>lexarCoder — zsh</p>
            </div>
          </div>

          <div className="title">
            <p>{title}</p>
          </div>
        </div>

        <div className="content">{children}</div>
      </div>
    </Rnd>
  );
}

export default MacWindow;
