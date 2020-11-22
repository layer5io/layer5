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
 
    .profile-card{
        width: 250px;
        border-radius: 2px;
        overflow: hidden;
        box-shadow: 0 2px 2px 0 rgba(0,0,0,.14);
        position: relative;
        margin: auto;
        background: #00B39F;
        background: ${props => props.status === "Active" ? props.theme.secondaryColor : "gray"};
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
                opacity: 90%;
            }
            
            h1 {
                font-weight: 300;
                font-size: 30px;
                color: white;
                letter-spacing: -2px;
                margin-top: 15px;
                padding: 0;
            }
        }
       
        .meshmate{
            position: absolute;
            text-align: center;
            padding: 5px;
            border-radius: 100%;
            background: white;
            width: 44px;
            top: 140px;
            right: 38px;
            img {
                width: 28px;
                height: 28px;
                max-width: none;
            }
        }
    }
`;
