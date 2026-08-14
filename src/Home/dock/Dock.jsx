import React from "react";
import "./Dock.scss";
import {
  github,
  cli,
  calender,
  link,
  pdf,
  spotify,
  mail,
  note,
} from "../../assets/Doc-Icons/exportIcons";


function Dock({ windowState, setWindowState }) {
  return (
    <footer className="Dock-buttom">
      <div
        className="icon github"
        onClick={() => {
          setWindowState((state) => ({ ...state, Github: true }));
        }}
      >
        <img src={github} alt="github" />
      </div>
      <div
        className="icon note"
        onClick={() => {
          setWindowState((state) => ({ ...state, Note: true }));
        }}
      >
        <img src={note} alt="note" />
      </div>
      <div
        className="icon pdf"
        onClick={() => {
          setWindowState((state) => ({ ...state, Pdf: true }));
        }}
      >
        <img src={pdf} alt="pdf" />
      </div>
      <div
        className="icon calender"
        onClick={() => {

          setWindowState((state) => ({ ...state, Calender: true }));

        }}
      >
        <img src={calender} alt="calender" />
      </div>
      <div
        className="icon spotify"
        onClick={() => {
          setWindowState((state) => ({ ...state, Spotify: true }));
        }}
      >
        <img src={spotify} alt="spotify" />
      </div>
      <div

        className="icon mail"
        onClick={() => {
 window.open("mialto:niteshpandey3378@gmail.com", "_blank");

        }}
      >
        <img src={mail} alt="mail" />
      </div>
      <div
        className="icon link"
        onClick={() => {
          setWindowState((state) => ({ ...state, Link: true }));
        }}
      >
        <img src={link} alt="link" />
      </div>
      <div
        className="icon cli"
        onClick={() => {
          setWindowState((state) => ({ ...state, Cli: true }));
        }}
      >
        <img src={cli} alt="cli" />
      </div>
    </footer>
  );
}

export default Dock;
