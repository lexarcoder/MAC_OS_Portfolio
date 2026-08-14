import React from "react";
import Window from "../../windows/Windows";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import noteText from "../../assets/Note/Note.ts?raw";
import "./Note.scss";

function Notes({ windowName, setWindowState }) {
  return (
    <>
      <Window
        title="profile.config.ts"
        windowName={windowName}
        setWindowState={setWindowState}
      >
        <div className="note-window">
          <div className="glitch-overlay"></div>
          <SyntaxHighlighter
            language="typescript"
            style={atomOneDark}
            showLineNumbers={true}
            wrapLongLines={true}
          >
            {noteText}
          </SyntaxHighlighter>
        </div>
      </Window>
    </>
  );
}

export default Notes;
