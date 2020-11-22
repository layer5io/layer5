import styled from "styled-components";

export const TableWrapper = styled.div`
overflow-x: auto;

table {
    border-spacing: 0;
    border: 1px solid black;
    width: 100%;
  
    td {
        padding: 5px;
        height: 60px;
        color: rgb(60,73,79);
        text-align: center;
        font-size: 14px;
        font-weight: 600;
        border-bottom: 1px solid #c0cccc
    }
    th {
        border: 1px solid #3c494f
        background: rgb(60, 73, 79);
        color: #ffffff;
        height: 60px;
        font-weight: 600;
    }
  
    tr {
		:nth-child(odd) {
			background: #e2e8e8;
			td {
				border-right: 1px solid #e2e8e8;
			}
		}
		:nth-child(even) {
			background: #c0cccc;
			td {
				border-right: 1px solid #c0cccc;
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
  }
`;