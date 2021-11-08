# Contributing at Layer5

We are beyond excited to see that you want to contribute! We would love to accept your contributions. Layer5 is built by the community and warmly welcomes collaboration. There are many ways in which one could contribute to Layer5 and every contribution is equally appreciated here. Navigate through the following to understand more about contributing here. 

# Before you get started

## Code of Conduct

Layer5 follows the [Cloud Native Computing Foundation (CNCF) Code of Conduct](https://github.com/cncf/foundation/blob/master/code-of-conduct.md).

Instances of abusive, harassing, or otherwise unacceptable behavior may be reported by contacting community@layer5.io.
Violation of the code of conduct is taken seriously, kindly <a href="https://docs.google.com/forms/d/e/1FAIpQLSeWzC5HjlHugFjB0TtaAVnSkPPqsRQ3JRYjdwyDXf0oyRxcdQ/viewform"> report any violations</a> of the Code of Conduct by filling in the <a href="https://docs.google.com/forms/d/e/1FAIpQLSeWzC5HjlHugFjB0TtaAVnSkPPqsRQ3JRYjdwyDXf0oyRxcdQ/viewform"> Incident report </a>.
The comfort and safety of Layer5 community members is our priority. Please do well to adhere to the Code of Conduct to participate in the Layer5 community.

## Newcomers guide

To help you get started on contributing to the Layer5 projects, we made a newcomers guide to make contributions easier for new folks like you! Refer the [newcomers guide](https://layer5.io/community/newcomers) for the resources and tutorials to help you get started!

## Style guide

The Layer5 website is hosted in this repository and is built using Gatsbyjs. Before opening a pull request, please review the [design doc](https://docs.google.com/document/d/1rvUZy2_S1a2_14BAQIg6b9cMhUuu04kYzkOPDPaPptI/edit#) to know more about the functioning of the website. Once a pull request has been submitted, a preview deployment will be built and made available to you on your PR.

## Documentation and site discussions 

Join the [#websites](https://layer5io.slack.com/archives/C015QJKUMPU) channel on our slack to discuss about new features, site improvements, enhancement in user experience, and on any other improvements in the documentation.

# Contributing to Layer5's code

If you want to start contributing to the project's code, please follow these guidelines before creating a pull request: 

  - First step is to set up the local development environment. See [this](#how-to-contribute) on how to do the same. 
  - Bug fixes are always welcome. Start by reviewing the [list of bugs](https://github.com/layer5io/layer5/labels/kind%2Fbug).
  - A good way to easily start contributing is to pick and work on a [good first issue](https://github.com/layer5io/layer5/labels/good%20first%20issue). We try to make these issues as clear as possible and provide basic info on how the code should be changed, and if something is unclear feel free to ask for more information on the issue.
  - We regularly discuss about new issues to work on in our [#websites](https://layer5io.slack.com/archives/C015QJKUMPU) channel on slack. Feel free to join and discuss about any issue or any idea that you may have.

# Contributing to the docs

If you'd like to contribute to the docs then following is a brief list of what and how you can contribute to it. In case, if you don't have anything to write on as of now then hop on to our [#blog-kitchen](https://layer5io.slack.com/archives/C0210TZRF88) and we shall find you a topic to write on.

## Adding a blog post

  1. In order to contribute a blog post, fork this repository, clone it, create a new branch and navigate to the `src/collections/blog` directory.
  2. Create a copy of the [blog template](https://github.com/layer5io/layer5/tree/master/src/collections/blog/blog-template).
  3. Follow the instructions included in the blog template and name the new file after the title of the blog article.
  4. Entries will be listed in chronological order automatically.

## Adding News

  1. In order to add/update news items, fork this repository, clone it, create a new branch and navigate to the `src/collections/news` directory.
  2. Create a copy of the [news template](https://github.com/layer5io/layer5/tree/master/src/collections/news/0000-00-00-news-template).
  3. Follow the instructions included in the news template and name the new file after the title of the news article.
  4. Entries will be listed in chronological order automatically.


# How to contribute

## Prequisites

Make sure you have the following installed on your operating system before you start contributing:

- [Nodejs and npm](https://nodejs.org/en/)

  To verify run:

  ```
  node -v
  ```

  ```
  npm -v
  ```

- [Gatsby.js](https://www.gatsbyjs.com/) 

  To verify run:

   ```
   gatsby --version
   ```

**Note:** If you're on a *Windows environment* then it is highly recommended that you install [Windows Subsystem for Linux (WSL)](https://docs.microsoft.com/en-us/windows/wsl/install) both for performance and ease of use. Refer to the [documentation](https://docs.microsoft.com/en-us/windows/dev-environment/javascript/gatsby-on-wsl) for the installation of *Gatsby.js on WSL*.

## Set up your local development environment

Follow the following instructions to start contributing.

  **1.** Fork [this](https://github.com/layer5io/layer5) repository.

  **2.** Clone your forked copy of the project.

  ```
  git clone https://github.com/layer5io/layer5.git
  ```

  **3.** Navigate to the project directory.

  ```
cd layer5
  ```

  **4.** Always take a pull from the upstream repository to your master branch to keep it at par with the main project(updated repository).

  ```
  git pull upstream master
  ```

  **5.** Create a new branch.

  ```
  git checkout -b <your_branch_name>
  ```

  **6.** Install the dependencies for running the site.

  ```
  make setup-libs
  ```

  **7.** Make the desired changes.

  **8.** Run the site locally to preview changes.

  ```
  make site
  ```

This will run a local web server with "live reload" conveniently enabled. ( **NOTE**: while using make command on Windows, there sometimes arises an error in identifying the command even after it is installed (unrecognized command), this is because the PATH for the binary might not be set correctly ).

  **9.** Track your changes.

  ```
  git add .
  ```

  **10.** Commit your changes. To contribute to this project, you must agree to the [Developer Certificate of Origin (DCO)](#signing-off-on-commits) for each commit you make.

  ```
  git commit --signoff -m "<commit subject>"
  ```
  or you could go with the shorter format for the same, as shown below.

  ```
  git commit -s -m "<commit subject>"
  ```

  **11.** Push the committed changes in your feature branch to your remote repo.

  ```
  git push -u origin <your_branch_name>
  ```

  **12.** Once you’ve committed and pushed all of your changes to GitHub, go to the page for your fork on GitHub, select your development branch, and click the pull request button. Please ensure that you compare your feature branch to the desired branch of the repo you are supposed to make a PR to. If you need to make any adjustments to your pull request, just push the updates to GitHub. Your pull request will automatically track the changes in your development branch and update it.

## Signing-off on Commits (Developer Certificate of Origin)

To contribute to this project, you must agree to the Developer Certificate of
Origin (DCO) for each commit you make. The DCO is a simple statement that you,
as a contributor, have the legal right to make the contribution.

See the [DCO](https://developercertificate.org) file for the full text of what you must agree to
and how it works [here](https://github.com/probot/dco#how-it-works).
To signify that you agree to the DCO for contributions, you simply add a line to each of your
git commit messages:

  ```
  Signed-off-by: Jane Smith <jane.smith@example.com>
  ```

**Note:** you don't have to manually include thismline on your commits, git does that for you as shown below:

  ```
  $ git commit -s -m “my commit message w/signoff”
  ```

In most cases, git automatically adds the signoff to your commit with the use of 
`-s` or `--signoff` flag to `git commit`. You must use your real name and a reachable email
address (sorry, no pseudonyms or anonymous contributions).


To ensure all your commits are signed, you may choose to add this alias to your global ```.gitconfig```:

  *~/.gitconfig*

  ```
  [alias]
    amend = commit -s --amend
    cm = commit -s -m
    commit = commit -s
  ```

Or you may configure your IDE, for example, Visual Studio Code to automatically sign-off commits for you:

<a href="./.github/assets/images/git-signoff-vscode.png" ><img src="./.github/assets/images/git-signoff-vscode.png" width="50%"/><a>

<!-- Maybe the below section can be shifted to a new file -->

# Common Types of Site Updates

Two of the most common site updates that our contributors work on have been listed below.

## Updating/Creating a community Member Profile 

Layer5 community members are an integral part of what makes Layer5 and it's projects successful. Prominently highlighting our members and their works is something that we think is important. When adding a new or updating an existing community member profile, be sure to use the [Community Member Profile issue template](https://github.com/layer5io/layer5/issues/new?assignees=&labels=area%2Fcommunity&template=New+Member+Profile.md&title=%5BCommunity%5D+Member+Profile%3A) which has all the instructions that one may need for this.
Make sure to create a [new issue](https://github.com/layer5io/layer5/issues/new?assignees=&labels=area%2Fcommunity&template=New+Member+Profile.md&title=%5BCommunity%5D+Member+Profile%3A) before working on it.

### Source code for Community Member Profiles

Now that you've created a new issue, you'll need to work on the code for the same. When adding a new or updating an existing community member profile be sure to follow the existing template which can be found here [Community Member Profile template](https://github.com/layer5io/layer5/tree/master/src/collections/members/_member-profile-template). You can easily understand the template by checking out one of the profiles [here](https://github.com/layer5io/layer5/blob/master/src/collections/members/lee-calcote/index.mdx).

Now, our new community member profile has been created. But there are some additional accessories that the new member profile may have.
Badges are a great way of highlighting the contribution done by the community members and a good accessory for the profile.

### Badges for Community Members

A variety of badges exist so that community members and their efforts may be affiliated with a particular project or with a community initiative. An example of how a badge is assigned using markdown can be found [here](https://github.com/layer5io/layer5/blob/master/src/collections/members/abishek-kumar/index.mdx), and it will appear [this way](https://layer5.io/community/members/abishek-kumar) on a member profile.

#### Possible badges include:

- <img src="https://github.com/layer5io/layer5/blob/master/src/sections/Community/Member-single/community-green.svg" width="25px" height="25px"/> Community
- <img src="https://github.com/layer5io/layer5/blob/master/src/sections/Community/Member-single/landscape-green.png" width="25px" height="25px"/> Landscape
- <img src="https://github.com/layer5io/layer5/blob/master/src/sections/Community/Member-single/layer5-image-hub.svg" width="25px" height="25px"/> ImageHub
- <img src="https://github.com/layer5io/layer5/blob/master/src/sections/Community/Member-single/meshery-logo-light.svg" width="25px" height="25px"/> Meshery
- <img src="https://github.com/layer5io/layer5/blob/master/src/sections/Community/Member-single/meshery-operator-dark.svg" width="25px" height="25px"/> Meshery Operator
- <img src="https://github.com/layer5io/layer5/blob/master/src/sections/Community/Member-single/smp-dark-text.svg" width="25px" height="25px"/> SMP
- <img src="https://github.com/layer5io/layer5/blob/master/src/sections/Community/Member-single/getnighthawk-logo.png" width="25px" height="25px"/> Nighthawk
- <img src="https://github.com/layer5io/layer5/blob/master/src/sections/Community/Member-single/patterns-logo.png" width="25px" height="25px"/> Patterns

## Updating the Service Mesh Landscape 

Another common site update includes updation of the Service Mesh Landscape. The service mesh landscape is powered by Gatsby.js. In order to update the landscape, fork this repository, clone it, create a branch and navigate to the **src/collections/landscape** folder.

Make sure to open a [new issue](https://github.com/layer5io/layer5/issues/new?assignees=&labels=area%2Flandscape&template=landscape.md&title=%5BLandscape%5D) first. Following are a list of files that you may edit and make the neccessary updates (if appropriate):

- [non-functional.js](https://github.com/layer5io/layer5/blob/master/src/collections/landscape/non-functional.js) - overview of various service meshes
- [meshes.js](https://github.com/layer5io/layer5/blob/master/src/collections/landscape/meshes.js) - list of individual service mesh details
- [proxies.js](https://github.com/layer5io/layer5/blob/master/src/collections/landscape/proxies.js) - list of individual modern proxies
- [gateway.js](https://github.com/layer5io/layer5/blob/master/src/collections/landscape/gateways.js) - list of API gateways
- [load-balancer.js](https://github.com/layer5io/layer5/blob/master/src/collections/landscape/load-balancer.js) - list of load balancers

Entries should be listed in alphabetical order. Data provided to the `smi.js` is dynamic and based upon results from conformance tests run using Meshery.

To update the Service Mesh Timeline, add the new service mesh in the [non-functional.js](https://github.com/layer5io/layer5/blob/master/src/collections/landscape/non-functional.js) file. Add `announce-date` key for the service mesh, then add a `timeline-order` key having a value 1+`maximum value of timeline-order` till now, to list the service mesh in the timeline correctly.


