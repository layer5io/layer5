import styled from "styled-components";

export const Overview = styled.section`
  display: flex;
  padding: 0 2rem 5rem 2rem;
  gap: 5rem;
  justify-content: center;
  h3 {
    font-weight: 700;
  }
  @media (max-width: 700px) {
    flex-direction: column-reverse;
  } ;
`;

export const Feature = styled.div`
  display: flex;
  flex-direction: column;
  h3 {
    font-weight: 700;
    padding-bottom: 1rem;
  }
  div {
    display: flex;
    gap: 0.5rem;
    padding: 0.625rem 0;
  }
  div p {
    margin: auto 0;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  p {
    line-height: 40px;
    font-family: "Qanelas Soft", "Open Sans", sans-serif;
    text-align: justify;
  }
  span {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    .btn {
      font-weight: bold;
      transition: all 0.5s ease;
      background: #ebc017;
      opacity: 0.8;
      padding: 5px 2rem;
      color: black;
      border-radius: 0.625rem;
    }
    .btn:hover {
      opacity: 1;
    }
    span {
      display: flex;
      gap: 0.5rem;
      align-items: center;
      a {
        font-weight: 700;
        color: black;
        transition: all 0.5s ease;
      }
      a:hover {
        padding-right: 5px;
        transform: scale(1.01);
      }
    }
  }
  @media (min-width: 700px) {
    width: 35rem;
  } ;
`;

export const CTA = styled.div`
  .book_cover {
    display: flex;
    margin: auto;
    background: #00b39f;
    .book_col {
      max-height: 40rem;
    }
    .text {
      padding: 5rem 5rem 5rem 13rem;
      @media screen and (max-width: 1200px) {
        padding: 5rem 5rem 5rem 10rem;
      }
      @media screen and (max-width: 950px) {
        padding: 5rem;
      }
      @media screen and (max-width: 750px) {
        padding: 2rem;
      }
      .cover {
        border: 2px solid white;
        width: 240px;
        padding: 10px;
        text-align: center;
      }
      h1,
      p,
      .learn {
        color: white;
      }
    }
  }
  .book_img {
    text-align: center;
    align-self: center;
    .bookLink {
    }
    img {
      max-height: 38rem;
      vertical-align: middle;
      @media screen and (max-width: 576px) {
        max-height: 28rem;
        margin: 1rem auto;
      }
    }
  }
`;

export const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 5rem 1rem;
  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;
  }
  img {
    margin-bottom: 0.5rem;
  }
  p {
    font-family: "Qanelas Soft", "Open Sans", sans-serif;
    text-align: center;
  }
`;
