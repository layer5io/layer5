import styled from "styled-components";


const DoYouNeedWrapper = styled.div`      
    display: flex;
    align-items: center;
    width: auto;
    height: auto;
    padding: 0;
    min-height: 400px;
    margin: 3rem 13%;
    border-radius: 50px;
    background-color: #000000;

    *{
        font-family: "Qanelas Soft","Qanelas Soft", sans-serif;
        color: #ffffff;
    }

    #content{
        margin: auto;
        display: flex;
        align-items: center;
        width: 80%;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-around;

        #text{
            float: left;
            text-align: left;
            .heading{
                display: inline-block;
                font-size: 50px;
                max-width: 370px;
                font-weight: 600;
                line-height: 55px;
            }
            .description{
                font-size: 20px;
                line-height: 1.5;
                font-weight: 60;
            }
        }

        #action{
            background-color: rgb(0,211,169);
            border-radius: 50%;
            height: 220px;
            width: 220px;
            font-size: 22px;
            border: 0px;
            box-shadow: 0 0 0px;
        }
        #action:focus{
            -moz-box-shadow:    inset 0 0 10px #ffffff;
            -webkit-box-shadow: inset 0 0 10px #ffffff;
            box-shadow:         inset 0 0 10px #ffffff;
        }
    }


    @media only screen and (max-width: 1200px) {
        #content{
            width: 100%;
        }
    }
    @media only screen and (max-width: 1000px) {
        margin: 3rem 3%;
    }
    @media only screen and (max-width: 720px) {
        border-radius: 30px;
        padding: 50px 20px;
        #content{
            #text{
                width: 100%;
                max-width: 100%;
                text-align: center;
                .heading{
                    font-size: 40px;
                    line-height: 1;
                }
            }
            #action{
                margin-top: 25px;
                height: 170px;
                width: 170px;
            }
        }
    }
    
`;

export default DoYouNeedWrapper;
