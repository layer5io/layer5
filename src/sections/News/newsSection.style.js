import styled from 'styled-components';

const NewsSectionWrapper = styled.section`
    padding: 140px 0 70px 0;
    position: relative;
    .section__particle{
        position: absolute;
        &.one{
            width: 190px;
            left: -10px;
            top: 5%;
        }
        &.two{
            width: 60px;
            top: 25%;
            right: 10%;
        }
    }
    .thumb-block,
    .news-wrap{
        margin-bottom: 18px;
    }
    .post-meta-block{
        margin-bottom: 8px;
        a{
            margin-right: 10px;
            -webkit-transition: 450ms all;
             transition: 450ms all;
            &:hover{
                color: ${props => props.theme.headingColor};
            }
        }
        a,span{
            color: ${props => props.theme.textColor};
            font-size: 14px;
            font-weight: 300;
        }
        span+span{
            margin-left: 10px;
        }
        .divider{
            font-size: 11px;
        }
    }
    .title{
        a{
            color: ${props => props.theme.headingColor};
            font-size: 22px;
            font-weight: 400;
            line-height: 30px;
            margin-bottom: 15px;
            display: block;
            -webkit-transition: 450ms all;
            transition: 450ms all;
            &:hover{
                color: ${props => props.theme.secondaryColor};
            }
        }
    }
    .post-reaction-block{
        display: flex;
        justify-content: space-between;
        width: 80%;
        align-items: center;
        margin-bottom: 30px;
        a{
            display: flex;
            align-items: center;
            color: ${props => props.theme.textColor};
            font-size: 14px;
            font-weight: 300;
            -webkit-transition: 450ms all;
             transition: 450ms all;
            svg{
                margin-right: 8px;
                font-size: 16px;
            }
            &:hover{
                color: ${props => props.theme.headingColor};
            }
        }
    }
    .news-btn{
        background: #EEE6FA;
        color: #8A57DE;
        font-size: 15px;
        min-width: 150px;
        &:hover{
            background: #8A57DE;
            color: #fff;
                font-size: 15px;
        }
    }
    @media only screen and (max-width: 912px) {
        padding: 80px 0 70px 0;
        .news-wrap{
            margin-bottom: 35px;
        }
        .section-title h2{
            margin-bottom: 42px;
        }
        .post-reaction-block{
            width: 95%;
        }
        .section__particle{
            &.two {
               display: none;
            }
        }
    }
    @media only screen and (max-width: 568px) {
        
        .section__particle.one{
            display: none;
        }
        .news-wrap{
            padding: 0 15px;
            margin-bottom: 50px;
        }
    }
    
`

export default NewsSectionWrapper;