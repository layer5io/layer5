import styled from "styled-components";

const SubscribeLearnWrapper = styled.div`
  text-align: center;
  justify-content: center;
  margin-top: 2.5rem;

  h2 {
    color: #00b39f;
    margin: 0.5rem;
  }

  p {
    font-size: 0.9rem;
    margin: 0 0 1rem 0;
  }

  .inputrow {
    width: 50%;
  }

  #mc-embedded-subscribe {
    width: 20%;
    min-width: 115px;
  }

  .subscribe {
    display: flex;
    justify-content: center;
    gap: 5px;
  }

  .subscriptionText {
    max-width: 80%;
    margin-left: 10%;
    margin-right: 10%;
  }

  @media only screen and (max-width: 496px) {
    .subscriptionText {
      max-width: 95%;
      margin-left: 2.5%;
      margin-right: 2.5%;
    }
  }
`;

export default SubscribeLearnWrapper;
