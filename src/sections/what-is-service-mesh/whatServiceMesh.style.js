import styled from "styled-components";


const ServiceMeshWrapper = styled.div`                
        background-color: #000000;
        background-image: linear-gradient(#000000, ${props => props.gradient ? "#898a91" : "#000000"});
        text-align: center;
        align-items: center;
        width: 100%;
        margin: 0;
        padding: 0;
        padding-top: 95px;

        *{
            font-family: "Qanelas Soft","Open Sans", sans-serif;
            color: #ffffff;

        }

        .description{
            font-size: 20px;
            line-height: 1.5;
        }
        h1{
            font-size: 45px;
            margin-bottom: 20px;
        }

        .bookImage{
            margin-top: 20px;
            margin: auto;
            height: 430px;
            object-fit: contain;
        }
`;

export default ServiceMeshWrapper;
