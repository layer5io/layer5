import React, { useState, useEffect } from "react";
import styled from "styled-components";
import LifeCycleIcon from "./images/lifecycle-icon.svg";
import PerformanceIcon from "./images/performance-icon.svg";
import ConfigurationIcon from "./images/configuration-icon.svg";
import { Col, Row } from "../../reusecore/Layout";
import Counter from "../../reusecore/Counter";
import { URL } from "../../sections/Counters/index";
import List_Icon from "../../assets/images/app/tick.svg";

const DataCardWrapper = styled.div`
  background: ${props => props.theme.grey222222ToWhite};
  border-radius: 10px;
  color: ${props => props.theme.text};
  padding: 2rem;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  
  ul{
    list-style: none;
    padding: 0;
  }
    .col-1 li{
      display: flex;
      align-items: center;
      vertical-align: center;
      margin-bottom: 1.5rem;
      img{
        margin-right: 1rem;
      }
      h5{
        font-weight: 600;
        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
      }
     }
     
    .col-2 li {
      h3{
        color: ${props => props.theme.secondaryColor};
        font-weight: 700;
      }
      p {
        font-size: 16px;
      }
    } 
     
    
`;

const DataCard = () => {
  const [performanceCount, setPerformanceCount] = useState(0);

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((result) => setPerformanceCount(result.total_runs));
  }, []);

  return (
    <DataCardWrapper>
      <Row Vcenter>
        <Col className="col-1" sm={6} lg={6}>
          <ul>
            <li>
              <img src={List_Icon} alt="Performance Icon" />
              <h5>Extensive library of integrations</h5>
            </li>
            <li>
              <img src={List_Icon} alt="Configuration Icon" />
              <h5>Infrastructure orchestration</h5>
            </li>
            <li>
              <img src={List_Icon} alt="Performance Icon" />
              <h5>Multi-player editing</h5>
            </li>
          </ul>
        </Col>
        <Col className="col-1" sm={6} lg={6}>
          <ul>
            <li>
              <img src={List_Icon} alt="Performance Icon" />
              <h5>Ready-to-use templates</h5>
            </li>
            <li>
              <img src={List_Icon} alt="Configuration Icon" />
              <h5>Visual drag & drop</h5>
            </li>
            <li>
              <img src={List_Icon} alt="Performance Icon" />
              <h5>Operate with No Code</h5>
            </li>
          </ul>
        </Col>
      </Row>
    </DataCardWrapper>
  );
};

export default DataCard;
