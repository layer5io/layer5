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
            display: flex;
            justify-content: space-between;
            align-items: center;

            .post-share-mobile {
                display: block;
                font-size: 35px;
                padding-right: .5rem
            }
            .share-icons-container {
                position: absolute;
                right: 3rem;
                background-color: white;
                width: 150px;
                height: 80px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0 .5rem;
                border-radius: 10px;
                font-size: 30px;
                box-shadow:
                    0.1px 0.3px 0.7px -2px rgba(0, 0, 0, 0.02),
                    0.3px 0.7px 1.7px -2px rgba(0, 0, 0, 0.028),
                    0.6px 1.3px 3.1px -2px rgba(0, 0, 0, 0.035),
                    1.1px 2.2px 5.6px -2px rgba(0, 0, 0, 0.042),
                    2.1px 4.2px 10.4px -2px rgba(0, 0, 0, 0.05),
                    5px 10px 25px -2px rgba(0, 0, 0, 0.07)
                ;

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
