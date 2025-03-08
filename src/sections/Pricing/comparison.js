import React from "react";
import styled from "styled-components";
import details  from "./generateDetails";
import { Container } from "../../reusecore/Layout";
// import FeatureDetails from "./collapsible-details";
import FeatureDetails from "../../components/PlanCard/collapsible-details";


const ComparisonWrapper = styled.div`
margin: 6rem auto;
@media (min-width: 2048px) {
  margin: 15rem auto;
}

h2, h5{
  text-align: center;
}

.main {
    box-shadow: 0 0 24px ${props => props.theme.whiteOneFiveToBlackOneFive};
    margin: 2rem auto;
    display: block;
    overflow-x: scroll;
    overflow-y:hidden;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
}
.price-table {
    width: 100%;
    border-collapse: collapse;
    border: 0 none;
}
.price-table tr:not(:last-child) {
    border-bottom: 1px solid ${props => props.theme.whiteZeroThreeToBlackZeroThree};
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
}
.price-table tr td {
    border-left: 1px solid ${props => props.theme.whiteZeroFiveToBlackZeroFive};
    padding: 0rem 2rem;
    font-size: 1rem;
    vertical-align: middle;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

    h5 {
      display: flex;
      text-align: left;
      padding-top: 1rem;
      font-size: 1.2rem;
    }
}
.price-table tr td:first-child {
    border-left: 0 none;
    width: 100%;
    justify-content: flex-start;
    text-align: left;
}
.price-table tr td:not(:first-child) {
    text-align: center;
}
.price-table tr:nth-child(even) {
}

.price-table tr:hover {
    background-color: ${props => props.theme.secondaryLightColor};
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
}
.price-table .fa-check {
    color: #5336ca;
}
.price-table .fa-times {
    color: #D8D6E3;
}

/* Highlighted column */

.price-table tr td:nth-child(3) {
    background: rgba(0,179,159,0.1);
    padding: 8px 48px;
}

.price-table tr.price-table-head td {
    font-size: 1.15rem;
    line-height: 1.5rem;
    font-weight: 600;
    padding: .5rem;
    text-transform: uppercase;
}
.price-table tr.price-table-head {
    background-color:${props => props.theme.secondaryColor};
    color: #FFFFFF;
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
.price-table th.price-table-popular {
    border-top: 3px solid #00b39f;
    color:${props => props.theme.saffronColor};
    background-color:rgba(0,179,159,0.1);
    text-transform: uppercase;
    font-size: 12px;
    padding: 12px 48px;
    font-weight: 700;
}
.price-table .price-blank {
    background-color: ${props => props.theme.secondaryDarkColor};
    border: 0 none;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.category {
  display: inline-block;
  margin: 0 1rem;
}

.icon {
    height: 4rem;
    width: auto;
    fill: #00b39f;
    display: inline-block;
}
.no-icon {
  height: 1.5rem;
  width: auto;
  fill: red;
}
.yes-icon {
  height: 1.5rem;
  width: auto;
  fill: #00b39f;
}
.toggle-btn {
  margin-top: 1rem;
}
.details {
  p {
    color: #7A848E;
    margin-left: 1.1rem;
  }
}
.category-icon {
  
}
.categories {
  display: flex;
  width: 100%;
  text-align: left;
  align-items: center;
  margin: 1rem auto;
}
.docs {
  width:1rem;
  height:1rem;
}

td.feature {
  padding: auto;
  margin: 0px;
}
.feature-link-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.feature-name {
  margin-right: 0.5rem; 
}

.feature-link {
  color: #00b39f;
  text-decoration: none;
  font-size: 0.9rem;
}
.feature-link > svg {
    &:hover { 
      opacity:.5;
    }
  }
.feature-link:hover {
  text-decoration: underline;
}
`;

const Comparison = () => {
  return (
    <ComparisonWrapper >
      <h2>Compare All Features</h2>
      <h5 id={"feature-comparison"}>Choose a plan that’s right for you</h5>
      <Container>
        <div className="main">
          <table className="price-table">
            <tbody>
              <tr>
                <th className="price-blank"></th>
                <th className="price-blank"></th>
                <th className="price-table-popular">Most popular</th>
                <th className="price-blank"></th>
                <th className="price-blank"></th>
              </tr>
              <tr className="price-table-head">
                <td></td>
                <td>Free</td>
                <td>Team Designer</td>
                <td>Team Operator</td>
                <td>Enterprise</td>
              </tr>

              {details.map((x) => (
                <>
                  <tr key={x.id} >
                    <td className="categories" colSpan="5">
                      <img src={x.icon} height={32} className="category-icon" alt={x.category} />
                      <h3 className="category">{x.category}</h3></td>
                  </tr>
                  {x.features.map((f) => (
                    <tr key={f.feature}>
                      <td><FeatureDetails category={f.feature} description={f.description} /></td>
                      <td className="feature">{f.free}</td>
                      <td className="feature">{f.teamDesigner}</td>
                      <td className="feature">{f.teamOperator}</td>
                      <td className="feature">{f.enterprise}</td>
                    </tr>
                  ))}
                </>
              ))}

            </tbody>
          </table>
        </div>
      </Container>

    </ComparisonWrapper>
  );
};

export default Comparison;
