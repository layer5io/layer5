import styled from "styled-components";
export const ProfileCardWrapper = styled.div`
    margin-bottom: 25px;
    ul{
        list-style: none;
    }
    
    img {
       -ms-interpolation-mode: bicubic;
       vertical-align: middle;
       border: 0;
    }
    
    .profile-card{
        width: 300px;
        border-radius: 2px;
        overflow: hidden;
        box-shadow: 0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);
        position: relative;
        margin: auto;
        background: #00B39F;
        top: 50%;
        transform: translateY(-50%);
        
        &:hover{
            color: #3C49FF;
        }
        
        header {
            display: block;
            position: relative;
            text-align: center;
            padding: 30px 0 20px;
            z-index: 1;
            overflow: hidden;
            
            img {
                border-radius: 100%;
                overflow: hidden;
                width: 150px;
                box-shadow: 0 1px 0 rgba(0,0,0,.1),0 1px 2px rgba(0,0,0,.1);
            }
            
            h1 {
                font-weight: 200;
                font-size: 30px;
                color: #444;
                letter-spacing: -2px;
                margin-top: 15px;
                padding: 0;
            }
            
            h2 {
                font-weight: 400;
                font-size: 14px;
                color: #666;
                letter-spacing: .5px;
                margin: 0;
                padding: 0;
            }
        }
        
        .profile-social-links {
            display: table;
            width: 70%;
            margin-left: 20px;
            
            li {
                display: table-cell;
                width: 33.3333333333333333%
                
                a{
                    display: block;
                    text-align: center;
                    padding: 10px;
                    margin: 0 10px;
                    border-radius: 100%;
                    -webkit-transition: box-shadow 0.2s;
                    -moz-transition: box-shadow 0.2s;
                    -o-transition: box-shadow 0.2s;
                    transition: box-shadow 0.2s;
                    
                    &:hover{
                        box-shadow: 0 1px 1.5px 0 rgba(0,0,0,.12),0 1px 1px 0 rgba(0,0,0,.24);
                    }
                    
                    &:active{
                        box-shadow: 0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.2);
                    }
                    
                    svg{
                        color: #000;
                        width: 100%;
                        height: 50%
                        display: block;
                    }
                }
            }
            
            
        }
        
        
    }
`;
