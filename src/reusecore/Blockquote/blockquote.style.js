import styled from "styled-components";
const BlockquoteStyle = styled.div`

    /* center the blockquote in the page */
    .blockquote-wrapper {
    display: flex;
    /* height: 100vh; */
    padding: 0 10px;
    margin-bottom: 1rem;
    }

    /* Blockquote main style */
    .blockquote {
        position: relative;
        max-width: 620px;
        margin: 10px auto;
        align-self: center;
    }

    /* Blockquote header */
    .blockquote h4 {
        position: relative; /* for pseudos */
        color: ${props => props.theme.primaryColor};
        font-weight: normal;        
        margin: 0;
        border: 2px solid ${props => props.theme.primaryLightColorTwo};
        border-radius:20px;
        padding: 20px;
    }

    /* Blockquote right double quotes */
    .blockquote h4:after {
        content:"";
        position: absolute;
        border: 2px solid ${props => props.theme.primaryLightColorTwo};
        border-radius: 0 50px 0 0;
        width: 60px;
        height: 60px;
        bottom: -60px;
        left: 50px;
        border-bottom: none;
        border-left: none;
        z-index: 3; 
    }

    .blockquote h4:before {
        content:"";
        position: absolute;
        width: 80px;
        border: 6px solid ${props => props.theme.body};
        bottom: -3px;
        left: 50px;
        z-index: 2;
        /* content:"";
        position: absolute;
        width: 80px;
        border: 6px solid ${props => props.theme.primaryColor};
        bottom: -3px;
        left: 50px;
        z-index: 2; */
    }

    /* increase header size after 600px */
    @media all and (min-width: 600px) {
        .blockquote h4 {
            font-size: 1.5rem;
            line-height: 1.2;
        }
    }

    /* Blockquote subheader */
    .person {
        position: relative;     
        margin: 0;
        padding-top: 15px;
        z-index: 1;
        margin-left:140px;
    }
    .title {
        line-height: 1rem;
        position: relative;
        font-size: 1.1rem;
        font-style: italic;
        margin: 0;
        z-index: 1;
        margin-left:140px;
    }
    
`;
BlockquoteStyle.displayName = "BlockquoteStyle";

export default BlockquoteStyle;
