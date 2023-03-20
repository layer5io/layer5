import styled ,{ keyframes } from "styled-components";


const fadeOut = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const PartnerWrapper = styled.section`
    position: relative;
    min-height: 100%;
    top: 0px;
    .partner-container{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        background-color:${props => props.theme.grey212121ToGreen1E2117};
        color: white;
        padding: 4rem 0;
        .partner-container-head{
            padding:2rem;
            text-align: center;
            h1{
                color:white;
            }
            
        }
        .partner-container-body{
            width:60%;
            display: flex;
            justify-content: center;
            padding:2rem;
            flex-direction: column;
        }
    }
    
    .container {
        position: relative;
        text-align: justify;
        margin: 0 2rem;
        max-width: 1280px;
        z-index: 1;
        padding: 1em;
        h1 {
            font-weight: 5;
            text-algin: left;
            font-size: 35px;
        }
    }

    .heading {
        text-align: center;
        margin-bottom: 30px;
        margin-top: 30px;
        font-weight: 500;
        font-size: 2.75rem;
    }
    h2 {
        font-weight: 600;
        margin: 1rem 0rem;
    }
    .img1 {
        width: 256px;
        padding:0 1rem;
        a{
            display: block;
            height: 100%;
            width: 100%;

        }
    }

    .custom-col{
        display: flex;
        align-items: center;
        width: 100%;
        transition: all 0.5s ease-in-out;
    }
    .para {
        text-align: center;
        font-weight: bold;
    }
    .btn {
        font-size: inherit;
        min-width: 240px;
        max-width: 300px;
        width: 100%;
        float: center;
    }
    .btn-section {
        display: flex;
        text-align: center;
        margin: auto;
        vertical-align: middle;
    }
    .partner-button-cont{
        text-align: center;
        padding:2rem;
        margin:1rem;
        .partner-btn-cont-head{
            padding: 2rem;
        }
        .partner-btn-cont-body{
            padding: 1rem;
        }
    }
    .partner-button{
        text-align: center;
    }
    .custom-btn{
        margin:1rem 0;
    }
    .academic-container{
        display: flex;
        justify-content: center;
        padding: 2rem;
        margin: 1rem;
        .acad-container-body{
            width:78%;
            text-align: center;
        }
    }
    .partner-btn{
        color:white;
        img{
            padding: 0 0.5rem;  
            width:60px;
            height:40px; 
        }
        :hover{
            opacity:0.9;
        }
    }
    .cont-row-reverse{
        flex-direction: row-reverse;
    }
    .cont-row{
        flex-direction: row;
    }

    .readmeBtn {
		display: flex;
		background: transparent;
		border: none;
		justify-content: center;
		align-items: center;
		font-size: 1.125rem;
		cursor: pointer;
		transition: 0.5s ease-in all;
        padding:1rem 0;
		&:hover {
			color: ${props => props.theme.primaryLightColorTwo};
		}
	}
    .row-elem{
        transition: all 0.5s ease-in-out;
        background-color: rgba(0,179,159,0.1);
        display: flex;
        height: 0rem;
        justify-content: center;
        flex-direction:column;
        h1{
            font-weight: 600;
        }
    } 
    .moreInfo-div{
        height:0;
        overflow: hidden;
        transition: all 0.5s ease-in-out;
        
    }
    .moreInfo-div-active{
        height: 34rem;
        border-bottom-right-radius: 1rem;
        border-bottom-left-radius: 1rem;
    }
    .parent-cont{
        transition: all 0.5s ease-in-out;
        height: 0rem;
        width: 100%;
    }
    .parent-cont-active{
        height: 34rem;
        animation: 0.35s ${fadeOut};
        width: 100%;
    }
    .cont-vert-align{
        margin:0;
        padding:0 4rem;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        height: 100%;
    }
        
    .par-cont{
        margin: 1rem 0;
    }
    .sub-cont{
        height: 100%;
        width: 100%;
    }
    .content-head{
        padding: 3rem;
    }

    .anchor:before{ 
        display: block;
        content: " ";
        height: 50px;
        margin: -50px 0 0;
     }
     
    @media only screen and (max-width: 1500px) {
        .partner-container{
            .partner-container-body{
                width:70%;
            }
        }
    }
    @media only screen and (max-width: 1200px) and (min-width: 1101px) {
        .moreInfo-div-active{
            height: 38rem;
            padding:0;
            display: flex;
            justify-content: center;
            flex-direction: column;
        }
        .parent-cont-active{
            height: 38rem;
            display: flex;
            justify-content: center;
        }
        
    }
    @media only screen and (max-width: 1100px) {
        .partner-container{
            .partner-container-body{
                width:90%;
            }
        }
        .academic-container{
            .acad-container-body{
                width:90%;
            }
        }
        .container{
            margin: 0;
        }
        .moreInfo-div-active{
            height: 40rem;
            padding:0;
            display: flex;
            justify-content: center;
            flex-direction: column;
        }
        .parent-cont-active{
            height: 40rem;
            display: flex;
            justify-content: center;
        }
        .content-head{
            padding: 2rem 3rem;
        }
    }
    @media only screen and (max-width: 768px) {
        .row-elem{
            transition: all 0.5s ease-in-out;
            display:flex;
            flex-direction:column;
            width:90%;
        } 
        .partner-container{
            .partner-container-body{
                width:100%;
                padding:1rem;
            }
            .partner-button{
                display: none;
            }
        }
        .academic-container{
            padding:0rem;
            .acad-container-body{
                width:100%;        
            }
        }   
        .cont-row-reverse{
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .cont-row{
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .container{
            padding:1rem 0;
            margin:1rem 0;
        }
        .custom-col{
            display:flex;
            width: 100%;
            justify-content:center;
        }
        .partner-button-cont{
            padding:2rem 0;
            margin:1rem 0;
            .partner-btn-cont-head{
                padding: 2rem 0;
            }
            .partner-btn-cont-body{
                padding: 1rem 0;
            }
        }
        .acc-cont{
            display:flex;
            flex-direction:column;
            align-items:center;
            margin: 3rem 0;
        }
        .moreInfo-div{
            height:0;
            overflow: hidden;
            transition: all 0.5s ease-in-out;
            flex-direction: unset;
        }
        .moreInfo-div-active{
            height: 46rem;
            padding:0;
            display: flex;
            justify-content: center;
            flex-direction: column;
        }
        .parent-cont-active{
            height: 46rem;
            display: flex;
            justify-content: center;
        }
        .parent-cont{
            display: flex;
            justify-content: center;
        }
        .mobview{
            width: 85%;
            margin: auto;
        }
        .img1 {
            width: 211px;
        }
        .content-head{
            padding: 2rem;
            text-align: center;
        }
        .mob-col{
            flex: 0 0 35%;
            max-width: 35%;
        }
    }
    @media only screen and (max-width:576px){
        .acc-cont{
            display:flex;
            flex-direction:column;
            align-items:center;
        }
        .row-elem{
            transition: height 0.5s ease-in-out;
            display: flex;
            flex-direction: column;
            width: 100%;
        } 
        .mobview{
            width: 100%;
        }
        .moreInfo-div-active{
            height: 44rem;
            display: flex;
            justify-content: center;
        }
        .parent-cont-active{
            height: 44rem;
            display: flex;
            justify-content: center;
        }
        .parent-cont{
            display: flex;
            justify-content: center;
        }
        .mob-col{
            flex: 0 0 35%;
            max-width: 35%;
        }
        .container{
            padding:1rem;
            margin: 0;
        }
        .img-1-mob{
            padding:0 0.5rem;
        }
        .content-head{
            padding: 2rem 1rem;
            text-align: center;
        }
    }
    @media only screen and (max-width:476px){
        .custom-col{
           width: 100%;
        }   
        .mobview{
            width: 100%;
        }
        .acc-cont{
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .moreInfo-div-active{
            height: 60rem;
            display: flex;
            justify-content: center;
        }
        .parent-cont-active{
            height: 60rem;
            display: flex;
            justify-content: center;
        }
        .parent-cont{
            display: flex;
            justify-content: center;
        }
        .mob-col{
            flex: 0 0 45%;
            max-width: 45%;
        }
        .content-head{
            flex-direction: column;
        }
        .img-1-mob{
            padding: 1rem 4rem;
        }
        .img1 {
            width: 256px;
        }
    }
    @media only screen and (max-width:376px){
        .mob-col{
            flex: 0 0 50%;
            max-width: 50%;
        }
        .acc-cont{
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 2rem 0;
        }
        .mobview{
            flex: unset;
            max-width: unset;
            width: 100%;
        }
        .moreInfo-div-active{
            height: 70rem;
            display: flex;
            justify-content: center;
        }
        .parent-cont-active{
            height: 70rem;
            display: flex;
            justify-content: center;
        }
        .parent-cont{
            display: flex;
            justify-content: center;
        }       
        .container{
            padding: 1rem;
        }
        
    }
`;

export default PartnerWrapper;
