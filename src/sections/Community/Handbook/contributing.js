import React from "react";
import { Container, Row, Col } from "../../../reusecore/Layout";
import { HandbookWrapper } from "./Handbook.style";
import TOC from "../../../components/handbook-navigation/index";
import Code from "../../../components/CodeBlock";


const contributingGuide= () => {
  return (
    <HandbookWrapper>
      <div className="page-header-section">
        <h1>Contribution</h1>
      </div>    
      <TOC />
      <div className="page-section">
        <Container>

          <h2>General contribution flow</h2>
          <p>Pull requests (PRs) are the best ways to propose changes to a project repository. At Layer5 org, we use the Github Flow:</p>
          <div className="content">

            <h3>Working by forking any of the project repository</h3>
            <ul>
              <li><span>Just head over to the <a href="https://github.com/layer5io">Layer5 org</a> Github page and click the "Fork" button. It's just that simple. Once you've done that, you can use your favorite git client to clone your repo or just head straight to the command line.</span> </li>
            </ul>

            <h3>Clone your fork to your local machine</h3>
            <ul>
              <li><span>Go to your GitHub account, open the forked repository, click on the code button and then click the “copy to clipboard” icon if you intend to use a command-line tool. </span></li>
              <li><span>Open the terminal and run the following git command:
                <div className="codes"><Code codeString="git clone “URL you copied from the clipboard.”" /></div></span></li>
            </ul>

            <h3>Add 'upstream' repo to list of remotes</h3>
            <ul><li><span>Keeping your fork up to date while this isn't a necessary step. If you plan on doing anything more than a tiny quick fix, you'll want to make sure you keep your fork up to date by tracking the original "upstream" repo that you forked earlier.</span></li>
              <li><span>To do this, you'll need to add a remote. An example of the command is given below:
                <div className="codes"><Code codeString="git remote add upstream https://github.com/layer5io/meshery.git " /></div>
            Here “meshery" is used as the example repo. Be sure to reference the actual repo you are contributing to.</span></li>
            </ul>

            <h3>Create and checkout a new branch</h3>
            <ul>
              <li><span>Whenever you begin to work on a new feature or bugfix, it's important that you create a new branch. Not only is it a proper git workflow, but it also keeps your changes organized and separated from the master branch so that you can easily submit and manage multiple pull requests for every task completed.</span></li>
              <li><span>Perform the flow:
                <div className="codes"><Code codeString=" git checkout -b your-new-branch-name" /></div>
             For example,<div className="codes"><Code codeString="git checkout -b feature"/></div>  (feature being a branch name)</span></li>
            </ul>

            <h3>Make the necessary changes to your file.</h3>
            <ul>
              <li><span>Now, go to town hacking away and make whatever changes you want to.</span></li>
              <li><span>To add the changes you have made to your branch, use: 
                <div className="codes"><Code codeString="git add <file> " /></div></span></li>
              <li><span> If you add multiple file changes to the branch, you simply use:
                <div className="codes"><Code codeString=" git add ." /></div></span></li>
            </ul>

            <h3>Commit the changes made</h3>
            <ul>
              <li><span>Now commit those changes using the git commit command:
                <div className="codes"><Code codeString="git commit -s -m “This is my commit message”" /></div></span></li>
            </ul>

            <h3>Push changes to Github and submit a pull request (PR)</h3>
            <ul>
              <li><span>To push your changes, run the git command:
                <div className="codes"><Code codeString="git push origin your_branch_name" /></div></span></li>
            </ul>

          </div>
        </Container>
      </div> 
    </HandbookWrapper>
  );
};
  
export default contributingGuide;