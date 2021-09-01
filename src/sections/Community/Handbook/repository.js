import React from "react";
import { Container, Row, Col } from "../../../reusecore/Layout";
import { HandbookWrapper } from "./Handbook.style";
import TOC from "../../../components/handbook-navigation/index";
import { repo_data } from "./repo-data";

const Repository = () => {
  const data = React.useMemo(() => repo_data);
  let frontend =  data.filter((data) => data.category === "Frontend");
  let installation =  data.filter((data) => data.category === "Installation Dedicated Repos");
  let serviceMeshManagement =  data.filter((data) => data.category === "Service Mesh Management Repos");
  let adapterDedicated =  data.filter((data) => data.category === "Adapter Dedicated Repos");
  let webAssembly =  data.filter((data) => data.category === "WebAssembly Repos");
  let serviceMeshPerformance =  data.filter((data) => data.category === "Service Mesh Performance Repos ");
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
          </div>

          <h2>Frontend Projects</h2>
          
           <table>
             <tr>
            <th>Project</th>
            <th>Framework</th>
            <th>Github</th>
            </tr>
        {frontend.map((frontend) => {
            const { project, language, repository, site } = frontend;
            return (
            <tr>
            <td><a href={site}>{project}</a></td>
            <td>{language}</td>
            <td><a href={repository}>Repository</a></td>
          </tr> 
        );
      })} 
           </table>
       

<h2>Backend Projects</h2>

<table>
            <tr>
              <th>Service Mesh Management Repos</th>
              <th>Language</th>
              <th>Github</th>
            </tr>
{serviceMeshManagement.map((serviceMeshManagement) => {
        const { project, language, repository } = serviceMeshManagement;
        return (
            <tr>
               <td>{project}</td>
               <td>{language}</td>
                <td><a href={repository}>Repository</a></td>
             </tr>
           
        );
      })} 
</table>

<table>
            <tr>
              <th>Adapter Dedicated Repos</th>
              <th>Language</th>
              <th>Github</th>
            </tr>
{adapterDedicated.map((adapterDedicated) => {
        const { project, language, repository } = adapterDedicated;
        return (
            <tr>
               <td>{project}</td>
               <td>{language}</td>
                <td><a href={repository}>Repository</a></td>
             </tr>
           
        );
      })} 
</table>


<table>
            <tr>
              <th>Installation Dedicated Repos</th>
              <th>Description</th>
              <th>Github</th>
            </tr>
{installation.map((installation) => {
        const { project, language, repository } = installation;
        return (
            <tr>
               <td>{project}</td>
               <td>{language}</td>
                <td><a href={repository}>Repository</a></td>
             </tr>
           
        );
      })} 
</table>

<table>
            <tr>
              <th>WebAssembly Repos</th>
              <th>Description</th>
              <th>Github</th>
            </tr>
{webAssembly.map((webAssembly) => {
        const { project, language, repository } = webAssembly;
        return (
            <tr>
               <td>{project}</td>
               <td>Built with {language}</td>
                <td><a href={repository}>Repository</a></td>
             </tr>
           
        );
      })} 
</table>

<table>
            <tr>
              <th>Sevice Mesh Performance Repos</th>
              <th>Description</th>
              <th>Github</th>
            </tr>
{serviceMeshPerformance.map((serviceMeshPerformance) => {
        const { project, language, repository } = serviceMeshPerformance;
        return (
            <tr>
               <td>{project}</td>
               <td>Built with {language}</td>
                <td><a href={repository}>Repository</a></td>
             </tr>
           
        );
      })} 
</table>
        </Container>     
      </div>
    </HandbookWrapper>
  );
};
  
export default Repository;