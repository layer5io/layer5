import styled from "styled-components";

const UpcomingEventsWrapper = styled.div`
	.blog-slider {
		width: 100%;
		position: relative;
		max-width: 50rem;
		margin: auto;
		background: ${props => props.theme.grey212121ToWhite};
		box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
		padding: 1rem;
		border-radius: 0.5rem;
		height: 39.5rem;
		transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
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
		overflow: hidden;
		padding-bottom: 4rem;
	}

	.blog-slider_item {
		overflow-x: hidden;
		overflow-y: auto;

	}
	.blog-slider_item.swiper-slide::-webkit-scrollbar {
		width: 0;
	}

	.blog-slider_title {
		text-align: center;
		margin: 1rem auto 0.2rem;
	}

	.blog-slider_date {
		display: flex;
		color: ${props => props.theme.whiteSevenToBlackSeven};
		justify-content: flex-end;
		margin: 0;
		transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
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
		transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
	}

	.swiper-pagination {
		background: ${props => props.theme.grey212121ToWhite};
		padding-top: 0.8rem;
    margin-top: 1rem;
    margin-bottom: -1.2rem;
    padding-bottom: 0.8rem;
		transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
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
