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
				color: rgb(98, 172, 205);
				&:hover {
					color: rgb(3, 155, 229);
				}
			}
		}
		th {
			background: rgb(71, 126, 150);
			color: ${props => props.theme.white};
			height: 4rem;
			font-weight: 600;
			font-size: 1rem;
			line-height: 1rem;
		}
	
		tr {
			background: ${props => props.theme.white};
			td {
				border-right: 1px solid ${props => props.theme.white};
			}
		}
	}
`;
