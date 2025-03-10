import styled from "styled-components";

const Banner1SectionWrapper = styled.section`
    display: none;
    p {
        font-size: 21px;
        font-weight: 300;
        color: ${props => props.theme.primaryColor};
        margin: 0 0 70px 0;
        text-align: left;
    }
    .section-title-wrapper {
        min-width: 50%;
        margin: auto;
    }
    .section-title{
        text-align: center;
        h1 {
            font-size: 57px;
            line-height: 4.3rem;
            span {
                font-weight: 700;
                color: ${props => props.theme.secondaryColor};
            }
        }
        h2 {
            margin: 0 0 20px 0;
            color: ${props => props.theme.text};
            span {
                color: ${props => props.theme.secondaryColor};
            }
        }
    }
    .embedVideo {
        position: relative;
        min-width:25%;
        max-width:100%;
        object-fit: cover;
        /* height: 44vw !important;
        border-radius: 2.5%;
        transition: 0.2s ease-in-out;
        box-shadow: 0px 3px 20px 4px rgba(0, 179, 159, 0.5); */

        .react-player__preview {
        border-radius: 1.5%;
        }

        .react-player__play-icon {
        transform: scale(3, 3);
        }

        iframe {
        border-radius: 2.5%;
        }

        @media (max-width: 768px) {
        height: 54vw !important;
        }

        &:hover {
        /* box-shadow: 0px 3px 20px 4px rgba(0, 179, 159, 0.75);
        .react-player__play-icon {
            border-color: transparent transparent transparent #EBC017 !important;
        } */
        .playBtn {
        box-shadow: 0px 0px 16px 3px #00B39F;
        }
        }
    }
    .kanvasVideo {
        position: relative;
        min-width:25%;
        max-width:100%;
        object-fit: cover;
}
    .vintage-box-container {
        display: flex;
    }
    .vintage-box {
        margin: auto;
        display: flex;
        flex-direction: row;
        text-align: center;

        @media only screen and (max-width:975px) {
            flex-direction: column;
        }

        @media only screen and (max-width:767px) {
            flex-direction: row;
            margin-top: 5%;
        }
    }
    .banner-btn {
        margin: 0rem .5rem 0 .5rem;
    }
    .banner-btn.one {
        margin: 0rem .5rem 0 .5rem;
        background: ${props => props.theme.highlightColor};

        @media only screen and (max-width:975px) {
            margin: 8% 0%;
        }

        @media only screen and (max-width:767px) {
            margin: 0rem .5rem 0 .5rem;
        }

        &:hover {
             background: ${props => props.theme.highlightLightColor};
        }
        &:active{
            background: ${props => props.theme.saffronColor};
        }
    }
    .banner-btn.two{
        background: ${props => props.theme.secondaryColor};
        color: #fff;
        &:hover{
            background: ${props => props.theme.caribbeanGreenColor};
            //color: #326d62;
        }
    }

    .playBtn {
        position: absolute;
        border-radius: 50%;
        height: 4rem;
        width: 4rem;
    }
    @media only screen and (max-width: 1200px) {
        .section-title {
            h1 {
                font-size: 3rem;
                line-height: 3.5rem;
                margin: 0 0 1rem 0;
            }
            h2 {
                font-size: 2rem;
            }
        }
        p {
            font-size: 1.4rem;
        }
    }
    @media only screen and (max-width: 992px) {
        .section-title {
            h1 {
                font-size: 2.7rem;
                line-height: 2.7rem;
            }
            h2 {
                font-size: 1.87rem;
            }
        }
        p {
            font-size: 1.4rem;
        }
    }
    @media only screen and (max-width: 912px) {
        p {
            width: 100%;
        }
        .section-title {
            h1 {
                font-size: 2.45rem;
                line-height: 2.7rem;
                margin: 0 0 1rem 0;
            }
            h2 {
                font-size: 1.6rem;
                margin: 0 auto;
                width: 90%;
            }
        }
        p {
            font-size: 1.25rem;
            margin: 2rem auto;
            width: 80%;
        }
        .banner-btn {
            min-width: 140px;
        }
        .banner-btn+.banner-btn{
            margin-left: 15px;
        }
    }
    @media only screen and (max-width: 767px) {
        .section-title-wrapper {
            min-width: 100%;
        }
        .video-col{
            display: none;
        }
        .section-title {
            h1 {
                margin: 0rem;
                font-size: 1.82rem;
            }
            h2 {
                font-size: 1.15rem;
                width: 80%;
            }
        }
        p {
            font-size: 1.1rem;
            width:60%;
        }
        .vintage-box{
             &:before{
                content: none;
            }
        }
        .kanvasVideo {
            top: 1rem;
    }
    }
    @media only screen and (max-width: 480px) {
        padding: 2rem 0;
        .vintage-box{
            &:before{
                content: none;
            }
        }
	}
    @media only screen and (max-width: 430px) {
        padding: 1rem 0;
        .section-title {
            h1 {
                margin: 0rem;
                font-size: 1.8rem;
            }
            h2 {
                font-size: 1rem;
                width: 80%;
            }
        }
        p {
            margin: 1rem auto;
            font-size: 1.1rem;
        }
        .vintage-box{
            &:before{
                content: none;
            }
        }
	}
    @media screen and (max-width: 402px) {
        .banner-btn.one, .banner-btn.two {
            margin: 0 0.5rem 1rem;
        }
    }
     @media only screen and (max-width: 380px) {
        .section-title{
            h1 {
                font-size: 1.6rem;
                line-height: 1.7rem;
                /* margin: 0 0 30px 0; */
            }
            h2 {
                font-size: 1rem;
                width:100%;
            }
        }
        p {
            font-size: 1rem;
        }
        .banner-btn{
            font-size: 14px;
            min-width: 127px;
            padding: 14px 12px;
        }
     }
     @media only screen and (max-width: 330px) {
        .section-title{
            h1 {
                font-size: 23px;
                line-height: 35px;
            }
        }
     }

`;

export default Banner1SectionWrapper;
