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
/* .render-arrow {
  visibility: hidden;
  opacity: 0;
}

.show-arrow {
  visibility: visible;
  opacity: 1;
} */
    position: sticky;
    top: calc(50vh - 249px);
.root {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 40rem;
    --transition-time: 0.7s;
    position: sticky;
    top: calc(60vh - 249px);

  @media (max-width: 767px) {
     width: 100%;
     padding-left: 0;

    }
}

  .inView {
    opacity: 1;
    transition: opacity .6s ease;
  }

  #design-image1 {
    position: relative;
    max-width: 90%;
    z-index: 0;
    top: 10rem;

    @media (max-width: 670px) {
      max-width: 70%;
  }

  @media (max-width: 500px) {
      max-width: 50%;
    }
  }

  #design-image2 {
    position: relative;
    max-width: 90%;
    z-index: 1;
    bottom: 6rem;

    @media (max-width: 1200px) {
      bottom: 3rem;
    }
    @media (max-width: 992px) {
      bottom: 0;
    }
    @media (max-width: 767px) {
      bottom: 6rem;
  }
  @media (max-width: 670px) {
      max-width: 70%;
      bottom: 2rem;
    }
  @media (max-width: 500px) {
      max-width: 50%;
      bottom: -2rem;
    }
  }


  #visualize-image1 {
    position: relative;
    max-width: 90%;
    z-index: 0;
    top: 10rem;

    @media (max-width: 670px) {
      max-width: 70%;
  }

  @media (max-width: 500px) {
      max-width: 50%;
    }
  }

  #visualize-image2 {
    position: relative;
    max-width: 90%;
    z-index: 1;
    bottom: 6rem;

    @media (max-width: 1200px) {
      bottom: 3rem;
    }
    @media (max-width: 992px) {
      bottom: 0;
    }
    @media (max-width: 767px) {
      bottom: 6rem;
  }
  @media (max-width: 670px) {
      max-width: 70%;
      bottom: 2rem;
    }
  @media (max-width: 500px) {
      max-width: 50%;
      bottom: -2rem;
    }
  }

  #collaborate-image1, #collaborate-image2, #collaborate-image3, #collaborate-image4 {
    position: relative;
    max-width: 100%;
    top: 8rem;
  }
  #collaborate-image1 {
    z-index: 0;

    @media (max-width: 767px) {
        top: 6rem;
    }
    @media (max-width: 600px) {
      top: 9rem;
      max-width: 50%;
    }
    @media (max-width: 500px) {
      max-width: 40%;
    }
    @media (max-width: 460px) {
      /* top: 18rem; */
    }
  }

  #collaborate-image2 {
    z-index: 1;

    @media (max-width: 767px) {
      top: 6rem;
    }
    @media (max-width: 600px) {
      top: 9rem;
      max-width: 50%;
    }
    @media (max-width: 500px) {
      max-width: 40%;
    }
    @media (max-width: 460px) {
      /* top: 18rem; */
    }
  }
  #collaborate-image3 {
    z-index: 2;
  }
  #collaborate-image4 {
    z-index: 3;
  }
`;

export default DiagramStyles;
