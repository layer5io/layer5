import React from "react";

import ContactSection from "../../sections/Contact/contact-content.style";

const ContactCard = (props) =>{
    return(
        <ContactSection>
            <div className="card">
                <div className="cardsContainer">
                    <a href={ props.link } className="image-container">
                        <div className="text-and-button">
                            <div className="contact-image">
                                <img src={ props.Imgsrc } alt={ props.alt } className="image" />
                            </div>
                            <h3 className="title">{ props.title }</h3>
                            <p className="para">{ props.content }</p>
                        </div>
                    </a>
                </div>
            </div>
        </ContactSection>
    );
};

export default ContactCard;