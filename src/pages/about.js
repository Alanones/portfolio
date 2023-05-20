import React from "react";
import Title from "../components/Title";
import StaticImage from "gatsby";
import hero from "../assets/images/hero.svg";
const About = () => {
  const { title, info, stack } = data;
  return (
    <>
      <section className="about-page">
        <div className="section-center about-center">
          <img src={hero} alt={title} className="about-img-svg" />
          <article className="about-text">
            <Title title={title} />
            <p>{info}</p>
            <div className="about-stack">
              {stack.map((item) => {
                return <span key={item.id}>{item.title}</span>;
              })}
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default About;

const data = {
  title: "about me",
  info: "I am a seasoned and professional web developer with over five years of experience in website development technologies, primarily ReactJs, NodeJs, Flask(Python), REST APIs, ORMs/ODMs, CSS, Bootstrap, JEST among others.. Strong creative and analytical skills. Team player with an eye for detail",
  stack: [
    {
      id: 1,
      title: "Nodejs",
    },
    {
      id: 2,
      title: "Javascript",
    },
    {
      id: 3,
      title: "React",
    },
    {
      id: 4,
      title: "Python",
    },
    {
      id: 5,
      title: "Typescript",
    },
  ],
};
