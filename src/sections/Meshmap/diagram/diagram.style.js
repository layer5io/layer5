import styled from "styled-components";

const DiagramStyles = styled.section`

position: sticky;
top: calc(50vh - 249px);

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

.transitions {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.avatars {
    display: grid;
    grid-template: 1fr / 1fr;
    place-items: end;
    width: 70%;
    @media (max-width: 1200px) {
      width: 50%;
    }
    @media (max-width: 767px) {
     width: 40%;
     padding-left: 0;
     max-height: 400px;
     opacity: 0.4;
     margin: 1rem 5rem 0;
    }
  @media (max-width: 500px) {
     width: 30%;
     margin: 2rem 9rem 0;
    }
  }
  .avatars > * {
  grid-column: 1 / 1;
  grid-row: 1 / 1;
}
.root {
    display: grid;
    grid-template: 1fr / 1fr;
    place-items: center;
    margin: 0 3rem;
    min-height: 40rem;
    --transition-time: 0.7s;
    position: sticky;
    top: calc(60vh - 249px);

  @media (max-width: 1200px) {
     min-height: 17rem !important;
    }
  @media (max-width: 992px) {
     min-height: 14rem !important;
    }
  @media (max-width: 767px) {
     min-height: 25rem !important;
     padding-left: 0;
     max-height: 400px;
     opacity: 0.4;
     margin: 0 5rem;
    }
  @media (max-width: 600px) {
     width: 70%;
    }
  @media (max-width: 500px) {
     width: 50%;
     margin: 0 9rem;
    }

  }

  .root > * {
  grid-column: 1 / 1;
  grid-row: 1 / 1;
}

  .inView {
    opacity: 1;
    transition: opacity .6s ease;
  }

  #design-image1 {
    max-width: 90%;
    z-index: 0;

  }

  #design-image2 {
    max-width: 90%;
    z-index: 1;
  }

  #design-image3 {
    max-width: 90%;
    z-index: 1;
  }

  #design-image4 {
    max-width: 90%;
    z-index: 1;
  }

  #visualize-image1 {
    max-width: 90%;
    z-index: 0;
  }

  #visualize-image2 {
    max-width: 90%;
    z-index: 1;
  }

  #collaborate-image1, #collaborate-image2, #collaborate-image3, #collaborate-image4 {
    max-width: 100%;
  }
`;

export default DiagramStyles;
