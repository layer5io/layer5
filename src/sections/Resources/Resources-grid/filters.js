import React, { useState } from "react";
import { HiOutlineChevronUp } from "@react-icons/all-files/hi/HiOutlineChevronUp";
import { HiOutlineChevronDown } from "@react-icons/all-files/hi/HiOutlineChevronDown";
import { IoMdClose } from "@react-icons/all-files/io/IoMdClose";
import { options } from "./options";
import { graphql, useStaticQuery} from "gatsby";


import ResourceNavigationWrapper from "./filters.style";

const Navigation = (props) => {

  const counting = useStaticQuery(
    graphql`
            query allFilters {
                type: allMdx(
                    filter: { fields: { collection: { in: ["blog", "resources", "news", "events"] } }, frontmatter: { published: { eq: true } , resource: { eq: true} }}
                ){
                    group(field: frontmatter___type) {
                        fieldValue
                        totalCount
                    }
                }
                product: allMdx(
                  filter: { fields: { collection: { in: ["blog", "resources", "news", "events"] } }, frontmatter: { published: { eq: true } , resource: { eq: true} }}
              ){
                  group(field: frontmatter___product) {
                      fieldValue
                      totalCount
                  }
              }
              technology: allMdx(
                filter: { fields: { collection: { in: ["blog", "resources", "news", "events"] } }, frontmatter: { published: { eq: true } , resource: { eq: true} }}
            ){
                group(field: frontmatter___technology) {
                    fieldValue
                    totalCount
                }
            }
            mesh: allMdx(
              filter: { fields: { collection: { in: ["blog", "resources", "news", "events"] } }, frontmatter: { published: { eq: true } , resource: { eq: true} }}
          ){
              group(field: frontmatter___mesh) {
                  fieldValue
                  totalCount
              }
          }
            }
        `
  );

  const [expandType, setExpandType] = useState(true);
  const [expandProduct, setExpandProduct] = useState(true);
  const [expandTech, setExpandTech] = useState(true);
  const [expandMesh, setExpandMesh] = useState(true); 

  const data = React.useMemo(() => options);
  let typeOptions = data.filter((data) => data.category === "Type");
  let productOptions = data.filter((data) => data.category === "Product");
  let techOptions = data.filter((data) => data.category === "Technology");
  let meshOptions = data.filter((data) => data.category === "Service Mesh");
  let i=0;
  const types = counting.type.group;
  const typesFieldValues = types.map(type => type.fieldValue);
  const products = counting.product.group;
  const productsFieldValues = products.map(product => product.fieldValue);
  const technologies = counting.technology.group;
  const technologiesFieldValues = technologies.map(tech => tech.fieldValue);
  const meshes = counting.mesh.group;
  const meshesFieldValues = meshes.map(mesh => mesh.fieldValue);



  return (
    <ResourceNavigationWrapper>
      <div className="filter">
        <p className="heading"><strong>Filters</strong> <span className= {props.resources.length === 0 ? "clear-disabled" : "clear-enabled"} onClick={props.clear}>Clear Filters <IoMdClose className="clear-icon"  /></span></p>
            
        <div className="toggle-btn"  onClick={function () {
          setExpandType(!expandType); 
        }}>   
          <p><strong>Type</strong></p>
          {expandType ? (
            <HiOutlineChevronUp
              className="menu-icon"
            />
          ) : (
            <HiOutlineChevronDown
              className="menu-icon"
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
                  { types && types.map(type => (
                    type.fieldValue === x.value ? <span key={x.id} className="total">({type.totalCount})</span> : ""
                  ))}
                  { typesFieldValues && !typesFieldValues.includes(x.value) ? <span key={x.id} className="total">(0)</span> : ""}
                </label> 
              </li>
            ))}
          </ul>
        </div>

        <div className="toggle-btn" onClick={function () {
          setExpandProduct(!expandProduct); 
        }}>
          <p><strong>Product</strong></p>
          {expandProduct ? (
            <HiOutlineChevronUp
              className="menu-icon"
            />
          ) : (
            <HiOutlineChevronDown
              className="menu-icon"
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
                  { products && products.map(product => (
                    product.fieldValue === x.value ? <span key={x.id}  className="total">({product.totalCount})</span> : ""
                  ))}
                  { productsFieldValues && !productsFieldValues.includes(x.value) ? <span key={x.id} className="total">(0)</span> : ""}
                </label> 
              </li>
            ))}
          </ul>
        </div>

        <div className="toggle-btn" onClick={function () {
          setExpandTech(!expandTech); 
        }}>
          <p><strong>Technology</strong></p>
          {expandTech ? (
            <HiOutlineChevronUp
              className="menu-icon"
            />
          ) : (
            <HiOutlineChevronDown
              className="menu-icon"
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
                  { technologies && technologies.map(tech => (
                    tech.fieldValue === x.value ? <span key={x.id}  className="total">({tech.totalCount})</span> : ""
                  ))}
                  { technologiesFieldValues && !technologiesFieldValues.includes(x.value) ? <span key={x.id} className="total">(0)</span> : ""}

                </label> 
              </li>
            ))}
          </ul>
        </div>

        <div className="toggle-btn" onClick={function () {
          setExpandMesh(!expandMesh); 
        }}>
          <p><strong>Service Mesh</strong></p>
          {expandMesh ? (
            <HiOutlineChevronUp
              className="menu-icon"
            />
          ) : (
            <HiOutlineChevronDown
              className="menu-icon"
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
                  { meshes && meshes.map(mesh => (
                    mesh.fieldValue === x.value ? <span key={x.id}  className="total">({mesh.totalCount})</span> : ""
                  ))}
                  { meshesFieldValues && !meshesFieldValues.includes(x.value) ? <span key={x.id} className="total">(0)</span> : ""}

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