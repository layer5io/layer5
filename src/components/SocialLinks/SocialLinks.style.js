import styled from "styled-components"

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
    .contactf{
        margin: 0px;
        .social-icons{
          transition: 450ms all;
          &:hover {
            color: ${props => props.theme.headingColor}; 
          }
        }
    }
`
export default SocialSectionWrapper
