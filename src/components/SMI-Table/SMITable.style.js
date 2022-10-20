import styled from "styled-components";

export const TableWrapper = styled.div`
overflow: hidden;

.smiMark {
	height: 70%;
	max-height:2.5rem;
}

.gatsby-image-wrapper {
	img {
		width: 2.5rem;
		height: 2.5rem;
		margin: auto;
	}
}

.smi-tooltip {
	box-shadow: 1px 1px 6px -6px ${props => props.theme.primaryLightColorTwo};
	border-radius: .75rem;
	line-height: 1.5rem;
}

.tooltip-div{
	display: inline-block;
}

table {
    border-spacing: 0;
    width: 100%;
  
    td {
        padding: 0.3rem;
        height: 4rem;
        color: ${props => props.theme.text};
        text-align: center;
        font-size: 0.9rem;
        font-weight: 400;
        border-bottom: 1px solid ${props => props.theme.DarkTheme ? "#212121" : "efefef"};
    }
    th {
        background: ${props => props.theme.DarkTheme ? "#404040" : "#1E2117"} ;
        color: #ffffff;
		height: 4rem;
		font-size: 1rem;
        font-weight: 600;
    }
  
	tr.primaryRow {
		background: ${props => props.theme.body};
		td {
			border-right: 1px solid ${props => props.theme.body};
		}
	}
	tr.secondaryRow {
		background: #efefef;
		td {
			border-right: 1px solid ${props => props.theme.body};
		}
	}

	tr.secondaryRow-hidden {
		display: none;
	}

    tr {
		:last-child {
			td {
				border-bottom: 0;
			}
		}
    }
  
    td, th {
		:last-child {
			border-right: 0;
		}
	}
	
	th, tr{
		&:hover{
			box-shadow: 0px 0px 15px -10px ${props => props.theme.DarkTheme ? "#FFFFFF" : props.theme.text};
			transform: translateY(0px);
		}
	}
  }
`;