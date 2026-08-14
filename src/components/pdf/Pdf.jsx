import React from 'react'
import Window from "../../windows/Windows"
import Resume from "../../assets/pdf/Resume.pdf"
import './Pdf.scss'
function Pdf({ windowName, setWindowState }) {
  return (
    <>
      <Window
        title=".PDF"
        windowName={windowName}
        setWindowState={setWindowState}
      >
        <div className="resume-window">
          <embed src={Resume} frameorder="0"></embed>
        </div>
      </Window>
    </>
  );
}

export default Pdf
