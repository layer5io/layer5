import styled from "styled-components";

const UpcomingEventsWrapper = styled.div`
	.blog-slider {
		width: 95%;
		position: relative;
		max-width: 800px;
		margin: auto;
		background: #fff;
		box-shadow: 0px 5px 10px rgba(34, 35, 58, 0.1);
		padding: 15px;
		border-radius: 10px;
		height: 450px;
		transition: all 0.3s;
	}

	.blog-slider__item {
		display: flex;
		justify-content: center;
		align-items: center;
		transform: translate3d(0px, -10px, 0px);
	}

	.blog-slider__img {
		display: block;
		width: 300px;
		border-radius: 10px;
		height: 250px;
		border: none;
		margin: auto 10px;
	}

	.blog-slider__title {
		text-align: center;
		font-size: 35px;
		margin-bottom: 10px;
	}

	.blog-slider__code {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		margin-bottom: 10px;
	}

	.blog-slider__text {
		h2 {
			text-align: start;
			font-size: 20px;
		}

		ul > li {
			list-style: none;
		}
	}

	.blog-slider__button {
		display: block;
		width: 100%;
		height: auto;
		text-align: center;

		a {
			text-decoration: none;
			font-size: 20px;
			border-radius: 10px;
			color: aliceblue;
			background: linear-gradient(90deg, #00b39f -140%, #00d3a9 100%);
			padding: 10px 20px;
			box-shadow: 0px 2px 8px rgba(0, 179, 159, 0.3);
			transition: 0.5s ease all;

			&:hover {
				box-shadow: 0px 5px 10px rgba(0, 179, 159, 0.5);
			}
		}
	}

	@media (max-width: 720px) {
		.blog-slider {
			height: auto;
		}

		.blog-slider__item {
			display: block;
		}

		.blog-slider__img {
			width: 100%;
			margin: 0px;
			height: auto;
		}

		.blog-slider__button {
			margin-bottom: 35px;
		}
	}

	@media (max-width: 420px) {
		.blog-slider__title {
			font-size: 28px;
		}

		.blog-slider__code {
			font-size: 15px;
		}

		.blog-slider__text > h2 {
			font-size: 18px;
		}

		.isjPCk .blog-slider__text ul > li {
			font-size: 15px;
		}
	}
`;

export default UpcomingEventsWrapper;
