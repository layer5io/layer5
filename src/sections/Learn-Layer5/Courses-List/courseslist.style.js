import styled from "styled-components";

export const CoursesListWrapper = styled.div`

  .content{
    padding: 3rem;
  }
  .page-header {
    margin: 1rem auto 5rem;
  }
  .course-list {
    display: flex;
    margin: 2rem 0;
  }
  .course-list-cont {
    padding: 3rem 0;
    margin: 1rem;
  }
  .learning-path-cards {
    a {
      color: black;
    }
  }
  .go-back {
    margin: 4.5rem 0 0rem 3rem;
    display:flex;
    justify-content:space-between;
    align-items:center; 
    a {
        display: inline-flex;
        svg {
            align-self: center;
            font-size: 1.5rem;
            color: rgb(177, 182, 184);
            width: 100%;
            max-width: 1.5rem;
        }
        h3 {
            font-weight: 500;
            text-transform: capitalize;
            font-size: 1.5rem;
            white-space: nowrap;
        }
        &:hover {
            svg, h3 {
                color: #3C494F;
            }
        }
    }
    @media(max-width: 745px)
    {
      margin: 4rem 0 0 1rem;
    }
  }
  @media(max-width: 1200px)
  {
    .course-list-cont {
      margin: 0;
    }
  }
  @media(max-width: 992px) {
    .content{
      padding: 2rem;
    }
  }
  @media(max-width: 500px) {
    .content{
      padding: 1.25rem;
    }
  }
`;
