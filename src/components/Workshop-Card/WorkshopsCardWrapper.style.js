import styled from "styled-components";

const WorkshopCardWrapper = styled.div`
	display: block;
	width: 100%;
	height: auto;
	margin-top: 1.25rem;
	position: relative;
	align-items: center;
	border-top: 0.3125rem solid darkcyan;
	border-radius: 0.3125rem;

	.main {
		display: block;
		width: 100%;
		height: 25rem;
	}

	.main-open {
		display: block;
		width: 100%;
		height: auto;
	}

	.title {
		text-align: center;
		font-size: 1.5625rem;
		padding-bottom: 0.625rem;
	}

	.image-container {
		display: block;
		width: 100%;
		height: 50%;
		overflow: hidden;
	}

	.image-container-open {
		display: block;
		width: 100%;
		height: auto;
		margin-bottom: 1.25rem;
	}

	.image {
		display: block;
		width: 100%;
		height: 100%;
		-webkit-transition: 0.5s ease-in-out all;
		transition: 0.5s ease-in-out all;
		box-shadow: 0 0 black;
	}

	.card-content {
		display: block;
		width: 100%;
		height: 100%;
		padding-top: 0.625rem;
	}

	.card-content-open {
		display: block;
		width: 100%;
		text-align: center;
		margin-top: 0.625rem;
	}

	.para {
		padding-left: 0.625rem;
		text-align: start;
	}

	@media only screen and (max-width: 62rem) {
		.workshop-grid-card {
			padding-bottom: 1.25rem;
		}
	}
`;
export default WorkshopCardWrapper;
