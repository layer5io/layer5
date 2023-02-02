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
    position: relative;
    top: 12rem;
    max-width: 100%;

    @media (max-width: 1200px) {
     top: 15rem;
    }
  }

  #visualizer {
    position: relative;
    top: -5rem;
    max-width: 100%;

    @media (max-width: 1200px) {
     top: -1rem;
    }
  }

  #collaborator {
    position: relative;
    max-width: 100%;
  }
`;

export default DiagramStyles;
