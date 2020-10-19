import styled from "styled-components";

const CommunitySectionWrapper = styled.div`
    .community-section-wrapper{
        padding: 50px 0;
    }
    .container .row {
        margin-left: -0.75rem;
        margin-right: -0.75rem;
    }
    .row-view {
        padding: 15px;
        vertical-align: middle;
        height: fit-content;
    }
    .center{
        justify-content:center;
        text-align: center;
    }
    .mentorimg{
        margin: 5px;
    }
    #meetingstable {
        border-collapse: collapse;
        width: 100%;
    }
    #meetingstable td.first {
        text-align: right;
        font-weight: normal;
        background-color: #647881;
        color: white;
        border-collapse: collapse;
        border: 1px dashed aliceblue;
    }
    #meetingstable th {
        background-color: #477e96;
        font-weight: bold;
        color: white;
        border-radius: 0px;
    }
    #meetingstable tr:nth-child(even) {
        background-color: #e8e8e8;
    }    
    #meetingstable td {
        border: 1px solid #dcdcdc;
        text-align: center;
        padding: 8px;
        column-gap: 80px;
    }
    td, th {
        padding: 15px 5px;
        display: table-cell;
        text-align: center;
        vertical-align: middle;
        border-radius: 2px;
    }
    #meeting{
        text-align:right;
    }
    .disable{
        color: #ddd !important;
    }
    @media (max-width:510px){
        .meetings{
            overflow-x:auto;
        }
    }
`;

export default CommunitySectionWrapper;
