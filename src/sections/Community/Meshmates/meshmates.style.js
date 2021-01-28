import styled from "styled-components";

const MeshMatesWrapper = styled.div`
    
    .expect{
        p{
            margin: 30px auto 0 auto;
        }
        h5{
            font-weight: 700;
        }
    }
    .meshmates-grid{
        margin: 6.25rem auto;
        text-align: center;
        h1{
            margin-bottom: 15px;
        }
        p{
            margin-bottom: 50px;
        }
    }
    .meshmate-meet{
        margin: 6.25rem auto 3.75rem auto;
        h2{
            margin-bottom: 1.875rem;
        }
        p{
            margin-bottom: 1.875rem;
        }
        table{
            .icon{
                padding-top: 5px;
                vertical-align: top;
                height: 2rem;
                width: 2rem
            }
            .feature{
                padding-left: 15px;
                h4{
                    font-weight: 600;
                    margin-bottom: 0.7rem;
                }
            }
        }
    }
    .conduct{
        margin: 0 auto 6.25rem auto;
        text-align: center;
        width: 90%;
        h2{
            margin-bottom: 1.25rem;
            font-weight: 700;
        }
        p{
            margin-bottom: 1.875rem;
        }
    }
    @media only screen and (max-width: 480px){
        .meshmates-grid{
            margin: 50px auto;
        }
        .meshmate-meet{
            margin: 3.125rem auto 1.875rem auto;
            p{
                margin-bottom: 0.625rem;
            }
        }
    }
`;

export default MeshMatesWrapper;
