import React, { useState } from "react";
import Modal from "react-modal";
import Button from "../../reusecore/Button";
import { GrFormClose } from "@react-icons/all-files/gr/GrFormClose";
import styled from "styled-components";

const ContactFormModalWrapper = styled.div`
	.open-modal-btn {
		display: flex;
    margin: auto;
	}
`;

const ContactFormModal = (props) => {

  const [modalIsOpen,setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);

  const closeModal = () => setIsOpen(false);

  return (
    <ContactFormModalWrapper>
      <Button primary className="open-modal-btn" onClick={openModal} title={props.callout_text} />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="Modal"								//Styles for this have been applied to global CSS, app.style.js file.
        overlayClassName="Overlay"			// Same as above
        ariaHideApp={false}
        contentLabel="Contact Form"
      >
        <Button secondary className="close-modal-btn" onClick={closeModal}> <GrFormClose /></Button>
        <h2 className="modal-heading">{props.form_header}</h2>
        <div className="contact-form">
          <iframe
            src="https://us15.list-manage.com/contact-form?u=6b50be5aea3dfe1fd4c041d80&form_id=d0ffe17c92d8014ede6b721aa16096e8"
            loading="lazy"
            className="form-frame"
          />
        </div>
      </Modal>
    </ContactFormModalWrapper>
  );
};

export default ContactFormModal;
