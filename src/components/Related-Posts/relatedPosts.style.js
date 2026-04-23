import styled from "styled-components";

const RelatedPostsWrapper = styled.div`
    Button:hover{
        box-shadow: none;
    }
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

    .cardCol{
        padding: 0 1rem;
    }

    .slick-list{
        padding-top: 2px;
        text-align: center;
    }

    .slick-arrow{
        width: 4.8rem;	
        height: 5rem;
        z-index: 1;
    }	
    .slick-arrow:before{	
        color: ${props => props.theme.primaryColor};
        font-size: 6rem;
        display: inline-block;
        height: 3rem;
    }
    .slick-arrow:hover:before{	
        color: ${props => props.theme.secondaryColor};
    }
    .slick-prev:before{	
        content: "‹";	
        line-height: 0;
        opacity: 1;
        margin-left: -3rem;
    }
    .slick-next:before{	
        content: "›";
        line-height: 0;
        opacity: 1;
        margin-left: 2rem;
    }
    .slick-disabled{	
        visibility: hidden;
    }
    .slick-dots li:before{
        content: "";
    }
    .slick-dots li button:before {
        font-size: 0.6rem;
        color: ${props => props.theme.secondaryColor};
    }
    .slick-dots li.slick-active button:before {
        opacity: 1;
        color: ${props => props.theme.secondaryColor};
    }

    .post-meta-block{
        text-align: left;
    }

    .post-content-block{
        height: 10rem;

        .post-title {
            text-align: left;
        }
    }

    .allBlogs{
        height: 22rem;
    }

    .allBlogs_card{
        display: inline-block;
        height: inherit;
        width: inherit;
        border-radius: 0.5rem;
        box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);
        transition: box-shadow 0.3s;

        h2{
            padding: 0.5rem 0;
        }

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
                padding: 0.5rem 0 0.3rem;
                font-size: 4rem;
                transition: all 0.3s;
            }
        }
        &:hover{
            box-shadow: 0px 2px 15px 4px rgba(0,0,0,0.2);
            h2{
                color: ${props => props.theme.secondaryColor};
            }
            svg{
                color: ${props => props.theme.secondaryColor};
                margin-left: 3px;
                transform: scale(1.3);
            }
        }
    }

    @media screen and (min-width: 721px) and (max-width: 992px) {
        .cardCol{
            padding: 0 1rem;
            margin: auto;
        }
        .slick-list{
            margin: 0;	
        }
    }

    @media screen and (min-width: 1200px) {
        .post-content-block {
            height: 8rem;
        }

        .allBlogs{
            height: 19.5rem;
        }
    }

    @media screen and (max-width: 720px) {
        .cardCol{
            padding: 0 0.75rem;
            margin: auto;
            width: 100%;
        }

        .slick-list{
            margin: 0;
            padding: 2px 0;
            overflow: hidden;
        }
        .slick-track {
            display: flex;
            align-items: stretch;
        }
        .slick-slide {
            height: auto;
            > div {
                height: 100%;
            }
        }

        .slick-arrow{
            width: 3rem;
            height: 4rem;
        }
        .slick-arrow:before{
            font-size: 4rem;
        }

        .slick-prev:before{
            margin-left: -1.5rem;
        }

        .slick-next:before{
            margin-left: 1rem;
        }

        .slick-dots {
            bottom: -35px;
            padding: 0;
            margin: 0;
        }
        .slick-dots li {
            margin: 0 4px;
        }
        .slick-dots li button:before {
            font-size: 0.8rem;
        }

        .post-content-block{
            height: 8rem;
        }

        .allBlogs{
            height: 19.5rem;
        }
    }

    @media screen and (max-width: 384px){
        .post-content-block{
            height: 10rem;
        }

        .allBlogs{
            height: 22rem;
        }
    }
`;


export default RelatedPostsWrapper;
