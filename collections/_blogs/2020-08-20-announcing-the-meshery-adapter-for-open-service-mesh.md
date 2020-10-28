---
layout: post
title:  "Announcing the Meshery Adapter for Open Service Mesh"
date: 2020-08-20 10:17:05 +0000
image: /assets/images/posts/2020-08-20-announcing-the-meshery-adapter-for-open-service-mesh/meshery-adapter-for-open-service-mesh.png
author: Lee Calcote
categories: meshery
permalink: /blog/:categories/:title
---
<h2 class="center" style="color:#666;font-size:1.35em;"><i>Adding another service mesh to the landscape and another adapter to Meshery</i></h2>

Released on August 5th, 2020 by Microsoft, [Open Service Mesh](https://openservicemesh.io/) (OSM)<img class="image-right" src="/assets/images/posts/2020-09-05-announcing-the-meshery-adapter-for-open-service-mesh/meshery-adapter-for-open-service-mesh.png" /> is lightweight and [Service Mesh Interace conformant](/smi) (SMI). Open Service Mesh is a contemporary addition to the [service mesh landscape](/landscape). Using Envoy as its data plane proxy component and SMI specifications as it's control plane APIs, OSM draws lessons and code from existing service mesh projects, like Linkerd. The Open Service Mesh project has some miles to go as it is one of a growing list of choices available in the service mesh landscape.

First pronounced to be SMI compliant by [Meshery](https://meshery.io/), the service mesh management plane, the first release of OSM supports a myriad of basic features:

- Securing service to service links
- Supporting traffic shifting
- Managing observability for your services
- Validating and Implementing access control policies
- Auto addition of applications and services

#### Get started with OSM using Meshery

In Layer5's effort to support our multi-mesh world, our Meshery project provides an effortless way for Kubernetes operators to install, maintain and run service meshes. [Meshery v0.4.3](https://github.com/layer5io/meshery/releases/tag/v0.4.3) includes the [Meshery Adapter for Open Service Mesh](https://github.com/layer5io/meshery-osm), enabling you to quickly provision OSM, run any number of sample applications, manage its performance using [Service Mesh Performance](https://smp-spec.io) (SMP), validate OSM's compliance to SMI using a suite of conformance tests. Meshery offers configuraiton management with builtin best practice configuration analysis giving you confidence in applying custom configuration to OSM. Meshery's documenation on the [Open Service Mesh integation](https://meshery.layer5.io/docs/service-meshes/adapters/osm) provides a complete walkthrough on how to get set up, install, deploy and configure OSM according to your needs.

<a href="/assets/images/posts/2020-09-05-announcing-the-meshery-adapter-for-open-service-mesh/Meshery-SMI-Conformance-Results.png">
<img alt="SMI validation test by Meshery" class="image-center" src="/assets/images/posts/2020-09-05-announcing-the-meshery-adapter-for-open-service-mesh/Meshery-SMI-Conformance-Results.png"></a>

Try Open Service Mesh now, by [getting started with Meshery](/meshery#getting-started).

\- [Lee Calcote](/community/members/lee-calcote)