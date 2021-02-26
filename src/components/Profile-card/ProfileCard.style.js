import styled from "styled-components";
export const ProfileCardWrapper = styled.div`
    margin-bottom: 25px;
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
        background: ${props => props.status === "Active" ? props.theme.menuColor : "gray"};
        filter: ${props => props.status === "Inactive" ? "grayscale(1)" : ""};
        top: 50%;
        transition: 0.3s;
        
        &:hover{
            background: ${props => props.status === "Active" ? props.theme.secondaryColor : props.theme.primaryLightColor};
        }
        
        header {
            display: block;
            position: relative;
            text-align: center;
            padding: 20px 0 20px;
            z-index: 1;
            overflow: hidden;
            
            .gatsby-image-wrapper {
                display: block;
                margin: auto;
                border-radius: 100%;
                overflow: hidden;
                width: 140px;
                height: 140px;
                box-shadow: 0 1px 0 rgba(0,0,0,.1);
                opacity: 90%;
            }
            
            h4 {
                font-weight: 400;
                color: white;
                margin-top: 1rem;
                padding: 0;
            }
        }
       
        .meshmate {
            position: absolute;
            text-align: center;
            padding: 5px;
            border-radius: 100%;
            background: white;
            width: 44px;
            top: 130px;
            right: 50px;
            img {
                width: 28px;
                height: 28px;
                max-width: none;
            }
        }
    }
`;
