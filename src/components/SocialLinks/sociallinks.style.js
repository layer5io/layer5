import styled from "styled-components";

const SocialLinksWrapper = styled.div`

    .social_icons {
        justify-content: flex-end;
        filter: invert(80%);
    }

    @media screen and (max-width: 575px) {
        .social_icons {
            margin-bottom: 2rem;
            justify-content: center;
        }
    }
`;

export default SocialLinksWrapper;