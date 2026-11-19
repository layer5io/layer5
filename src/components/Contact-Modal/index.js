import React, { useState } from "react";
import Modal from "react-modal";
import Button from "../../reusecore/Button";
import { GrFormClose } from "@react-icons/all-files/gr/GrFormClose";
import styled from "styled-components";
import ContactForm from "../ContactForm";

const ContactFormModalWrapper = styled.div`
  .open-modal-btn {
    display: flex;
    margin: auto;
  }
`;

const ContactFormModal = (props) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);

  const closeModal = () => setIsOpen(false);

  return (
    <ContactFormModalWrapper>
      <Button
        $secondary
        className="open-modal-btn"
        onClick={openModal}
        title={props.callout_text}
      />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="Modal" //Styles for this have been applied to global CSS, app.style.js file.
        overlayClassName="Overlay" // Same as above
        ariaHideApp={false}
        contentLabel="Contact Form"
      >
        <Button
          $secondary
          type="button"
          className="close-modal-btn"
          onClick={closeModal}
          aria-label="Close contact form"
        >
          {" "}
          <GrFormClose />
        </Button>
        <h2 className="modal-heading">{props.form_header}</h2>
        <div className="contact-form">
          <div className="form-frame">
            <ContactForm embedded />
          </div>
        </div>
      </Modal>
    </ContactFormModalWrapper>
  );
};

export default ContactFormModal;
