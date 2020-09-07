---
layout: post
date:   2020-07-20 08:00:00 +0000
image: /assets/images/posts/2020-07-20-announcing-meshery-v040/meshery-v040.png
author: Kush Trivedi
title: Announcing Meshery v0.4.0
categories: meshery
---
<style>
.meshery-list-item {
        background-image:url('/assets/images/posts/2020-07-20-announcing-meshery-v040/meshery-logo-light.svg');
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
<img src="/assets/images/posts/2020-07-20-announcing-meshery-v040/meshery-v040-inverted.png"
        alt="The service mesh management plane"
        style="width:35%;float:left;margin-right:20px;margin-bottom:20px;"/>

[Meshery](https://meshery.io) is the service mesh management plane offering lifecycle, configuration and performance management of service meshes and their workloads.

Layer5 community members are hard at work providing our users with easy access to any service mesh and myriad management features. New releases for Meshery are published on a frequent cadence with new features and bug fixes. Today, we are announcing version 0.4.0 of Meshery. This summary highlights Meshery's latest developments and elucidates new features.

### What's New?

The v0.4.0 release of Meshery introduces a plethora of new features and bug fixes across service mesh environments spanning Meshery and it's various adapters.

#### Meshery's CLI: `mesheryctl`

<div class="meshery-list-item"></div>

**New Command Structure** 

`mesheryctl` commands and subcommands have been restructured in v0.4.0 into the categories:

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

<a href="https://meshery.io/community"><img alt="Layer5 Service Mesh Community" src="https://raw.githubusercontent.com/layer5io/meshery-operator/master/img/readme/meshery-operator-dark.svg" style="margin:10px;" width="125px" align="left" /></a>

#### MeshSync

- A component of the [Meshery Operator](https://github.com/layer5io/meshery-operator), MeshSync can scan the environment to get the deployment details of specific types of service meshes and the connected Kubernetes cluster. MeshSync is a new component addition to Meshery. Meshery needs to be constantly updated given that service meshes and their underlying infrastructure are dynamic, constantly changing.  Meshery operations should be resilient in the face of this change. 
- MeshSync brings a service mesh agnostic object model that defines relationships between all objects under management.

#### Security & Authentication

- Meshery has moved from using session authentication to JWT authentication; Meshery's JWT authentication is powered by Hydra-Auth.
- You can now opt to authenticate yourself on mesheryctl while performing performance tests using mesheryctl, you can authenticate yourself by getting the JWT Token from Meshery-UI.

#### Meshery Server

- Support provided for [wrk2 as an alternative load generator](https://meshery.layer5.io/docs/functionality/performance-management#load-generators).
- [Providers](https://meshery.layer5.io/docs/extensibility) - A new project construct that allows users to select authentication, long-term storage etc.
- Ad-hoc [connectivity tests for Prometheus and Grafana](https://meshery.layer5.io/docs/functionality/performance-management#grafana-and-meshery) are now supported.
- Extraneous information beyond IP address and port in Grafana and Prometheus endpoints have been stripped off.

#### Meshery UI

- ES-Lint has been added to the client side to ensure the quality of code and increase maintainaiblity of code.
- Cypress has been set-up to enable end-to-end tests and integration tests for Meshery UI.

<div id="layer5-intro" class="card-content" style="position:relative;float:right;margin-left:35px;" ><iframe width="392" height="220.5" src="https://www.youtube.com/embed/ds9D2KgZKxo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

#### Other notable changes

- From within the [Meshery Continuous Integration Working Group](https://www.youtube.com/watch?v=ds9D2KgZKxo&list=PL3A-A6hPO2IM7rYiKxG4l3eQNc6X3IUex), we have strengthened our continuous integration (CI) actions & tests by introducing new workflows like `static check`, `vet check`, `security check` for our server code.
- ReleaseDrafter & WelcomeBot has been added to the repository to enable automation of release notes and for welcoming new contributors, respectively.

To get a more comprehensive list of the bug fixes and enhancements packaged in the v0.4.0 release, see the [Meshery Documentation](https://meshery.layer5.io/docs/project/releases).

## Join the Layer5 community!
If you like Meshery, you'll love the open source community that surrounds it. I encourage you to join me and others in the Layer5 community. [Jump into our Slack](http://slack.layer5.io) and start meshing around!
