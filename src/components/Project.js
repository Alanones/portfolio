import React from "react";
import { FaGithubSquare, FaLinkedinIn } from "react-icons/fa";
import { Link } from "gatsby";

const Project = ({ description, url, linkedin, github, title, stack, slug, index, image }) => {
  return (
    <article className="project">
      <img src={image} alt={title} className="project-img" />
      <div className="project-info">
        <span className="project-number">0{index + 1}.</span>
        {/* <Link to={`/projects/${slug}`} classNme="projaect-slug">
          <h3>{title}</h3>
        </Link> */}
        <a href={url} className="projaect-slug">
          <h3>{title}</h3>
        </a>
        <p className="project-desc">{description}</p>
        <div className="project-stack">
          {stack.map((item) => {
            return <span key={item.id}>{item.title}</span>;
          })}
        </div>
        <div className="project-links">
          <a href={github}>
            <FaGithubSquare className="project-icon" />
          </a>
          <a href={linkedin}>
            <FaLinkedinIn className="project-icon" />
          </a>
        </div>
      </div>
    </article>
  );
};

export default Project;
