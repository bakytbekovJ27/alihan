import React from "react";
import PropTypes from "prop-types";
import telegram from "../../img/тг.jpg"; // Импорты такие же, как в ProjectList
import project from "../../img/project.png";
import portfolio from "../../img/portfolio.jpeg";

export default function HiddenModals({ visibleModal, onHideModal }) {
    const projects = [
        {
            name: "Telegram Bot",
            image: telegram, 
            ref: "./",
            description: [
                "Telegram bot for sending schedules is a convenient tool that automatically notifies users about the time of classes, meetings or other events.",
            ],
        },
        {
            name: "WebSite",
            image: project, 
            ref: "./",
            description: [
                "Creating a website for Genshin Impact fans is an ideal way to unite players, share useful information and create a community of like-minded people.",
            ],
        },
        {
            name: "Portfolio Website",
            image: portfolio, 
            ref: "./portfolio",
            description: [
                "A personal portfolio website showcasing my projects, skills, and experience.",
            ],
        },
    ];

    return (
        <div id="gallery-card">
            {projects.map((project, index) => (
                visibleModal === project.name && (
                    <div id={project.name} className="modal-card" key={index}>
                        <div className="visual">
                            <img src={project.image} alt={project.name} />
                        </div>
                        <div className="modal-info">
                            <h2>{project.name}</h2>
                            <ul>
                                {project.description.map((desc, i) => <li key={i}>{desc}</li>)}
                            </ul>
                            <div className="modal-bottom">
                                <a href={project.ref} target="_blank" rel="noopener noreferrer">
                                    <h3>View Project</h3>
                                </a>
                                <p className="close-icon" onClick={onHideModal}>
                                    &#10005;
                                </p>
                            </div>
                        </div>
                    </div>
                )
            ))}
        </div>
    );
}

HiddenModals.propTypes = {
    visibleModal: PropTypes.string,
    onHideModal: PropTypes.func.isRequired,
};
