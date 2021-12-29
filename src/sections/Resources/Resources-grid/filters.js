import React, { useState } from "react";
import { HiOutlineChevronUp, HiOutlineChevronDown } from "react-icons/hi";
import { IoMdClose, IoIosArrowDropdownCircle } from "react-icons/io";
import { options } from "./options";

import ResourceNavigationWrapper from "./filters.style";

const Navigation = (props) => {
    const [expandType, setExpandType] = useState(true);
    const [expandProduct, setExpandProduct] = useState(false);
    const [expandTech, setExpandTech] = useState(false);
    const [expandMesh, setExpandMesh] = useState(false); 

    const data = React.useMemo(() => options);
    let typeOptions = data.filter((data) => data.category === "Type");
    let productOptions = data.filter((data) => data.category === "Product");
    let techOptions = data.filter((data) => data.category === "Technology");
    let meshOptions = data.filter((data) => data.category === "Service Mesh");
   

    return (
        <ResourceNavigationWrapper>
        <div className="filter">
        <p className="heading"><strong>Filters</strong> <span className= {props.resources.length === 0 ? "clear-disabled" : "clear-enabled"} onClick={props.clear}>Clear Filters <IoMdClose className="clear-icon"  /></span></p>
            
        <div className="toggle-btn">
            
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
          )}
        </div>
        <div className="list">
        <ul className={`ul ${expandType ? "ul-open" : ""}`}>
        {typeOptions[0].subdata.map((x) => (
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
          )}
        </div>
        <div className="list">
        <ul className={`ul ${expandProduct ? "ul-open" : ""}`}>
        {productOptions[0].subdata.map((x) => (
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
          )}
        </div>
        <div className="list">
        <ul className={`ul ${expandTech ? "ul-open" : ""}`}>
        {techOptions[0].subdata.map((x) => (
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
          )}
        </div>
        <div className="list">
        <ul className={`ul ${expandMesh ? "ul-open" : ""}`}>
        {meshOptions[0].subdata.map((x) => (
            <li key={x.id}>
                  <label>
                    <input type="checkbox"  value={x.value} onChange={props.handleChange} />
                    <span> {x.label}</span>
                  </label> 
            </li>
          ))}
        </ul>
      </div>
      

      </div>
      
        </ResourceNavigationWrapper>
      );
    };

export default Navigation;