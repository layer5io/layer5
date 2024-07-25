import styled from "styled-components";

const TocPaginationWrapper = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin: 3rem 2rem 4rem 2rem;
.btn-content{
display: grid;
width: 100%;
}
.previous-text{
display: flex;
justify-content: start;
color: white;
font-size: 14px;
}
.next-text{
display: flex;
justify-content: end;
font-size: 14px;
}
.where-to-go-prev{
display: flex;
justify-content: start;
color: white;
}
.where-to-go{
display: flex;
justify-content: end;
}

  @media screen and (max-width: 540px) {
    margin: 0 0 2rem 0;
    flex-flow: row wrap;
    gap: 0.3rem;
  }
`;

export default TocPaginationWrapper;
