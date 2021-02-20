import styled from "styled-components";
export const BlogPageWrapper = styled.div`

    .blog-grid-wrapper{
        margin: 5rem auto;
    }

    @media only screen and (max-width: 992px) {
        .blog-page-wrapper{
            margin-bottom: 5rem;
        }
    }

    @media only screen and (max-width: 575px) {
        .blog-grid-wrapper{
            margin: 0 auto 5rem;
        }
    }
`;
