import React from 'react';
import './ReactProjectsHeading.css';

const ReactProjectsHeading = () => {
  return (
    <div className="projects-header">
      <h1 className="projects-title">
        <span className="react-word">React</span>
        <span className="projects-word">Projects</span>
      </h1>
      <div className="header-decoration">
        <div className="decoration-line"></div>
        <div className="decoration-dot"></div>
        <div className="decoration-line"></div>
      </div>
    </div>
  );
};

export default ReactProjectsHeading;