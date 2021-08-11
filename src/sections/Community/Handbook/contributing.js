import React from "react";
import { Container, Row, Col } from "../../../reusecore/Layout";
import { HandbookWrapper } from "./Handbook.style";
import TOC from "../../../components/handbook-navigation/index";
import styled from "styled-components";
import Bullet from "./images/active.png";

const ContributionWrapper = styled.div`
    padding: 3rem 20rem;
    margin-top: -25rem;  
    h2{
      color:black;
      margin-bottom: 1rem;
      font-size: 25px;
    }
    h3{
      color:black;
      font-size: 22px;
      margin-bottom: 0.5rem;
    }
    p{
      font-size: 17px;
    } 
    .bullet{
      width: 15px;
    }
    .logo{
      width: 25px;
    }
`;

const contributingGuide= () => {
  return (
    <HandbookWrapper>
      <div className="page-header-section">
        <h1>Contribution</h1>
      </div>    
      <TOC />
      <ContributionWrapper>
        <Container>
        <h2>General contribution flow</h2>
        <p>Pull requests (PRs) are the best ways to propose changes to a project repository. At Layer5 org, we use the Github Flow:</p>
        <div className="steps">
            <h3>Working by forking any of the project repository</h3>
            <p><img className="bullet" src={Bullet} />Just head over to the <a href="https://github.com/layer5io">Layer5 org</a> Github page and click the "Fork" button. It's just that simple. Once you've done that, you can use your favorite git client to clone your repo or just head straight to the command line.</p>
            <h3>Clone your fork to your local machine</h3>
            <p><img className="bullet" src={Bullet} />Go to your GitHub account, open the forked repository, click on the code button and then click the “copy to clipboard” icon if you intend to use a command-line tool. </p>
            <p><img className="bullet" src={Bullet} />Open the terminal and run the following git command:git clone “URL you copied from the clipboard.”</p>
            <h3>Add 'upstream' repo to list of remotes</h3>
            <p><img className="bullet" src={Bullet} />Keeping your fork up to date while this isn't a necessary step. If you plan on doing anything more than a tiny quick fix, you'll want to make sure you keep your fork up to date by tracking the original "upstream" repo that you forked earlier.</p>
            <p><img className="bullet" src={Bullet} />To do this, you'll need to add a remote. An example of the command is given below:
git remote add upstream https://github.com/layer5io/meshery.git Here “meshery" is used as the example repo. Be sure to reference the actual repo you are contributing to.</p>
            <h3>Create and checkout a new branch</h3>
            <p><img className="bullet" src={Bullet} />Whenever you begin to work on a new feature or bugfix, it's important that you create a new branch. Not only is it a proper git workflow, but it also keeps your changes organized and separated from the master branch so that you can easily submit and manage multiple pull requests for every task completed.</p>
            <p><img className="bullet" src={Bullet} />Perform the flow; git checkout -b your-new-branch-name
For example, git checkout -b feature (feature being a branch name</p>
            <h3>Make the necessary changes to your file.</h3>
            <p><img className="bullet" src={Bullet} />Now, go to town hacking away and make whatever changes you want to.</p>
            <p><img className="bullet" src={Bullet} />To add the changes you have made to your branch, use the git add file.md command.</p>
            <p><img className="bullet" src={Bullet} /> If you add multiple file changes to the branch, you simply use a git add . command.</p>
            <h3>Commit the changes made</h3>
            <p><img className="bullet" src={Bullet} />Now commit those changes using the git commit command;
git commit -s -m “This is my commit message” 
</p>
            <h3>Push changes to Github and submit a pull request (PR)</h3>
            <p><img className="bullet" src={Bullet} />To push your changes, run the git command; 
git push origin your_branch_name
</p>
          </div>
        </Container>
      </ContributionWrapper>      
    </HandbookWrapper>
  );
};
  
export default contributingGuide;