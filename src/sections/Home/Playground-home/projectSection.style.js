import styled from "styled-components";

const ProjectItemWrapper = styled.section`
  display: block;
  unicode-bidi: isolate;
  position: relative;

  
  .lp-jumbotron-content {
    padding: 6rem 0;
  }
  .lp-jumbotron-container {
    padding: 0 2.5rem;
  }
  lp-jumbotron-main {
    position: relative;
    display: block;
    padding: 7rem 2.5rem;
    overflow: hidden;
    background-color: #09090a;
    color: #fff;
  }
  .lp-jumbotron-grid, .lp-jumbotron-slides-grid {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 12rem 0;
}

.lp-jumbotron-header {
    padding: 0 10rem 0 0;
    font-size: 2.8rem;
    font-weight: 600;
    line-height: 110%;
    letter-spacing: -.056rem;
}
  @media (min-width: 768px) {
    .lp-jumbotron-content {
        padding: 16rem 0;
      }
      .lp-jumbotron-container {
        padding: 0 20rem;
      }
      .lp-jumbotron-main {
        padding: 0 19rem 0 16rem;
        border-radius: 4rem;
    }
    .lp-jumbotron-grid, .lp-jumbotron-slides-grid {
        display: grid;
        grid-template-columns: 47.6rem 1fr;
        align-items: center;
        gap: 0 19rem;
        min-height: 75rem;
    }
    .lp-jumbotron-grid-col.-right, .lp-jumbotron-slides-grid-col.-right {
        order: 2;
    }
    .lp-jumbotron-grid-col.-left, .lp-jumbotron-slides-grid-col.-left {
        order: 1;
    }
    .lp-jumbotron-header {
        padding: 0 10rem 0 0;
        font-size: 4.8rem;
        font-weight: 500;
        letter-spacing: -.096rem;
        
    }
  }
`;

export default ProjectItemWrapper;
