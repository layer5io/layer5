import styled from "styled-components";
export const LandscapePageWrapper = styled.div`

	h2.landscape-section-heading {
		margin-bottom: 2rem;
		margin-top: 3rem;
		width: 100%;
		font-weight: 600;
		text-align: center;
		font-style:unset;
		color:${props => props.theme.text};
	}

	#service-mesh-comparison-strength {
            margin: -2.5rem 1rem 5rem;
	}

	.subsequent-heading {
		padding-top: 6rem;
	}
	
	.landscape-section-sub-heading {
		text-align: center;
		width: 100%;
	}

	.strength-comparison-section {
		display: flex;
		justify-content: center;

		.comparison-mesh {
			margin: 0 1rem;
			
			.mesh-img {	
				text-align: center;
				width: 13rem;
				height: 10rem;
				margin: auto;
				padding: 1rem ;
				border-radius: 1rem;
				background: ${props => props.theme.secondaryColor};
				position: relative;
				z-index: 1;
				box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.5);

				img {
					width: 4rem;
					height: 4rem;
					filter: grayscale(1) brightness(10);
				}

				h3 {
					font-weight: 400;
					line-height: 1.5rem;
					color: ${props => props.theme.white};
				}
				.pad-top { 
					margin-top: 10px;
				}
			}

			

			.mesh-data {
				width: 12.5rem;
				height: 6rem;
				margin: auto;
				font-size: 1.125rem;
				text-align: center;
				padding: 1rem 0.25rem;
				color: ${props => props.theme.bodyRevert};
				background: ${props => props.theme.tertiaryColor};
				z-index: 0;
				border-bottom-right-radius: 0.8rem;
				border-bottom-left-radius: 0.8rem;
				transform: translateY(-6rem);
				transition: all 0.5s ease;

				p {
					margin: 0;
					color: ${props => props.theme.textRevert};
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
	.meshtitle-img-1 .vulcan-img{
  		width: 6rem;
  		hight: 6rem;
	}
	.title-0, .title-1, .subtitle-0, .subtitle-1 {
		position: relative;
		top: -1.25rem;
	}
	.title-0, .subtitle-0 {
		text-align: end;
		max-width: 12rem;
	}
	.title-1, .subtitle-1 {
		max-width: 13rem;
	}
	.title-0, .title-1 {
		font-size: 1.25rem;
		color: ${props => props.theme.text};
	}
	.subtitle-0, .subtitle-1 {
		font-size: 1rem;
		font-family: "Qanelas Soft", "Open Sans", sans-serif;
		font-weight: 400;
		color: ${props => props.theme.grey8C8C8CToGreyA0A0A0};
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
		background: ${props => props.theme.whiteToGreen1E2117};
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
		background: ${props => props.theme.body};
		box-shadow: none;
	}
	.meshBubble {
		background: #00B39F;
		margin-top: 5rem;
		border: 8px solid ${props => props.theme.whiteToGreen1E2117};
	}
	.hideIcon {
		display: none;
	}
	.showMoreIcon {
		width: 4.4rem;
		height: 4.4rem;
		left: 12.5%;
		top: 12%;
		animation: bounce .75s; 
		animation-direction: alternate; 
		animation-timing-function: cubic-bezier(.5, 0.05, 1, .5); 
		animation-iteration-count: infinite; 
	}
	.showMoreIcon:hover {
		cursor: pointer;
		color: ${props => props.theme.tertiaryColor};
	}
	span.moreIcon.vertical-timeline-element-icon {
		background: ${props => props.theme.saffronColor};
		color: #fff;
		margin-left: -1.75rem;
		animation: bounce .75s; 
		animation-direction: alternate; 
		animation-timing-function: cubic-bezier(.5, 0.05, 1, .5); 
		animation-iteration-count: infinite; 
	
	}
	span.moreIcon.vertical-timeline-element-icon:hover {
		background: ${props => props.theme.saffronLightColor};
	}
      
	@keyframes bounce { 
		from { 
			transform: translate3d(0, 0, 0); 
		} 
		to { 
			transform: translate3d(0, 6px, 0); 
		} 
	} 
	/* Prefix Support */ 
          
	.showMoreIcon { 
		-webkit-animation-name: bounce; 
		-webkit-animation-duration: .75s; 
		-webkit-animation-direction: alternate; 
		-webkit-animation-timing-function: cubic-bezier( 
		.5, 0.05, 1, .5); 
		-webkit-animation-iteration-count: infinite; 
	} 
          
	@-webkit-keyframes bounce { 
		from { 
			-webkit-transform: translate3d(0, 0, 0); 
			transform: translate3d(0, 0, 0); 
		} 
		to { 
			-webkit-transform: translate3d(0, 6px, 0); 
			transform: translate3d(0, 6px, 0); 
		} 
	} 

	@media screen and (min-width: 1200px) {
		.dashLine-0 {
			margin-left: -28%;
			position: absolute;
			width: 75%;
			top: 5rem;
		}
		.dashLine-1 {
			margin-left: 39%;
			position: absolute;
			top: 5rem;
			width: 77%;
		}
		.title-1, .subtitle-1 {
			left: 45%;
		}
		.title-0, .subtitle-0 {
			left: 5%
		}
	}

	@media screen and (min-width: 992px) and (max-width: 1200px) {
		.dashLine-0 {
			margin-left: -30%;
			position: absolute;
			width: 85%;
			top: 5rem;
		}
		.dashLine-1 {
			margin-left: 25%;
			position: absolute;
			top: 5rem;
			width: 92%;
		}
		.title-1, .subtitle-1 {
			left: 30%;
		}
		.title-0, .subtitle-0 {
			left: 5%;
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
			margin-left: -32%;
			position: absolute;
			width: 100%;
			top: 5rem;
		}
		.dashLine-1 {
			margin-left: 13%;
			position: absolute;
			top: 5rem;
			width: 103%;
		}
		.title-1, .subtitle-1 {
			left: 15%;
		}
		.title-0, .subtitle-0 {
			left: 5%;
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
			min-width: 13rem;
			margin-left: 2.25rem;
		}
		.dashLine-0, .dashLine-1 {
			margin-left: -5rem;
			width: 20rem;
			position: absolute;
			top: 4.15rem;
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
		margin: 2rem 0;
		box-shadow: ${props => props.theme.DarkTheme ? "0px 2px 16px rgba(163, 163, 163, 0.2)" : "0px 2px 16px rgba(0, 0, 0, 0.2)"};
		border-top-left-radius: .5rem;
		border-top-right-radius: .5rem;

		a { 
			color: ${props => props.theme.text};
	
			&:hover {
				color: ${props => props.theme.secondaryColor};
			}
		}
	}

	.category-row-heading {
		font-size: 1.05rem;
		padding: 0.75rem;
		font-weight: 600;
		color: ${props => props.theme.white};
		background: ${props => props.theme.grey404040ToGrey1E2117};
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
		background-color: ${props => props.theme.DarkTheme ? "#262626" : "#3C494F"};
		border-right: 1px solid ${props => props.theme.shadowLightColor};
		border-bottom: 1px solid ${props => props.theme.shadowLightColor};
		&:nth-child(1){
			border-top-left-radius: .5rem;
		}
		&:hover {
			background-color: ${props => props.theme.grey404040ToGrey1E2117};
			color: ${props => props.theme.white};
			&:nth-child(1){
				border-top-left-radius: .5rem;
			}
		}
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
		background: ${props => props.theme.DarkTheme ? "#009a89" : "#00B39F"};
	}
	.react-tabs__tab--selected {
		background: ${props => props.theme.grey404040ToGrey1E2117};
		border-color: ${props => props.theme.grey404040ToGrey1E2117};
		border-right: 1px solid ${props => props.theme.shadowLightColor};
		border-radius:0;
		color: ${props => props.theme.white};
		font-weight: 600;
		// border-bottom: 0px;
	}
	.react-tabs__tab:focus:after{
		content: none;
	}
	.card-content {
		border-right: none;
	}
	.odd-row {
		background: ${props => props.theme.grey212121ToWhite};
		&:hover{
			box-shadow: 0px 2px 5px -10px black;
			transform: translateY(0px);
		}
	}
	.even-row {
		background: ${props => props.theme.grey212121ToWhite};
		&:hover{
			box-shadow: 10px 2px 5px -10px black;
			transform: translateY(0px);
		}
	}
	.mesh-tooltip {
		width: 15rem;
		box-shadow: 1px 1px 6px -6px ${props => props.theme.primaryLightColorTwo};
		border-radius: .75rem;
		line-height: 1.5rem;
	}
	.AboutLandscape {
		display: flex;
		padding: 2.5rem;
		text-align: center;
		margin: auto;
		margin-top: 4rem;
		margin-bottom: 4rem;

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
	.Legend {
		display: flex;
		padding: .7rem;
		text-align: right;
		margin-left: auto;
		vertical-align: middle;
		border: 1px ${props => props.theme.primaryColor};
		background-color: ${props => props.theme.darkJungleGreenColor};
		opacity: .85;
		color: #efefef;
		font-size: .9rem;
		border-style: inset; 
		span {
			font-size: 1rem;
			font-weight:600;
			margin: auto;
			margin-right: 1rem;
		}
		img {
			height: 2rem;
			vertical-align:middle;
			padding: 0.3rem;
			margin-right: .25rem;
		}
		@media screen and (max-width:767px) {
			display: block;
	
			img {
				margin: 0 auto 0.25rem;
			}
		}

		div {
			padding-left: 0.5rem;
			padding-right: 0.5rem;
			background-color:#fff;
			color: ${props => props.theme.darkJungleGreenColor};
			border: 1px dashed ${props => props.theme.primaryLightColor};
			margin: 0rem .3rem;

		}
	}

	.Landscape div {
		width: 6rem;
		margin: auto;
	}
	.Landscape h3 {
		font-weight: 600;
		max-width: 60rem;
	}
	.Landscape h4 {
		padding: 0.6rem;
		color: rgba(0, 0, 0, 0.5);
	}
`;
