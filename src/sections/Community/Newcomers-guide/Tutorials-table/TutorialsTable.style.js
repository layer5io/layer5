import styled from "styled-components";

export const TutorialsTableWrapper = styled.div`
  table{
    display: table;
    width: 100%;
    height: auto;
    border-collapse: collapse;
    margin: 3.75rem auto;
    th,
    tr {
      height: 3.75rem;
      vertical-align: middle;
    }
    tr:nth-child(odd) {
      background-color: #F0F0F0;
    }
    th {
      background-color: ${props => props.theme.secondaryColor};
    }
    th,
    td {
      border-bottom: 1px solid #F0F0F0;
      padding: 0 0.625rem;
      p{
        margin: 0.5rem 0;
      }
      span {
        display: block;
      }
    }
    }
`;
