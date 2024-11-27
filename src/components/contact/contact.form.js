import React from "react";
import inst from "../../img/inst.jpeg";
import what from "../../img/whatapp.jpeg";
import tg from "../../img/telegram.png";

export default function ContactForm() {
    return (
        <div className="contact-container">
            <h2>Contact Us</h2>
            <div className="contact-icons">
                <a href="https://www.instagram.com/Alioohan" target="_blank" rel="noopener noreferrer">
                    <img src={inst} alt="Instagram" className="contact-icon" height={50} width={50}/>
                </a>
                <a href="https://wa.me/996508245555" target="_blank" rel="noopener noreferrer">
                    <img src={what} alt="WhatsApp" className="contact-icon" height={50} width={50}/>
                </a>
                <a href="https://t.me/Alioohan" target="_blank" rel="noopener noreferrer">
                    <img src={tg} alt="Telegram" className="contact-icon" height={50} width={50}/>
                </a>
            </div>
        </div>
    );
}
