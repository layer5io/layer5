import styled from "styled-components";

const SocialLinksWrapper = styled.div`

    .social_icons {
        justify-content: flex-end;

        a {
            margin: 0 0.3rem;
            width: 2.5rem;
            height: 2rem;
            filter: grayscale(1) invert(0.2);

            img {
                width: 2.5rem;
                height: 2rem;
            }

            &:hover {
                filter: grayscale(0) invert(0);
            }
        }

        .mail_icon {
            img {
                padding: 0.1rem;
                border-radius: 0.25rem;
            }
        }

        .youtube_icon, .docker_icon {
            img {
                height: 3rem;
                margin-top: -0.5rem;
            }
        }
    }

    @media screen and (max-width: 575px) {
        .social_icons {
            margin-bottom: 2rem;
            justify-content: center;
        }
    }
`;

export default SocialLinksWrapper;