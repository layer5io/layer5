import styled from "styled-components";

const ReviewsWrapper = styled.div`
max-width: 100%;
.slider{
  overflow: hidden;
  padding: 2rem 0 0.5rem;
  background: ${props => props.theme.secondaryLightColor};
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  h2{
    text-align: center;
    padding: 0 0 2rem;
  }
    .type-one-wrapper{
      margin: 0 1rem;
    }
}

`;

export default ReviewsWrapper;