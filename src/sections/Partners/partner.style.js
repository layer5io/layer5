import styled from "styled-components";

const PartnerWrapper = styled.section`
    position: relative;
    min-height: 100%;
    top: 0px;
    .partner-container{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        background-color: ${props => props.theme.darkJungleGreenColor};
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
        a{
            display: block;
            height: 100%;
            width: 80%;

        }
    }

    .custom-col{
        display: flex;
        align-items: center;
        justify-content:center;
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
        background-color:rgb(248,248,255);
        text-align:center;
    } 
    .moreInfo-div{
        height:0;
        overflow: hidden;
        transition: all 0.5s ease-in-out;
    }
    .moreInfo-div-active{
        height:28rem;
        padding:1rem 0;
        box-shadow:0 2px 10px rgba(0,0,0,0.4) inset;
        border-bottom-right-radius:1rem;
        border-bottom-left-radius:1rem;
        margin-bottom: 2rem;
    }
    .custom-col-active{
        flex: 0 0 25%;
        max-width: 25%;
        transition: all 0.5s ease-in-out;
        img{
            max-width:80%;
        }
    }
    .container-active{
        margin:0;
        text-align:center;
    }  
    .cont-center{
        text-align:center;
    }
    .parent-cont{
        transition: all 0.5s ease-in-out;
    }
    .parent-cont-active{
        height:28rem;
    }
    @media only screen and (max-width: 1500px) {
        .partner-container{
            .partner-container-body{
                width:70%;
            }
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
            flex: 0 0 30%;
            max-width: 45%;
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
        .custom-col-active{
            flex: 0 0 55%;
            max-width: 55%;
        }
        .custom-col-active-desc{
            flex: 0 0 75%;
            max-width: 75%;
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
            height: 45rem;
            display: flex;
            justify-content: center;
            flex-direction: unset;
        }
        .parent-cont-active{
            height: 45rem;
            display: flex;
            justify-content: center;
        }
        .parent-cont{
            display: flex;
            justify-content: center;
        }
        .mobview{
            flex: 0 0 85%;
            max-width: 85%;
            width: 100%;
        }
    }
    @media only screen and (max-width:576px){
        .custom-col{
            flex: 0 0 10%;
            max-width: 50%;
        }
        .custom-col-active{
            flex: 0 0 85%;
            max-width: 85%;
        }
        .custom-col-active-desc{
            flex: 0 0 100%;
            max-width: 100%;
        }
        .acc-cont{
            display:flex;
            flex-direction:column;
            align-items:center;
        }
        .row-elem{
            transition: height 0.5s ease-in-out;
            display:flex;
            flex-direction:unset;
            width:100%;
        } 
        .mobview{
            flex: 0 0 100%;
            max-width: 100%;
            width: 100%;
        }
        .moreInfo-div-active{
            height: 45rem;
            display: flex;
            justify-content: center;
        }
        .parent-cont-active{
            height: 45rem;
            display: flex;
            justify-content: center;
        }
        .parent-cont{
            display: flex;
            justify-content: center;
        }
    }
    @media only screen and (max-width:476px){
        .custom-col{
            flex: 0 0 10%;
            max-width: 50%;
        }
        .mobview{
            flex: 0 0 100%;
            max-width: 100%;
            width: 100%;
        }
        .acc-cont{
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .moreInfo-div-active{
            height: 45rem;
            display: flex;
            justify-content: center;
        }
        .parent-cont-active{
            height: 45rem;
            display: flex;
            justify-content: center;
        }
        .parent-cont{
            display: flex;
            justify-content: center;
        }
    }
    @media only screen and (max-width:376px){
        .custom-col{
            flex: 0 0 50%;
            max-width: 50%;
        }
        .acc-cont{
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        img{
            width:100%;
        }
        .custom-col{
            flex: 0 0 10%;
            max-width: 50%;
        }
        .mobview{
            flex: unset;
            max-width: unset;
            width: 100%;
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
    }
`;

export default PartnerWrapper;
