import styled from "styled-components";

const BlogPageWrapper = styled.div`
    
.single-post-wrapper{
    padding: 50px 0 90px 0;
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
.post-info-block{
    display: flex;
    align-items:center;
    justify-content: space-between;
    margin-top: 60px;
    margin-bottom: 30px;
    border-bottom: 1px solid #e5e5e5;
    padding-bottom: 30px;
}
.tags{
    span{
        font-size: 20px;
        color: ${props => props.theme.black ? props.theme.black : "#333333"};
    }
    a{
        margin-left: 10px;
        display: inline-block;
        padding: 6px 18px;
        border-radius: 3px;
        background: #F0F0F0;
        font: 400 13px/26px "Open Sans", sans-serif; 
        transition: all 0.3s linear;
        &:hover{
            background: ${props => props.theme.secondaryColor ? props.theme.secondaryColor : "#FB7B81"};
            color: #F0F0F0;
        }
    }
}

@media only screen and (max-width: 912px) {
     .single-post-block{
         padding-bottom: 20px;
     }
}
@media only screen and (max-width: 480px) {
        .post-info-block{
            display: block;
            .tags{
                margin-bottom: 40px;
            }
        }
        .post-comment-wrapper{
            li{
                ul{
                    margin-left: 0;
                }       
            } 
        } 
`;
export default BlogPageWrapper;
