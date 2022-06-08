import styled from "styled-components";

const BlogPageWrapper = styled.div`

    display: flex;
    margin: 0 auto;
    width: 90%;
    

    .post-container{
        width: 80%;
    }

    .single-post-wrapper{
        margin-bottom: 4rem;
    }

    .post-info-block{
        margin-top: 3rem;
        border-bottom: 1px solid #e5e5e5;
        padding-bottom: 2rem;
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

    .authors-info-container{
        background: rgba(201,252,246,.3);
        height: auto;
        margin: 3rem 0 0 10px;
        height: 980px;
        min-height: 929px;
        max-height: 1500px;
        width: 20%;
        padding: 1.8rem;
        text-align: center;
            h3{
                font-size: 20px;
                line-height: 32px;
                font-weight: 500;
                color: #1E2117
            }
            .authors-head-shot{
                border: 5px solid #00D3A9;
                border-radius: 100%;
                width: 150px;
                height: 150px;
                margin: 1.3rem 0;
            }
            h5{
                font-family: 'Qanelas Soft';
                font-style: normal;
                font-weight: 500;
                font-size: 18px;
                line-height: 32px;
                border-bottom: 1px solid rgba(71, 126, 150, 0.5);
                padding-bottom: .5rem;
                width: 80%;
                margin: 0 auto;
            }
            p{
                font-family: 'Qanelas Soft';
                font-style: normal;
                font-weight: 500;
                font-size: 15px;
                line-height: 22px;
                margin: 1.5rem 0;
                color: #477E96;
            }
            .authors-info-meshery{
                border-top: 1px solid rgba(71, 126, 150, 0.5);
                border-bottom: 1px solid rgba(71, 126, 150, 0.5);
                padding: 2rem 0;

                h6{
                    font-family: 'Qanelas Soft';
                    font-style: normal;
                    font-weight: 500;
                    font-size: 20px;
                    line-height: 32px;
                    color: #1E2117;
                }
                p{
                    font-family: 'Qanelas Soft';
                    font-style: normal;
                    font-weight: 500;
                    font-size: 15px;
                    line-height: 22px;
                    color: #477E96;
                }
                a{
                    background: #00B39F;
                    border-radius: 5px;
                    padding: .8rem 1.4rem;
                    color: white;
                    font-family: 'Open Sans';
                    font-style: normal;
                    font-weight: 600;
                    font-size: 14px;
                    line-height: 17px;
                    text-transform: capitalize;
                }
            }
            .share-section{
                width: 80%;
                margin: 0 auto;
                p{
                    font-family: 'Qanelas Soft';
                    font-style: normal;
                    font-weight: 500;
                    font-size: 24px;
                    line-height: 32px;
                    color: #1E2117;
                }
                .share-icons{
                    display: flex;
                    justify-content: space-between;
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
    }

    @media (max-width: 1024px) { 
         width: 95%;
         margin: 0 auto;
         .post-container{
             width: 75%;
         }
         .authors-info-container{
            width: 250%;
         }
     }

    @media (max-width: 770px) { 
        display: block;
        margin: 0 auto;
        width: 100%;
         .post-container{
             width: 100%;
         }
         .authors-info-container{
             display: none;
         }
     }
`;
export default BlogPageWrapper;
