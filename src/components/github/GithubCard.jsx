import React from "react";
import "./GithubCard.scss";

function GithubCard({ data }) {
  return (
    <div className="card">
      <div className="img-wrap">
        <img src={data.image} alt={data.title} />
      </div>

      <div className="card-body">
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        <div className="divider"></div>

        <div className="tags">
          {data.tags?.map((tag, i) => (
            <span key={i}>{tag}</span>
          ))}
        </div>
      </div>

      <div className="detabtn">
        {data.repoLink && (
          <a href={data.repoLink} target="_blank" rel="noreferrer">
            <button>Repo</button>
          </a>
        )}
        {data.demoLink && (
          <a href={data.demoLink} target="_blank" rel="noreferrer">
            <button>Live</button>
          </a>
        )}
      </div>
    </div>
  );
}

export default GithubCard;
