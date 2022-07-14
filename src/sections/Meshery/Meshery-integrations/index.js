import React from "react";
import { useState } from "react";
import styled from "styled-components";
import IntegrationsGrid from "./IntegrationsGrid";
import IntegrationList from "../../../assets/data/integrations/IntegrationList";

const Integrations = styled.div`
  max-width: 1200px;
  margin: 83px auto;

  .heading {
    text-align: center;

    h1 {
      font-size: 3.14rem;
      line-height: 60px;
    }

    h4 {
      font-size: 2.125rem;
    }
  }

  .category {
    display: flex;
    flex-wrap: wrap;
    margin: 41px 0;
    gap: 10px;
    justify-content: center;
  }

  .items {
    background-color: #f0f0f0;
    padding: 10px 25px;
    border-radius: 10px;
    text-transform: uppercase;
    color: #1e2117;
    font-size: 0.875rem;
    cursor: pointer;
  }

  .selected {
    background-color: #1e2117;
    color: #ffffff;
  }
`;

const categoryList = [
  "All",
  "Platforms",
  "Service Mesh",
  "Operating System",
  "Collaboration",
];

function index() {
  const [category, setCategory] = useState(["All"]);

  return (
    <Integrations>
      <span className="heading">
        <h1>Built-In Integrations</h1>
        <h4>Support for your Cloud Native Infrastructure and Apps</h4>
      </span>

      <span className="category">
        {categoryList.map((item) => {
          return (
            <p
              className={item === "All" ? "items selected" : "items"}
              onClick={(e) => e.currentTarget.classList.toggle("selected")}
            >
              {item}
            </p>
          );
        })}
      </span>

      <span>
        <IntegrationsGrid obj={IntegrationList} />
      </span>
    </Integrations>
  );
}

export default index;
