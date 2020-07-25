import styled from "styled-components";
import Icon2 from "../../assets/images/blog/icon2.svg";

const BlogPageWrapper = styled.div`
    
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
.post-thumb-block{
    overflow: hidden;
    margin-bottom: 40px;
    position: relative;
    border-radius:  6px;
    .post-meta{
        padding: 15px 23px;
        border-radius: 6px;
        font-size: 15px;
        line-height: 20px;
        text-align: center;
        color: ${props => props.theme.black ? props.theme.black : "#333333"};
        width: 100px;
        background: rgba(255,255,255,0.15);
        position: absolute;
        top: 10px;
        right: 10px;
        em{
            font-weight: 600;
            font-size: 28px;
            line-height: 35px;
            display: block;
            font-style: normal;
        }
    }
    img{
        width: 100%;
        transition: all 0.6s ease-in;
        border-radius: 6px;
    }
}

.post-title{ 
    font-size: 24px;
    font-weight: 600;
    line-height: 40px;
    letter-spacing: 1.5px;
    margin-bottom: 25px;
    display: block;
    -webkit-transition: 450ms all;
    transition: 450ms all;
           
}

blockquote {
    padding-left: 90px;
    padding-bottom: 30px;
    background: transparent;
    overflow: hidden;
    font-size: 32px;
    line-height: 45px;
    border-radius: 6px;
    margin: 60px 0 40px 0;
    position: relative;
    box-sizing: border-box;
    position: relative;
    color: ${props => props.theme.black ? props.theme.black : "#333333"};
    &:before{
        content: '';
        width: 60px;
        height: 3px;
        background: ${props => props.theme.black ? props.theme.black : "#333333"};
        position: absolute;
        top: 20px;
        left: 0;
    }
    &:after{
        content: url(${Icon2});
        position: absolute;
        right: 0;
        bottom: -22px;
        transform: rotate(180deg);
        z-index: -1;
        opacity: 1;

        transition: all 1s ease-in-out;
    }

    span {
        display: block;
        font-size: 85%;
        margin-top: 10px;
        opacity: .8;
    }
}

.post-info-block{
    display: flex;
    align-items:center;
    justify-content: space-between;
    margin-top: 80px;
    margin-bottom: 80px;
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
.share{
    span{
        font-size: 20px;
        color: ${props => props.theme.black ? props.theme.black : "#333333"};
    }
    display: flex;
    align-items: center;
    a{
        line-height: 100%;
        &:hover svg{
            color: ${props => props.theme.secondaryColor ? props.theme.secondaryColor : "#FB7B81"};
        }
    }
    svg{
        font-size: 28px;
        color: ${props => props.theme.primaryLightColor ? props.theme.primaryLightColor : "#EEE6FA"};
        margin-right: 10px;
        line-height: 100%;
        transition: all 0.3s linear;
    }
}
.block-title{
    font-size: 36px;
    color: ${props => props.theme.black ? props.theme.black : "#333333"};
    font-weight: 500;
    padding-bottom: 20px;
}

.comment-body-inner,
 .replay a{
    display: flex; 
    align-items: center;
}
  

.post-comment-wrapper { 
    padding-top: 40px;
    ul{
        list-style: none;
        margin: 0;
        padding: 0; 
    }
    li{
        ul{
            margin-left: 70px;
        }
    }
}
.post-comment-block{
    display: flex; 
    padding: 50px 0 40px;
    border-bottom: 1px solid ${props => props.theme.primaryLightColor ? props.theme.primaryLightColor : "#EEE6FA"};
}
.author-avatar {
    min-width: 95px;
    padding-right: 15px;
    img {
        width: 70px;
        height: 70px;
        border-radius: 50%;
    }
}
.comment-body-inner{
    justify-content: space-between;
    h3 {
        font-size: 20px;
        color: ${props => props.theme.black ? props.theme.black : "#333333"};
        font-weight: 400;
        padding-bottom: 5px;
        margin: 0;
        span {
            display: block;
            font-size: 15px;
            font-style: italic;
            color: #989ca2;
        }
    }
}
.replay {
    a { 
        color: #989ca2;
        transition: all 0.3s linear;
        svg {
            font-size: 30px;
            transition: all 0.3s linear;
        }
        &:hover{
            color: ${props => props.theme.secondaryColor ? props.theme.secondaryColor : "#FB7B81"};
            svg{
                transform: translateX(5px);
            }
        }
    }
}

.comment-content {
    padding-top: 10px;
    p{ 
        line-height: 25px;
        margin-bottom: 0;
    }
}



.comment-box-wrapper {
    padding-top: 120px;
    .block-title{
        padding-bottom: 23px;
    }
    p{
        margin-bottom: 40px;
    }
    input, textarea{
        margin-bottom: 35px;
        padding: 18px 15px;
        border-radius: 3px;
        border: 1px solid #e5e5e5;
        width: 100%;
        color:  #989ca2;
        font-size: 16px;
        transition: all 0.3s linear;
        &::placeholder { 
            color:  #989ca2;
            opacity: 1; 
        }

        &:-ms-input-placeholder { 
            color:  #989ca2;
        }

        &::-ms-input-placeholder { 
            color:  #989ca2;
        }
        &:focus{
            border-color: #8A57DE;
        }
    }

    textarea {
        resize: none;
    }

    .form-inline {
        display: flex;
        justify-content: space-between;

        input {
            flex-basis: 50%;

            &:first-child {
                margin-right: 25px;
            }
        }
    }
}

@media only screen and (max-width: 912px) {
     .single-post-block{
         padding-bottom: 120px;
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
        .comment-box-wrapper{
        .form-inline{
            display: block;
                input{
                    &:first-child{
                        margin-right: 0;
                    }
                }
            } 
        }
        blockquote{
            padding-left: 0;
            &:before{
                content: none;
            }
        }
        .tags{
            a{
                padding: 6px 14px;   
            }
        }  
    }
    @media only screen and (max-width: 375px) {
        .post-title{
            font-size: 20px;
            line-height: 30px
        }
        blockquote{
            font-size: 24px;
            line-height: 38px;
        }
        .block-title{
            font-size: 28px;
        }
    }
`;
export default BlogPageWrapper;
