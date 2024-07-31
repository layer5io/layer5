import styled from "styled-components";

const TocPaginationWrapper = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin: 3rem 2rem 4rem 2rem;

  .prev-btn{
  padding: 8px 22px;
  }
  .next-btn{
  padding: 8px 22px;
  }
.btn-content{
display: block;
width:100%;
}
.right-icon{
margin-top:5px;
font-size: 1rem;
    font-weight: 500;
    
}
    .left-icon{
    margin-top:5px;
font-size: 1rem;
    font-weight: 500;
    }


.previous-text{
display: flex;
color: white;
font-size: 1rem;
    font-weight: 500;
    line-height: 1.75rem;
margin: auto;
opacity:0.9;
}
.next-text{
display: flex;
color: black;
font-size: 1rem;
    font-weight: 500;
    line-height: 1.75rem;
justify-content:end;
opacity:0.9;
}
.where-to-go-prev{
display: flex;
font-family: "Open Sans", sans-serif;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.75rem;
color: white;
}
.where-to-go{
display: flex;
font-family: "Open Sans", sans-serif;
   color: black;
    font-size: 1rem;
    font-weight: 500;
    justify-content:end;
        line-height: 1.75rem;
}


  @media screen and (max-width: 540px) {
    margin: 0 0 2rem 0;
    flex-flow: row wrap;
    gap: 0.3rem;
  }
`;

export default TocPaginationWrapper;
