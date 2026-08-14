import React from "react";
import Window from "../../windows/Windows";
import githubData from "../../data/Github.json";
import GithubCard from "./GithubCard";
import "./GithubCard.scss";

function Github({ windowName, setWindowState }) {
  return (
    <>
      <Window
        title="GitHub"
        windowName={windowName}
        setWindowState={setWindowState}
      >
        <div className="cards">
          {githubData.map((project) => (
            <GithubCard key={project.id} data={project} />
          ))}
        </div>
      </Window>
    </>
  );
}

export default Github;
