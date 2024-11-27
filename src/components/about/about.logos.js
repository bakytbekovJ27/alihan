import React, {useState} from "react";

//import logo-images
import html from "../../img/html5.png";
import js from "../../img/js.jpeg";
import python from "../../img/python.png";
import react from "../../img/react.png";


export default function AboutLogos() {
    const [skils] = useState([
        {
            type: "HTML",
            animation: "wow fadeInLeft",
            logo: html   
        },
        {
            type: "JavaScript",
            animation: "wow fadeInLeft",
            logo: js   
        },
        {
            type: "Python",
            animation: "wow fadeInRight",
            logo: python 
        },
        {
            type: "React",
            animation: "wow fadeInRight",
            logo: react   
        }
    ]);

    return(
        <div className="row mt-5">
            {
            skils.map((skill, index) => {
                return (
                    <div className={"col-6 col-sm-6 col-md-3 " + skill.animation} key={index}>
                        <img src={skill.logo} alt="" height={80} width={80}/>
                        <h4>{skill.type}</h4>
                    </div>
                );
            })
            }
        </div>
    );
}