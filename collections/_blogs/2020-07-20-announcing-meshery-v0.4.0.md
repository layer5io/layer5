---
layout: post
date:   2020-07-20 08:00:00 +0000
image: /assets/images/meshery/meshery-text-dark.png
author: Kush Trivedi
title: Announcing Meshery v0.4.0
categories: meshery
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
.meshery-li-item {
        margin-left: 25px;
        font-style: italic;
}
.meshery-indent {
        margin-left: 30px;
}
</style>
<img src="/assets/images/meshery/meshery-dark-tag-text.png"
        alt="The service mesh management plane"
        style="width:35%;float:left;margin-right:10px;margin-bottom:10px;"/>

[Meshery](https://meshery.io) is the service mesh management plane offering lifecycle, configuration and performance management of service meshes and their workloads.

Layer5 community members are hard at work providing our users with easy access to any service mesh and myriad management features. New releases for Meshery are published on a frequent cadence with new features and bug fixes. Today, we are announcing version 0.4.0 of Meshery. This summary highlights Meshery's latest developments and elucidates new features.

## What's New?

The v0.4.0 release of Meshery introduces a plethora of new features and bug fixes across service mesh environments spanning Meshery and it's various adapters.

#### Meshery's CLI: `mesheryctl`

<div class="meshery-list-item"></div>

**New Command Structure** 

`mesheryctl` commands and subcommands have been restructured in v.4.0 into the categories:

<ul>
<li class="meshery-li-item">Global Commands and Flags</li>
<li class="meshery-li-item">Meshery Lifecycle Management</li>
<li class="meshery-li-item">Performance Management</li>
<li class="meshery-li-item">Service Mesh Lifecycle Management</li>
<li class="meshery-li-item">Workload Lifecycle Management</li>
</ul>

<p class=".meshery-indent">Organizing commnands <a href="https://meshery.layer5.io/docs/guides/mesheryctl">under these categories</a> is done with both the intention to make `mesheryctl` functions intuitively at your fingertips, but also to make room for forthcoming functionality.</p>

<div class="meshery-list-item"></div>

**Exposing Performance Management in the CLI**

<p class=".meshery-indent"><code>perf</code>: a new <code>mesheryctl</code> command. Introduction of new performance sub-commands, now benchmark your service mesh at the tip of your fingers using our new CLI command <code>perf</code>.</p>

<div class="meshery-list-item"></div>

**Support for Scoop** 

Support extended to Scoop Bucket. You can now install mesheryctl on your Windows machine with scoop bucket. Visit the Meshery guideTo see more on installation guide, visit [here]()

<div class="meshery-list-item"></div>

**Rename `cleanup` to `reset`**

The `cleanup` is used to reset your Meshery deployment configuration back to its default settings. This command has been renamed to `reset` to more appropriately reflect its purpose.

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
