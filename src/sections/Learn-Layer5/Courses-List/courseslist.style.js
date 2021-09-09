import styled from "styled-components";
export const CoursesListWrapper = styled.div`

.content{
  padding: 3rem;
}

  .page-header {
    margin: 3rem auto 5rem;
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
  @media(max-width: 1200px)
  {
    .course-list-cont {
      margin: 0;
    }

  }
`;
