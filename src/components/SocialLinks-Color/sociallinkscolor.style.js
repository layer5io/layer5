import styled from "styled-components";

const SocialLinksWrapper = styled.div`

    .social_icons {
        justify-content: flex-end;

        a {
            margin: 0 0.3rem;
            width: 2.5rem;
            filter: grayscale(1) invert(0.25);

            img {
                width: 2rem;
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
                padding: 0.1rem;
                border-radius: 0.25rem;
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