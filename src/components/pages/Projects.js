import React from "react";
import { ProjectCard } from "../ProjectCards";
// import "./styles.css";
import Footer from "../Footer"

export default function Projects() {
  return (
      <>
    <main className="ProjectMain">
      <section className="ProjectContainer ProjectSection">
        <div className="ProjTitle">
          <h1 className="projectH1">Project Page</h1>
          <div className="underline"></div>
        </div>
        <ProjectCard />
      </section>
    </main>
    <Footer/>
    </>
  );
}

