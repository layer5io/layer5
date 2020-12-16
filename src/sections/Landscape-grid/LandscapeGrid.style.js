import styled from "styled-components";
export const LandscapePageWrapper=styled.div`

.timeline-heading {
	padding: 20px;
}
.meshtitle-img-0, .meshtitle-img-1 {
	margin-top: -30px;
}
.meshtitle-img-0 {
	float: left;
	margin-left: -60px;
}
.meshtitle-img-1 {
	float: right;
	flex-flow: row-reverse;
	margin-right: -60px;
}
.meshtitle-img-0 img, .meshtitle-img-1 img {
	width: 75px;
	height: 75px;
}
.title-0, .title-1, .subtitle-0, .subtitle-1 {
	position: relative;
	top: -20px;
}
.title-0, .subtitle-0 {
	text-align: end;
}
.title-0, .title-1 {
	color: #3c494f;
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
.heading-container{
	margin-top: 40px;
	padding: 30px;
	width:100%;
	text-align: center;
}
.timeline {
	margin-bottom: 40px;
}
.vertical-timeline-element {
	margin: 2.5em 0;
}
.vertical-timeline::before {
	background: rgb(60, 73, 79);
	border-radius: 50px;
	width: 7px;
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
	margin-top: 80px;
	border: 8px solid #3C494F;
}
.hideIcon {
	display: none;
}
.showMoreIcon {
	width: 70px;
    height: 70px;
    left: 12.5%;
    top: 12%;
}
.showMoreIcon:hover {
	cursor: pointer;
	transform: scale(1.1);
}
span.moreIcon.vertical-timeline-element-icon {
	background: #ead07d;
	color: #3C494F;
	margin-left: -28px;
}
span.moreIcon.vertical-timeline-element-icon:hover {
	background: #ebc017;
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
		margin-left: -2px;
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
		top: 6px;
		font-size: 16px;
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
		margin-left: -50px;
	}
	.meshtitle-img-1 {
		margin-right: -50px;
	}
}
@media screen and (max-width: 767px)  {
    span.moreIcon.vertical-timeline-element-icon {
		margin-left: -8px;
	}
	.vertical-timeline--two-columns .vertical-timeline-element-icon {
		margin-left: 5px;
	}
	.meshtitle-img-0, .meshtitle-img-1 {
		float: left;
		margin: -20px 0 0 -20px;
		flex-flow: row-reverse;
	}
	.vertical-timeline-element-content .vertical-timeline-element-date {
		display: block;
		position: absolute;
		top: 80px;
	}
	.vertical-timeline-element-content {
		height: 130px;
	}
	.title-0, .title-1, .subtitle-0, .subtitle-1 {
		text-align: end;
		width: 230px;
	}
	.dashLine-0, .dashLine-1 {
		margin-left: -80px;
		width: 310px
	}
	.meshtitle-img-0 img, .meshtitle-img-1 img {
		width: 50px;
		height: 50px;
	}
	.meshBubble {
		margin-top: 68px;
	}
}

.landscape-table {
	width: 100%;
	margin-bottom: 75px; 
}
@media screen and (max-width: 767px) {
	.landscape-table {
		padding: 10px;
	}
}
ul.category {
	margin: 0px;
	padding: 10px;
	font-size: 14px;
	font-weight: 400;
}
ul.category li {
	display: inline-flex;
	width: 165px;
}
.react-tabs__tab {
	bottom: 0px;
	padding: 20px;
}
.react-tabs__tab-list {
	margin: 0px;
	padding: 0px;
	font-size: 20px;
	font-weight: 600;
	border-bottom: none;
	border-top-left-radius: 5px;
    border-top-right-radius: 5px;
	color: #ffffff;
	background: #00B39F;
}
.react-tabs__tab--selected {
	background: #3c494f;
    border-color: #3c494f;
	color: white;
	border-radius: 0px;
}
.card-content {
	border-right: none;
}
.odd-row {
	background: #ffffff;
}
.even-row {
	background: #efefef;
}
.category-row-heading {
	padding-left: 10px;
}
.mesh-tooltip {
	width: 250px;
}
.categories-table {
	border-left: 1px solid #3c494f;
	border-right: 1px solid #3c494f;
	border-bottom: 1px solid #3c494f;
}
.missingText {
	padding: 40px;
	text-align: center;
	margin: auto;
}
.missingText div {
	width: 100px;
	margin: auto;
}
.missingText h2 {
	font-weight: 600;
	color: black;
	max-width: 900px;
}
.missingText p {
	padding: 10px;
	font-size: 18px;
	color: rgba(0, 0, 0, 0.5);
}
`;
