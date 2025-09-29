import styled from "styled-components";

const PageHeaderWrapper = styled.div`
  position: relative;
  overflow: hidden;
  z-index: 1;

  .page-header {
    text-align: center;
    position: relative;
    height: auto;
    margin-bottom: 2rem;
    padding: 0 1rem;
    z-index: 99;

    h1 {
      padding-top: 1.5rem;
      transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

      img {
        padding-left: 1rem;
        width: 3rem;
        transition-duration: 0.8s;
        filter: invert(${(props) => props.theme.meshInterfaceLogoFilter});
      }
    }
  }

  .feature-image {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%; /* Full width of parent */
    max-width: 600px; /* Cap container width */
    margin: 0 auto; /* Center container */
    padding: 0 1rem; /* Padding for smaller screens */

    img {
      margin-top: 0rem; 
      width: 100%; 
      max-width: 100%; 
      max-height: 100%; 
      height: auto; 
      object-fit: fill; 
      display: block;
    }
  }

  .breadcrumbs {
    display: flex;
    justify-content: center;
    margin-top: 1.5rem;
    align-items: center;

    h5 {
      display: inline-block;
      margin: 0 0.4rem;
      opacity: 0.7;
    }

    p {
      margin: 0;
      display: inline-block;
    }
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .feature-image {
      max-width: 90vw; /* Use viewport width for smaller screens */
      padding: 0 0.5rem;

      img {
        max-width: 100%; /* Fit container */
        max-height: 350px; /* Slightly smaller for tablets */
      }
    }
  }

  @media (max-width: 480px) {
    .feature-image {
      img {
        max-height: 250px; /* Further reduce for phones */
      }
    }
  }
`;

export default PageHeaderWrapper;