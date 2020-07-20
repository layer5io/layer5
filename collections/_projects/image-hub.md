---
layout: project
description: "Image Hub is a sample application written to run on Consul for exploring WebAssembly modules used as Envoy filters. "
title:  "Image Hub: Envoy Filters using WebAssembly and Rust"
author:
  twitter: layer5
image:
  path: /assets/images/image-hub/layer5-image-hub.svg
  width: 1200
thumbnail: /assets/images/image-hub/layer5-image-hub-white.svg
lang: en
#permalink: /projects/image-hub
link: /projects/image-hub
redirect_from: projects/image-hub/
---

<img src="/assets/images/image-hub/layer5-image-hub.svg" style="float:left;width:20%;margin-right:20px;" />

<h3>Purpose and Overview</h3>

Image Hub is a sample application written to run on Consul for exploring WebAssembly modules used as Envoy filters. Image Hub is a sample application written to run on Consul for exploring WebAssembly modules used as Envoy filters written in Rust. This application was first demonstrated at DockerCon 2020.

<div style="float:right; width:50%;">
  <a href="https://www.youtube.com/embed/5BrbbKZOctw">
    <img src="/assets/images/image-hub/Lee-Calcote-WebAssembly-Envoy-filters-rust.gif" 
      style="width:100%;" align="right" />
  </a>
  <p class="center"><i>Demo of WASM-enabled Consul service mesh data plane.</i></p>
</div>

Watch the demo to learn more about how WebAssembly (WASM) modules are dynamically loadable and reloadable in service mesh data planes, enabling them to be more intelligent and responsive in real-time. 

These modules can be used to implement multi-tenancy or to implement per user rate limiting in your application's endpoints. This project examines how to let application infrastructure concerns melt off your service mesh workloads and have your infrastructure implement multi-tenancy on your behalf.

Learn how to use Docker Desktop and Kubernetes as your development platforms of choice in combination with Meshery, the service mesh management plane, to easily deploy a service mesh. Using Consul and Envoy's latest capabilities, see how WASM can be used to move user authentication and authorization from your application to the infrastructure.
<div class="row">
  <div class="col s12 m6" style="display: flex; height: auto; flex-direction: column;
  flex-flow: column; vertical-align: top; text-align: center;
  position: relative;">
    <a href="/assets/images/image-hub/service-mesh-architecture-consul.png">
        <img src="/assets/images/image-hub/service-mesh-architecture-consul.png" width="100%">
    </a>
    <i>Consul Service Mesh Architecture w/WebAssembly</i>
  </div>
  <div class="col s12 m6" style="display: flex; height: auto; flex-direction: column;
  flex-flow: column; vertical-align: top; text-align: center;
  position: relative;">
  <a href="/assets/images/image-hub/image-hub-on-consul-with-wasm-and-meshery.png">
    <img src="/assets/images/image-hub/image-hub-on-consul-with-wasm-and-meshery.png" width="100%"></a>
      <i>Image Hub deployed on Consul</i>
  </div>
</div>

<h5 class="black-text">Contributors</h5>

This demo application has been enabled by experimental works of Nic Jackson of HashiCorp, and Kanishkar J, Lee Calcote, and other contributors of Layer5.
