import styled from "styled-components";
export const LandscapePageWrapper=styled.div`

.timeline-heading {
	padding: 20px;
}
.meshtitle-img {
	display: flex;
}
.meshtitle-img > h3 {
	padding: 20px;
	color: #00d3a9;
} 
.meshtitle-img > img {
	width: 100px;
	height: inherit;
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
.vertical-timeline::before {
	background: rgb(60, 73, 79)
}
.vertical-timeline-element-icon {
	box-shadow: 0 0 0 4px #00d3a9, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)
}
.vertical-timeline-element-content {
	border-radius: 1.25em;
}
.timeline-element {
	margin: 1em 0;
}
.landscape-table {
	width: 100%;
	margin-bottom: 75px; 
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
