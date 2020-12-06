import styled from "styled-components";
export const LandscapePageWrapper=styled.div`

.timeline-heading {
	padding: 20px;
}
.meshtitle-img-0, .meshtitle-img-1 {
	display: flex;
	margin-top: -30px;
}
.meshtitle-img-0 {
	float: left;
	flex-flow: row-reverse;
	margin-left: -75px;
}
.meshtitle-img-1 {
	float: right;
	margin-right: -75px;
}
.meshtitle-img-0 > h3, .meshtitle-img-1 > h3 {
	padding: 20px;
	color: #00d3a9;
} 
.meshtitle-img-0 img, .meshtitle-img-1 img {
	width: 100px;
	height: 100px;
}
.heading-container{
	margin: 40px 0;
	padding: 35px;
	width:100%;
	text-align: center;
}
.timeline {
	margin-bottom: 40px;
}
.timeline-element {
	margin: 1em 0;
}
.vertical-timeline::before {
	background: rgb(60, 73, 79)
}
.vertical-timeline--two-columns .vertical-timeline-element-icon {
	box-shadow: 0 0 0 4px #00d3a9, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05);
	margin-left: -10px;
}
.vertical-timeline-element-content {
	border-radius: 1.25em;
	box-shadow: none;
}
.bubble-icon {
	width: 50px;
	height: 50px;
	position: relative;
	left: 5px;
	top: 5px;
}
.landscape-table {
	width: 100%;
	margin-bottom: 75px; 
}
@media screen and (min-width: 767px) and (max-width: 1170px) {
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
	.meshtitle-img-0 {
		margin-left: -60px;
	}
	.meshtitle-img-1 {
		margin-right: -60px;
	}
}
@media screen and (max-width: 767px)  {
	.vertical-timeline--two-columns .vertical-timeline-element-icon {
		margin-left: 10px;
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
	.meshtitle-img-0 img, .meshtitle-img-1 img {
		width: 75px;
		height: 75px;
	}
}
@media screen and (max-width: 767px) {
	.landscape-table {
		padding: 10px;
	}
}
ul.category {
	margin: 0px;
	padding: 10px;
	column-count: 5;
	font-size: 14px;
	font-weight: 600;
}
ul.category li {
	display: block;
}
.react-tabs__tab {
	bottom: 0px;
	padding: 20px;
}
.react-tabs__tab-list{
	margin: 0px;
	padding: 0px;
	font-size: 20px;
	font-weight: 600;
	border-bottom: none;
	border-top-left-radius: 5px;
    border-top-right-radius: 5px;
	color: #ffffff;
	background: #000000;
}
.react-tabs__tab--selected {
	background: #3c494f;
    border-color: #000;
	color: white;
	border-radius: 0px;
}
.card-content {
	border-right: none;
}
.odd-row {
	background: #c0cccc;
}
.even-row {
	background: #e2e8e8;
}
.category-row-heading {
	padding-left: 10px;
}
.mesh-tooltip {
	width: 250px;
}
.categories-table {
	border: 1px solid #3c494f;
}
`;
