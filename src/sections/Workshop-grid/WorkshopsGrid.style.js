import styled from "styled-components";
export const WorkshopPageWrapper = styled.div`

    .header{
        display: block;
        width: 100%;
        height: 100%;
        margin-top: 200px;
        text-align: center;
        text-transform: uppercase;
        font-size: 25px;
        line-height: 48px;
        font-weight: bold;
    }

    .workshop-list-wrapper{
        padding: 50px 0;
    }
    .workshop-grid-wrapper{
        padding-bottom: 60px;
        margin-top: 80px;
    }

    .workshop-grid-card{
        width: 100%;
        display: block;
        height: 400px;
        border-radius: 5px;
        box-shadow: 0px 1px 5px rgba(0,0,0,0.2);
        transition: 0.5s ease-in-out all;

        &:hover{
            box-shadow: 0px 5px 20px rgba(0,0,0,0.2);
        }
    }

    @media only screen and (max-width: 912px) {
        .workshop-page-wrapper{
            padding-bottom: 80px;
        }
    }
`;
