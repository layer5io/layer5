import styled from "styled-components";
import { BlogPageWrapper } from "../../Blog/Blog-grid/blogGrid.style";
export const LearnPathWrapper = styled.div`
  ${BlogPageWrapper};
  margin: 2rem 0;
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
