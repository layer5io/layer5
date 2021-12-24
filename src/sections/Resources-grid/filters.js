import React, { useState } from "react";
import { HiOutlineChevronUp, HiOutlineChevronDown } from "react-icons/hi";
import { graphql, Link, useStaticQuery} from "gatsby";
import { Container, Row, Col } from "../../reusecore/Layout";
import PageHeader from "../../reusecore/PageHeader";
import { options } from "./options";

import ResourceNavigationWrapper from "./filters.style";

const Navigation = (props) => {
    const [expandType, setExpandType] = useState(true);
    const [expandProduct, setExpandProduct] = useState(false);
    const [expandTech, setExpandTech] = useState(false);
    const [expandMesh, setExpandMesh] = useState(false);

    // const filtersArray = () =>  {
    //   var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')
    //   for (var i = 0; i < checkboxes.length; i++) {
    //     props.types.splice(i);
    //     props.types.push(checkboxes[i].value)
    //   }
    //   console.log(props.types);
    // };

    return (
        <ResourceNavigationWrapper>
          <Container>
          <PageHeader title="Cloud Native Resources" path="Resources"/>
          <Col xs={12} lg={4}>
            <div className="filter">
          <h4><strong>Filters</strong></h4>
        
        <div className="toggle-btn">
            <p>
        <p><strong>Type</strong></p>
          {expandType ? (
            <HiOutlineChevronUp
              className="menu-icon"
              onClick={function () {
                setExpandType(!expandType);
              }}
            />
          ) : (
            <HiOutlineChevronDown
              className="menu-icon"
              onClick={function () {
                setExpandType(!expandType);
              }}
            />
          )}</p>
        </div>
        <div className="list">
        <ul className={`ul ${expandType ? "ul-open" : ""}`}>
        {options.map((x) => (
            <li key={x.id}>
                  <label>
                    <input type="checkbox"  value={x.value} onChange={props.handleChange} />
                    <span> {x.label}</span>
                  </label> 
            </li>
          ))}
        </ul>
      </div>

      <div className="toggle-btn">
            <p>
        <p><strong>Product</strong></p>
          {expandProduct ? (
            <HiOutlineChevronUp
              className="menu-icon"
              onClick={function () {
                setExpandProduct(!expandProduct);
              }}
            />
          ) : (
            <HiOutlineChevronDown
              className="menu-icon"
              onClick={function () {
                setExpandProduct(!expandProduct);
              }}
            />
          )}</p>
        </div>
        <div className="list">
        <ul className={`ul ${expandProduct ? "ul-open" : ""}`}>
    <label><input type="checkbox"  value="Meshery" id="meshery" /> Meshery</label>
    <label><input type="checkbox"  value="Service Mesh Performance" id="smp" /> Service Mesh Performance</label>
    <label><input type="checkbox"  value="Nighthawk" id="Nighthawk" /> Nighthawk</label>
        </ul>
      </div>

      <div className="toggle-btn">
            <p>
        <p><strong>Technology</strong></p>
          {expandTech ? (
            <HiOutlineChevronUp
              className="menu-icon"
              onClick={function () {
                setExpandTech(!expandTech);
              }}
            />
          ) : (
            <HiOutlineChevronDown
              className="menu-icon"
              onClick={function () {
                setExpandTech(!expandTech);
              }}
            />
          )}</p>
        </div>
        <div className="list">
        <ul className={`ul ${expandTech ? "ul-open" : ""}`}>
    <label><input type="checkbox"  value="Cloud" id="cloud"/> Cloud</label>
    <label><input type="checkbox"  value="Kubernetes" id="Kubernetes"/> Kubernetes</label>
    <label><input type="checkbox"  value="Docker" id="docker"/> Docker</label>
    <label><input type="checkbox"  value="WebAssembly" id="WebAssembly" /> WebAssembly</label>
    <label><input type="checkbox"  value="JWT" id="JWT"/> JWT</label>
    <label><input type="checkbox"  value="API" id="API"/> API</label>
        </ul>
      </div>

      <div className="toggle-btn">
            <p>
        <p><strong>Service Mesh</strong></p>
          {expandMesh ? (
            <HiOutlineChevronUp
              className="menu-icon"
              onClick={function () {
                setExpandMesh(!expandMesh);
              }}
            />
          ) : (
            <HiOutlineChevronDown
              className="menu-icon"
              onClick={function () {
                setExpandMesh(!expandMesh);
              }}
            />
          )}</p>
        </div>
        <div className="list">
        <ul className={`ul ${expandMesh ? "ul-open" : ""}`}>
    <label><input type="checkbox"  value="Consul" id="consul"/> Consul</label>
    <label><input type="checkbox"  value="Linkerd" id="linkerd"/> Linkerd</label>
    <label><input type="checkbox"  value="Istio" id="istio"/> Istio</label>
    <label><input type="checkbox"  value="Open Service Mesh" id="OSM"/> Open Service Mesh</label>
    <label><input type="checkbox"  value="Kuma" id="kuma"/> Kuma</label>
    <label><input type="checkbox"  value="Network Service Mesh" id="NSM"/> Network Service Mesh</label>
    <label><input type="checkbox"  value="Traefik Mesh" id="traefik"/> Traefik Mesh</label>
        </ul>
      </div>

      </div>
      </Col> 
      </Container> 
        </ResourceNavigationWrapper>
      );
    };

export default Navigation;