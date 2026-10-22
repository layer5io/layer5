import styled from "styled-components";
export const BlogPageWrapper = styled.div`
  .blog-grid-wrapper {
    margin: 5rem auto;
  }
  .tooltip-search {
    margin-bottom: 0.8rem;
  }
  .post-thumb-block {
    img {
      padding: 0px;
      margin-top: 0.5rem;
      width: 100%;
      height: 100%;
    }
  }
  @media only screen and (max-width: 576px) {
    .blog-grid-wrapper {
      margin: 0 auto 1rem;
    }
    .tooltip-search {
			display: block;
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

  @media only screen and (min-width: 577px) {
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
