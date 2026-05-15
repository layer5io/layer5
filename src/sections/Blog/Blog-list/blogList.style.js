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
  .post-block {
    background-color: ${(props) => props.theme.grey212121ToWhite};
    width: 100%;
    display: flex;
    align-items: stretch;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  }
  .post-thumb-block {
    height: 8rem;
    width: 25%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .post-content-block {
    width: 75%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  @media screen and (max-width: 1200px) {
    .post-block {
      min-height: auto;
    }
    .post-thumb-block {
      height: 8rem;
    }
  }

  @media screen and (max-width: 576px) {
    .post-block {
      flex-direction: column;
    }
    .blog-list-wrapper {
      margin: 1.5rem auto 5rem;
    }
    .blog-lists {
      margin-top: 0;
    }
    .post-thumb-block {
      width: 100%;
      height: 12rem;

      img {
        object-fit: cover;
      }
    }
    .post-content-block {
      width: 100%;
      padding: 1rem;
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
