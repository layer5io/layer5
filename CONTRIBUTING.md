# Contributing at Layer5
You want to contribute to Layer5's community and projects? Yay! We want you to! Visit https://layer5.io/community/newcomers for a list of resources available to help you get started. Contributions of all shapes and sizes are welcome (contributors, too)! Layer5 is community-built and warmly welcomes collaboration. Contributors are expected to adhere to our [Code of Conduct](.CODE_OF_CONDUCT.md).

## Layer5 Site
The Layer5 website is hosted in this repository and is built using Gatsbyjs. See the [design document](https://docs.google.com/document/d/1rvUZy2_S1a2_14BAQIg6b9cMhUuu04kYzkOPDPaPptI/edit#) for more information and the [#websites](https://layer5io.slack.com/archives/C015QJKUMPU) channel.

When submitting a pull request a preview deployment will be built and made available to you on your PR.

### Common Types of Site Updates

#### Community Member Profile ([create new issue](https://github.com/layer5io/layer5/issues/new?assignees=&labels=area%2Fcommunity&template=New+Member+Profile.md&title=%5BCommunity%5D+Member+Profile%3A))

Layer5 community members are an integral part of what makes Layer5 and it's projects successful. Prominently highlighting our members and their works is important. When adding a new or updating an existing community member profile, be sure to use the [Community Member Profile issue template](https://github.com/layer5io/layer5/issues/new?assignees=&labels=area%2Fcommunity&template=New+Member+Profile.md&title=%5BCommunity%5D+Member+Profile%3A), which has all the instructions needed.

#### Source code for Community Member Profiles

When adding a new or updating an existing community member profile be sure to follow the existing template which can be found here [Community Member Profile template](https://github.com/layer5io/layer5/tree/master/src/collections/members/_member-profile-template). You can easily understand the template by checking out one of the profiles [here](https://github.com/layer5io/layer5/blob/master/src/collections/members/abishek-kumar/index.mdx)


#### Badges for Community Members

Badges offer recognition of the efforts and works of community members.  Badges are assigned to a community member in acknowledgement of their engagement within and/or contribution to the representative project or (sub-)community. A variety of badges exist so that community members and their efforts may be affiliated with a particular project or community initiative. An example of how a badge assigned using markdown can be found [here](https://github.com/layer5io/layer5/blob/master/src/collections/members/abishek-kumar/index.mdx), and it will be appear [this way](https://layer5.io/community/members/abishek-kumar) on a member profile.
##### Possible badges include

- <img src="https://github.com/layer5io/layer5/blob/master/src/sections/Community/Member-single/community-green.svg" width="25px" height="25px"/> community
- <img src="https://github.com/layer5io/layer5/blob/master/src/sections/Community/Member-single/landscape-green.png" width="25px" height="25px"/> Landscape
- <img src="https://github.com/layer5io/layer5/blob/master/src/sections/Community/Member-single/layer5-image-hub.svg" width="25px" height="25px"/> Layer5
- <img src="https://github.com/layer5io/layer5/blob/master/src/sections/Community/Member-single/meshery-logo-light.svg" width="25px" height="25px"/> Meshery
- <img src="https://github.com/layer5io/layer5/blob/master/src/sections/Community/Member-single/meshery-operator-dark.svg" width="25px" height="25px"/> Meshery Operator
- <img src="https://github.com/layer5io/layer5/blob/master/src/sections/Community/Member-single/smp-dark-text.svg" width="25px" height="25px"/> smp
- <img src="https://github.com/layer5io/layer5/blob/master/src/sections/Community/Member-single/getnighthawk-logo.png" width="25px" height="25px"/> GetNighthawk

#### <a name="updating-the-service-mesh-landscape">Updating the Service Mesh Landscape ([create new issue](https://github.com/layer5io/layer5/issues/new?assignees=&labels=area%2Flandscape&template=landscape.md&title=%5BLandscape%5D))

The service mesh landscape is powered by Gatsbyjs. In order to add/update the landscape, fork this repository, clone it, create a branch and navigate to the **src/collections/landscape** folder. Edit these js files (if appropriate):

- [non-functional.js](https://github.com/layer5io/layer5/blob/master/src/collections/landscape/non-functional.js) - overview of various service meshes
- [meshes.js](https://github.com/layer5io/layer5/blob/master/src/collections/landscape/meshes.js) - list of individual service mesh details
- [proxies.js](https://github.com/layer5io/layer5/blob/master/src/collections/landscape/proxies.js) - list of individual modern proxies
- [gateway.js](https://github.com/layer5io/layer5/blob/master/src/collections/landscape/gateways.js) - list of API gateways
- [load-balancer.js](https://github.com/layer5io/layer5/blob/master/src/collections/landscape/load-balancer.js) - list of load balancers

Entries should be listed in alphabetical order. Data provided to the `smi.js` is dynamic and based upon results from conformance tests run using Meshery.

To update the Service Mesh Timeline, add the new service mesh in the [non-functional.js](https://github.com/layer5io/layer5/blob/master/src/collections/landscape/non-functional.js) file. Add `announce-date` key for the service mesh then add a `timeline-order` key having value 1+`maximum value of timeline-order` till now, to list the service mesh in the timeline correctly.

#### <a name="news">Adding News</a>

1. In order to add/update news items, fork this repository, clone it, create a branch and navigate to the `src/collections/news` directory.
1. Create a copy of the [news template](https://github.com/layer5io/layer5/tree/master/src/collections/news/0000-00-00-news-template).
1. Follow the instructions included in the news template and name the new file after the title of the news article.
1. Entries will be listed in chronological order automatically.

#### <a name="events">Adding an Event</a> [create new issue](https://github.com/layer5io/layer5/issues/new?assignees=&labels=area%2Fevents&template=events.md&title=%5BEvent%5D)


## Contributor Instructions

Before building the site, ensure that you have the following dependencies installed on your system.

- [Nodejs and npm](https://nodejs.org/en/): To verify run `node -v` & `npm -v`

### Building the site

Run the following:

1. `make setup-libs`-To install the dependencies for the running the site.
1. `make site`-To run the website locally.

Please contribute! The Layer5 site uses Gatsby. The process of contributing to documentation follows this flow:

1. Fork a copy of this repo.
1. Get a local clone of your fork of the site.
`git clone https://github.com/layer5io/layer5`
1. Switch to the `master` branch.
`git checkout master`
1. Create and checkout a new branch to make changes within
`git checkout -b <my-username>/<my-changes>`
1. Edit site/add content.
`vi <specific page>.md` # or use your favorite IDE
1. Run site locally to preview changes.
`make site` # this will run a local web server with "live reload" conveniently enabled.
1. Commit your changes to your remote branch.
`git commit --signoff -m"<commit subject>`
1. Push your changes
`git push origin <my-username>/<my-changes>`
1. Open a [pull request](../../pulls) (in your web browser) against the `master` branch on https://github.com/layer5io/layer5.

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

<a href="./.github/assets/images/git-signoff-vscode.png" ><img src="./.github/assets/images/git-signoff-vscode.png" width="50%"/><a>
