import styled from "styled-components";

export const TableWrapper = styled.div`
overflow-x: auto;

table {
    border-spacing: 0;
    border: 1px solid #3c494f;
    width: 100%;
  
    td {
        padding: 5px;
        height: 60px;
        color: black;
        text-align: center;
        font-size: 14px;
        font-weight: 400;
        border-bottom: 1px solid #efefef;
    }
    th {
        background: rgb(60, 73, 79);
        color: #ffffff;
        height: 60px;
        font-weight: 600;
    }
  
    tr {
		:nth-child(odd) {
			background: #ffffff;
			td {
				border-right: 1px solid #ffffff;
			}
		}
		:nth-child(even) {
			background: #efefef;
			td {
				border-right: 1px solid #efefef;
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