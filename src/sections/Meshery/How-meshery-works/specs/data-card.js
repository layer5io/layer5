import React, { useState, useEffect } from "react";
import styled from "styled-components";
import LifeCycleIcon from "../images/lifecycle-icon.svg";
import PerformanceIcon from "../images/performance-icon.svg";
import ConfigurationIcon from "../images/configuration-icon.svg";
import { Col, Row } from "../../../../reusecore/Layout";
import Counter from "../../../../reusecore/Counter";
import { URL } from "../../../Counters/index";

const DataCardWrapper = styled.div`
  background: ${props => props.theme.DarkTheme ? "#222222" : "#FFFFFF"};
  border-radius: 10px;
  color: ${props => props.theme.text};
  padding: 2rem;
  
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
              <img src={LifeCycleIcon} alt="Lifecycle Icon" />
              <h5>Lifecycle</h5>
            </li>
            <li>
              <img src={ConfigurationIcon} alt="Configuration Icon" />
              <h5>Configuration</h5>
            </li>
            <li>
              <img src={PerformanceIcon} alt="Performance Icon" />
              <h5>Performance</h5>
            </li>
          </ul>
        </Col>
        <Col className="col-2" sm={6} lg={6}>
          <ul>
            <li>
              <h3>
                <Counter
                  duration={3}
                  separator=","
                  end={1000}
                  suffix="+" />
              </h3>
              <p>Users</p>
            </li>
            <li>
              <h3>
                <Counter
                  duration={3}
                  separator=","
                  end={performanceCount} />
              </h3>
              <p>Performance Tests run</p>
            </li>
          </ul>
        </Col>
      </Row>
    </DataCardWrapper>
  );
};

export default DataCard;
