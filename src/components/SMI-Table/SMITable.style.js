import styled from "styled-components";

export const TableWrapper = styled.div`
overflow-x: auto;
overflow-y: hidden;

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
	transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
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
        border-bottom: 1px solid ${props => props.theme.grey212121ToGreyEFEFEF};
				transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    }
    th {
        background: ${props => props.theme.grey404040ToGrey1E2117} ;
        color: #ffffff;
				height: 4rem;
				font-size: 1rem;
        font-weight: 600;
				transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    }
  
	tr.primaryRow {
		background: ${props => props.theme.body};
		transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
		td {
			border-right: 1px solid ${props => props.theme.body};
			transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
		}
	}
	tr.secondaryRow {
		background: #efefef;
		td {
			border-right: 1px solid ${props => props.theme.body};
			transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
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
			box-shadow: 0px 0px 15px -10px ${props => props.theme.whiteToBlack};
			transform: translateY(0px);
		}
	}
  }
`;