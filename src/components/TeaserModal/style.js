import styled from "styled-components";

const StyledEmbdedVideo = styled.section`

  .embedVideo {
   position: relative;
        min-width:50%;
        max-width:100%;
        object-fit: cover;
        /* height: 44vw !important;
        border-radius: 2.5%;
        transition: 0.2s ease-in-out;
        box-shadow: 0px 3px 20px 4px rgba(0, 179, 159, 0.5); */

        .react-player__preview {
        border-radius: 1.5%;
        }

        .react-player__play-icon {
        transform: scale(3, 3);
        }

        iframe {
        border-radius: 2.5%;
        }

        @media (max-width: 768px) {
        height: 54vw !important;
        }

        &:hover {
        /* box-shadow: 0px 3px 20px 4px rgba(0, 179, 159, 0.75);
        .react-player__play-icon {
            border-color: transparent transparent transparent #EBC017 !important;
        } */
        .playBtn {
        box-shadow: 0px 0px 16px 3px #00B39F;
        }
        }
}
 .player-wrapper {
  position: relative;
}

.react-player {
  position: absolute;
  top: 0;
  left: 0;
}
`;

export default StyledEmbdedVideo;