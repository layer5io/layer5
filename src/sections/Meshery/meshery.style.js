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
    h4 {

    }

    .description {
        margin-top: -40px; 
        padding: 0 50px 100px 80px;
        .desc-text {
            padding: 25px;
        }
        .desc-p {
            margin-bottom: 50px;
        }
    }

    .heading {
        text-align: center;
        margin-bottom: 50px;
    }

    .check {
        height: 25px;
        width: auto;
        color: green;
    }

    .meshes {
        margin: 20px 0 20px 0;
        .mesh_box {
            text-align: center;
            border: 2px solid black;
        }
    } 

    .mesh_list_left {
        padding: 50px 0 50px 50px;
    }
    
    .mesh_list_right {
        padding: 50px 50px 50px 0;
    }

    .use_row {
        h3 {
            color: black;
            font-size: 35px;
            font-weight: 500;
            line-height: 40px;
            margin-bottom: 20px;
        }
        h5 {
            font-size: 20px;
            font-weight: 400;
            margin-bottom: 0;
        }
        .text_logo {
            float: left;
            height: 120px;
            width: auto;
            margin-right: 20px;
        }
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

    .number {
        float: right;
        .number-desc {
            position: relative;
            bottom: 0;
        }
        &:hover {
            h3 {
                color: #ffffff;
            }
        }
    }
    @media only screen and (max-width: 912px) {
        .content {
        padding: 50px;   
        }

        .use_row {
            padding: 0 20px 0 20px;
        }

        .description {
            padding: 0;
        }

        .mesh_list_left, .mesh_list_right {
            display: none;
        }

        iframe {
            min-height: 240px;
        }

        h1 {
            font-size: 25px;
            line-height: 30px;
        }

        h2 {
            font-size: 20px;
            line-height: 25px;
        }

        h3 {
            font-size: 15px;
            line-height: 20px;
        }
    }
`;

export default MesheryWrapper;