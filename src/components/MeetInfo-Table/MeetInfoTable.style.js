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
			background-color: ${props => props.theme.grey151515OneToWhiteOne};
			text-align: center;
			font-size: 0.9rem;
			line-height: .9rem;
			font-weight: 400;
			border-bottom: 1px solid #efefef;
			transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
			a {
				color: ${props => props.theme.text};
				transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
				&:hover {
					color: ${props => props.theme.greyB4B4B4ToGrey505050};
				}
			}
			:first-child {
				background-color: ${props => props.theme.blackOneToBlackZeroFive};
				font-weight: 600;
			}
		}
		th {
			background-color: ${props => props.theme.grey0E0E0EToGreen3C494F};
			color: ${props => props.theme.white};
			height: 4rem;
			font-weight: 600;
			font-size: 1rem;
			line-height: 1rem;
			transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
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
			:nth-child(4) {
				background: ${props => props.theme.saffronLightColor};
			}
			&:hover {
				background-color: ${props => props.theme.grey323232ToGreenF3FFFD};
				border-color:  ${props => props.theme.shadowColor};
			}
		}
	}
`;
