import styled from "styled-components";

export const BlogPageWrapper = styled.div`
  .blog-list-wrapper {
    margin: 5rem auto;
  }
  .blog-lists {
    margin-top: 5rem;
  }

  .tooltip-search {
    margin-bottom: 0.8rem;
  }

  @media screen and (max-width: 576px) {
    .blog-list-wrapper {
      margin: 1.5rem auto 5rem;
    }
    .blog-lists {
      margin-top: 0;
    }
    .tooltip-search {
      display: block;
    }
  }

  @media only screen and (min-width: 577px) {
    .tooltip-search {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0;
    }
  }
`;
