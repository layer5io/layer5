import styled from "styled-components";

const ServiceSectionWrapper = styled.div`
  padding: 80px 0;
  .service__single__item {
    text-align: center;
    padding: 30px 20px;
    border-radius: 10px;
    background: #00b39f;
    color: white;
    box-shadow: 0 0 30px ${(props) => props.theme.shadowColor};

    img {
      height: 50px;
    }
  }

  @media only screen and (max-width: 912px) {
    padding: 80px 0 50px;

    .service__single__item {
      margin-bottom: 30px;
    }
  }
`;

export default ServiceSectionWrapper;
