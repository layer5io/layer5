---
layout: post
title:  "Announcing the Meshery Adapter for Open Service Mesh"
date: 2020-09-04 10:17:05 +0000
image: /assets/images/posts/2020-09-05-announcing-the-meshery-adapter-for-open-service-mesh/blog2.png
author: Lee Calcote
categories: meshery
permalink: /blog/:categories/:title
---
<h2 class="center" style="color:#666;font-size:1.25em;"> Adding another service mesh to the landscape and another adapter to Meshery</h2>

[Open Service Mesh (OSM)](https://openservicemesh.io/) was released on August 5th by Microsoft. <img class="image-right" src="/assets/images/posts/2020-09-05-announcing-the-meshery-adapter-for-open-service-mesh/meshery-adapter-for-open-service-mesh.png" />Boasting some highly recommendable features, including but not limited to being open-source, lightweight, and SMI conformant, OSM is a welcome addition to the meshiness going around in the service mesh community.
With its own control plane and a data plane built by exacting Envoy APIs, OSM is aimed to be a holistic, community-led approach to service meshes, that can be seen as a direct implementation of the SMI specification. 
Drawing lessons from existing service mesh projects, the central goal is providing an effortless way for Kubernetes operators to install, maintain and run service meshes without having to make the seemingly difficult choice of choosing one from the long list of available options in the market.

First pronounced to be SMI compliant by [Meshery](https://meshery.io/), the service mesh management plane, the first release of OSM supports a myriad of basic features:

- Securing service to service links
- Supporting traffic shifting
- Managing observability for your services
- Validating and Implementing access control policies
- Auto addition of applications and services

#### Get started with OSM using Meshery

In our effort to support the multi-mesh world, the new release [*v0.4.3*](https://github.com/layer5io/meshery/releases/tag/v0.4.3) of Meshery includes a brand new Meshery adapter for Open Service Mesh, enabling you to perform a suite of SMI conformance tests, to prove and uphold OSM’s promised adherence to the SMI specifications. Meshery also enables you to apply any custom Kubernetes configuration that you would like to apply on and work with OSM.
In our documentation for the [Meshery OSM adapter](https://meshery.layer5.io/docs/service-meshes/adapters/osm), you will find a complete walkthrough on how to get set up, install, deploy and configure OSM according to your needs.

<a href="/assets/images/posts/2020-09-05-announcing-the-meshery-adapter-for-open-service-mesh/Management-Meshery.png">
<img alt="SMI validation test by Meshery" class="image-center" src="/assets/images/posts/2020-09-05-announcing-the-meshery-adapter-for-open-service-mesh/Management-Meshery.png"></a>
