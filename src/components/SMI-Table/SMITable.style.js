import styled from "styled-components";

export const TableWrapper = styled.div`
overflow-x: auto;

img.smiMark {
	height: 70%;
	max-height:2.5rem;
}
table {
    border-spacing: 0;
    width: 100%;
  
    td {
        padding: 0.3rem;
        height: 4rem;
        color: black;
        text-align: center;
        font-size: 0.9rem;
        font-weight: 400;
        border-bottom: 1px solid #efefef;
    }
    th {
        background: #1E2117;
        color: #ffffff;
		height: 4rem;
		font-size: 1rem;
        font-weight: 600;
    }
  
	tr.primaryRow {
		background: #ffffff;
		td {
			border-right: 1px solid #ffffff;
		}
	}
	tr.secondaryRow {
		background: #efefef;
		td {
			border-right: 1px solid #efefef;
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
			box-shadow: 0px 2px 15px -10px black;
			transform: translateY(0px);
		}
	}
  }
`;