---
layout: post
date:   2020-05-26 08:00:00 +0000
image: /assets/images/meshery/meshery-text-dark.png
author: Kush Trivedi
permalink: /blog/announcing-meshery
---
<div class="center">
<img src="/assets/images/meshery/meshery-logo-light-text-side.png"
        alt="The service mesh management plane"
        style="width:40%;"
         />
</div>


[Meshery](https://meshery.io) is the multi-service mesh management plane offering lifecycle, configuration and performance management of service meshes and their workloads.

Community members and developers at Layer5 are actively working everyday to improve Meshery. We have new releases for Meshery from time to time, having new features, bug fixes, performance improvements along with each release. This blog post gives a summary of all the latest developments taking place in Meshery.

The latest version release that is being pushed out is Meshery v0.4.0, with this release there are a lot of new features and bugs fixed across service mesh environment including Meshery & it's various adapters.

## What's New ?

#### Mesheryctl

- Mesheryctl has got a new command structure, we have switched to a more categorically set of command groups to make mesheryctl functions and features more intuitive to use. See the new command structure [here](https://github.com/layer5io/meshery/pull/1021#issuecomment-630257536).
- Introduction of new performance sub-command, now benchmark your service mesh at the tips of your finger using our new CLI command **Performance**.
- Support extended to Scoop Bucket, now you can install mesheryctl on your windows machine with scoop bucket. To see more on installation guide, visit [here](https://meshery.layer5.io/docs/installation#scoop)
- Cleanup command has been changed to reset.

#### Security & Authentication

- Meshery has moved from using session authentication to JWT authentication, meshery's JWT authentication is powered by Hydra-Auth.
- Now authenticate yourself on mesheryctl, while performing performance test using mesheryctl you can authenticate yourself by getting the JWT Token from Meshery-UI.

#### Meshery Server

- Support for wrk2 as an alternative load generator.
- Providers - a new project construct that allows users to select authentication, long-term storage, and so on provider.
- Ad-hoc connectivity tests for Prometheus & Grafana are now supported.
- Strip off extraneous information beyond IP address and port in Grafana and Prometheus endpoints

#### MeshSync

- Meshery scans the environment to get the deployment details of all known types of service meshes & kubernetes cluster.

#### Meshery UI

- ES-Lint has been added to the client side to ensure the quality of code and ease the maintainence of code.
- Cypress has been set-up to enable e2e and integration tests for meshery-ui.

#### Other notable changes

- We have strengthened our CI actions & tests by introducing new workflows like static check, vet check, security check for our server code.
- ReleaseDrafter & WelcomeBot has been added to the repository to enable automation of release notes and welcoming of contributors respectively.

The following is a summary of all major changes in v0.4.0 of Meshery. There have been many bug fixes and enhancements implementes across the meshery ecosystem. To get a complete list of all the changes with v0.4.0, visit [here](https://meshery.layer5.io/docs/project/releases) .