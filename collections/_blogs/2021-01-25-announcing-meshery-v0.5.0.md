---
layout: post
date:   2021-01-25 08:00:00 +0000
image: /assets/images/posts/2020-08-07-announcing-meshery-v040/meshery-v040.png
author: Aisuko Li
title: Announcing Meshery v0.5.0
tags:
 - meshery
 - opensource
 - release
categories: community
---

<p style="color:#3c494f;text-align:center;">Thanks to our open source contributors</p>
We're pleased to announce the realease of Meshery 0.5.0, our first release of 2021! This realease consists of number of significant architectural enhancements and 8 new capabilities are entering alpha

The 0.5.0 release cycle will good begin for 2021 release cycle, this is one of the most feature dense releases in a while:the Meshery innovation
cycle is still trending upward. This release has many new capabilities,showing that there is still much to explore in the open service mesh ecosystem.


### Major themes

#### Meshery



The two new adapters with the latest version of Meshery released 

* Meshery Adapter for  <a href="https://github.com/layer5io/meshery-traefik-mesh">Traefik Mesh (beta)</a>
* Meshery Adapter for <a href="https://github.com/layer5io/meshery-nginx-sm">NGINX SM Mesh (beta)</a>

< Todo need more detail>

* Dynamic injection of Remote Provider extensions

#### Meshery Operator

<a href="https://meshery.io/community"><img alt="Layer5 Service Mesh Community" src="/assets/images/posts/2020-08-07-announcing-meshery-v040/meshery-operator-dark.svg" style="margin:15px;" width="125px" align="left" /></a>


 * We add new broker to meshery-operator <a href="https://github.com/layer5io/meshery-operator/pull/97">PR #97</a> , thanks @kumarabd
 * We split the source code of MeshSync from Meshery Operator  <a href="https://github.com/layer5io/meshery-operator/issues/88"> issue #88</a>, thanks @kalradev


<div class="meshery-list-item"></div><br/>


#### MeshSync

* MeshSync one of a family of custom controllers within Meshery Operator.
* We released it to a new project, welcome to contribute <a href="https://github.com/layer5io/meshsync">MeshSync</a>

<div class="meshery-list-item"></div>


