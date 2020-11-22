import styled from "styled-components";

export const MemberSingleWrapper = styled.div`
    padding: 120px 0 50px 0;
    margin-bottom: 25px;
    ul{
        list-style: none;
    }
    .profile-image{
        border-radius: 5px;
        transition: 0.9s;
    }
    
    .body{
        display: block;
        position: relative;
        text-align: center;
        z-index: 1;
        overflow: hidden;

        .h4{
            font-weight: 400;
            font-size: 15px;
            color: black;
            letter-spacing: .5px;
            margin-top: 10px;
            padding: 0;
            text-align: left;
           
        }
        .bold{
            font-weight: 600;
        }
    }
    .profile-image:hover{
        transition: 0.9s;
        border-radius: 5px 50px 5px 50px;
    }
        .header {
            font-family: 'Open Sans', sans-serif;
            display: block;
            position: relative;
            text-align: center;
            padding: 30px 0 20px;
            z-index: 1;
            overflow: hidden;
            
            .gatsby-image-wrapper {
                display: block;
                margin: auto;
                border-radius: 100%;
                overflow: hidden;
                width: 150px;
                height: 150px;
                box-shadow: 0 1px 0 rgba(0,0,0,.1),0 1px 2px rgba(0,0,0,.1);
            }
            
            .h1 {
                font-family: 'Open Sans', sans-serif;
                font-weight: 300;
                font-size: 40px;
                color: black;
                letter-spacing: -2px;
                margin-top: 15px;
                padding: 0;
                text-align: left;
            }
            
            .h2 {
                font-weight: 400;
                font-size: 22px;
                color: black;
                letter-spacing: .5px;
                margin-top: 10px;
                padding: 0;
                border-bottom: 3px solid ${props => props.theme.secondaryColor};
                width: 50%;
                text-align: left;
            }
        }
        
        .profile-social-links {
            display: flex;
            justify-content: left;
            width: 90%;
            padding-left: 0px !important;
            
            li {
                a{
                    display: block;
                    text-align: left;
                    padding: 10px;
                    border-radius: 100%;
                    -webkit-transition: box-shadow 0.2s;
                    -moz-transition: box-shadow 0.2s;
                    -o-transition: box-shadow 0.2s;
                    transition: box-shadow 0.2s;
                    transition: 0.3s;
                    
                    
                    &:hover{
                        box-shadow: 0 1px 1.5px 0 rgba(0,0,0,.12),0 1px 1px 0 rgba(0,0,0,.24);
                        background: white;
                        
                        .github{
                            color: #211F1F;
                        }
                        .linkedin{
                            color: #0E76A8;
                        }
                        .twitter{
                            color: #1DA1F2;
                        }
                        .meshmate-color{
                            display: block;
                        }
                        .meshmate-white{
                            display: none;
                        }
                    }
                    
                    &:active{
                        box-shadow: 0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.2);
                    }
                    
                    svg{
                        color: greyscale;
                        display: block;
                        width: 32px;
                    }
                    img {
                        width: 32px;
                        height: 32px;
                        max-width: none;
                    }
                    .meshmate-color{
                        display: none;
                    }
                }
            }
        }
`;
