import styled from "styled-components";

const MesheryWrapper = styled.section`
    padding: 100px 0 100px 0;
    .content {
        padding: 80px;
    }

    .table_content {
        padding-top: 50px;
        h3 {
            padding-bottom: 30px;
        }
    }
    table.adapters {
        // box-shadow: 1px 1px 2px grey;
        border: 1px solid gray; 

        td {
            width: auto;
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
    }
`;

export default MesheryWrapper;