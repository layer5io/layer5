import React from "react";
import { Container, Row, Col } from "../../../reusecore/Layout";
import { HandbookWrapper } from "./Handbook.style";
import TOC from "../../../components/handbook-navigation/index";
import { repo_data } from "./repo-data";
import github from "../../../assets/images/socialIcons/github.svg";
import meshery from "../../../assets/images/meshery/icon-only/meshery-logo-light.svg";
import five from "../../../assets/images/layer5/5 icon/svg/light/5-light-bg.svg";
import gnh from "../../../assets/images/getnighthawk/icon-only/SVG/getnighthawk-logo.svg";

const Repository = () => {
  const data = React.useMemo(() => repo_data);
  let frontend =  data.filter((data) => data.category === "Frontend");
  let backend =  data.filter((data) => data.category !== "Frontend");

  return (
    <HandbookWrapper>
      <div className="page-header-section">
        <h1>Repository Overview</h1>
      </div> 
      <TOC />  
      <div className="page-section">
        <Container>
          <div className= "content">
            <h2>Purpose</h2>
            <p>This overview serves as resources to newcomers seeking a perspective of the collective community efforts (from the limited vantage point of a code-centric perspective). </p>    
          
             <h2>Frontend Projects</h2>
             {frontend.map((frontend) => {
                  const { category } = frontend; 
                  return (  
                  
          <table className="frontendTable">
                      <tr>
                        <th>Project</th>
                        <th>Framework</th>
                        <th className="linkscol">Site</th>
                        <th className="linkscol">GitHub</th>
                      </tr>          
          {frontend.subdata.map((subdata) => {
                  const { project, language, repository, site, image } = subdata;
                 let url = (image === "meshery")? meshery : 
                 (image === "five")? five : gnh ;
                  return (
                      <tr>
                         <td>{project}</td>
                         <td>{language}</td>
                         <td><a href={site}><img className="site-icon" src={url} /></a></td>
                         <td><a href={repository}><img class="github-icon" src={github} /></a></td>
                      </tr>
           
                  );
                  })} 
            </table>
            );
                  })}

          <h2>Backend Projects</h2>

          {backend.map((backend) => {
                  const { category } = backend;
                  return (            
          <table>
                      <tr>
                        <th>{category}</th>
                        <th>Language</th>
                        <th class="linkscol">GitHub</th>
                      </tr>          
          {backend.subdata.map((subdata) => {
                  const { project, language, repository } = subdata;
                  return (
                      <tr>
                         <td>{project}</td>
               <td>{language}</td>
                <td><a href={repository}><img class="github-icon" src={github} /></a></td>
             </tr>
           
                  );
                  })} 
            </table>
            );
                  })}


          </div>
        </Container>     
      </div>
    </HandbookWrapper>
  );
};
  
export default Repository;