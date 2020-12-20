import styled from "styled-components";
export const BooksPageWrapper = styled.div`

    .books-list-wrapper{
        padding: 50px 0;
    }
    .books-grid-wrapper{
        padding-bottom: 60px;
        margin-top: 80px;
        .see-more-button{
            margin: 0 auto;
        }
    }
    
    @media only screen and (max-width: 912px) {
        .books-page-wrapper{
            padding-bottom: 80px;
        }
    }

    .post-content-block{
        height: 8rem;
    }

    .post-meta-block{
        height: auto;
        .author{
            margin-left: 0;
        }
    }
`;
