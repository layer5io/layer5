import styled from "styled-components";
export const ProfileCardWrapper = styled.div`
    margin-bottom: 25px;
    ul{
        list-style: none;
    }
    
    img{
       -ms-interpolation-mode: bicubic;
       vertical-align: middle;
       border: 0;
    }
    .half-circle {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 60px;
        height: 48px;
        fill: none;
        stroke: #ff8a00;
        stroke-width: 8;
        stroke-linecap: round;
    }
    .profile-card:hover {
        transform: translateY(.4rem);
    }
    
    .profile-card:hover~.card {
        transform: translateX(130px);
    }
    .profile-card{
        width: 250px;
        border-radius: 2px;
        overflow: hidden;
        box-shadow: 0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);
        position: relative;
        margin: auto;
        background: #00B39F;
        background: ${props => props.status === "Active" ? "#00B39F" : "gray"};
        top: 50%;
        transition: 0.3s;
        
        &:hover{
            background: #3C494F;
        }
        
        header {
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
            
            h1 {
                font-weight: 300;
                font-size: 30px;
                color: white;
                letter-spacing: -2px;
                margin-top: 15px;
                padding: 0;
            }
            
            h2 {
                font-weight: 400;
                font-size: 20px;
                color: white;
                letter-spacing: .5px;
                margin-top: 10px;
                padding: 0;
            }
        }
        
        .profile-social-links {
            display: flex;
            justify-content: center;
            width: 90%;
            
            li {
                a{
                    display: block;
                    text-align: center;
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
                        color: white;
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
    }
`;
