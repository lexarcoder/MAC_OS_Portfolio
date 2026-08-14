import React from "react";
import "./App.scss";
import {Dock, Nav, Github, Link, Mail, Pdf, Cli, Calender, Note, Spotify} from "./components/exportComponent"

import { useState } from "react";

function App() {
  const [windowState, setWindowState] = useState({
    Github: false,
    Note: false,
    Pdf: false,
    Calender: false,
    Spotify: false,
    Mail: false,
    Link: false,
    Cli: false,
  });

  return (
    <>
      <main>
        <Nav />
        {windowState.Github && (
          <Github windowName="Github" setWindowState={setWindowState} />
        )}
        {windowState.Note && (
          <Note windowName="Note" setWindowState={setWindowState} />
        )}
        {windowState.Pdf && (
          <Pdf windowName="Pdf" setWindowState={setWindowState} />
        )}
        {windowState.Calender && (
          <Calender windowName="Calender" setWindowState={setWindowState} />
        )}
        {windowState.Spotify && (
          <Spotify windowName="Spotify" setWindowState={setWindowState} />
        )}
        {windowState.Mail && (
          <Mail
          
          windowName="Mail" setWindowState={setWindowState} />
        )}
        {windowState.Link && (
          <Link windowName="Link" setWindowState={setWindowState} />
        )}
        {windowState.Cli && (
          <Cli windowName="Cli" setWindowState={setWindowState} />
        )}
        <Dock windowState={windowState} setWindowState={setWindowState} />
      </main>
    </>
  );
}

export default App;
