import styled from "styled-components";
export const BooksPageWrapper = styled.div`

    .slick-list{
        text-align: center;
        padding: 6rem 2rem !important;
    }

    .slick-arrow{
        display: none !important;
    }
    h2.sub-heading {
        font-weight: 400;
        margin: -1.25rem auto 2rem;
    }
    .slick-slide{
        filter: drop-shadow(0px 0px 8px gray) brightness(0.75);
        .book_image{
            cursor: grab;
        }
        .book_image:active{
            cursor: grabbing;
        }
    }

    .slick-current{
        display: inline-flex !important;
        z-index: 1;
        filter: none;
        justify-content: center;
        > div {
            display: inherit;
        }
        .book_image{
            z-index: 1;
            transform: scale(1.1);
        }
        a{
            cursor: pointer;
            position: absolute;
            top: 0px;
            left: 0;
            bottom: 0;
            right: 0;
        }
    }

    .book_image{
        width: 30rem !important;
        transition: all 0.5s ease-in-out;
    }

    .blog-slider_img{
        img{
            width: 30rem;
            height: inherit;
            max-height: 37.5rem;
            display: block;
            text-align: center;
            margin: auto;
        }
    }

    .slick-dots{
        bottom: -5rem;

        li{
            filter: brightness(0.6);
        }
        li, img{
            width: 5rem;
            height: 7rem;
        }

        .slick-active{
            filter: brightness(1);
        }

    }

    @media screen and (max-width: 1050px){
        .books_caraousel{
            margin-bottom: 4rem;
        }

        .book_image{
            width: 20rem !important;
        }

        .blog-slider_img{
            img{
                width: 20rem;
                max-height: 26rem;
            }
        }
    }

    @media screen and (max-width: 700px){
        .books_caraousel{
            margin-bottom: 4rem;
        }

        .book_image{
            width: 15rem !important;
        }

        .blog-slider_img{
            img{
                width: 15rem;
                max-height: 20rem;
            }
        }

        .slick-dots{
            li, img{
                width: 3.5rem;
                height: 5rem;
                
            }
        }
    }
`;
