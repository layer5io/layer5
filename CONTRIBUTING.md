## Contribution

Contributions, updates, [discrepancy reports](/../../issues) and [pull requests](/../../pulls) are welcome! Layer5 is community-built and warmly welcomes collaboration. Contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

### Updating the Landscape

The service mesh landscape is powered by Jekyll. In order to add/update the landscape, clone this repository, create a branch and navigate to the **_data/categories** folder. Edit these yaml files (if appropriate):

- [non-functional.yml](https://github.com/layer5io/layer5/blob/master/_data/categories/non-functional.yml) - overview of various service meshes
- [meshes.yml](https://github.com/layer5io/layer5/blob/master/_data/categories/meshes.yml) - list of individual service mesh details
- [proxies.yml](https://github.com/layer5io/layer5/blob/master/_data/categories/proxies.yml) - list of individual modern proxies

Entries should be listed in alphabetical order. Edit other yaml files as needed. Build and preview your changes by running `make` or `make docker`.

Submit your [pull request](../../pulls)!
