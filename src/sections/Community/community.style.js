import styled from "styled-components";

const CommunitySectionWrapper = styled.div`
    .community-section-wrapper{
        padding: 50px 0;
    }
    .container .row {
        margin-left: -0.75rem;
        margin-right: -0.75rem;
    }
    row-view {
        padding: 15px;
        vertical-align: middle;
        height: fit-content;
    }
    .center{
        justify-content:center;
        text-align: center;
    }
    h3 {
        font-size: 2rem;
        line-height: 110%;
        margin: 1.46rem 0 1.168rem 0;
    }
    h6 {
        font-size: 1rem;
        line-height: 110%;
        margin: 0.5rem 0 0.4rem 0;
        font-weight: 500;
    }
    h1, h2, h3, h4, h5, h6 {
        font-weight: 400;
        line-height: 1.1;
    }
    a {
        color: #039be5;
        text-decoration: none;
        width: auto;
    }
    .h3link{
       padding-left:25%;
    }
    .link{
        font-size: 0.65em;
    }
    .mentorimg{
        margin: 5px;
    }
    .btn{
        background-color: #ebc017;
        color: #3c494e;
        font-size: 0.65em;
        width: auto;
        border: none;
        border-radius: 2px;
        display: inline-block;
        height: 36px;
        line-height: 36px;
        padding: 0 2rem;
        padding-bottom: 40px;
        padding-top: 10px;
        text-transform: uppercase;
        transition: 0.3s ease-out;
        box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3);
    }
    .btn:hover{
        transform: translateY(-1px);
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
`;

export default CommunitySectionWrapper;
