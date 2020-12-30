import styled from "styled-components";

const CommunitySectionWrapper = styled.div`
    .community-section-wrapper{
        padding: 50px 0;
    }
    
    .centerTexts{
        margin-top: -2.5rem;
        text-align: center;
    }
    
    .service-mesh-projects{
        margin-top: 2rem;
        h1{
            line-height: 51px;
            margin-bottom: 1rem;
        }
        
        img{
            margin-left: 5rem;
            max-height: 300px;
        }
    }
    
    .open-source-projects{
        margin-top: 2rem;
        text-align: center;
        
        h1{
            margin:auto;
            margin-bottom: 1rem;
        }
        p{
            max-width: 60rem;
            margin: auto;
        }
    }
    
    .our-community-members{
        margin-top: 2rem;
    }
    
    .community{
        background: ${props => props.theme.secondaryColor};
        color: white;
        .content{
            margin: 180px 80px 224px 380px;
        }
        h5{
            color: white;
            margin-bottom : 24px;
        }
        h1{
            margin-bottom: 40px;
            color: white;
        }
        button{
            margin-top: 40px;
        }
        
        
    }

    .slider{
        background: ${props => props.theme.black};
        color: white;
    }
    
    .meshmate{
        margin-top: 80px;
        .content{
            h1{
                margin-top: 24px;
                margin-bottom: 40px;
            }
        }
        img{
            max-height: 250px;
            margin-top: 95px;
            margin-bottom: 40px;
        }
    }
    
    .newcomers-button{
        margin: 80px auto;
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
