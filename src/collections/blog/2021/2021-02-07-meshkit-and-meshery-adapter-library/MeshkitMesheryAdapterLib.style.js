import styled from "styled-components";
export const MeshkitMesheryAdapterLib = styled.div`
    

    div.fact {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        color: ${props => props.theme.secondaryColor};
        font-style: italic;
        font-size: 1.3rem;
        font-weight: 600;
        text-align: right;
        border-right: 4px solid ${props => props.theme.secondaryColor};        
        padding-left: 2rem;
        padding-right: 2rem;
        padding-top: 1rem;
        padding-bottom: 1rem;
    }
    
    div.note {
        margin: 1rem;
        padding: 2rem;
        display: flex;
        border: 1px solid ${props => props.theme.primaryLightColor};
        img {
            margin-right: 3rem;
        }
    }
    .centered-text {
        padding-top: 2rem;
        padding-bottom: 2rem;
        font-size: 1.2rem;
        font-weight: 600;
    }
`;
