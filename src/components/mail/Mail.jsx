import React from 'react'
import Window from "../../windows/Windows"
function Mail({ windowName, setWindowState }) {
  return (
    <>
      <Window
      title = "Mail"
      windowName={windowName} setWindowState={setWindowState}>

      </Window>
    </>
  );
}

export default Mail
