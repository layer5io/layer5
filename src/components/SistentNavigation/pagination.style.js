import styled from "styled-components";

const TocPaginationWrapper = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin: 3rem 2rem 4rem 2rem;
.btn-content{
display: grid;
padding: 6px 16px;
gap: 5px;
}

.right-icon .fsCoJX path{
color: black;
}
.left-icon .fsCoJX path {
 color: white
}
.previous-text{
display: flex;
color: white;
margin: auto;

}
.next-text{
display: flex;
margin: auto;
}
.where-to-go-prev{
display: flex;
font-family: "Open Sans", sans-serif;
    font-size: 1rem;
    font-weight: 500;
color: white;
}
.where-to-go{
display: flex;
font-family: "Open Sans", sans-serif;
    color: #000000;
    font-size: 1rem;
    font-weight: 500;
}


  @media screen and (max-width: 540px) {
    margin: 0 0 2rem 0;
    flex-flow: row wrap;
    gap: 0.3rem;
  }
`;

export default TocPaginationWrapper;
