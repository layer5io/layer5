import styled from "styled-components";

export const TableWrapper = styled.div`
overflow-x: auto;
img.Mark {
	height: 70%;
}

table {
    border-spacing: 0;
    width: 100%;
  
    td {
				transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        padding: 0.3rem;
        height: 4rem;
        text-align: center;
		font-size: 0.9rem;
		line-height: .9rem;
        font-weight: 400;
        border-bottom: 1px solid ${props => props.theme.grey212121ToWhite};

    }
    th {
        background: #1E2117;
        color: #ffffff;
        height: 4rem;
		font-weight: 600;
		font-size: 1rem;
		line-height: 1rem;
    }
  
    tr {
			transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
		:nth-child(odd) {
			background: ${props => props.theme.grey212121ToWhite};
			td {
				transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
				border-right: 1px solid ${props => props.theme.grey212121ToWhite};
			}
		}
		:nth-child(even) {
			background: ${props => props.theme.grey121212ToGreyEFEFEF};
			td {
				transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
				border-right: 1px solid ${props => props.theme.grey121212ToGreyEFEFEF};
			}
		}
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
	
	tr {
		&:hover {
			background-color:rgba(0,179,159,0.1);	
		}
	}
  }
`;