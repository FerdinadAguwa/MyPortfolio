import React, { useState } from "react";
import people from "./data/ProjectData";
import "./ProjectCard.css"

export const ProjectCard = () => {
    const [index, setIndex] = useState(0);
    const { name, job, image, text, GitLink, ProjectLink,deployProject,gitProject } = people[index];

    const checkNumber = (number) => {
        if (number > people.length - 1) {
            return 0;
        }
        if (number < 0) {
            return people.length - 1;
        }
        return number;
    };
    const prevPerson = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            return checkNumber(newIndex);
        });
    };
    const nextPerson = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            return checkNumber(newIndex);
        });
    };
    const randomPerson = () => {
        let rng = Math.floor(Math.random() * people.length);
        if (rng === index) {
            rng = index + 1;
        }
        setIndex(checkNumber(rng));
    };
    return (
        <section className="Card">
            <div className="img-container">
                <img src={image} alt="" />
                {/* <div className="quote">
                <i className="fas fa-award award"></i>
                </div> */}
                <div class="circle"></div>
            </div>
            <p className="ProjectName">{name}</p>
            <p className="ProjectPosition">{job}</p>
            <p className="ProjectText">{text}</p>

            <div className="LinkDiv">
                <a href={gitProject} target="_blank" rel="noopener noreferrer" className="LinkDecor">
                    <div className="ProjectLinkDiv"><i class={GitLink}></i>
                        <h4>Github</h4>
                    </div>
                </a>

                <a href={deployProject} target="_blank" rel="noopener noreferrer" className="LinkDecor">

                    <div className="ProjectLinkDiv">
                        <i class={ProjectLink}></i>
                        <h4>Preview</h4>
                    </div>
                </a>

            </div>
            <div className="button-container">
                <div>
                    <i onClick={prevPerson} className="leftRight fas fa-chevron-left"></i>

                    <i onClick={nextPerson} className="leftRight fas fa-chevron-right"></i>
                </div>
                <button onClick={randomPerson}>Random Project</button>
            </div>
        </section>
    );
};

