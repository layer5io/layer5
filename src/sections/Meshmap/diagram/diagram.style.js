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
    --transition-time: 0.7s;
    position: sticky;
    top: calc(60vh - 249px);

  @media (max-width: 767px) {
     width: 80%;
     padding-left: 0;

    }
  @media (max-width: 500px) {
     width: 80%;
     padding-right: 4rem;

    }
}

  #image1 {
    position: relative;
    max-width: 100%;
    z-index: 0;
    /* @media (max-width: 922px) {
        max-width: 50%;
  } */
    @media (max-width: 767px) {
        left: 5rem;
  }
  }

  #image2 {
    position: relative;
    max-width: 100%;
    right: 35rem;
    z-index: 1;

    @media (max-width: 1200px) {
      right: 33rem;
  }

    @media (max-width: 992px) {
      right: 25rem;
    }
    @media (max-width: 767px) {
        right: 24.55rem;
  }

  @media (max-width: 670px) {
    right: 15rem;
    }
    @media (max-width: 500px) {
      right: 11rem;

    }
  }

  #image3 {
    position: relative;
    max-width: 100%;
    right: 70rem;
    z-index: 2;
    @media (max-width: 1200px) {
      right: 66rem;
  }

  @media (max-width: 992px) {
      right: 50rem;
    }
    @media (max-width: 767px) {
        right: 54.1rem;
  }

  @media (max-width: 670px) {
    right: 35rem;
    }
  @media (max-width: 500px) {
    right: 27rem;
    }
  }
`;

export default DiagramStyles;
