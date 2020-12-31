import styled from "styled-components";
export const LandscapePageWrapper=styled.div`

	h2.landscape-section-heading {
		margin-bottom: 3rem;
		margin-top: 3rem;
		width: 100%;
		text-align: center;
	}
	.subsequent-heading {
		padding-top: 8rem;
	}

	.timeline-heading {
		padding: 1.25rem;
	}
	.meshtitle-img-0, .meshtitle-img-1 {
		margin-top: -2.5rem;
	}
	.meshtitle-img-0 {
		float: left;
		margin-left: -4rem;
	}
	.meshtitle-img-1 {
		float: right;
		flex-flow: row-reverse;
		margin-right: -4rem;
	}
	.meshtitle-img-0 img, .meshtitle-img-1 img {
		width: 4.75rem;
		height: 4.75rem;
	}
	.title-0, .title-1, .subtitle-0, .subtitle-1 {
		position: relative;
		top: -1.25rem;
	}
	.title-0, .subtitle-0 {
		text-align: end;
	}
	.title-0, .title-1 {
		color: #1E2117;
	}
	.subtitle-0, .subtitle-1 {
		font-family: 'Open Sans';
		font-weight: 400;
		color: #a0a0a0;
	}
	.dashLine-0 {
		border-bottom: 1px dashed #a0a0a0;
	}
	.dashLine-1 {
		border-bottom: 1px dashed #a0a0a0;
	}
	.vertical-timeline-element {
		margin: 2.5em 0;
	}
	.vertical-timeline::before {
		background: #1E2117;
		border-radius: 4rem;
		width: 0.5rem;
	}
	.vertical-timeline--two-columns .vertical-timeline-element-icon {
		box-shadow: none;
		margin-left: -16px;
		z-index: 1;
	}
	.vertical-timeline-element-content {
		border-radius: 1.25em;
		box-shadow: none;
	}
	.meshBubble {
		background: #00B39F;
		margin-top: 5rem;
		border: 8px solid #1E2117;
	}
	.hideIcon {
		display: none;
	}
	.showMoreIcon {
		width: 4.4rem;
		height: 4.4rem;
		left: 12.5%;
		top: 12%;
	}
	.showMoreIcon:hover {
		cursor: pointer;
		transform: scale(1.1);
	}
	span.moreIcon.vertical-timeline-element-icon {
		background: #EAD07D;
		color: #1E2117;
		margin-left: -1.75rem;
	}
	span.moreIcon.vertical-timeline-element-icon:hover {
		background: #EBC017;
		transform: scale(1.1);
	}
	@media screen and (min-width: 1200px) {
		.dashLine-0 {
			margin-left: -33%;
			margin-right: 45%;
		}
		.dashLine-1 {
			margin-right: -33%;
			margin-left: 45%;
		}
		.title-1, .subtitle-1 {
			left: 45%;
		}
		.title-0, .subtitle-0 {
			right: 45%
		}
	}

	@media screen and (min-width: 992px) and (max-width: 1200px) {
		.dashLine-0 {
			margin-left: -40%;
			margin-right: 30%;
		}
		.dashLine-1 {
			margin-left: 30%;
			margin-right: -40%;
		}
		.title-1, .subtitle-1 {
			left: 30%;
		}
		.title-0, .subtitle-0 {
			right: 30%;
		}
	}
	@media screen and (min-width: 767px) and (max-width: 1200px) {
		.vertical-timeline.vertical-timeline--two-columns:before {
			left: 50%;
			margin-left: -0.15rem;
		}
		.vertical-timeline--two-columns .vertical-timeline-element-icon {
			left: 50%;
		}
		.vertical-timeline--two-columns .vertical-timeline-element-content {
			margin-left: 0;
			padding: 1.5em;
			width: 44%;
		}
		.vertical-timeline--two-columns .vertical-timeline-element.vertical-timeline-element--right .vertical-timeline-element-content,
		.vertical-timeline--two-columns .vertical-timeline-element:nth-child(even):not(.vertical-timeline-element--left) .vertical-timeline-element-content {
			float: right;
		}
		.vertical-timeline--two-columns.vertical-timeline--animate .vertical-timeline-element.vertical-timeline-element--right .vertical-timeline-element-content.bounce-in,
		.vertical-timeline--two-columns.vertical-timeline--animate .vertical-timeline-element:nth-child(even):not(.vertical-timeline-element--left) .vertical-timeline-element-content.bounce-in {
			animation: cd-bounce-2-inverse .6s;
		}
		.vertical-timeline--two-columns .vertical-timeline-element-content .vertical-timeline-element-date {
			position: absolute;
			width: 100%;
			left: 124%;
			top: 0.4rem;
			font-size: 1rem;
		}
		.vertical-timeline--two-columns .vertical-timeline-element.vertical-timeline-element--right .vertical-timeline-element-content .vertical-timeline-element-date,
		.vertical-timeline--two-columns .vertical-timeline-element:nth-child(even):not(.vertical-timeline-element--left) .vertical-timeline-element-content .vertical-timeline-element-date {
			left: auto;
			right: 124%;
			text-align: right;
		}
	}
	@media screen and (min-width: 767px) and (max-width: 996px) {
		.dashLine-0 {
			margin-left: -40%;
			margin-right: 15%;
		}
		.dashLine-1 {
			margin-left: 15%;
			margin-right: -40%;
		}
		.title-1, .subtitle-1 {
			left: 15%;
		}
		.title-0, .subtitle-0 {
			right: 15%;
		}
		.meshtitle-img-0 {
			margin-left: -3rem;
		}
		.meshtitle-img-1 {
			margin-right: -3rem;
		}
	}
	@media screen and (max-width: 767px)  {
		span.moreIcon.vertical-timeline-element-icon {
			margin-left: -0.5rem;
		}
		.vertical-timeline--two-columns .vertical-timeline-element-icon {
			margin-left: 0.4rem;
		}
		.meshtitle-img-0, .meshtitle-img-1 {
			float: left;
			margin: -1.25rem 0 0 -1.25rem;
			flex-flow: row-reverse;
		}
		.vertical-timeline-element-content .vertical-timeline-element-date {
			display: block;
			position: absolute;
			top: 5rem;
		}
		.vertical-timeline-element-content {
			height: 7rem;
		}
		.title-0, .title-1, .subtitle-0, .subtitle-1 {
			text-align: end;
			width: 15rem;
		}
		.dashLine-0, .dashLine-1 {
			margin-left: -5rem;
			width: 20rem;
		}
		.meshtitle-img-0 img, .meshtitle-img-1 img {
			width: 3.25rem;
			height: 3.25rem;
		}
		.meshBubble {
			margin-top: 4rem;
		}
	}

	.landscape-table {
		width: 100%;
		margin-bottom: 2rem;
		box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.2);
	}

	.category-row-heading {
		font-size: 1.15rem;
		padding: 0.75rem 0 0 0.75rem;
	}
	ul.category {
		margin: 0;
		padding: 0.5rem 1rem;
		font-size: 1rem;
		font-weight: 400;
	}
	ul.category li {
		display: inline-flex;
		width: 12rem;
	}

	@media screen and (max-width:425px){
		ul.category li{
			width: 10rem;
		}
	}
	.react-tabs__tab {
		bottom: 0px;
		padding: 1.25rem;
	}
	.react-tabs__tab-list {
		margin: 0px;
		padding: 0px;
		font-size: 1.25rem;
		font-weight: 600;
		border-bottom: none;
		border-top-left-radius: 0.3rem;
		border-top-right-radius: 0.3rem;
		color: #ffffff;
		background: #00B39F;
	}
	.react-tabs__tab--selected {
		background: #1E2117;
		border-color: #1E2117;
		color: white;
		border-radius: 0.3rem;
	}
	.card-content {
		border-right: none;
	}
	.odd-row {
		background: #ffffff;
		&:hover{
			box-shadow: 0px 2px 15px -10px black;
			transform: translateY(0px);
		}
	}
	.even-row {
		background: #efefef;
		&:hover{
			box-shadow: 0px 2px 15px -10px black;
			transform: translateY(0px);
		}
	}
	.mesh-tooltip {
		width: 15rem;
	}
	.missingText {
		padding: 2.5rem;
		text-align: center;
		margin: auto;
	}
	.missingText div {
		width: 6rem;
		margin: auto;
	}
	.missingText h2 {
		font-weight: 600;
		color: black;
		max-width: 56rem;
	}
	.missingText p {
		padding: 0.6rem;
		font-size: 1.2rem;
		color: rgba(0, 0, 0, 0.5);
	}

	.strength-comparison-section {
		display: flex;
		flex: auto;
		justify-content: center;
		margin: 0 -1rem;

		.comparison-mesh {
			margin: 0 1rem;
			.mesh-img {
				width: 13rem;
				height: 9rem;
				padding: 0.8rem 1.5rem;
				border-radius: 1rem;
				background: ${props => props.theme.secondaryColor};
				position: relative;
				z-index: 1;
				text-align: center;
				box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.5);

				img {
					width: 4rem;
					height: 3rem;
					filter: grayscale(1) brightness(10);
				}

				h5 {
					font-size: 1.5rem;
					color: ${props => props.theme.white};
				}
			}

			.mesh-data {
				width: 12.5rem;
				height: 6rem;
				margin: auto;
				font-size: 1.125rem;
				text-align: center;
				padding: 1rem 0.25rem;
				color: ${props => props.theme.white};
				background: ${props => props.theme.tertiaryColor};
				z-index: 0;
				border-bottom-right-radius: 0.8rem;
				border-bottom-left-radius: 0.8rem;
				transform: translateY(-6rem);
				transition: all 0.5s ease;

				p {
					margin: 0;
				}
			}

			&:hover {
				cursor: default;
				.mesh-data {
					transform: translateY(-0.5rem);
				}
			}
		}
	}

	@media screen and (max-width: 1200px) {
		.strength-comparison-section {
			flex-wrap: wrap;
			margin: auto;
		}
	}
`;
