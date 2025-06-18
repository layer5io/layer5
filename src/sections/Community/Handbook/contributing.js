import React from "react";
import { Container } from "../../../reusecore/Layout";
import { HandbookWrapper } from "./Handbook.style";
import TOC from "../../../components/handbook-navigation/index";
import Code from "../../../components/CodeBlock";
import TocPagination from "../../../components/handbook-navigation/TocPagination";
import IntraPage from "../../../components/handbook-navigation/intra-page";
import { StaticImage } from "gatsby-plugin-image";

const contents = [
  { id: 0, link: "#Clone your fork", text: "Clone your fork" },
  { id: 1, link: "#Checkout a new branch", text: "Checkout a new branch" },
  { id: 2, link: "#Commit your changes", text: "Commit your changes" },
  { id: 3, link: "#Sign-off commits", text: "Sign-off commits" },
  { id: 4, link: "#Push changes to Github", text: "Push changes to Github" },
  { id: 5, link: "#Create a pull request", text: "Create a pull request" },
];

const contributingGuide = () => {
  const Signoff = "../../../../.github/assets/images/git-signoff-vscode.webp";
  const compareAndPR = "../../../../.github/assets/images/compare-and-pr.webp";
  const createPR = "../../../../.github/assets/images/create-pr.webp";

  return (
    <HandbookWrapper>
      <div className="page-header-section">
        <h1>Contribution</h1>
      </div>
      <TOC />
      <div className="page-section">
        <Container>
          <div className="content">
            <a>
              <h2 id="top">General contribution flow</h2>
            </a>
            <p>
              Pull requests (PRs) are the best ways to propose changes to a
              project repository. At Layer5 org, we use the Github Flow:
            </p>
            <a id="Clone your fork">  <h3>Clone your fork to your local machine</h3> </a>
            <ul>
              <li>Fork the repository you are working on.</li>
              <li>
                <span>
                  Go to your GitHub account, open the forked repository, click
                  on the code button and then click the “copy to clipboard” icon
                  if you intend to use a command-line tool.{" "}
                </span>
              </li>
              <li>
                <span>
                  Open the terminal and run the following git command:
                  <div className="codes">
                    <Code codeString="git clone “URL you copied from the clipboard.”" />
                  </div>
                </span>
              </li>
            </ul>

            <h3>Add 'upstream' repo to list of remotes</h3>
            <ul>
              <li>
                <span>
                  Keeping your fork up to date while this isn't a necessary
                  step. If you plan on doing anything more than a tiny quick
                  fix, you'll want to make sure you keep your fork up to date by
                  tracking the original "upstream" repo that you forked earlier.
                </span>
              </li>
              <li>
                <span>
                  To do this, you'll need to add a remote. An example of the
                  command is given below:
                  <div className="codes">
                    <Code codeString="git remote add upstream https://github.com/layer5io/meshery.git " />
                  </div>
                  Here “meshery" is used as the example repo. Be sure to
                  reference the actual repo you are contributing to.
                </span>
              </li>
            </ul>

            <a id="Checkout a new branch">  <h3>Create and checkout a new branch</h3> </a>
            <ul>
              <li>
                <span>
                  Whenever you begin to work on a new feature or bugfix, it's
                  important that you create a new branch. Not only is it a
                  proper git workflow, but it also keeps your changes organized
                  and separated from the master branch so that you can easily
                  submit and manage multiple pull requests for every task
                  completed.
                </span>
              </li>
              <li>
                <span>
                  Perform the flow:
                  <div className="codes">
                    <Code codeString=" git checkout -b your-new-branch-name" />
                  </div>
                  For example,
                  <div className="codes">
                    <Code codeString="git checkout -b feature" />
                  </div>{" "}
                  (feature being a branch name)
                </span>
              </li>
            </ul>

            <h3>Make the necessary changes to your file.</h3>
            <ul>
              <li>
                <span>
                  To add the changes you have made to your branch, use:
                  <div className="codes">
                    <Code codeString="git add <file> " />
                  </div>
                </span>
              </li>
              <li>
                <span>
                  {" "}
                  If you add multiple file changes to the branch, you simply
                  use:
                  <div className="codes">
                    <Code codeString=" git add ." />
                  </div>
                </span>
              </li>
            </ul>

            <a id="Commit your changes">  <h3>Commit the changes made</h3> </a>
            <ul>
              <li>
                <span>
                  Now commit those changes using the git commit command:
                  <div className="codes">
                    <Code codeString="git commit -s -m “This is my commit message”" />
                  </div>
                </span>
              </li>
            </ul>

            <a id="Sign-off commits"> <h3>
                Make sure to{" "}
              <a href="https://github.com/layer5io/layer5/blob/master/CONTRIBUTING.md#signing-off-on-commits">
                  Sign-off
              </a>{" "}
                on your Commits (Developer Certificate of Origin)
            </h3>
            </a>
            <p>
              To contribute to this project, you must agree to the Developer
              Certificate of Origin (DCO) for each commit you make. The DCO is a
              simple statement that you, as a contributor, have the legal right to
              contribute.{" "}
            </p>
            <p>
              To signify that you agree to the DCO for contributions, you simply
              add a line to each of your git commit messages:
            </p>
            <div className="codes">
              <Code codeString="Signed-off-by: Jane Smith <jane.smith@example.com>" />
            </div>
            <p>
              In most cases, you can add this signoff to your commit automatically
              with the -s or --signoff flag to git commit. You must use your real
              name and a reachable email address (sorry, no pseudonyms or
              anonymous contributions). An example of signing off on a commit:
            </p>
            <div className="codes">
              <Code codeString="$ commit -s -m “my commit message w/signoff”" />
            </div>
            <p>
              To ensure all your commits are signed, you may choose to add this
              alias to your global .gitconfig:
            </p>
            <div className="codes">
              <Code
                codeString="[alias]
  amend = commit -s --amend
  cm = commit -s -m
  commit = commit -s
"
              />
            </div>
            <p>
              Or you may configure your IDE, for example, Visual Studio Code to
              automatically sign-off commits for you:
            </p>
            <StaticImage src={Signoff} id="sign-off" alt="Signoff" />

            <a id="Push changes to Github">  <h3>Push changes to Github</h3> </a>
            <ul>
              <li>
                <span>
                  To push your changes, run the git command:
                  <div className="codes">
                    <Code codeString="git push origin your_branch_name" />
                  </div>
                </span>
              </li>
            </ul>
            <a id="Create a pull request">  <h3>Create a pull request (PR)</h3> </a>
            <ul>
              <li>
                <span>
                  Head over to your forked repository on GitHub and you'll see a Compare & pull request button. Click on that button.
                </span>
                <br/>
                <span>
                  Note: Please ensure that the right branch is selected for the PR.
                </span>
                <div>
                  <br />
                  <StaticImage src={compareAndPR} alt="Compare and pull request" />
                </div>
              </li>
            </ul>
            <ul>
              <li>
                <span>
                  Once you click on the button, you'll be taken to the Pull Request page. Here, you can add a title and description to your pull request that explains your contribution. Once you're done, click on the Create pull request button.
                </span>
                <div>
                  <br />
                  <StaticImage src={createPR} alt="create pr" />
                  <br />
                </div>
              </li>
            </ul>
          </div>
          <h2>Handling PRs Made Without Being Assigned</h2>
          <p>
          At <a href="https://layer5.io/">Layer5</a>, we usually suggest to contributors that they ask maintainers to assign them to the issue they want to work on. But sometimes, pull requests that aren't assigned to anyone can be found. In such cases, it's important to be flexible and ready to adapt. Here are some simple guidelines for dealing with these unassigned contributions:
          </p>
          <ol>
            <li>
              <p>
                <strong>We value getting things done:</strong>
              </p>
              <ul>
                <li>
                  <p>
                    <strong>Evaluate the PR:</strong> First, assess the quality
                    and significance of the PR. Is it a valuable contribution to
                    the project? Does it fix a bug or add a meaningful feature?
                    If the PR aligns with the project's goals and standards,
                    it's worth considering.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Review the code:</strong> Ensure that the code in
                    the PR meets the project's coding guidelines and standards.
                    If the code quality is high and the changes are beneficial,
                    it's a positive sign.
                  </p>
                </li>
              </ul>
            </li>
            <li>
              <p>
                <strong>We value our contributors' feelings:</strong>
              </p>
              <ul>
                <li>
                  <p>
                    <strong>Communication:</strong> Reach out to the
                    contributor who made the unassigned PR in a friendly and
                    respectful manner. Express gratitude for their contribution
                    and explain the importance of assigning PRs to maintain
                    transparency and collaboration within the community.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Offer assistance:</strong> If the contributor is
                    willing, help them understand the process of assigning PRs
                    and offer guidance on how to do it correctly in the future.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Encourage participation:</strong> Emphasize that
                    their contribution is valuable and that the project welcomes
                    their involvement. Encourage them to continue contributing.
                  </p>
                </li>
              </ul>
            </li>
            <li>
              <p>
                <strong>
                  Attempt to uphold the spirit of #2 while ensuring that #1
                  happens:
                </strong>
              </p>
              <ul>
                <li>
                  <p>
                    <strong>Balance:</strong> Strive to strike a balance
                    between maintaining a welcoming and inclusive community (#2)
                    and ensuring that the project continues to make progress
                    (#1).
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Collaboration:</strong> If the contributor is
                    receptive and willing to work together, consider helping
                    them assign the PR correctly, and possibly collaborate on
                    improving the PR if necessary.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>If necessary, reassign:</strong> If the contributor
                    is unresponsive or unable to assign the PR correctly, you
                    may consider reassigning the PR to an appropriate
                    contributor or assigning it to yourself to ensure it
                    doesn't go unnoticed.
                  </p>
                </li>
              </ul>
            </li>
            <li>
              <p>
                <strong>
                Contributor Guidance:
                </strong>
              </p>
              <ul>
                <li>
                  <p>
                    <strong>How you should:</strong> As a contributor, it's important to follow the project's guidelines. Start by identifying a suitable issue or create one if necessary. Afterward, kindly request assignment or express your interest in working on the issue by commenting on it. This ensures that maintainers are aware of your intentions and can provide guidance or assign the issue appropriately. Once assigned, proceed with your work and submit a pull request.
                    <br/><strong>Example:</strong> <a href="https://github.com/layer5io/layer5/issues/3889">Hover animation on different integration category #3889</a>
                  </p>
                </li>
                <li>
                  <p>
                    <strong>How you should not:</strong> Avoid starting work on an issue and creating a pull request without prior communication or assignment. Jumping directly into the code can lead to misunderstandings and duplicate efforts. Instead, take a moment to engage with the maintainers and community by discussing your interest in the issue and seeking assignment before submitting a pull request. This promotes transparency and effective collaboration within the project.
                    <br/><strong>Example:</strong> <a href="https://github.com/meshery/meshery/issues/8757">[MeshModel] [UX]: Icon for Kubernetes Component - Endpoints #8757</a>
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Requesting Reassignment:</strong> If you are interested in working on an issue that is already assigned to someone else, it's important to respect their efforts and contributions. First, politely reach out to the assignee and express your interest in collaborating on the issue. Discuss the possibility of working together or sharing the workload. If the assignee agrees or is open to collaboration, you can proceed. If the assignee is not responsive or there has been no progress on the issue for a long time and the issue aligns with your skills and interests, kindly request reassignment from the maintainers, providing a clear and courteous explanation for the request.
                    <br/><strong>Example:</strong> <a href="https://github.com/meshery/meshery-nsm/issues/169">[chore] update Go to 1.21, and update relevant pkgs #169</a>
                  </p>
                </li>
              </ul>
            </li>
          </ol>
          <TocPagination />
        </Container>

        <IntraPage contents={contents} />
      </div>
    </HandbookWrapper>
  );
};

export default contributingGuide;
