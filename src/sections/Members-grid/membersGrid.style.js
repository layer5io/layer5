import styled from "styled-components";

export const MembersGridWrapper = styled.div`

    .members-list-wrapper{
        padding: 50px 0;
    }
    .members-grid-wrapper{
        padding-bottom: 60px;
        margin-top: 80px;
    }
    @media only screen and (max-width: 912px) {
        .members-page-wrapper{
            padding-bottom: 80px;
        }
    }
    
    .color-legend{
        padding: 0px 20px 20px 20px;
        display: flex;
        justify-content: flex-end;
        
        @media only screen and (max-width: 576px) {
            justify-content: center;
        }
        
        button{
            margin: 0px 10px 10px 10px;
        }  
    }
    .active-filter-color{
            display: inline-block;
            background-color: #00b39f;
            width: 20px;
            height: 20px;
            margin-right: 10px;
    }
    
    .inactive-filter-color{
            display: inline-block;
            background-color: gray;
            width: 20px;
            height: 20px;
            margin-right: 10px;
    }
    .dropdown-overlay{
        z-index: 999;
        color: #00b39f;
    }
    
`;
