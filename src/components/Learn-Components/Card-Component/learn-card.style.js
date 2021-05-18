import styled from "styled-components";

const CardWrapper = styled.div`
    max-width:350px;
    margin: 0 1rem;
    border-radius: 1rem;
    @media(max-width: 1300px){
        margin: 1rem;
    }
    @media(max-width: 760px){
        margin: 1rem 0;
    }
`;

export default CardWrapper;