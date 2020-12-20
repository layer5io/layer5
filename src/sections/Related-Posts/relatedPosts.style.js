import styled from "styled-components";

const RelatedPostsWrapper = styled.div`
    .widgets-title{
        margin: 1rem 0 2rem 0.5rem;
        h3{
            font-size: 1.5rem;
        }
    }
    @media screen and (max-width:500px){
        .widgets-title{
            h3{
                text-align: center;
            }
        }
    }

    .allBlogs{
        height:21.3rem;
    }

    .allBlogs_card{
        display: inline-block;
        height: inherit;
        width: inherit;
        box-shadow: 0px 1px 10px -6px ${props => props.theme.shadowLightColor};
        transition: box-shadow 0.3s;

        a{
            height: inherit;
            width: inherit;
            font-size: 1.8rem;
            font-weight: 600;
            display: flex;
            justify-content: center;
            align-items: center;
            svg{
                margin-left: 0px;
                font-size: 2.2rem;
                transition: all 0.3s;
            }
        }
        &:hover{
            box-shadow: 0px 1px 10px -2px ${props => props.theme.shadowLightColor};
            h2{
                color: #00B39F;
            }
            svg{
                color: #00B39F;
                margin-left: 3px;
                transform: scale(1.3);
            }
        }
    }

    .cardCol{
        padding: 0 0.2rem;
        margin: auto 1rem;
    }
    @media screen and (max-width: 992px) {
        .cardCol{
            padding: 0;
            margin: auto;
        }
    }

    .slick-list{
        margin: 1.2rem;
        padding-top: 2px;
    }
    @media screen and (max-width: 992px) {
        .slick-list{
            margin: 0;	
        }
    }

    .slick-arrow{
        width: 2rem;	
        height: 3rem;	
    }	
    .slick-arrow:before{	
        color: rgba(108, 118, 123, 1);
        font-size: 6rem;
        display: inline-block;
        height: 3rem;
    }
    .slick-arrow:hover:before{	
        color: rgba(0,179,159,1);	
    }
    .slick-prev:before{	
        content: "‹";	
        line-height: 0;
    }
    .slick-next:before{	
        content: "›";
        line-height: 0;
    }
    .slick-disabled{	
        visibility: hidden;
    }
    .slick-dots li button:before {
        opacity: 0.5;
        font-size: 10px;
        color: rgba(0,179,159,1);
    }
    .slick-dots li.slick-active button:before {
        opacity: 1;
        color: rgba(0, 153, 136,1);
    }
`;


export default RelatedPostsWrapper;
