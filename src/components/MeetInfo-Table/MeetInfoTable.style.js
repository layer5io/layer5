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
			color: ${props => props.theme.text};
			background-color: ${props => props.theme.DarkTheme ? "rgb(21, 21, 21, 0.1)" : "rgb(255, 255, 255, 0.1)"};
			text-align: center;
			font-size: 0.9rem;
			line-height: .9rem;
			font-weight: 400;
			border-bottom: 1px solid #efefef;
			a {
				color: ${props => props.theme.text};
				&:hover {
					color: ${props => props.theme.primaryLightColor};
				}
			}
			:first-child {
				background-color: ${props => props.theme.DarkTheme ? "rgba(0, 0, 0, 0.1)" : "rgba(0,0,0,0.05)"};
				font-weight: 600;
			}
		}
		th {
			background-color: ${props => props.theme.DarkTheme ? "rgb(14 14 14)" : "#3c494f"};
			color: ${props => props.theme.white};
			height: 4rem;
			font-weight: 600;
			font-size: 1rem;
			line-height: 1rem;
		}
	
		tr {
			td {
			}
			:nth-last-child(-n+2) {
				td:first-child {
					font-style: italic;
				}
			}
			/* Highlight Community Calendar */
			:nth-child(7) {
				background: ${props => props.theme.saffronLightColor};
			}
			&:hover {
				background-color: ${props => props.theme.DarkTheme ? "rgb(50 50 50)" : "#F3FFFD"};
				border-color:  ${props => props.theme.shadowColor};
			}
		}
	}
`;
