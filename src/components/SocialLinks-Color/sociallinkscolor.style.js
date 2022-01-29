import styled from "styled-components";

const SocialLinksWrapper = styled.div`

    .social_icons {
        justify-content: flex-end;

        a {
            margin: 0 0.3rem;
            width: 2.5rem;
            filter: grayscale(1) invert(0.25);

            img {
                width: 100%;
            }

            &:hover {
                filter: grayscale(0) invert(0);
            }
        }
        .github:hover {
            filter: grayscale(0) invert(1);
        }
        .mail_icon {
            img {
                margin-top: 0.1rem;
                width: 2rem;
                padding: 0.1rem;
                border-radius: 0.25rem;
            }
        }
        .youtube_icon{
            img{
            width: 2.2rem;
            }
        }
        .docker_icon{
            img{
            width: 2.2rem;
            }
        }
        .gatsby-image-wrapper{
            img{
                object-fit: contain;
            }
        }

    }


    @media screen and (max-width: 575px) {
        .social_icons {
            margin-bottom: 2rem;
            justify-content: center;
            a{
                margin-bottom: 15px;
            }
        }
        
    }
`;

export default SocialLinksWrapper;
