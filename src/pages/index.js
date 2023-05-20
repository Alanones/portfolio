import React from "react";
import { graphql } from "gatsby";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Jobs from "../components/Jobs";
import Projects from "../components/Projects";
import Seo from "../components/Seo";
import { projects } from "../constants/projects";
const IndexPage = () => {
  return (
    <>
      <main>
        <Hero />
        <Services />
        <Jobs />
        <Projects showLink projects={projects} title="featured projects" />
      </main>
    </>
  );
};

export default IndexPage;
