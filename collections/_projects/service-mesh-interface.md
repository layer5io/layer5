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
<div class="row">
    <div class="col s12 m6">
        <div style="z-index: 1;">
        <h4 style="text-align:center;">Adhering to service mesh standards</h4>

<h5 style="text-align:center; color:aliceblue;">
    <a style="font-size:.9em;padding-bottom:40px;padding-top:10px;width:300px;margin:10px;"
      class="waves-effect waves-light btn l5-dark-grey-text darken-2 l5-dark-yellow"
      href="/meshery/#getting-started">Run SMI Conformance</a>
  </h5>
  <h5 style="text-align:center; color:aliceblue;">
    <a style="font-size:.9em;padding-bottom:40px;padding-top:10px;width:300px;margin:10px;"
      class="waves-effect waves-light btn l5-dark-grey-text darken-2 l5-dark-yellow"
      href="https://docs.google.com/document/d/1HL8Sk7NSLLj-9PRqoHYVIGyU6fZxUQFotrxbmfFtjwc/edit#heading=h.rkzc80m1a5sr"> Design Specifications</a>
  </h5>
    </div>
  </div>
    <div class="col s12 m6">
        <div style="z-index: 1;">
            <div class="card-content" style="margin-bottom: 0px;">
                <h4 style="text-align:center;">Why does conformance matter?</h4>
        <p>In order to confidently operate a service mesh without locking into the specific service mesh's APIs, you will adopt SMI. How do you know if the service mesh you are using is SMI compatible, though?
        </p>
      </div>
    </div>
  </div>
</div>

The scope of this initiative includes all service mesh projects participating in the Service Mesh Interface specification. It’s important to acknowledge that conformance consists of both capabilities and compliance status.
<h5 class="black-text">Goals</h5>

<ul>
  <li>Provide users with a compatibility matrix identifying the SMI features that are supported per service mesh.</li>
  <li>An easy-to-use, service mesh and SMI-specific tool to give service mesh projects and users a suite of repeatable conformance tests.</li>
</ul>
<img
    src="/assets/images/smi-conformance/checklist.svg"
    width="30%" align="right" />

<h5 class="black-text">Objectives</h5>

<ul>
  <li>Define what it means to be in conformance with the SMI specifications. </li>
  <li>Define a set of conformance tests and  what behavior is expected of a conforming service mesh implementation.</li>
  <li>Built into each participating service mesh project’s release tooling.</li>
</ul>

<h4>How conformance is verfied</h4>
<p>Conformance to SMI specifications will be done through use of a service mesh’s workload. A sample application is used as the workload to test. To facilitate a common set of tests, a sample application has been developed for purposes of providing a consistent workload to apply SMI specs against. A deployment of the <a href="https://github.com/layer5io/learn-layer5">Learn Layer5</a> sample application being fitted to each service mesh.</p>

Learn more about how Meshery validates Istio, Linkerd, Consul, Maesh, and Kuma's conformance to SMI. 

- <a href="https://layer5.io/blog/community/communitybridge-2020-teaching-service-meshes-to-be-compliant">CommunityBridge 2020: Teaching service meshes to be compliant</a>
- <a href="https://layer5.io/blog/community/SMI-conformance-testing-with-meshery">Starting SMI Conformance Testing with Meshery</a>
