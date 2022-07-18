import styled from "styled-components";

const BlogPageWrapper = styled.div`

    .single-post-wrapper{
        margin-bottom: 4rem;
    }

    .post-info-block{
        margin-top: 3rem;
        border-bottom: 1px solid #e5e5e5;
        padding-bottom: 2rem;
    }
    .post-tag-container {
        display: block;

        .post-share-mobile {
            display: none;
        }
        .share-icons-container {
            display: none;
        }

    }


    .tags{
        display: flex;
        span{
            font-size: 1.2rem;
            align-self: center;
        }
        a{
            color: ${props => props.theme.black};
            margin: 0.2rem;
            display: inline-block;
            padding: 0.3rem 0.8rem;
            border-radius: 0.2rem;
            background: #F0F0F0;
            transition: all 0.3s linear;
            &:hover{
                background: ${props => props.theme.secondaryColor};
                color: ${props => props.theme.white};
            }
        }
        div{
            display: inline-flex;
            flex-wrap: wrap;
        }
    }

    @media (max-width: 770px) { 
        .post-tag-container {
            position: relative;
            justify-content: space-between;
            align-items: center;

            .post-share-mobile {
                display: block;
                
                position: relative;
                width: 95%;
            }
            .share-icons-container {
                display: flex;
                margin: auto 0;
                justify-content: space-evenly;
                padding: 0.5rem;
                border-radius: 0.625rem;
                font-size: 1.5rem;
            }
            .link-copied-container {
                display: inline-block;
                background: #000;
                color: #fff;
                padding: 0.5rem;
                font-size: 1rem;
                position: absolute;
                right: 0;
            }
        }
    }


    @media screen and (max-width: 360px){
        .tags{
            span{
                position: relative;
                top: 0.5rem;
                align-self: flex-start;
            }
        }
        .author-info-section{
            width: 90%;
            margin: 0 auto;
             .authors-info-container{
                .authors-head-shot{
                    width: 40%;
                    height: 40%;
                }
             }
         }
    }

   
`;
export default BlogPageWrapper;
