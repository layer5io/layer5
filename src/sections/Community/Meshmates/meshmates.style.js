import styled from "styled-components";

const MeshMatesWrapper = styled.div`
    
    .expect{
        p{
            margin: 30px auto 0 auto;
        }
        h5{
            font-weight: 700;
        }
        .meshmate-logo{
            float: right;
            margin: 0 -120px 0 150px;
        }
        .meshmeet-img{
            width: 750px;
            height: 450px;
        }
    }
    .meshmates-grid{
        margin: 100px auto;
        text-align: center;
        h1{
            margin-bottom: 15px;
        }
        p{
            margin-bottom: 50px;
        }
    }
    .meshmate-meet{
        margin: 100px auto 60px auto;
        h2{
            margin-bottom: 30px;
        }
        p{
            margin-bottom: 30px;
        }
        table{
            .icon{
                padding-top: 5px;
                vertical-align: top;
                height: 32px;
                width: 32px;
            }
            .feature{
                padding-left: 20px;
                h4{
                    font-weight: 700;
                }
            }
        }
    }
    .conduct{
        margin: 0 auto 100px auto;
        text-align: center;
        width: 90%;
        h2{
            margin-bottom: 20px;
            font-weight: 700;
        }
        p{
            margin-bottom: 30px;
        }
    }
    @media only screen and (max-width: 1024px){
        .expect{
            .meshmate-logo{
                float: right;
                height: 120px;
                margin: 0 0 0 0;
            }
        }
    }
    @media only screen and (max-width: 480px){
        .meshmates-grid{
            margin: 50px auto;
        }
        .expect{
            .meshmeet-img{
                margin-top: 30px;
                height: 300px;
            }
        }
        .meshmate-meet{
            margin: 50px auto 30px auto;
            p{
                margin-bottom: 10px;
            }
        }
    }
`;

export default MeshMatesWrapper;
