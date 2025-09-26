import styled from "styled-components";

const TermsWrapper = styled.section`
position: relative;

.conduct_heading {
  text-align: left;
  width: 90%;
  font-size: 25px;
  font-weight: 200;
  margin-top: 30px;
  margin-bottom: 20px;
  h2 {
    text-align: left;
  }
}
h3 {
  margin-top: 20px;
  margin-bottom: 10px;
}
hr {margin: 1rem 0;}
.address {
  margin-left: 2rem;
  }
  * {
  box-sizing: border-box;
}
  
table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  display: table;

}

th,
caption {
  text-align: start;
  font-weight: bold;
}

caption {
  margin-block: 0.75rem;
}
td {
  text-align: start;
  font-size: 0.925rem;
}

thead {
  border-block-end: 2px solid;
  background: ${props => props.theme.green00D3A9ToBlackTwo};
}

tfoot {
  text-align: center;
  border-block: 2px solid;
  background: ${props => props.theme.green00D3A9ToBlackTwo};
  font-size: 0.825rem;
}

tfoot:hover {
  cursor: not-allowed;
}

th,
td {
  border: 1px solid ${props => props.theme.grey111111ToGreyFAFAFA};
  padding: 0.25rem 0.75rem;
  vertical-align: middle;
}

thead th,
tfoot th {
  background: ${props => props.theme.green00D3A9ToBlackTwo};
}

thead th {
  vertical-align: middle;
}

td:first-of-type, :where(thead, tfoot) th:nth-child(2) {
  border-inline-start: none;
}
// th:first-child {
//   position: sticky;
//   inset-inline-start: 0;
//   border-inline-end: none;
// }

// th:first-of-type {
//   width: 10rem;
// }

tr.section {
  background: ${props => props.theme.green3C494FToGreyF5F5F5};
  font-weight: 700;
}
 tr.section td:first-child {
      colspan: 4;
    }

// tbody tr:nth-child(even) {
//   background: ${props => props.theme.green3C494FToGreyF5F5F5};
// }

th:first-child::after {
  content: '';
  position: absolute;
  inset-block-start: 0;
  inset-inline-end: 0;
  width: 1px;
  height: 100%;
  background: ${props => props.theme.blackFourToWhiteFour};
}

// table, tr {
//   display: table;
//   border-spacing: 2px;
//   border-collapse: collapse;
//   box-sizing: border-box; 
//   text-indent: 0;
//   border: 1px solid #aaa;
//   border-radius: 5px;
// }
//   tr {border-bottom: 1px solid #aaa;}
// 
// th {
//   font-weight: 700;
//   background: ${props => props.theme.blackFourToWhiteFour};
// }
// td {
//   font-size: .95rem;
//   // padding: 5px;
//   vertical-align: middle;
//   }
@media only screen and (max-width: 420px) {
  .conduct_heading {
    text-align: left;
    width: 90%;
    font-size: 18px;
    font-weight: 200;
    margin-top: 30px;
    margin-bottom: 20px;
    h2 {
      text-align: left;
    }
  }
}
`;

export default TermsWrapper;