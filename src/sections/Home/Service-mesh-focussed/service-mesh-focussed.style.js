import styled from "styled-components";

const MeshFocusWrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    align-content:center;
    margin: 2rem; 
    
    .heading {
        text-align: center;
        margin: 1rem;
    }

    .quote-icon{
            width: 10vw;
            opacity: .1;
            min-width: 60px;
            top: 4rem;
            margin-bottom: -4rem;
            
    }
    .quote {
        margin-bottom: 4rem;
    }
    .book {
        object-fit: contain;
        margin: auto;
        padding: 4rem;
    }
    p {
        font-style: italic;
    }
    @media only screen and (max-width:992px){
        .book {
            padding: 1rem;
        }
    }
    @media only screen and (max-width:786px){
        .book {
            padding: 0rem;
        }
    }
    @media only screen and (max-width:500px){

    }

}
`;
 
export default MeshFocusWrapper;