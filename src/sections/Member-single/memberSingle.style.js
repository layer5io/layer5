import styled from "styled-components";


export const MemberSingleWrapper = styled.div`
    padding: 250px 0 180px 0;
    
    .profile-card{
        width: 700px;
        
        @media only screen and (max-width: 754px) {
            width: 500px;
        }
        @media only screen and (max-width: 512px) {
            width: 300px;
        }
   
        background: #00B39F;
        &:hover{
            background: #00B39F;
        }
        header{
            .gatsby-image-wrapper{
                height: 500px;
                width: 500px;
                @media only screen and (max-width: 754px) {
                    width: 300px;
                    height: 300px;
                }
                @media only screen and (max-width: 512px) {
                    width: 150px;
                    height: 150px;
                }
            }
        }
    }
`;
