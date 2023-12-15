import styled from "styled-components";

export const Container = styled.div`
    max-width: 1170px;
    padding: 0 1rem;
    margin: 5rem auto 0;
    .title {
        text-transform: capitalize;
        text-align: center;
        font-weight: 400;
         span {
            padding: 0 1rem;
            border-radius: 0.25rem;
            background-color: ${(props) => props.theme.secondaryColor};
            color: ${(props) => props.theme.white};
            font-weight: 700;
        } 
    }

    .subtitle {
        text-align: center;
        margin-top: 1rem;
        margin-bottom: 3rem;
    }
`;