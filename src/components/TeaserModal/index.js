import React, { useState } from "react";
import Modal from "react-modal";
import Button from "../../reusecore/Button";
import { GrFormClose } from "@react-icons/all-files/gr/GrFormClose";
import styled from "styled-components";
import playIcon from "../../assets/images/homePage-images/play-button.webp";
import ReactPlayer from "react-player";
import StyledEmbdedVideo from "./style";

const TeaserModalWrapper = styled.div`

`;

const TeaserModal = (props) => {
  const {
    title,
    open
  } = props;

  const [modalIsOpen,setIsOpen] = useState(open);

  const closeModal = () => setIsOpen(false);

  return (
    <TeaserModalWrapper>
      <Modal
        style={{
          content: {
            maxWidth: "105rem",
            maxHeight: "105rem",
            width: "90%",
            height: "max-content",
          },
        }}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="Modal"								//Styles for this have been applied to global CSS, app.style.js file.
        overlayClassName="Overlay"			// Same as above
        ariaHideApp={false}
        contentLabel={title}
      >
        <Button secondary className="close-modal-btn" onClick={closeModal}> <GrFormClose /></Button>
        <div>
          <StyledEmbdedVideo>
            <ReactPlayer
              url="https://www.youtube.com/embed/034nVaQUyME?si=BhO8IGawxc5YSRuw?vq=large"
              playing
              controls
              playIcon={
                <img
                  src={playIcon}
                  className="playBtn"
                  loading="lazy"
                  alt="Play"
                  role="button"
                  aria-label="Play"
                  style={{ fontSize: "24px" }}
                />
              }
              width="100%"
              height="90vh"
              className="embedVideo"
            />
          </StyledEmbdedVideo>
        </div>
      </Modal>
    </TeaserModalWrapper>
  );
};

export default TeaserModal;
