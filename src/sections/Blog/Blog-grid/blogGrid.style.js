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
.search-box {
    position: relative;
    display: flex;
    input{
        flex-basis: 100%;
        padding: 15px;
        border-radius: 5px;
        border: 1px solid ${props => props.theme.headingColor};

        &:focus{
            border-color: ${props => props.theme.primaryColor};
        }
    }
    button {
        position: absolute;
        right: 0px;
        top: 0;
        height: 100%;
        min-width: 20px;
        border-radius: 5px;
        background: transparent;
        font-size: 22px;
        color: ${props => props.theme.headingColor}; 
    }
}


.sidebar-widgets {
    padding: 15px 30px;
}
`;
