import styled from "styled-components";
// export const BlogPageWrapper = styled.div`

//     .blog-grid-wrapper{
//         margin: 5rem auto;
//     }

//     @media only screen and (max-width: 992px) {
//         .blog-page-wrapper{
//             margin-bottom: 5rem;
//         }
//     }

//     @media only screen and (max-width: 575px) {
//         .blog-grid-wrapper{
//             margin: 0 auto 1rem;
//         }
//     }
// `;

export const BlogPageWrapper = styled.div`
  @media only screen and (max-width: 992px) {
    .blog-page-wrapper {
      margin-bottom: 5rem;
    }
  }
`;

export const SearchBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .header {
    display: flex;
    justify-content: space-between;
  }
  input {
    padding: 0.5rem;
    border-radius: 20px;
    background: #f5f7fa;
    border: 2px solid #f5f7fa;
    font-size: 1rem;
    padding: 0.7rem 2rem;
    ::placeholder {
      color: #8ba3cb;
      font-size: 1rem;
    }
    :focus {
      outline: none;
      box-shadow: 0 0 4px #ccc;
    }
    :hover {
      box-shadow: 0 0 4px #ccc;
    }
  }
`;
