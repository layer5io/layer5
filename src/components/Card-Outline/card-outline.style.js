import styled from "styled-components";

const CardOutlineWrapper = styled.div`

    margin: 2rem auto;
    display: flex;
    flex: auto;
    justify-content: center;

    .card-outline {
        height: 16rem;
        width: 20rem;
        padding: 1rem 2rem;
        text-align: center;
        position: relative;
        background: ${props => props.theme.grey212121ToWhite};
        border: 1px solid ${props => props.theme.secondaryColor};
        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

        .card-image {
            height: 7rem;
            display: flex;
            justify-content: center;
        }

        .card-link::after {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
        }

        .card-content {
            color: ${props => props.theme.whiteSevenToBlackSeven};
            transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        &:hover {
            background: rgba(0, 211, 169);
            box-shadow: 0px 0px 24px rgba(0,0,0,0.2);

            img {
                filter: grayscale(1) brightness(2.5);
            }

            .card-title, .card-content {
                color: white;
            }
        }
    }
`;

export default CardOutlineWrapper;