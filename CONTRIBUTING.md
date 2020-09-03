## Contributing to Layer5
You want to contribute to the project? Yay! We want you to! Visit our centralized instructions for [contributing](https://github.com/layer5io/meshery/blob/master/CONTRIBUTING.md#contributing). Contributions, updates, [discrepancy reports](/../../issues) and [pull requests](/../../pulls) are welcome! Layer5 is community-built and warmly welcomes collaboration. Contributors are expected to adhere to our [Code of Conduct](.CODE_OF_CONDUCT.md).

# Layer5-NG Site
This repository is for development of the next generation of layer5.io using Gatsby and Strapi. A persistent deployment of the site is available at https://layer5ng.netlify.app

See the [design document](https://docs.google.com/document/d/1rvUZy2_S1a2_14BAQIg6b9cMhUuu04kYzkOPDPaPptI/edit#) for more information and the [#websites](https://layer5io.slack.com/archives/C015QJKUMPU) channel.

## Site Development

Before building the site, ensure that you have the following dependencies installed on your system.

### Dependencies:

- [Nodejs](https://nodejs.org/en/): e.g., `brew install node`
- [gatsby cli](https://www.gatsbyjs.org/tutorial/part-zero/#using-the-gatsby-cli): e.g., `npm install -g gatsby-cli`

### Building the site

Run the following:

1. `make setup-libs`-To install the dependencies for the running the site.
1. `make site`-To run the website locally.


### <a name="commit-signing">Signing-off on Commits (Developer Certificate of Origin)</a>

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

In most cases, you can add this signoff to your commit automatically with the
`-s` or `--signoff` flag to `git commit`. You must use your real name and a reachable email
address (sorry, no pseudonyms or anonymous contributions). An example of signing off on a commit:
```
$ commit -s -m “my commit message w/signoff”
```

To ensure all your commits are signed, you may choose to add this alias to your global ```.gitconfig```:

*~/.gitconfig*
```
[alias]
  amend = commit -s --amend
  cm = commit -s -m
  commit = commit -s
```
Or you may configure your IDE, for example, Visual Studio Code to automatically sign-off commits for you:

<a href="./assets/images/git-signoff-vscode.png" ><img src="./assets/images/git-signoff-vscode.png" width="50%"><a>

### <a name="flow">Contribution Flow</a>
Please contribute! The Layer5-ng site uses Gatsby. The process of contributing to documentation follows this flow:

1. Fork a copy of this repo.
1. Get a local clone of your fork of the site.
`git clone https://github.com/layer5io/layer5`
1. Switch to the `layer5-ng` branch.
`git checkout layer5-ng`
1. Create and checkout a new branch to make changes within
`git checkout -b <my-username>/<my-changes>` 
1. Edit site/add content.
`vi <specific page>.md` # or use your favorite IDE
1. Run site locally to preview changes.
`make site` # this will run a local web server with "live reload" conveniently enabled.
1. Commit and push changes to your remote branch.
`git push origin <my-username>/<my-changes>`
1. Open a [pull request](../../pulls) (in your web browser) against the `layer5-ng` branch on https://github.com/layer5io/layer5.

Build and preview your changes by running `make site`.
