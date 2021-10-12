import React from "react";
import { Container, Row, Col } from "../../../reusecore/Layout";
import { HandbookWrapper } from "./Handbook.style";
import TOC from "../../../components/handbook-navigation/index";
import Code from "../../../components/CodeBlock";
import Signoff from "../../../../.github/assets/images/git-signoff-vscode.png";
import github from "../../../assets/images/socialIcons/github.svg";

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

            <h3>Clone your fork to your local machine</h3>
            <ul>
              <li>Fork the repository you are working on.</li>
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
          <h2>Make sure to <a href="https://github.com/layer5io/layer5/blob/master/CONTRIBUTING.md#signing-off-on-commits-developer-certificate-of-origin">Sign-off</a> on your Commits (Developer Certificate of Origin)</h2>
          <p>To contribute to this project, you must agree to the Developer Certificate of Origin (DCO) for each commit you make. The DCO is a simple statement that you, as a contributor, have the legal right to contribute.          </p>
          <p>To signify that you agree to the DCO for contributions, you simply add a line to each of your git commit messages:</p>
          <div className="codes"><Code codeString="Signed-off-by: Jane Smith <jane.smith@example.com>" /></div>
          <p>In most cases, you can add this signoff to your commit automatically with the -s or --signoff flag to git commit. You must use your real name and a reachable email address (sorry, no pseudonyms or anonymous contributions). An example of signing off on a commit:</p>
          <div className="codes"><Code codeString="$ commit -s -m “my commit message w/signoff”" /></div>
          <p>To ensure all your commits are signed, you may choose to add this alias to your global .gitconfig:</p>
          <div className="codes"><Code codeString="[alias]
  amend = commit -s --amend
  cm = commit -s -m
  commit = commit -s
" /></div>
          <p>Or you may configure your IDE, for example, Visual Studio Code to automatically sign-off commits for you:</p>   
          <img src={Signoff} width="74%" id="sign-off"/>
        </Container>
      </div> 
    </HandbookWrapper>
  );
};
  
export default contributingGuide;