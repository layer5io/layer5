import styled from "styled-components";
export const BlogPageWrapper = styled.div`
  .blog-grid-wrapper {
    margin: 5rem auto;
  }
  .tooltip-search {
    margin-bottom: 0.8rem;
  }

  @media only screen and (max-width: 575px) {
    .blog-grid-wrapper {
      margin: 0 auto 1rem;
    }
  }

  @media only screen and (max-width: 992px) {
    .blog-page-wrapper {
      margin-bottom: 5rem;
    }

    .post-meta-block {
      height: 3.5rem;
    }
  }

  @media only screen and (min-width: 575px) {
    .tooltip-search {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0;
    }
  }
  /* @media only screen and (min-width: 990px) {
    .tooltip-search {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  } */
`;
