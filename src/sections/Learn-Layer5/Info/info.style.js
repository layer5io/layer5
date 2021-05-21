import styled from "styled-components";

const CardWrapper = styled.div`
  .row {
    margin: auto;
    width: 85%;
  }

  .column {
    float: left;
    width: 30%;
    margin: 20px;
    padding-bottom: 40px;
  }
  p {
    filter: brightness(0.6);
    padding-top: 15px;
  }

  /* Clear floats after the columns */
  .row:after {
    content: "";
    display: table;
    clear: both;
  }
  @media screen and (max-width: 500px) {
    .column {
      width: 100%;
    }
  }
`;

export default CardWrapper;
