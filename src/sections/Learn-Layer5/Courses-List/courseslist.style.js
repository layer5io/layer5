import styled from "styled-components";
import { BlogPageWrapper } from "../../Blog/Blog-grid/blogGrid.style";
export const LearnPathWrapper = styled.div`
  ${BlogPageWrapper};
  margin: 2rem;
  .go-back-btn {
    margin: 0 2rem;
  }
  .course-list {
    display: flex;
    margin: 2rem 1rem;
  }
  .course-list-cont {
    padding: 3rem;
    margin: 1rem;
  }
  .learning-path-cards {
    a {
      color: black;
    }
  }
  @media (max-width: 1470px) {
    .course-list-cont {
      padding: 3rem 0rem;
    }
  }
  @media (max-width: 1049px) {
    margin: 2rem 0;
    .course-list-cont {
      padding: 3rem 0rem;
    }
    .course-list {
      margin: 3rem 0;
    }
  }
`;
