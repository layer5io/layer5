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
        font-size: 20px;
        font-style: italic;
    }
    .book {
        object-fit: contain;
        margin: auto;
        padding: 0rem;
        height: 100%;
        border-radius: .25vw;
        /* Shadow */
        background: #F8F8F8; 
        border: solid #BDBDBD 0; 
        /* box-shadow: 0px 1.2vw 4vw -1vw rgba(0, 0, 0, 0.6); */
        box-shadow: -20px 3px 20px rgba(0, 0, 0, 0.5)  ; 
        -webkit-box-shadow: -20px 3px 20px rgba(0, 0, 0, 0.5)  ; 
        -moz-box-shadow: -20px 3px 20px rgba(0, 0, 0, 0.5)  ; 
        transform: translateZ(-1000px) scale(1.1,1.1) perspective(125vw) rotateX(-10deg) rotateY(20deg); 
     
        /* Skew */
        -webkit-transform: scale(1,1) rotate(0)skew(2,-2deg) translate(0,0); 
        -moz-transform: scale(1,1) rotate(0)skew(2,-2deg) translate(0,0); 
        transform-origin: 50% 50%; 
    }
    .book-col {
        padding: 4rem;
    }
    .epic {
        font-size: 1.25rem;
        font-weight: 300;
        margin: 0px
    }
    .epic2 {
        font-size: 1.5rem;
        font-weight: 400;
        margin: 0px;
    }
    .book_btn{
       padding-right: 3rem;
       text-align: center;
       color: black;
    }
    .icon-right{
        position: relative;
        left: 6.5rem;
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