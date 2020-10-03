import styled from "styled-components";
export const BlogPageWrapper = styled.div`

    .blog-list-wrapper{
        padding: 50px 0;
    }
    .blog-grid-wrapper{
        padding-bottom: 60px;
        margin-top: 80px;
    }
    
    .pagination-wrapper{
        display: flex; 
        margin: 30px 0 60px 0;

            ul, .pagination{
                margin: 0;
                padding: 0;
                list-style: none;

                li {
                    display: inline-block;

                    &.active{
                        .anchor{
                            opacity: 1;
                        }
                    }

                    .anchor {
                        display: block;
                        padding: 12px 20px;
                        margin-right: 10px;
                        border-radius: 5px;
                        opacity: .6;
                    }
                }
            }
        }
        @media only screen and (max-width: 912px) {
            .blog-page-wrapper{
                padding-bottom: 80px;
            }
        }
`;
