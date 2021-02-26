import styled from "styled-components";

const UpcomingEventsWrapper = styled.div`
	.blog-slider {
		width: 100%;
		position: relative;
		max-width: 50rem;
		margin: auto;
		background: #fff;
		box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
		padding: 1rem;
		border-radius: 0.5rem;
		height: 35rem;
		transition: all 0.3s;
	}

	.blog-slider_content{
		text-align: center;
	}

	.blog-slider_title {
		text-align: center;
		margin: 1rem auto 0.2rem;
	}

	.blog-slider_date {
		display: flex;
		color: rgba(0, 0, 0, 0.5);
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

	.swiper-pagination-bullet {
		background: ${props => props.theme.secondaryColor};
	}

	@media (max-width: 720px) {
		.blog-slider_button {
			margin-bottom: 2rem;
		}
	}

	@media (max-width: 420px) {
		.blog-slider_title {
			font-size: 1.75rem;
		}

		.blog-slider_text > h2 {
			font-size: 1.15rem;
		}
	}
`;

export default UpcomingEventsWrapper;
