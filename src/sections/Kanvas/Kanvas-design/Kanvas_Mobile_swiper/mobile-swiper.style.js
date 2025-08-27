import styled from "styled-components";

const SwiperContainer = styled.div`
  @media (min-width: 768px) {
    display: none;
  }

  .swiper-slide {
    border-radius: 20px;
  }

  .card.one {
    background: linear-gradient(222deg, #077165 2.76%, #1D2827 117.91%);
  }
  
  .card.two {
    background: linear-gradient(134deg, #252E31 -16.51%, #0D997F 101%);
  }
  
  .card.three {
    background: linear-gradient(125deg, #137771 -16.81%, #252E31 104.15%);
  }
  
  .card.four {
    background: linear-gradient(180deg, #202020 -32.18%, #18433F 52.35%, #0B7E71 106.65%, #00B39F 142.23%);
  }

  .card {
    height: 75vh;
    padding: 1.25rem;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }

  .card img {
    width: 100%; /* Back to full width */
    height: auto;
    max-height: 55%;
    min-height: 200px;
    object-fit: contain;
    border: 1px solid #555555;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.08);
    flex-shrink: 0;
  }

  .card h2 {
    text-align: center;
    color: white;
    margin: 0;
    flex-shrink: 0;
    font-size: 1.2rem;
    line-height: 1.25;
    font-weight: 600;
  }

  .card p {
    text-align: center;
    color: white;
    margin: 0;
    line-height: 1.35;
    font-size: 0.9rem;
    flex-grow: 1;
    display: flex;
    align-items: center;
    opacity: 0.95;
  }

  .card a {
    margin-top: 1rem;
    color: white;
  }

  /* Improved responsive breakpoints with bigger images */
  @media (max-width: 670px) {
    width: 75vw;
    .card {
      width: 70vw;
      height: 70vh;
      padding: 1.2rem;
    }
    .card img {
      max-height: 50%;
      min-height: 180px;
      width: 100%;
    }
    .card h2 {
      font-size: 1.15rem;
    }
    .card p {
      font-size: 0.88rem;
    }
  }

  @media (max-width: 577px) {
    width: 80vw;
    .card {
      width: 75vw;
      height: 65vh;
      padding: 1.1rem;
    }
    .card img {
      max-height: 48%;
      min-height: 170px;
      width: 100%;
    }
    .card h2 {
      font-size: 1.1rem;
    }
    .card p {
      font-size: 0.85rem;
    }
  }

  @media (max-width: 520px) {
    width: 82vw;
    .card {
      width: 77vw;
      height: 62vh;
      padding: 1rem;
    }
    .card img {
      max-height: 45%;
      min-height: 160px;
      width: 100%;
    }
    .card h2 {
      font-size: 1.05rem;
    }
    .card p {
      font-size: 0.82rem;
      line-height: 1.3;
    }
  }

  @media (max-width: 490px) {
    width: 85vw;
    .card {
      width: 80vw;
      height: 60vh;
      padding: 1rem;
    }
    .card img {
      max-height: 43%;
      min-height: 150px;
      width: 100%;
    }
  }

  @media (max-width: 448px) {
    width: 88vw;
    .card {
      width: 83vw;
      height: 58vh;
      padding: 0.9rem;
    }
    .card img {
      max-height: 40%;
      min-height: 140px;
      width: 100%;
    }
    .card h2 {
      font-size: 1rem;
    }
    .card p {
      font-size: 0.8rem;
      line-height: 1.25;
    }
  }

  @media (max-width: 404px) {
    width: 90vw;
    .card {
      width: 85vw;
      height: 56vh;
      padding: 0.8rem;
    }
    .card img {
      max-height: 38%;
      min-height: 130px;
      width: 100%;
    }
  }

  @media (max-width: 380px) {
    width: 92vw;
    .card {
      width: 87vw;
      height: 54vh;
      padding: 0.75rem;
    }
    .card img {
      max-height: 36%;
      min-height: 120px;
      width: 100%;
    }
    .card h2 {
      font-size: 0.95rem;
    }
    .card p {
      font-size: 0.75rem;
      line-height: 1.2;
    }
  }

  @media (max-width: 330px) {
    width: 94vw;
    .card {
      width: 89vw;
      height: 52vh;
      padding: 0.7rem;
    }
    .card img {
      max-height: 34%;
      min-height: 110px;
      width: 100%;
    }
    .card h2 {
      font-size: 0.9rem;
    }
    .card p {
      font-size: 0.72rem;
      line-height: 1.15;
    }
  }

  margin-top: 5%;
  border-radius: 20px;
  width: 70vw;
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
    font-size: 1.4rem;
  }

  h6 {
    margin: 10px 0 2.5rem 0;
    font-size: 0.9rem;
    line-height: 1.3;
  }

  /* Container title responsive adjustments */
  @media (max-width: 480px) {
    h2 {
      font-size: 1.2rem;
      margin-bottom: 0.75rem;
    }
    
    h6 {
      font-size: 0.8rem;
      margin: 8px 0 2rem 0;
    }
  }

  @media (max-width: 360px) {
    h2 {
      font-size: 1.1rem;
    }
    
    h6 {
      font-size: 0.75rem;
      margin: 6px 0 1.5rem 0;
    }
  }
`;

export default SwiperContainer;
