import styled from "styled-components";

export const BlogPageWrapper = styled.div`
  .blog-list-wrapper {
    padding-bottom: 50px;
  }
  .post-block {
    &.list {
      padding: 15px;
      margin-bottom: 70px;
      border-radius: 6px;
      &:hover {
        border: 1px solid gray;
        .post-thumb-block {
          .gatsby-image-wrapper {
            transform: scale3d(1.1, 1.1, 1);
          }
        }
        .readmore-btn {
          color: ${props => props.theme.secondaryColor};
        }
      }
    }
  }

  .post-thumb-block {
    overflow: hidden;
    margin-bottom: 30px;
    position: relative;
    border-radius: 6px;
    max-height: 400px;
    .gatsby-image-wrapper {
      transition: all 0.6s ease-in;
      border-radius: 6px;
    }
    img {
      max-width: 100%;
      max-height: 400px;
      width: auto;
      height: auto;
      display: block;
      text-align: center;
      margin-left: auto;
      margin-right: auto;
    }
  }
  
  .post-content-block {
    border-radius: 0 0 3px 3px;
    box-shadow: 0px 2px 4px 0px rgba(12, 0, 46, 0.06);
    padding: 25px 35px;
    position: relative;
  }
  .post-entry {
    font-size: 15px;
    font-weight: 300;
    line-height: 28px;
    margin-bottom: 25px;
    .pull-right {
      float: right;
    }
  }
  .post-title {
    a {
      font-size: 24px;
      font-weight: 600;
      line-height: 40px;
      letter-spacing: 1.5px;
      margin-bottom: 25px;
      display: block;
      -webkit-transition: 450ms all;
      transition: 450ms all;
      &:hover {
        color: ${props => props.theme.secondaryColor};
      }
    }
  }
  .readmore-btn {
    color: rgba(0, 0, 0, 0.35);
    display: flex;
    align-items: center;
    margin-top: -20px;
    margin-right: 20px;
    float: right;
    transition: all 0.3s linear;
    svg {
      margin-left: 0px;
      font-size: 27px;
      transition: all 0.3s linear;
    }
    &:hover {
      svg {
        margin-left: 3px;
        transform: scale(1.2);
      }
    }
  }
  @media only screen and (max-width: 912px) {
    .blog-page-wrapper {
      padding-bottom: 80px;
    }
  }
  @media only screen and (max-width: 568px) {
    .post-block {
      .post-title {
        a {
          font-size: 20px;
          line-height: 33px;
        }
      }
    }
  }
  @media only screen and (max-width: 480px) {
    .post-block {
      &.text-only {
        padding: 25px 30px 30px;
      }
    }
  }
  @media only screen and (max-width: 375px) {
    .post-block {
      .post-title {
        a {
          font-size: 17px;
          line-height: 30px;
        }
      }
    }
  }
`;
