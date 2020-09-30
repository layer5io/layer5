import styled from "styled-components";
export const ProgramsPageWrapper = styled.div`
    .programs-page-wrapper{
        padding: 50px 0;
        
        .program{
            box-shadow: 0px 0px 30px ${props => props.theme.shadowLightColor};
            min-height: 280px;
            padding: 5px;
            transition: 0.2s ease;
            border-radius: 4%;
            position: relative;
            background-color: white;
            margin: 20px 6px 20px 6px;
            text-align: center;
            
            @media only screen and (max-width: 600px) {
                margin-left: 15px;
                margin-right: 15px;
            }
            
            &:hover{
                transform: scale(1.08);
                transition: 0.2s ease;
                z-index: 3000;
            }
            
            h3{
                font-size: 22px; 
                margin-bottom: 15px;
                font-weight: 600;
                line-height: 30px;
            }
            
            .icon{
                position: relative;
                display: block;
                height: 170px;
                width: 170px;
                margin: 0 auto 25px auto;
                align-items: center;
                
                @media only screen and (max-width: 568px){
                    margin: 0 auto 25px auto;
                }
                
                img{
                    display: block;
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    margin: auto;
                }
            }
        }
    }
`;
