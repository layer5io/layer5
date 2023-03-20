import styled from "styled-components";

export const CourseOverviewWrapper = styled.div`
  .course-back-btn {
    margin: 4.5rem 0 0rem 3rem;
    display: flex;
    align-items: center;
    padding-bottom: 1rem;
    a {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: black;
    }
    h4 {
      line-height: 1.75rem;
      font-weight: 500;
      margin: 0 0.5rem;
    }
    svg {
      font-size: 1.15rem;
    }
    @media(max-width: 745px)
    {
      margin: 4rem 0 0 1rem;
    }
  }
  .course-overview-hero {
    display: flex;
  }
  .course-info-content {
    width: 55%;
    padding: 5rem 6rem;
    button {
      background-color: white;
      color: black;
      font-weight: 600;
    }
  }

  .content-info {
    width: 70%;
    display: flex;
    text-align: center;
    padding: 1rem 0;
    margin: 1rem 0;
    .info {
      padding: 0 1rem;
      display: flex;
      align-items: center;
      span {
        margin: 0 0.5rem;
      }
    }
  }
  .course-hero-head-image {
    width: 15%;
    display: flex;
    justify-content: center;
    div {
      width: 100%;
    }
    img {
      margin: auto;
      height: 100%;
    }
  }
  .course-hero-head {
    h2 {
      margin: 1rem 0;
    }
  }

  .content-section-container {
    margin: 0 5rem;
  }

  .content-section {
    padding: 2rem 0rem;
    margin: 1rem 0rem;
    .chapter-link {
      color: black;
    }
  }

  .overview {
    margin-bottom: 0.5rem;
  }

  .course-toc {
    margin-top: 1.75rem;
    color: ${props => props.theme.whiteSixToBlackSix};
b
  }

  .service-meshes-you-can-learn,
  .join-community_text-and_button,
  .engage_text-and_button {
    padding: 4rem 0rem;
    align-items: center;
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      padding: 1rem;
      font-size: 1.7rem;
    }
  }

  .service-mesh-courses {
    display: inline-flex;
    padding: 0 1rem;
    img {
      width: 2.5rem;
      height: 2.5rem;
    }
  }

  .start-again-button{
    margin-left: 1rem;
    background: ${props => props.theme.highlightColor} !important;
  }

  .course {
    padding: 0.5rem;
  }
  @media screen and (max-width: 1400px) {
    .course-info-content {
      width: 65%;
      padding: 5rem 5rem;
    }
    .course-hero-head-image {
      width: 20%;
    }
    .content-section-container {
      margin: 0 4rem;
    }
  }

  @media screen and (max-width: 992px) {
    .course-info-content {
      width: 75%;
      padding: 5rem 2rem;
    }
    .course-hero-head-image {
      width: 22%;
    }
    .content-section-container {
      margin: 0 1rem;
    }
  }
  @media screen and (max-width: 768px) {
    .course-info-content {
      width: 100%;
      padding: 5rem 1rem;
    }
    .course-hero-head-image {
      display: none;
    }
    .content-info {
      width: 100%;
    }
    .content-section-container {
      margin: 0;
    }
  }
`;
