import styled from "styled-components";


const ServiceMeshWrapper = styled.div`                
        background-color: #000000;
        background-image: linear-gradient(#000000, ${props => props.gradient ? "#898a91" : "#000000"});
        text-align: center;
        align-items: center;
        width: 100%;
        margin: 0;
        padding: 0;
        padding-top: 80px;

        *{
            font-family: "Qanelas Soft","Qanelas Soft", "Open Sans", sans-serif;
            color: #ffffff;

        }

        .description{
            font-size: 20px;
            line-height: 1.5;
            font-weight: 150;
        }
        h1{
            font-size: 45px;
            margin-bottom: 5px;
            line-height: 1.5;
        }

        .bookImage{
            margin-top: 20px;
            margin: auto;
            height: 430px;
            object-fit: contain;
            max-width: 95%;
        }

        @media only screen and (max-width: 720px) {
            padding-top: 50px;
            *{
                padding: 10px;
            }
        }
`;

export default ServiceMeshWrapper;
