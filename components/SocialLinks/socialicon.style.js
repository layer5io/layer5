import styled from "styled-components";

const SocialIconWrapper = styled.div`

    .social_icons {
        justify-content: flex-end;

        a {
            margin: 0 0.3rem;
            width: 2.5rem;
            height: 2rem;
            filter: grayscale(1) invert(0.35);

            img {
                width: 2.5rem;
                height: 2rem;
            }

            &:hover {
                filter: grayscale(0) invert(0);
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

export default SocialIconWrapper;