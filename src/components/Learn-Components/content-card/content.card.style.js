import styled from "styled-components";

const ContentCardWrapper = styled.div`
  padding: 2rem;
  margin: 2rem 0;
  background-color: #fafafa;
  display: flex;
  border: 1px solid rgba(0, 0, 0, 0.1);
  justify-content: space-between;
  :hover {
    border-color: black;
    transition: background 150ms ease-out 0s, border 150ms ease-out 0s,
      transform 150ms ease-out 0s;
    transform: translate3d(0px, -3px, 0px);
    box-shadow: rgba(0, 0, 0, 0.08) 0px 3px 10px 0px;
  }

  .card-link {
    color: black;
  }

  .chapter-info {
    display: flex;
    width: 60%;
    justify-content: space-between;
    .info {
      display: flex;
      align-items: center;
      span {
        margin: 0 0.5rem;
      }
    }
  }

  .chapter-content {
    h2 {
      margin: 1rem 0;
    }
    p {
      width: 85%;
    }
  }

  .bookmark-btn-div {
    display: flex;
    align-items: end;
  }

  .bookmark-btn {
    background-color: #fafafa;
    min-width: auto;
    :hover {
      color: black;
      background-color: #fafafa;
    }
  }
  @media screen and (max-width: 1200px) {
    .chapter-info {
      width: 60%;
    }
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    .chapter-content-div {
      padding: 1rem 0;
    }
    .bookmark-btn-div {
      justify-content: end;
    }

    .chapter-info {
      width: 80%;
    }
    .chapter-content {
      p {
        width: 100%;
      }
    }
  }
  @media screen and (max-width: 400px) {
    padding: 1rem 1rem;
    .chapter-info {
      width: 100%;
    }
  }
`;

export default ContentCardWrapper;
