import styled from "styled-components";
export const MeshkitMesheryAdapterLib = styled.div`
    
    img.right {
        width: 25%;
        display: inline;
        position: relative;
        float: right;
    }
    img.left {
        width: 25%;
        display: inline;
        position: relative;
        float: left;
    }
    div.intro {
        padding-left: 3rem;
        padding-right: 3rem;
        font-style: italic;
        font-size: .8rem;
        border-top: 1px dashed ${props => props.theme.primaryLightColor};
        border-bottom: 1px dashed ${props => props.theme.primaryLightColor};
        margin-bottom: 1rem;
        padding-top: 1rem;
        background-color: ${props => props.theme.secondaryLightColorTwo};
        span {
            font-style: normal;
        }
    }

    div.text {
        margin-top: 1rem;
        text-align:left;
        span {
            font-weight: 600;
            font-style: normal;
        }
    }
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
    a {
        color: ${props => props.theme.primaryColor};
        background-color: #eeeeee;
        border-radius: 8px;
        padding-left: .5rem;
        padding-right: .5rem;
        &:hover {
            color: ${props => props.theme.keppelColor}; 
        }
    }
`;
