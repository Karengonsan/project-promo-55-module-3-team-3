import "react";
import Avatar from "../images/avatar.webp";
import GitHubIcon from "../images/github.svg";
import DemoIcon from "../images/globe-solid.svg";
import PropTypes from "prop-types";
import "../styles/preview-card.css";

const PreviewCard = ({ formData, authorImage }) => {
  const { name, slogan, technologies, repo, demo, desc, autor, job } =
    formData || {};

  return (
    <>
      <div className="preview-container">
        <div className="preview-img">
          <div className="image">
            <img
              src={authorImage ? authorImage : Avatar}
              alt={autor || "Nombre del autora"}
              className="autor-image"
            />
          </div>
          <div className="autor-contact">
            <p>{job || "Developer"}</p>
            <h4>{autor || "Cármen Sánchez"}</h4>
            <div className="contact">
              <p>{technologies || "HTML |CSS| REACT"}</p>

              <div className="contact-item">
                {repo ? (
                <a
                  href={repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ver repositorio en GitHub"
                >
                  <img src={GitHubIcon} alt="GitHub" className="icon" />
                  <span className="placeholder">GitHub</span>
                </a>
              ) : (
                <div className="disabled-link">
                  <img src={GitHubIcon} alt="GitHub" className="icon" />
                  <span className="placeholder">github.com/ejemplo</span>
                </div>
              )}
              </div>
              <div className="contact-item">
                {demo ? (
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ver demo del proyecto"
                >
                  <img src={DemoIcon} alt="Demo" className="icon" />
                  <span className="placeholder">Website</span>
                </a>
              ) : (
                <div className="disabled-link">
                  <img src={DemoIcon} alt="Demo" className="icon" />
                  <span className="placeholder">miweb.com/ejemplo</span>
                </div>
              )}
              </div>
            </div>
          </div>
        </div>
        <div className="preview-data">
          <h2>{name || "Proyecto Hadas"}</h2>
          <p>{slogan || "ProjectHadas"}</p>
          <p className="desc">
            {desc || "Aquí puedes decribir brevemente tu proyecto."}
          </p>
        </div>
      </div>
    </>
  );
};

PreviewCard.propTypes = {
  name: PropTypes.string,
  slogan: PropTypes.string,
  technologies: PropTypes.string,
  repo: PropTypes.string,
  demo: PropTypes.string,
  desc: PropTypes.string,
  image: PropTypes.string,
  autor: PropTypes.string,
  job: PropTypes.string,
};

export default PreviewCard;
