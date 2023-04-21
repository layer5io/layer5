import styled from "styled-components";

const SMIWrapper = styled.section`
    .description{
        margin: 6.5rem auto 4rem;
        h4{
            color: ${props => props.theme.tertiaryColor};;
            font-weight: ;
            border: 1px solid gray;
            padding: 0 0.625rem 0 0.625rem;
            width: fit-content;
            transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        h1{
            margin-bottom: 1.56rem;
        }
        p{
            color: ${props => props.theme.text};
            opacity: 70%;
            margin-bottom: 1.875rem;
            font-weight: 400;
            transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .desc-p{
            width: 80%;
        }
        .section-title{
            text-align: center;
            margin: auto;
            width: 80%;
            margin-bottom: 2.5rem;
            p{
                font-size: 21px;
                color: ${props => props.theme.text};
                opacity: 70%;
                transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
            }
        }
    }
    .logo{
        position: absolute;
        top: -6.25rem;
        filter: invert(${props => props.theme.meshInterfaceLogoFilter});
        left: -7.5rem;
    }
    .feature {
        margin: 4rem auto;
    }
    @media screen and (max-width: 1550px) and (min-width: 992px) {
        .hero_img_col {
            position: absolute;
            right: 0;
            overflow: hidden;
        }
        .description {
            margin: 6.5rem auto 15rem;
        }
        .feature {
            margin: 4rem auto;
        }
    }
    .hero-img{
        width: 36rem;
    }
    .feature-table{
        margin: 0 5rem 1.875rem 5rem;

        @media screen and (max-width: 992px) and (min-width: 768px) {
            margin: auto;
        }
    }
    .feature-block{
        padding: 2.5rem 1.875rem 2.8rem 1.875rem;
        border-radius: 20px;
        box-shadow: 0 0 ${props => props.theme.projectPageShadowsize} 5px ${props => props.theme.green00D3A9ToGreyE6E6E6};
        position: relative;
        background-color: ${props => props.theme.grey212121ToWhite};
        z-index: 999;
        height: 100%;
        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

        &:hover{
            border-color: ${props => props.theme.green00D3A9ToGreyE6E6E6};
            .thumb-block{
                border-color: ${props => props.theme.primaryColor};
            }
        }
    }
    .feature-title{
        margin: 0 0 0.3rem 0;
        h2{
            font-size: 34px;
            font-weight: 700;
            margin: 0 0 3.125rem 0.625rem; 
            color: ${props => props.theme.text};
            transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
    }
    .section-3{
        background-color: ${props => props.theme.grey1D1D1DToGreyFAFAFA};
        width: 100%;
        padding:7rem 0rem;
        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    }
    .bg{
        height: 20rem;
        width: 90%;
        max-width: 73.75rem;
        margin: 20rem auto 0 auto;
        background-color: ${props => props.theme.grey141714ToGreenEBFCF8};
        position: absolute;
        z-index: 1;
        left: 0;
        right: 0;
        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    }

    @media screen and (max-width: 1200px) {
        .bg {
            height: 28rem;
        }
    }

    @media screen and (max-width: 767px) {
        .feature {
            margin: 4rem auto 1rem;
        }
        .feature-table {
            margin: 0 2rem 1rem;
            .col {
                margin-bottom: 2rem;
            }
        }
        .bg {
            height: 42rem;
        }
    }
    @media screen and (max-width: 600px) {
        .bg {
            height: 46rem;
            margin: 25rem auto 0 auto;
        }
    }
    @media screen and (max-width: 480px) {
        .feature-table {
            margin: 0 0rem 1rem;
        }
        .bg {
            width: 100%;
            height: 16%;
            margin: 28rem auto 0 auto;
        }
    }
    .card{
        background-color: ${props => props.theme.grey212121ToWhite};
        width: 70%;
        max-width: 62.5rem;
        margin: auto;
        padding: 2.5rem 4.7rem 2rem 4.7rem;
        border: 1px white;
        border-radius: 20px;
        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

        h2{
            margin-bottom: 1.875rem;
        }
    }
    .details-block{
        .table{
            color: ${props => props.theme.black};  
            p {
                width: 90%;
                margin: 0 0 1rem 1.75rem;
                font-size: 17px;
                line-height: 25px;
            }
            td{
                vertical-align: top;
            }
            .icon{
                height: 2rem;
                width: 2rem;
                object-fit: cover;
            }
        }
    }
    .test-block{
        margin: 1.875rem 5rem 1.875rem 5rem;
        h3 {   text-align: center;}
        h2,p {
            text-align: center;
            padding: 1rem;
        }
        .table {
            margin: auto;
            max-width: 62.5rem;
        }

    }
    @media screen and (max-width: 600px) {
        .test-block {
            margin: 2rem 0.5rem;
        }
    }
    
    .react-tabs__tab {
		bottom: 0px;
		padding: 1.25rem;
		&:hover {
			background-color: #1e2117;
			border-top-left-radius: .5rem;
			border-top-right-radius: .5rem;
		}
	}
    .react-tabs__tab:focus:after{
		content: none;
	}
	.react-tabs__tab-list {
		margin: 0px;
		padding: 0px;
		font-size: 1.25rem;
		font-weight: 500;
		border-bottom: none;
		border-top-left-radius: .5rem;
		border-top-right-radius: .5rem;
		color: #ffffff;
		background: #00B39F;
	}
	.react-tabs__tab--selected {
		background: #1e2117;
		border-color: #1e2117;
		color: white;
		font-weight: 600;
	}
    .conformance-table {
		width: 100%;
		margin-bottom: 2rem;
		box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.2);
		border-top-left-radius: .5rem;
		border-top-right-radius: .5rem;

		a { 
			color: ${props => props.theme.tertiaryColor};
            transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
	
			&:hover {
				color: ${props => props.theme.secondaryColor};
			}
		}
	}

    .smiResults {
        display: flex;
		padding: 2.5rem;
		text-align: center;
		margin: auto;
		margin-top: 4rem;
		margin-bottom: 4rem;
        max-width: 70%;

		.text-gray {
			margin-top: 2rem;
			color: gray;
			font-style: italic;
		}
		img {
			height: 10rem;
			margin-right: 2rem;
		}
		@media screen and (max-width:767px) {
			display: block;
	
			img {
				margin: 0 auto 0.25rem;
			}
		}
    }
    @media only screen and (max-width: 992px) {
        .hero-img{
            width: 95%;
            margin: 1.875rem auto 0;
        }
        .card {
            padding: 2rem;
        }
    }
    @media only screen and (max-width: 480px) {
        text-align: center;
        .logo{
            margin-top: 3.125rem;
        }
        .description{
            h4 {
                width: auto;
            }
            .desc-p{
                width: 100%;
            }
        }
        .hero-img{
            width: 95%;
            margin-top: 1.875rem;
        }
        .pricing-block{
            margin: 0 0.94rem 1.875rem 0.94rem;
            padding: 2.5rem 0.94rem 2.2rem 0.94rem;
        }
        .card{
            width: 90%;
            padding: 1.5rem;
        }
        .test-block{
            margin: 0 0 0.625rem 0;
        }
    }
`;

export default SMIWrapper;