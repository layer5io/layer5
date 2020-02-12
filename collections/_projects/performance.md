---
layout: project
title:  "Service Mesh Performance Specification"
#link: 
link: /performance
permalink: performance
image: /assets/images/buttons/smps.svg
excerpt: "Measuring and indexing the performance and value of service mesh deployments."
---
<style>
ul.bullet li {
  list-style-type: circle;
  margin-left:25px;
}
ul.bullet ul {
  margin-left:25px;
}
ul.bullet li ul {
  list-style-type: circle;
  margin-left:15px;
  indent: 25px;
}
</style>
<div class="row" style="vertical-align: middle;" >
    <div class="col m8" width="100%" height="100%" style="display:inline;float:left;">
        <img src="{{ page.image }}" 
            class="light-shadow" width="25%" style="filter: invert(60%); display:inline;float:left;margin-right:25px;padding:10px;" />
    </div>
    <div class="col m12" style="float:left;position:relative;display:inline;">
            The Service Mesh Performance Specification (SMPS) is a vendor-neutral specification for capturing details of:
        <ul class="bullet">
            <li>Environment and infrastructure details</li>
            <ul class="bullet">
                <li>Number and size of nodes, orchestrator</li>
            </ul>
            <li>Service mesh and its configuration</li>
            <li>Service / application details</li>
            <li>Bundled with test results.</li>
        </ul>
        <a href="https://github.com/layer5io/service-mesh-performance-specification">Learn more</a> about the Service Mesh Performance Specification.
    </div>
</div>