import React from "react";
import { BsThreeDots } from "react-icons/bs";

import ContactSection from "../../sections/Contact/contact-content.style";

const ContactCard = (props) =>{
    return(
        <ContactSection>
            <div className="card">
                <div className="cardsContainer">
                    <a href={ props.link } className="image-container">
                        <img src={ props.Imgsrc } alt={ props.alt } className="image" />
                    </a>
                    <div className="text-and-button">
                        <h3 className="title">{ props.title }</h3>
                        <a href={ props.link }>
                            <BsThreeDots className="three-dots" />
                        </a>
                    </div>
                    <p className="para">{ props.content }</p>
                </div>
            </div>
        </ContactSection>
    );
};

export default ContactCard;