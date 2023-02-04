import styled from "styled-components";

const DiagramStyles = styled.section`

.render {
  visibility: hidden;
  opacity: 0;
  transition: all 0.7s ease-out;
}

.show {
  visibility: visible;
  opacity: 1;
  transition: all 0.7s ease-in;
}
.render-arrow {
  visibility: hidden;
  opacity: 0;
}

.show-arrow {
  visibility: visible;
  opacity: 1;
}
    position: sticky;
    top: calc(50vh - 249px);
.root {
  display: flex;
    min-height: 40rem;
    padding-left: 5rem;
    padding-right: 5rem;
    --transition-time: 0.7s;
    @media (min-width: 768px) {
        position: sticky;
        top: calc(60vh - 249px);
  }

  }

  #designer {
    max-width: 100%;
    z-index: 0;
    @media (max-width: 1200px) {
     top: 15rem;
    }
  }

  #visualizer {
    position: relative;
    max-width: 100%;
    right: 30rem;
    z-index: 1;

    @media (max-width: 1200px) {
     
    }
  }

  #collaborator {
    position: relative;
    max-width: 100%;
    right: 60rem;
  }
`;

export default DiagramStyles;
