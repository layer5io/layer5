import styled from "styled-components";

const MesheryWrapper = styled.section`
    padding: 25px 0 100px 0;

    h1 {
        font-size: 50px;
        line-height: 60px;
    }
    h2 {
        font-size: 40px;
        line-height: 50px;
    }
    h3 {
        font-size: 30px;
        line-height: 40px;
    }

    .description {
        margin: -40px 50px 100px 80px;
        .desc-text {
            margin-top: 50px;
            padding-right: 80px;
        }
        .desc-p {
            margin-bottom: 50px;
        }
    }

    .heading {
        text-align: center;
        margin-bottom: 50px;
    }

    .mesh_list {
        padding: 100px;
    }

    .use_row {
        padding-left: 100px;
        padding-right: 100px;
        margin-bottom: 50px;
        margin-top: 50px;
    }
    .content {
        padding: 0 80px 80px 80px; 
        .extra {
            padding-top: 50px;
        } 
        .code-tabs {
            margin-top: 10px;
            // border: 1px solid gray;
            // padding: 5px;
        }
    }

    .architecture {
        background: gray;
    }

    iframe{
        min-height: 375px;
    }

    .sub-content {
        padding-top: 80px;
    }

    .meshery-img{
        max-width: 90%;
        max-width: 400px;
        margin: auto;  
    }

    .table_content {
        padding-top: 50px;
        h3 {
            padding-bottom: 30px;
        }
    }
    table.adapters {
        box-shadow: 1px 1px 5px gray;
        border: 1px solid gray; 

        td {
            width: auto;
            padding: 5px 10px 5px 10px;
            vertical-align: middle;
            border: 1px solid darkgray;
        }

        td.no-adapters {
            width: auto;  
            text-align: center; 
            color: #aaa;
            font-style: italic;
        }

        td.alpha-adapters {
            width: auto; 
            background-color: #D3D3D3;
            text-align: center; 
        }

        td.beta-adapters {
            width: auto;  
            background-color: #00D3A9;
            text-align: center; 
            color: #fff;
        }

        td.stable-adapters {
            width: auto; 
            background-color: #3C494F;
            text-align: center; 
            color: #fff;
        }

        tr:hover {
            background-color: #f5f5f5;
        }

        img.adapter-logo {
            vertical-align: middle;
            margin-right: 5px;
            height: 30px;
            width: 30px;
        }

    }

    @media only screen and (max-width: 912px) {
        .content {
        padding: 50px;   
        }

        iframe {
            min-height: 240px;
        }
    }
`;

export default MesheryWrapper;