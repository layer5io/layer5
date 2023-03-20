import styled from "styled-components";

const UpcomingEventsWrapper = styled.div`
	.blog-slider {
		width: 100%;
		position: relative;
		max-width: 50rem;
		margin: auto;
		background: ${props => props.theme.DarkTheme ? "#212121" : "#FFFFFF"};
		box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
		padding: 1rem;
		border-radius: 0.5rem;
		height: 39.5rem;
		transition: all 0.3s;
	}
	.blog-slider_img{
		max-height: 25rem; 
		object-fit: cover;
		.gatsby-image-wrapper {
			img {
				 max-height: 25rem;
			 }
	   }
	}
	.blog-slider_content{
		text-align: center;
		max-height: 24rem;
		overflow: hidden;
	}

	.blog-slider_title {
		text-align: center;
		margin: 1rem auto 0.2rem;
	}

	.blog-slider_date {
		display: flex;
		color: ${props => props.theme.DarkTheme ? "rgba(255, 255, 255, 0.6)" : "rgba(0, 0, 0, 0.6)"};
		justify-content: flex-end;
		margin: 0;
	}

	.blog-slider_text {
		h2 {
			text-align: start;
			font-size: 1.25rem;
		}

		ul > li {
			text-align: start;
			list-style: disc;
		}
	}

	.blog-slider_description {
		padding-left: 0.625rem;
		font-size: 1.25rem;
	}

	.swiper-pagination-bullet {
		background: ${props => props.theme.secondaryColor};
	}

	.swiper-pagination {
		background: ${props => props.theme.DarkTheme ? "#212121" : "#FFFFFF"};
		padding-top: 0.8rem;
    	margin-top: 1rem;
    	margin-bottom: -1.2rem;
    	padding-bottom: 0.8rem;
	}

	@media (max-width: 720px) {
		.blog-slider_button {
			margin-bottom: 2rem;
		}

		.blog-slider {
			height: 38rem;
		}
	}

	@media (max-width: 420px) {
		.blog-slider_title {
			font-size: 1.75rem;
		}

		.blog-slider_text > h2 {
			font-size: 1.15rem;
		}

		.blog-slider {
			height: 35rem;
		}
	}
`;

export default UpcomingEventsWrapper;
