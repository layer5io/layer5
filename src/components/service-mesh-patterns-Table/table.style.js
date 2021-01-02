import styled from "styled-components";

export const TableWrapper = styled.div`
    table,th, td{
        border:1px solid black;
        border-collapse:collapse; 
    }

    td{
        padding:5px;
    }

    th{
        background:#1C4587;
        color:#fff;
        padding:10px;

        a{
            color:#EBEBEB;

            &:hover{
                color:#ccc;
            }
        }
    }

    .bold{
        font-weight:700;
        background:#CFE2F3;
    }
`;