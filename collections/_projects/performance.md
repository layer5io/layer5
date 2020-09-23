---
layout: project
title:  "Service Mesh Performance Specification"
description: "Measuring and indexing the performance, overhead, and value of the world's service mesh deployments."
author:
  twitter: layer5
image:
  path: /assets/images/buttons/smps.png
  width: 1200
thumbnail: /assets/images/buttons/smps_white.svg
lang: en
link: /performance
---
<style>
ul.bullet li {
  list-style-type: circle;
  margin-left:15px;
  position: relative;
  text-align: left;
}
ul.bullet ul {
  margin-left:25px;
  list-style-position: inside;
}
ul.bullet li ul {
  list-style-type: circle;
  margin-left:15px;
}
</style>
<div class="row" style="vertical-align: middle;">
  <p>
    <img src="/assets/images/buttons/smps_black.svg" 
      class="light-shadow" width="25%" style="display:inline;float:left;margin-right:5%;padding:10px;" />
    The Service Mesh Performance Specification (SMPS) is a vendor-neutral specification for capturing details of:
    
    <ul class="bullet" style="position: relative; left:40px;">
        <li>Environment and infrastructure details</li>
        <ul class="bullet">
            <li>Number and size of nodes, orchestrator</li>
        </ul>
        <li>Service mesh and its configuration</li>
        <li>Service / application details</li>
        <li>Bundled with test results.</li>
    </ul>
  </p>
    <p>SMPS is a collaborative effort of Layer5, Google, and The Linux Foundation.</p>
    <h5 class="l5-dark-grey-text" style="padding-top:25px;text-align: center;font-weight: bold;"><a href="https://github.com/layer5io/service-mesh-performance-specification">Learn more</a> about the Service Mesh Performance Specification.</h5>
    
</div>
</div>

<h3 style="text-align:center;color:aliceblue;"><a href="/projects" alt="Service Mesh Tools" style="color:aliceblue;">Other Projects</a></h3>

{% include collections/projects.html excluded_project="/performance" %}