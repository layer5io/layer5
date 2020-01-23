## Contributing to Layer5
You want to contribute to the project? Yay! We want you to! Visit our centralized instructions for [contributing](https://github.com/layer5io/meshery/blob/master/CONTRIBUTING.md#contributing).

## Contribution

Contributions, updates, [discrepancy reports](/../../issues) and [pull requests](/../../pulls) are welcome! Layer5 is community-built and warmly welcomes collaboration. Contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.



### <a name="landscape">Updating the Landscape</a>

The service mesh landscape is powered by Jekyll. In order to add/update the landscape, clone this repository, create a branch and navigate to the **_data/landscape** folder. Edit these yaml files (if appropriate):

- [non-functional.yml](https://github.com/layer5io/layer5/blob/master/_data/landscape/non-functional.yml) - overview of various service meshes
- [meshes.yml](https://github.com/layer5io/layer5/blob/master/_data/landscape/meshes.yml) - list of individual service mesh details
- [proxies.yml](https://github.com/layer5io/layer5/blob/master/_data/landscape/proxies.yml) - list of individual modern proxies
- [gw.yml](https://github.com/layer5io/layer5/blob/master/_data/landscape/gw.yml) - list of API gateways
- [lb.yml](https://github.com/layer5io/layer5/blob/master/_data/landscape/lb.yml) - list of load balancers

Entries should be listed in alphabetical order. Edit other yaml files as needed. 

### <a name="flow">Contribution Flow</a>
Please contribute! The Layer5 site uses GitHub Pages (Jekyll) to host its site. The process of contributing to documentation follows this flow:

1. Get a local copy of the site.
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
