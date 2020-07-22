---
layout: project
title:  "Service Mesh Interface Conformance"
description: "Layer5 is a prominent maintainer and supporter of SMI, advancing its specifications and delivering conformance tooling through Meshery."
author:
  twitter: layer5
image:
  path: /assets/images/buttons/servicemeshinterface-icon-gray.svg
  width: 1200
thumbnail: /assets/images/buttons/servicemeshinterface-icon-white-trans.svg
lang: en
#permalink: /service-mesh-interface
link: /projects/service-mesh-interface
redirect_from:
  - /SMI
  - /SMI/
  - smi/
---
<div class="row" id="smi">
<div class="center" style="float:right;">
  <img
    src="/assets/images/smi-conformance/checklist.svg"
    width="50%" 
  />
  <h5 style="text-align:center;color:aliceblue;">
    <a style="font-size:.9em;padding-bottom:40px;padding-top:10px;width:300px;" 
      class="waves-effect waves-light btn l5-dark-grey-text darken-2 l5-dark-yellow"
      href="/meshery/#getting-started">Run SMI Conformance</a> 
    </h5>
</div>
  
<h3>Purpose and Overview</h3>

The scope of this initiative includes all service mesh projects participating in the Service Mesh Interface specification. It’s important to acknowledge that conformance consists of both capabilities and compliance status. 

<h4>Project Goals</h4>
<ul>
  <li>Provide users with a compatibility matrix identifying the SMI features that are supported per service mesh.</li>
  <li>An easy-to-use, service mesh and SMI-specific tool to give service mesh projects and users a suite of repeatable conformance tests.</li>
</ul>
<h4>Project Objectives</h4>
<ul>
  <li>Define what it means to be in conformance with the SMI specifications. </li>
  <li>Define a set of conformance tests and  what behavior is expected of a conforming service mesh implementation.</li>
  <li>Built into each participating service mesh project’s release tooling.</li>
</ul>
<h4>Validating Conformance</h4>

Conformance to SMI specifications will be done through use of a service mesh’s workload. A sample application is used as the workload to test. To facilitate a common set of tests, a sample application has been developed for purposes of providing a consistent workload to apply SMI specs against. A deployment of the <a href="https://github.com/layer5io/learn-layer5">Learn Layer5</a> sample application being fitted to each service mesh.

