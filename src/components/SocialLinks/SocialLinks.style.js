import styled from "styled-components";

const SocialSectionWrapper = styled.div`
  .social-icons {
    display: flex;
    height: auto;
    flex-direction: column;
    flex-flow: column;
    vertical-align: middle;
    text-align: center;
    position: relative;
    color:#fff;
  }

  .social-widgets {     
    .contactf {
        margin: 0px;
        .social-icons{
          transition: 450ms all;
          &:hover {
            color: ${props => props.theme.headingColor}; 
          }
        }
    }
  }

  // .social-icons{
  //   color: #3c494f;
  //   transition:color .25s
  //   margin-left: 5px;
  //   margin-right: 5px;
  //   transition: 450ms all;
  //   filter: opacity(90%);
  //   .twitter:hover {
  //     filter: brightness(0.5) sepia(1) hue-rotate(150deg) saturate(5);
  //   }
  //   .github:hover {
  //     filter: brightness(1) invert(50)
  //   }
  //   .docker:hover {
  //     filter: brightness(0.4) sepia(1) hue-rotate(150deg) saturate(5);
  //   }
  //   .youtube:hover {
  //     filter: brightness(0.3) sepia(1) hue-rotate(355deg) saturate(30);
  //   }
  //   .slack:hover {
  //     filter: brightness(.15) sepia(1) hue-rotate(255deg) saturate(15);
  //   }
  //   .mail:hover {
  //     filter: opacity(100) brightness(.6) sepia(.5) hue-rotate(150deg) saturate(1);
  //   }
  // }
`;
export default SocialSectionWrapper;
