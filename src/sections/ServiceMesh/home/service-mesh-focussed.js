import styled from "styled-components";

const MeshFocusWrapper = styled.div`
   .main-cont {
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
   } 
    
    .head-cont-2{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        padding:20px 10px;
    }
    .head-cont-2 h1{
        display:flex;
        flex-direction:column;
        padding:15px;
        margin:10px;
    }
    .card-cont-1{
        display:flex;
        width:60%;
        margin:30px;
        background-color: ${props => props.theme.secondaryLightColor}
    }
    .img-col img{
        width:350px;
        height:100%;
    }
    .content-col
    {
        width:65%;
        padding:30px 60px;
        img{
            width:60px;
            height:60px;
        }
        
        .content
        {
            font-family:"Qanelas Soft";
            padding:30px 0px;
            font-size:18px;
            font-weight:300;
            font-style:oblique;
        }
        Button {
            background:none;
            color:${props => props.theme.secondaryColor};
            font-size:20px;
            border-bottom:3px solid ${props => props.theme.secondaryColor};
            padding:0px;
            min-width:unset;
            border-radius:0px;
        }
        .FaArrowRight {
            color:${props => props.theme.secondaryColor};
            margin:-5px 10px;
        }
        Button:hover {
            background-color:${props => props.theme.secondaryColor};
            color:black;
            
        }
        .FaArrowRight {
            color:${props => props.theme.secondaryColor};
            margin:-5px 10px;
        }
    }
    @media only screen and (max-width:1400px){
        .card-cont-1{
            width:80%;
        }
    }
    @media only screen and (max-width:1000px){

        .card-cont-1{
            width:93%;
            margin:10px;
            flex-direction:column;
            justify-content:center;align-items:center;
            .img-col{
                width:unset;
            }
            .content-col
            {
                width:100%;
                padding:30px 30px;
            }
        }
        
    }
    @media only screen and (max-width:500px){

    .card-cont-1{
        width:93%;
        margin:10px;
        flex-direction:column;
        justify-content:center;align-items:center;
        .img-col{
            width:unset;
        }
        .content-col
        {
            width:100%;
            padding:30px 30px;
            img{
                width:40px;
                height:40px;
            }
        }
}

}
`;
 
export default MeshFocusWrapper;