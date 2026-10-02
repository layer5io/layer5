import React from "react";
import styled from "styled-components";
import List_Icon from "../../assets/images/app/tick.svg";

const DataCardWrapper = styled.div`
  background: ${(props) => props.theme.grey222222ToWhite};
  border-radius: 10px;
  color: ${(props) => props.theme.text};
  padding: 2rem;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

  ul {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.25rem;
    list-style: none;
    margin: 0;
    padding: 0;

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      column-gap: 1.5rem;
    }
  }

  li {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    min-width: 0;

    img {
      width: 20px;
      height: 20px;
      flex: 0 0 20px;
      margin-top: 0.15rem;
    }

    h5 {
      min-width: 0;
      margin: 0;
      font-weight: 600;
      line-height: 1.4;
      transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    }
  }
`;

const DataCard = () => (
  <DataCardWrapper>
    <ul>
      <li>
        <img src={List_Icon} alt="" aria-hidden="true" loading="lazy" />
        <h5>Extensive library of integrations</h5>
      </li>
      <li>
        <img src={List_Icon} alt="" aria-hidden="true" loading="lazy" />
        <h5>Ready-to-use templates</h5>
      </li>
      <li>
        <img src={List_Icon} alt="" aria-hidden="true" loading="lazy" />
        <h5>Infrastructure orchestration</h5>
      </li>
      <li>
        <img src={List_Icon} alt="" aria-hidden="true" loading="lazy" />
        <h5>Visual drag & drop</h5>
      </li>
      <li>
        <img src={List_Icon} alt="" aria-hidden="true" loading="lazy" />
        <h5>Multi-player editing</h5>
      </li>
      <li>
        <img src={List_Icon} alt="" aria-hidden="true" loading="lazy" />
        <h5>Operate with No Code</h5>
      </li>
    </ul>
  </DataCardWrapper>
);

export default DataCard;
