import styled from "styled-components";

const SwiperContainer = styled.div`
  @media (min-width: 768px) {
    display: none;
  }

  .swiper-slide {
    border-radius: 20px;
  }

  .card.light {
    box-shadow: none;

    background: linear-gradient(
      266.65deg,
      #00b39f 40.19%,
      #00b39f 74.31%,
      #3c494f 92.89%
    );
  }

  .card.dark {
    background: linear-gradient(
      266.65deg,
      #00584e 40.19%,
      #2e5363 74.31%,
      #212529 92.89%
    );
  }

  .card {
    /* box-shadow: rgb(38, 57, 77, 0.5) 0px 20px 30px -10px; */
    /* box-shadow: none; */

    /* background: linear-gradient(
    266.65deg,
    #00b39f 40.19%,
    #477e96 74.31%,
    #3c494f 92.89%

  ); */

    height: 70vh;
    padding: 1rem;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .card img {
    height: 40%;
    width: 100%;
    /* margin-left: 1.5rem; */
  }
  .card h2 {
    text-align: center;
    color: white;
  }
  .card p {
    text-align: center;
    color: white;
  }
  .card a {
    margin-top: 1rem;
    color: white;
  }
  @media (max-width: 670px) {
    width: 68vw;
    .card {
      width: 64vw;
      height: 60vh;
    }
    .card img {
      height: 30%;
      width: auto;
    }
  }

  @media (max-width: 577px) {
    .card {
      width: 62vw;
    }
    h2 {
      font-size: 1.4rem;
    }
    p {
      font-size: 1rem;
    }
  }

  @media (max-width: 520px) {
    .card {
      height: 55vh;
    }
    h2 {
      font-size: 1.2rem;
    }
    p {
      font-size: 0.8rem;
    }
  }
  @media (max-width: 490px) {
    .card {
      height: 55vh;
      padding: 1rem;
    }
    .card img {
      /* max-height:20%;
      width:90%; */
      margin-left: 0.5rem !important;
    }
  }
  @media (max-width: 448px) {
    width: 70vw;
    .card {
      height: 48vh;
      width: 64vw;
      padding: 0.5rem;
    }
    .card img {
      height: 30%;
    }
    p {
      line-height: 19px;
    }
  }
  @media (max-width: 404px) {
    .card {
      width: 67vw;
      padding: 0.7rem;
    }
    .card img {
      height: 25%;
    }
  }
  @media (max-width: 380px) {
    width: 65vw;
    h2 {
      font-size: 0.9rem;
    }
    p {
      font-size: 0.7rem;
      line-height: 18px;
    }
    .card {
      width: 60vw;
      height: 47vh;
      margin: 0;
      padding: 0.8rem;
    }
  }
  @media (max-width: 330px) {
    width: 70vw;
    .card {
      height: 45vh;
      width: 64vw;
      padding: 0.7rem;
    }

    p {
      line-height: 16px;
    }
  }

  margin-top: 10%;
  border-radius: 20px;
  width: 57vw;
  text-align: center;

  .swiper {
    width: 100%;
    height: 100%;
  }

  h1 {
    text-align: center;
  }

  h2 {
    margin: 0 0 1rem 0;
  }

  h6 {
    margin: 10px 0 2.5rem 0;
  }
`;
export default SwiperContainer;
