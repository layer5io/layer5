import styled from "styled-components";

const NewsPageWrapper = styled.div`
 color: #000;     
.single-post-wrapper{
    padding: 50px 0 180px 0;
}
.single-post-block{
    p{
        font-size: 16px;
        font-weight: 300; 
        line-height: 29px;
        letter-spacing: 0.2px;
    }
    p+p{
        margin-top: 30px;  
    }
    .entry-three{
        color: ${props => props.theme.black ? props.theme.black : "#333333"};
        font-weight: 500;
    }
    &:hover{
        .post-thumb-block{
            img{
                transform: scale3d(1.1,1.1,1);
            }
        }
    } 

}

@media only screen and (max-width: 912px) {
     .single-post-block{
         padding-bottom: 120px;
     }
}
`;
export default NewsPageWrapper;
