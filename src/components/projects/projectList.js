import React from "react";
import PropTypes from "prop-types";
import telegram from "../../img/тг.jpg";
import project from "../../img/project.png";
import portfolio from "../../img/portfolio.jpeg";

export default function ProjectList({ onShowModal }) {
    const projects = [
        {
            name: "Telegram Bot",
            image: telegram,
            button: "Telegram",
        },
        {
            name: "WebSite",
            image: project,
            button: "Web",
        },
        {
            name: "Portfolio Website",
            image: portfolio,
            button: "Portfolio",
        },
    ];

    return (
        <div className="row my-5">
            {projects.map((project, index) => (
                <div className="testbg col-12 col-sm-12 col-md-4" key={index} style={{ backgroundImage: `url(${project.image})` }}>
                    <div className="overlay">
                        <div className="text">
                            <h2>{project.name}</h2>
                        </div>
                        <div>
                            <button className="project-button" onClick={() => onShowModal(project.name)}>
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

ProjectList.propTypes = {
    onShowModal: PropTypes.func.isRequired,
};
