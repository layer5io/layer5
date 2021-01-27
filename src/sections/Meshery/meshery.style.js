import styled from "styled-components";

const MesheryWrapper = styled.section`
    padding: 0 0 100px 0;

    .info {
        position: relative;
        overflow: hidden;
        display: block;
        .meshery-img{
            max-width: 90%;
            max-width: 400px;
            position: relative;      
            margin: -50px auto -50px auto; 
        }
    }

    #stripes, #stripes span {
        position: absolute
    }
    
    #stripes {
        width: 100%;
        height: 100%;
        overflow: hidden;
        -webkit-transform: skewY(-12deg);
        transform: skewY(-12deg);
        -webkit-transform-origin: 0;
        transform-origin: 0;
        background: linear-gradient(150deg, #53f 15%, #05d5ff 70%, #a6ffcb 94%)
    }
    
    #stripes span {
        height: 40px
    }
    
    #stripes :first-child {
        width: 50%;
        left: 50%;
        top: 40px;
        background: #4c29ff
    }
    
    #stripes :nth-child(2) {
        width: 14%;
        right: 0;
        bottom: 40px;
        background: #2be7ff
    }
    
    #stripes :nth-child(3) {
        width: 25%;
        bottom: 0;
        right: 0;
        background: #a1ffc8
    }

    @media (min-width: 670px) {
        #stripes span {
            height: 150px
        }
    
        #stripes :first-child {
            top: 0;
            background: #4750ff
        }
    
        #stripes :nth-child(2) {
            width: 16.66667%;
            top: 300px;
            bottom: auto;
            background: #0dcfff
        }
    
        #stripes :nth-child(3) {
            width: 33.33333%;
            right: auto;
            background: #11bdff
        }
    }
    
    @media (min-width: 880px) {
        #stripes span {
            height: 190px
        }
    
        #stripes :first-child {
            width: 33.33333%;
            left: -16.66666%;
            background: #53f
        }
    
        #stripes :nth-child(2) {
            width: 33.33333%;
            top: 0;
            left: 16.66666%;
            right: auto;
            background: #4553ff
        }
    
        #stripes :nth-child(3) {
            width: 33.33333%;
            left: 49.99999%;
            bottom: auto;
            background: #4f40ff
        }
    
        #stripes :nth-child(4) {
            width: 33.33333%;
            top: 380px;
            right: -16.66666%;
            background: #25ddf5
        }
    
        #stripes :nth-child(5) {
            width: 33.33333%;
            bottom: 0;
            background: #1fa2ff
        }
    }

    h1 {
        font-size: 50px;
        line-height: 60px;
    }
    h2 {
        font-size: 40px;
        line-height: 50px;
    }
    .heading-1 {
        font-weight: 400;
        line-height: 40px;
    }
    .heading-2 {
        font-weight: 700;
        color: ${props => props.theme.secondaryColor};
    }

    .description {
        margin-top: 40px; 
        padding: 0 50px 100px 80px;
        .desc-text {
            padding: 25px;
        }
        .desc-p {
            font-size: 20px;   
            margin: 30px 0 50px 0;
        }
        .banner-btn {
            margin: 0rem .5rem 0 .5rem;
            color: white;
            .button-icon{
                margin-right: 10px;
            }    
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



    .meshery-sup-img{
        max-height: 350px
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