import styled from "styled-components";

const MeshFocusWrapper = styled.div`
   .main-cont {
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
   } 
    
    .head-cont-2{
        text-align:center;
        padding:2rem 1rem;
    }
    
    .card-cont-1{
        display:flex;
        width:60%;
        margin:4rem;
        background-color: ${props => props.theme.secondaryLightColor}
    }
    .img-col img{
        width:350px;
        height:100%;
    }
    .content-col
    {
        width:68%;
        padding:4rem;
        img{
            width:5rem;
            height:4rem;
        }
        
        .content
        {
            font-family:"Qanelas Soft";
            padding:2rem 0rem;
            font-size:1.25rem;
            font-weight:300;
            font-style:oblique;
        }
        Button {
            background:none;
            color:${props => props.theme.secondaryColor};
            font-size:1.2rem;
            border-bottom:3px solid ${props => props.theme.secondaryColor};
            padding:0px;
            min-width:unset;
            border-radius:0px;
        }
        
        Button:hover {
            background-color:${props => props.theme.secondaryColor};
            color:black;
            
        }

    }
    @media only screen and (max-width:1400px){
        .card-cont-1{
            width:80%;
        }
    }
    @media only screen and (max-width:1050px){

        .card-cont-1{
            width:93%;
            margin:2rem;;
            flex-direction:column;
            justify-content:center;align-items:center;
            .img-col{
                width:unset;
            }
            .content-col
            {
                width:100%;
                padding:1rem;
            }
        }
        
    }
    @media only screen and (max-width:500px){

    .card-cont-1{
        width:93%;
        margin:2rem;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        .img-col{
            width:unset;
        }
        .content-col
        {
            width:100%;
            padding:1rem;
            img{
               width:3rem;
                height:2.5rem;
            }
        }
}

}
`;
 
export default MeshFocusWrapper;