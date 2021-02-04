import styled from "styled-components";

const MesheryWrapper = styled.section`
    .info {
        position: relative;
        overflow: hidden;
        display: block;
        .meshery-img{
            max-width: 25rem;
            position: relative;
            bottom: 2rem;
            margin: auto; 
        }
        .description {
            align-items: center;
            margin-top: -2rem;
            .desc-text {
                padding: 1.56rem;
                h1{
                    font-weight: 600;
                }
                .heading-2 {
                    font-weight: 700;
                    color: ${props => props.theme.secondaryColor};
                }
                .desc-p {
                    font-size: 1.25rem;   
                    margin: 1.875rem 0 2.5rem 0;
                }
                .banner-btn {
                    margin: 0rem 0.75rem 0 0;
                    color: white;
                    .button-icon{
                        margin-right: 0.625rem;
                    }    
                }
            }
            .meshery-hero-img {
                text-align: center;
            }
        }
    }

    // #stripes, #stripes span {
    //     position: absolute
    // }
    
    // #stripes {
    //     width: 100%;
    //     height: 100%;
    //     overflow: hidden;
    //     -webkit-transform: skewY(-12deg);
    //     transform: skewY(-12deg);
    //     -webkit-transform-origin: 0;
    //     transform-origin: 0;
    //     background: linear-gradient(150deg, #53f 15%, #05d5ff 70%, #a6ffcb 94%)
    // }
    
    // #stripes span {
    //     height: 2.5rem
    // }
    
    // #stripes :first-child {
    //     width: 50%;
    //     left: 50%;
    //     top: 2.5rem;
    //     background: #4c29ff
    // }
    
    // #stripes :nth-child(2) {
    //     width: 14%;
    //     right: 0;
    //     bottom: 2.5rem;
    //     background: #2be7ff
    // }
    
    // #stripes :nth-child(3) {
    //     width: 25%;
    //     bottom: 0;
    //     right: 0;
    //     background: #a1ffc8
    // }

    // @media (min-width: 670px) {
    //     #stripes span {
    //         height: 150px
    //     }
    
    //     #stripes :first-child {
    //         top: 0;
    //         background: #4750ff
    //     }
    
    //     #stripes :nth-child(2) {
    //         width: 16.66667%;
    //         top: 300px;
    //         bottom: auto;
    //         background: #0dcfff
    //     }
    
    //     #stripes :nth-child(3) {
    //         width: 33.33333%;
    //         right: auto;
    //         background: #11bdff
    //     }
    // }
    
    // @media (min-width: 880px) {
    //     #stripes span {
    //         height: 190px
    //     }
    
    //     #stripes :first-child {
    //         width: 33.33333%;
    //         left: -16.66666%;
    //         background: #53f
    //     }
    
    //     #stripes :nth-child(2) {
    //         width: 33.33333%;
    //         top: 0;
    //         left: 16.66666%;
    //         right: auto;
    //         background: #4553ff
    //     }
    
    //     #stripes :nth-child(3) {
    //         width: 33.33333%;
    //         left: 49.99999%;
    //         bottom: auto;
    //         background: #4f40ff
    //     }
    
    //     #stripes :nth-child(4) {
    //         width: 33.33333%;
    //         top: 380px;
    //         right: -16.66666%;
    //         background: #25ddf5
    //     }
    
    //     #stripes :nth-child(5) {
    //         width: 33.33333%;
    //         bottom: 0;
    //         background: #1fa2ff
    //     }
    // }

    .callout{
        margin: 3.125rem auto;
        text-align: center;
        width: 90%;
        h1{
            margin-bottom: 1.875rem;
        }
    }

    @media only screen and (max-width: 1200px) {
        .info{
            .description {
                margin-top: -4rem;
            }
        }
    }

    @media only screen and (max-width: 568px) {
        .info{
            .meshery-img{
                max-width: 90%;
            }
            .description {
                padding: 0;
                .desc-text{
                    .desc-p{
                        margin: 1.875rem 0 1.25rem 0;
                    }
                    .banner-btn {
                        margin: 0rem 0.75rem 0.5rem 0;  
                    }
                }
            }
        }
    }
`;

export default MesheryWrapper;