## Contributing to Layer5
You want to contribute to the project? Yay! We want you to! Visit our centralized instructions for [contributing](https://github.com/layer5io/meshery/blob/master/CONTRIBUTING.md#contributing).

## Contribution

Contributions, updates, [discrepancy reports](/../../issues) and [pull requests](/../../pulls) are welcome! Layer5 is community-built and warmly welcomes collaboration. Contributors are expected to adhere to our [Code of Conduct](.CODE_OF_CONDUCT.md).


### <a name="updating-the-service-mesh-landscape">Updating the Landscape</a>

The service mesh landscape is powered by Jekyll. In order to add/update the landscape, fork this repository, clone it, create a branch and navigate to the **_data/categories** folder. Edit these yaml files (if appropriate):

- [non-functional.yml](https://github.com/layer5io/layer5/blob/master/_data/categories/non-functional.yml) - overview of various service meshes
- [meshes.yml](https://github.com/layer5io/layer5/blob/master/_data/categories/meshes.yml) - list of individual service mesh details
- [proxies.yml](https://github.com/layer5io/layer5/blob/master/_data/categories/proxies.yml) - list of individual modern proxies
- [gw.yml](https://github.com/layer5io/layer5/blob/master/_data/categories/gw.yml) - list of API gateways
- [lb.yml](https://github.com/layer5io/layer5/blob/master/_data/categories/lb.yml) - list of load balancers

Entries should be listed in alphabetical order. Edit other yaml files as needed. 

### <a name="news">Adding News</a>

1. In order to add/update news items, fork this repository, clone it, create a branch and navigate to the `collections/_news` directory. 
1. Create a copy of the [news template](https://github.com/layer5io/layer5/blob/master/collections/_news/0000-00-00-news-template.md).
1. Follow the instructions included in the news template and name the new file after the title of the news article. 
1. Entries will be listed in chronological order automatically.

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
Please contribute! The Layer5 site uses GitHub Pages (Jekyll) to host its site. The process of contributing to documentation follows this flow:

1. Fork a copy of this repo.
1. Get a local clone of your fork of the site.
`git clone https://github.com/layer5io/layer5`
1. Create and checkout a new branch to make changes within
`git checkout -b <my-username>/<my-changes>` 
1. Edit site/add content.
`vi <specific page>.md` # or use your favorite IDE
1. Run site locally to preview changes.
`make site` # this will run a local web server with "live reload" conveniently enabled.
1. Commit and push changes to your remote branch.
`git push origin <my-username>/<my-changes>`
1. Open a [pull request](../../pulls) (in your web browser) against the master branch on https://github.com/layer5io/layer5.

Build and preview your changes by running `make site` or `make docker`.
