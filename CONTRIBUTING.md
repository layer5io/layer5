<p style="clear:both;">
<h1><a name="contributing"></a><a name="community"></a> <a href="http://slack.layer5.io">Community</a> and <a href="https://github.com/layer5io/layer5/blob/master/CONTRIBUTING.md">Contributing</a> at Layer5</h1>
<p>Please do! Contributions, updates, <a href="/../../issues">discrepancy reports</a> and <a href="/../../pulls">pull requests</a> are welcome. This project is community-built and welcomes collaboration. Contributors are expected to adhere to the <a href="https://github.com/cncf/foundation/blob/master/code-of-conduct.md">CNCF Code of Conduct</a>.
</p>
<p>
Jump into our <a href="http://slack.layer5.io"><img src="assets/images/slack.png" height="16px" align="bottom" />Slack</a>! Our projects are community-built and welcome collaboration. 👍Be sure to see the <a href="https://docs.google.com/document/d/17OPtDE_rdnPQxmk2Kauhm3GwXF1R5dZ3Cj8qZLKdo5E/edit">Meshery Contributors Welcome Guide</a> for a tour of resources available to you. Also, visit our more complete set of instructions for <a href="https://github.com/layer5io/meshery/blob/master/CONTRIBUTING.md#contributing">contributing</a>.
</p>
<p>
<a href="http://slack.layer5.io"><img alt="Layer5 Service Mesh Community" src="assets/images/buttons/community.png" style="margin-right:10px;" width="125px" align="left" /></a>
✔️ <em><strong>Join</strong></em> <a href="https://drive.google.com/open?id=1c07UO9dS7_tFD-ClCWHIrEzRnzUJoFQ10EzfJTpS7FY">weekly community meeting</a> on <a href="https://calendar.google.com/calendar/b/1?cid=bGF5ZXI1LmlvX2VoMmFhOWRwZjFnNDBlbHZvYzc2MmpucGhzQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20">Fridays from 10am - 11am Central</a>.<br />
✔️ <em><strong>Watch</strong></em> community <a href="https://www.youtube.com/playlist?list=PL3A-A6hPO2IMPPqVjuzgqNU5xwnFFn3n0">meeting recordings</a>.<br />
✔️ <em><strong>Access</strong></em> the <a href="https://drive.google.com/drive/u/4/folders/0ABH8aabN4WAKUk9PVA">community drive</a>.<br />
<br />
</p>
<p align="center">
<i>Not sure where to start?</i> Grab an open issue with the <a href="https://github.com/issues?utf8=✓&q=is%3Aopen+is%3Aissue+archived%3Afalse+org%3Alayer5io+label%3A%22help+wanted%22+">help-wanted label</a>
</p>

Find us on Twitter: <a href="https://twitter.com/layer5"><img src="assets/images/twitter.png" height="16px"
align="bottom" />@layer5</a> and <a href="https://twitter.com/mesheryio">@mesheryio</a>
</p>

## <a name="landscape">Updating the Service Mesh Landscape</a>

We encourage community curation of the landscape (all are encouraged to participate). We also encourage representatives of the projects/products in the landscape to curate and maintain their listings so as to guarantee their freshness and accuracy of representation. 

In order to add/update the landscape, clone this repository, create a branch and navigate to the **_data/landscape** folder. Edit these yaml files (if appropriate):

- [non-functional.yml](https://github.com/layer5io/layer5/blob/master/_data/landscape/non-functional.yml) - overview of various service meshes
- [meshes.yml](https://github.com/layer5io/layer5/blob/master/_data/landscape/meshes.yml) - list of individual service mesh details
- [proxies.yml](https://github.com/layer5io/layer5/blob/master/_data/landscape/proxies.yml) - list of individual modern proxies
- [gw.yml](https://github.com/layer5io/layer5/blob/master/_data/landscape/gw.yml) - list of API gateways
- [lb.yml](https://github.com/layer5io/layer5/blob/master/_data/landscape/lb.yml) - list of load balancers

Entries should be listed in alphabetical order. Edit other yaml files as needed. Thank you!

### <a name="flow">Contribution Flow</a>
Please contribute! The service mesh landscape is powered by GitHub Pages (Jekyll). The process of contributing to documentation follows this flow:

1. Get a local copy of the site.

```git clone https://github.com/layer5io/layer5```

2. Create and checkout a new branch to make changes within.

```git checkout -b <my-username>/<my-branch-name>```

3. If you've been working on a local branch for some time, be sure to keep your local forks up to speed with the remote master.

``git checkout master; git pull; git checkout <my-username>/<my-changes>; git merge master```

4. Edit site/add content.

```vi <specific page>.md    # or use your favorite IDE``` 

5. Run site locally to preview changes.

```make site   # this will run a local web server with "live reload" conveniently enabled.```

6. Commit and push changes to your remote branch.

```git push origin <my-username>/<my-changes>```

7. Open a [pull request](../../pulls) (in your web browser) against the master branch on https://github.com/layer5io/layer5.

Build and preview your changes by running `make site` or `make docker`.

#### License

This repository and site are available as open source under the terms of the [Apache 2.0 License](https://opensource.org/licenses/Apache-2.0).
