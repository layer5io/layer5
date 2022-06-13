import React from "react";
import styled from "styled-components";
import { options } from "./data";
import { Container } from "../../reusecore/Layout";


const ComparisonWrapper = styled.div`
margin: 6rem auto;
h2, h5{
    text-align: center;
}
.main {
    box-shadow: 0 0 24px rgba(0, 0, 0, 0.15);
    display: block;
    margin: 2rem auto;
    overflow-x: scroll;
}
.price-table {
    width: 100%;
    border-collapse: collapse;
    border: 0 none;
}
.price-table tr:not(:last-child) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.03);
}
.price-table tr td {
    border-left: 1px solid rgba(0, 0, 0, 0.05);
    padding: 8px 24px;
    font-size: 14px;
}
.price-table tr td:first-child {
    border-left: 0 none;
}
.price-table tr td:not(:first-child) {
    text-align: center;
}
.price-table tr:nth-child(even) {
    background-color: #FFFFFF;
}

.price-table tr:hover {
    background-color: #EEEEEE;
}
.price-table .fa-check {
    color: #5336ca;
}
.price-table .fa-times {
    color: #D8D6E3;
}

/* Highlighted column */

.price-table tr td:nth-child(2) {
    background: rgba(0,179,159,0.1);
    padding: 8px 48px;
}

.price-table tr.price-table-head td {
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
}
.price-table tr.price-table-head {
    background-color: #00b39f;
    color: #FFFFFF;
    td{
    padding: 1rem 0;
    }
}
.price-table td.price {
    padding: 16px 24px;
    font-size: 20px;
    font-weight: 600;
}
.price-table td.price .button {
    padding: 1rem 1.5rem;
    margin-top: 16px;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    display: inline-block;
    border-radius: 64px;
}
.price-table td.price-table-popular {
    border-top: 3px solid #00b39f;
    color: #00b39f;
    text-transform: uppercase;
    font-size: 12px;
    padding: 12px 48px;
    font-weight: 700;
}
.price-table .price-blank {
    background-color: #fafafa;
    border: 0 none;
}

.price-table svg {
    width: 90px;
    fill: #00b39f;
}
small{
    font-size: 12px; font-weight: 400;
}
.icon{
    height: 1.5rem;
    width: auto;
}
`;

const Comparison = () => {
  return (
    <ComparisonWrapper>
      <h2>Compare All Features</h2>
      <h5>Choose a plan that’s right for you</h5>
      <Container>
        <div className="main">
          <table className="price-table">
            <tbody>
              <tr>
                <td className="price-blank"></td>
                <td className="price-table-popular">Most popular</td>
                <td className="price-blank"></td>
                <td className="price-blank"></td>
              </tr>
              <tr className="price-table-head">
                <td></td>
                <td>Free</td>
                <td>Team</td>
                <td>Enterprise</td>
              </tr>

              {options[0].subdata.map((x) => (
                <tr key={x.category}>
                  <td>{x.category}</td>
                  {options.map((tier) => (
                    <td key={tier.tier}>{tier.subdata[x.id].value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>

    </ComparisonWrapper>
  );
};

export default Comparison;
