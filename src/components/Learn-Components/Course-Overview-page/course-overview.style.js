import styled from "styled-components";

export const CourseOverviewWrapper = styled.div`
  .course-back-btn {
    margin: 1rem 0;
    padding: 1rem 0;
  }
  .course-overview-hero {
    display: flex;
  }
  .course-info-content {
    width: 55%;
    padding: 5rem 7rem;
    button {
      background-color: white;
      color: black;
      font-weight: 600;
    }
  }
  .course-back-btn {
    display: flex;
    align-items: center;
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
  }
  .content-info {
    width: 70%;
    display: flex;
    text-align: center;
    padding: 1rem 0;
    margin: 1rem 0;
    .info {
      padding: 0 1rem;
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

  .content-section {
    padding: 2rem 0rem;
    margin: 1rem 0rem;
    .chapter-link {
      color: black;
    }
  }
  .content-section-container {
    margin: 0 5rem;
  }

  .service-meshes-you-can-learn, .join-community_text-and_button,
  .engage_text-and_button {
    display: flex;
    padding: 4rem 0rem;
    flex-direction: column;
    align-items: center;
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      padding: 1rem;
      font-size: 1.7rem
    }
  }

  .service-mesh-courses {
    display: flex;
    justify-content:center;
  }
  .course {
    padding: 0.5rem;
  }
  @media screen and (max-width: 1400px) {
    .course-info-content {
      width: 65%;
      padding: 5rem 7rem;
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
  }
  @media screen and (max-width: 768px) {
    .course-info-content {
      width: 100%;
      padding: 5rem 2rem;
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
