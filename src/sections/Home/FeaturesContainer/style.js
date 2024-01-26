import styled from "styled-components";

export const Container = styled.div`
    max-width: 1170px;
    padding: 0 1rem;
    margin: 5rem auto 0;
    .title {
        text-transform: capitalize;
        text-align: center;
        font-weight: 400;
        color: ${props => props.theme.greyDEE3DEToGreen3C494F};
         span {
            color: ${(props) => props.theme.text};
            font-weight: 700;
        } 
    }

    .subtitle {
        text-align: center;
        margin-top: 1rem;
        margin-bottom: 3rem;
        font-size: 1.5rem;
    }
`;