import styled from "styled-components";
export const ProjectWrapper = styled.div`
    padding-bottom: 5rem;
    h3{
        color: ${props => props.theme.DarkTheme ? "rgba(255,255,255,0.6)" : props.theme.primaryLightColor};  
        margin: 0;
        padding: 0;
        font-weight: 500;
        text-align:center;
        img{
            width: 3rem;
            position: relative;
            top: 10px;
        }
    }
    .title{
        margin: 0px;
            padding: 0px;
            font-weight: 400;
            font-size: 2rem;
            line-height: 2rem;
            
            span{
                font-weight: 500;
                color: ${props => props.theme.secondaryColor};
            }
        
     
    }
    
    .project-text{
        font-weight: 300;
        margin-bottom: 5rem;
        margin-top: 0;
    }
    .project__block__wrap{
        display: flex;
        flex-wrap: wrap;
    }
    .project__block{
        flex-basis: 33%;
    }
    .project__grid{
        margin: 100px 0;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(100px,1fr));
        grid-template-rows: repeat(4, 100px);
        grid-gap: 1rem;   
        grid-auto-flow: row;
    }
    .project__card{
        box-shadow: 0px 0px 10px ${props => props.theme.DarkTheme ? "#00d3a9" : "lightgrey"};
        background-color: ${props => props.theme.DarkTheme ? "#212121" : "#FFFFFF"};
        border-radius: 4%;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.6s;
        &:hover{
            background-color: ${props => props.theme.secondaryColor};
            img {
                filter: brightness(0) invert(1);
            }
            h5 {
                color: white;
            }
            transition: 0.4s;
            transform: scale(1.05);
        }
    }
    .project__card-container{
        max-width: 100%;
        height: 10rem;
        width: 12rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        img{
            max-width: 100%;
            max-height: 100%;
        }
        h5{
            font-weight: 600;
            text-align: center;
        }
        
    }
    .project__card-container_meshery{
        height: 13rem;
    }
    .project__card-container_one{
        height: 8rem;
    }
    .project__card-container_nighthawk{
        display: flex;
        height: auto;
        width: 100%;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        img{
            width: 6.25rem;
            align-self: center;
        }
        h5{ 
            align-self: center;
            margin-left: 2rem;
        }
    }
    //MeshMap
    .project__card-container_meshmap{
        justify-content: center;
        align-items: center;
        img{
            height: 6.25rem;
        }
        h5{
            margin-top: .8rem;
        }
    }

    // Landscape
    .project__card.one{
        grid-column: 2/3;
        grid-row: 1/3;
        img{
            width: 90px;
            align-self: center;
        }
        h5{
            margin-top: 10px;
        }
    }
    // Meshery
    .project__card.two{
        grid-column: 3/6;
        grid-row: 1/6;
        img{
            align-self: center;
        }
        h5{
            font-size: 2rem;
            font-weight: 600;
            margin-top: 10px;
        }
    }
    //Image Hub
    .project__card.three{
        grid-column: 6/8;
        grid-row: 4/6;
        img{
            width: 90px;
            align-self: center;
            margin-top: 20px;
        }
        h5{
            margin-bottom: 25px;
        }
    }
    //Service Mesh Interface Conformance
    .project__card.four{
        grid-column: 6/8;
        grid-row: 1/4;
        img{
            width: 150px;
            align-self: center;
            margin-top: -45px;
            margin-bottom: 45px;
        }
        h5{
            width: 150%;
            align-self: center;
        }
    }
    // Service Mesh Performance
    .project__card.five{
        grid-column: 1/2;
        grid-row: 1/3;
        img{
           width: 180px;
           align-self: center;
        }
    }
    // Distributed Performance Management of Service Meshes
    .project__card.six{
        grid-column: 1/3;
        grid-row: 6/8;
    }
    .image{
        margin: 0 auto;
        @media only screen and (max-width: 991px) {
            padding-left:20%;
        }
        @media only screen and (max-width: 741px) {
            padding-left: 30%;
        }
        
    }
    .project__card.seven{
        grid-column: 3/6;
        grid-row: 6/8;
        img{
            width: 6rem;
            align-self: center;
            margin: auto;

            @media only screen and (min-width: 780px) {
                align-self: flex-start;
            } 
        }
        h5{
            align-self: center;
            @media only screen and (min-width: 780px) {
                padding-top:  0px;
            }
        }
    }
    .project__card-container-seven{
        max-width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        img{
            align-self: center;
            max-width: 100%;
            max-height: 100%;

        }
        h5{
            top: 0;
            font-weight: 600;
            text-align: center;
            
        }
        @media only screen and (min-width: 741px) {
            width: 80%;
            place-content: center;
        }
        
    }
    .project__card.eight{
        grid-column: 6/8;
        grid-row: 6/8;
        img{
            width: 90px;
            align-self: center;
            margin-top: 8px;
            @media only screen and (min-width: 780px) {
                align-self: flex-start;
            } 
        }
        h5{
            align-self: center;
            margin-top: 1rem;
            @media only screen and (min-width: 780px) {
                align-self: flex-end;
            }
        }
    }
    .project__card-container-eight{
        max-width: 100%;
        height: 10rem;
        width: 12rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        img{
            max-width: 100%;
            max-height: 100%;
        }
        h5{
            font-weight: 600;
            text-align: center;
            
        }
        @media only screen and (min-width: 741px) {
            width: 80%;
            place-content: center;
        }
        
    }
    .project__card.nine{
        grid-column: 1/3;
        grid-row: 3/6;
    }
    @media only screen and (max-width: 1200px) {
        .project__card-container_nighthawk{
            img{
                width: 5rem;
            }
            h5{
                margin-left: 1rem;
            }
        }
       .project__card.four h5{
        width: 100%;
       }
       .project__card h5{
        font-size: 15px;
        }
        
    }
    @media only screen and (max-width: 991px) {
        padding: 5px 0 0 0;
        .project-text{
        }
        .project__card h5{
            font-size: 12px;
        }
        .project__card.two{
            img{
                height: 100px;
                width: 100px;
            }
            h5{
                font-size: 25px;
            }
        }
        .project__card.three img{
            width: 70px;
        }
        .project__card.four h5{
            width: 100%;
            font-size: 12px;
        }
        
     }
     @media only screen and (max-width: 740px) {
        .project__grid{
            margin: 50px 0;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
        }
        .project__card-container_meshery{
            height: 10rem;
        }
        .project__card-container_one{
            height: 10rem;
            img{
                margin-top: 1.5rem;
            }
        }
        .project__card-container_nighthawk{
            flex-direction: column;
            justify-content: space-around;
            max-width: 100%;
            height: 10rem;
            width: 12rem;
            img{
                width: 8.12rem;
            }
            h5{ 
                width: 100%;
                margin-left: 0;
            }
        }
        .project__card {
            h5{ 
                width: 100%;
                font-size: 13px;
                font-weight: 600;
                padding-bottom: 10px;
            }
            img{
                width: auto;
                height: 80px;
                padding-top: 10px;
            }
        }
        .project__card.two{
            img{
                align-self: center;
                margin-top: 0px;
                margin-bottom: 0px;
            }
            h5{ 
                font-size: 13px;
                font-weight: 600;
                margin-top: 10px;
            }
        }
        .project__card.three h5{
            margin-bottom: 0;
        }
        .project__card.four img{
            margin-top: 0px;
            margin-bottom: 0px;
        }
        .project__card.seven{
            img{
                margin-top: 15px;
                width: 150%;
            }
            h5{ 
                margin-top:30px;
            }
        }
        .project__card.eight{
            img{
                margin-top: 10px;
            }
            h5{ 
                margin-top:35px;
            }
        }
         
        
        
    }
    @media only screen and (max-width: 568px) {
        padding: 0 0 40px 0;
        h3{
            font-size: 1.25rem;
        }
    }
`;