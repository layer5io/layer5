import styled from "styled-components";

const TermsWrapper = styled.section`
position: relative;

.conduct_heading {
  text-align: left;
  width: 90%;
  font-size: 25px;
  font-weight: 200;
  margin-top: 30px;
  margin-bottom: 20px;
  h2 {
    text-align: left;
  }
}

@media only screen and (max-width: 420px) {
  .conduct_heading {
    text-align: left;
    width: 90%;
    font-size: 18px;
    font-weight: 200;
    margin-top: 30px;
    margin-bottom: 20px;
    h2 {
      text-align: left;
    }
  }
}
`;

export default TermsWrapper;