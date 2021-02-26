import styled from "styled-components";

export const TableWrapper = styled.div`
	overflow-x: auto;

	.meetings-table-subtitle {
        margin-bottom: 1rem;
    }
	table {
		border-spacing: 0;
		width: 100%;
		margin-bottom: 2rem;
	
		td {
			padding: 0.3rem;
			height: 4rem;
			color: black;
			text-align: center;
			font-size: 0.9rem;
			line-height: .9rem;
			font-weight: 400;
			border-bottom: 1px solid #efefef;
			a {
				color: ${props => props.theme.primaryColor};
				&:hover {
					color: ${props => props.theme.primaryLightColor};
				}
			}
			:first-child {
				background-color: ${props => props.theme.shadowColor};
				font-weight: 600;
			}
		}
		th {
			background: ${props => props.theme.primaryColor};
			color: ${props => props.theme.white};
			height: 4rem;
			font-weight: 600;
			font-size: 1rem;
			line-height: 1rem;
		}
	
		tr {
			background: ${props => props.theme.white};
			td {
			}
			:nth-last-child(-n+2) {
				td:first-child {
					font-style: italic;
				}
			}
			/* Highlight Community Calendar */
			:nth-child(6) {
				background: rgb(0, 179, 159, .2);
			}
			&:hover {
				background-color: ${props => props.theme.shadowColor};
				border-color:  ${props => props.theme.shadowColor};
			}
		}
	}
`;
