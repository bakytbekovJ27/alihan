import React, { useState } from "react";
import HiddenModals from "../components/projects/hiddenModals";
import ProjectList from "../components/projects/projectList";

export default function Projects() {

    const [visibleModal, setVisibleModal] = useState(null);
    const showModal = (name) => setVisibleModal(name);
    const hideModal = () => setVisibleModal(null);

    return (
        <React.Fragment>
            <div id="my-projects" className="container-fluid bg-light mt-5">
                <div className="project-container container bg-light pb-5">
                    <h1 id="projects" className={"text-center wow fadeInRight"}>
                        Projects
                    </h1>

                    <ProjectList onShowModal={showModal} />
                </div>
            </div>

            <HiddenModals visibleModal={visibleModal} onHideModal={hideModal}/>
        </React.Fragment>
    );
}
