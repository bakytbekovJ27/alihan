import React from "react";

import myImage from "../../img/me.jpg";


import SkillBars from "./about.description.skillBars";

export default function AboutDescription(props) {
    return (
        <div className="row wow fadeIn" style={{ marginTop: 7 + "rem" }}>
            <div className="col-12 col-lg-6 hidden">
                <img
                    className={"img-fluid"}
                    src={myImage}
                    alt="Portfolio Image"
                    style={{
                        borderRadius: 50 + "%",
                        height: 350 + "px",
                        width: 350 + "px"
                    }}
                />
                <p className="mytext pt-3">
                my name is Alikhan I am 17 years old I study at Salymbekov IT and Business College
                </p>
            </div>

            <SkillBars />

        </div>
    );
}