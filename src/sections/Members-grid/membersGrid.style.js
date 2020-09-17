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
        float: right;
        .active-filter-color{
            display: inline-block;
            background-color: #00b39f;
            width: 20px;
            height: 20px;
        }
    }
    
`;
