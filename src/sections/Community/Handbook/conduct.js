import React from "react";
import { Container } from "../../../reusecore/Layout";
import { HandbookWrapper } from "./Handbook.style";
import TOC from "../../../components/handbook-navigation/index";
import TocPagination from "../../../components/handbook-navigation/TocPagination";
import { StaticImage } from "gatsby-plugin-image";

const CodeofConduct= () => {
  const Point = "./images/bullet.svg";
  return (
    <HandbookWrapper>
      <div className="page-header-section">
        <h1>Code of Conduct</h1>
      </div>
      <TOC />
      <div className="page-section">
        <Container>
          <div className="content">
            <p>Layer5 follows the <a href="https://github.com/cncf/foundation/blob/master/code-of-conduct.md">CNCF Code of Conduct</a> which states that:</p>
            <p>As contributors and maintainers of this project, and in the interest of fostering an open and welcoming community, we pledge to respect all people who contribute through reporting issues, to post feature requests, to update documentation, to submit pull requests or patches, and other activities.</p>
            <p>We are committed to participating in this project as a harassment-free experience for everyone, regardless of the level of experience, gender, gender identity, and expression, sexual orientation, disability, personal appearance, body size, race, ethnicity, age, religion, or nationality.</p>
            <p>Examples of unacceptable behavior by participants include:</p>
            <ul>
              <p><StaticImage className="logo" src={Point} alt="Point" />The use of sexualized language or imagery</p>
              <p><StaticImage className="logo" src={Point} alt="Point" />Personal attacks</p>
              <p><StaticImage className="logo" src={Point} alt="Point" />Trolling or insulting/derogatory comments</p>
              <p><StaticImage className="logo" src={Point} alt="Point" />Public or private harassment</p>
              <p><StaticImage className="logo" src={Point} alt="Point" />Publishing other’s private information, such as physical or electronic addresses, without explicit permission</p>
              <p><StaticImage className="logo" src={Point} alt="Point" />Other unethical or unprofessional conduct</p>
            </ul>
            <p>Project maintainers have the right and responsibility to remove, edit, or reject comments, commits, code, wiki edits, issues, and other contributions that are not aligned to this Code of Conduct. By adopting this Code of Conduct, project maintainers commit themselves to fairly and consistently applying these principles to every aspect of managing this project. Project maintainers who do not follow or enforce the Code of Conduct may be permanently removed from the project team.</p>
            <p>This code of conduct applies both within project spaces and in public spaces when an individual is representing the project or its community.</p>
            <p>Instances of abusive, harassing, or otherwise unacceptable behavior may be reported by contacting  <a href="http://community@layer5.io.">community@layer5.io.</a></p>
          </div>
        </Container>
      </div>
      <TocPagination />
    </HandbookWrapper>
  );
};

export default CodeofConduct;