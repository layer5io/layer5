import React from "react";
import { FaUserTie } from "@react-icons/all-files/fa/FaUserTie";
import Button from "../../../reusecore/Button";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { SRLWrapper } from "simple-react-lightbox";
import Modal from "react-modal";
import { GrFormClose } from "@react-icons/all-files/gr/GrFormClose";
import Image from "../../../components/image";


export const Executive_Bio = ({ executive_image, executive_position, company, name, body }) => {

  const [modalIsOpen,setIsOpen] = React.useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <FaUserTie className="bio" size={32} onClick={openModal} />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="Modal"
        overlayClassName="Overlay"
        ariaHideApp={false}
        contentLabel="Executive Bio"
      >
        <Button secondary className="close-modal-btn" onClick={closeModal}> <GrFormClose /></Button>
        <div className="exec-bio-image">
          <h2 className="modal-heading">Executive Bio</h2>
          <Image
            className="bio-image"
            {...executive_image}
            alt={name}
          />
          <h3>{name}</h3>
          <p>{executive_position}</p>
          <p>{company}</p>
        </div>
        <div className="exec_bio">
          <SRLWrapper>
            <MDXRenderer>{body}</MDXRenderer>
          </SRLWrapper>
        </div>
      </Modal>
    </div>
  );
};