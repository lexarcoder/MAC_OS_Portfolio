import React from "react";
import Window from "../../windows/Windows"
import "./Cli.scss";
import Terminal from "react-console-emulator";
import { terminalCommands, welcomeMessage } from "./TereminalData";

function Cli({ windowName, setWindowState }) {
  return (
    <>
      <Window
        title="Terminal"
        windowName={windowName}
        setWindowState={setWindowState}
      >
        <div className="cli-window">
          <Terminal
            autoFocus
            errorText="bash: [command]: command not found"
            styleEchoBack="fullInherit"
            commands={terminalCommands}
            welcomeMessage={welcomeMessage}
            promptLabel={"pandey@lexarCoder:~$"}
            promptLabelStyle={{ color: "#28c840" }}
            style={{ minHeight: "100%", height: "auto" }}
            contentStyle={{ overflowY: "auto" }}
            inputProps={{ autoComplete: "off", spellCheck: false }}
          />
        </div>
      </Window>
    </>
  );
}

export default Cli;
