---
layout: post
date:   2020-07-2 08:00:00 +0000
image: /assets/images/meshery/meshery-text-dark.png
author: Kush Trivedi

---
<style>
.meshery-list-item {
        background-image:url('/assets/images/meshery/meshery-shadow.svg');
        height:1.5em;
        vertical-align: bottom;
        background-repeat: no-repeat;
        padding-left: 25px;
        margin-left: 15px;
        width: 20px;
        float:left;
}
</style>
<img src="/assets/images/meshery/meshery-dark-tag-text.png"
        alt="The service mesh management plane"
        style="width:35%;float:left;margin-right:10px;margin-bottom:10px;"/>

[Meshery](https://meshery.io) is the multi-service mesh management plane offering lifecycle, configuration and performance management of service meshes and their workloads.

Here at Layer5, the community members and developers are hard at work with a singular aim - providing our users with better and easy access to our analysis tools. 
New releases for Meshery are published from time to time, with new and improved features, bug fixes, performance improvisations and much more. This is a short summary to shine a light on the latest developments and elucidate any new features.

## What's New?

We present to you Meshery v0.4.0. This release introduces a plethora of new features and bug fixes across service mesh environments, including Meshery and it's various adapters.

#### Mesheryctl

<div class="meshery-list-item"></div>
Mesheryctl has a new and improved command structure. We have switched to a more categoric set of command groups to make mesheryctl functions and features more intuitive and consequently, easier to use. See the new <a href="https://github.com/layer5io/meshery/pull/1021#issuecomment-630257536">command structure</a>.

<div class="meshery-list-item"></div>
Introduction of new performance sub-commands, now benchmark your service mesh at the tip of your fingers using our new CLI command **Performance**.

<div class="meshery-list-item"></div>
Support extended to Scoop Bucket. You can now install mesheryctl on your Windows machine with scoop bucket. To see more on installation guide, visit [here](https://meshery.layer5.io/docs/installation#scoop)

<div class="meshery-list-item"></div>
Cleanup command has been changed to reset.

#### Security & Authentication

- Meshery has moved from using session authentication to JWT authentication; Meshery's JWT authentication is powered by Hydra-Auth.
- You can now opt to authenticate yourself on mesheryctl while performing performance tests using mesheryctl, you can authenticate yourself by getting the JWT Token from Meshery-UI.

#### Meshery Server

- Support provided for wrk2 as an alternative load generator.
- Providers - A new project construct that allows users to select authentication, long-term storage etc.
- Ad-hoc connectivity tests for Prometheus & Grafana are now supported.
- Extraneous information beyond IP address and port in Grafana and Prometheus endpoints have been stripped off.

#### MeshSync

- Meshery can now scan the environment to get the deployment details of all known types of service meshes & kubernetes cluster.

#### Meshery UI

- ES-Lint has been added to the client side to ensure the quality of code and increase maintainaiblity of code.
- Cypress has been set-up to enable e2e and integration tests for meshery-ui.

#### Other notable changes

- We have strengthened our CI actions & tests by introducing new workflows like `static check`, `vet check`, `security check` for our server code.
- ReleaseDrafter & WelcomeBot has been added to the repository to enable automation of release notes and for welcoming new contributors respectively.

To get a more comprehensive list of the many bug fixes and enhancements implemented across the Meshery ecosystem with the v0.4.0 release, visit [here.](https://meshery.layer5.io/docs/project/releases) 
