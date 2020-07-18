---
layout: project
title:  "Distributed Performance Management of Service Meshes"
description: "Layer5 is an industry leader in the management of service meshes and their workloads.
In collaboration with Google, Layer5 is advancing the state of the industry through novel projects like that of distributed performance management."
author:
  twitter: layer5
image:
  path: /assets/images/buttons/load.png
  width: 1200
thumbnail: /assets/images/buttons/load.png
lang: en
permalink:
link: /service-mesh-distributed-performance-management
redirect_from: distributed-performance

---
<div class="row" id="smi" >
  <div class="col m8">
    <h3>
      Purpose and Overview
    </h3>
    <p>Distributed load testing offers insight into system behaviors that arguably more accurately represent real world behaviors of services under load as that load comes from any number of sources. This project is being developed by Kush Trivedi as a part of Google Summer of Code intern with CNCF and Layer5.
    </p>
    <h4>Project Aim</h4>
    <p>The main aim of this project is to enhance the current load generation and analysis technique of Nighthawk to include distributed load testing which may ultimately benefit the meshery to directly adopt the distributed load generation. </p>
    <h4>Project Goals</h4>
    <ul>
      <li>Identifying the use-cases of Nighthawk. Working with the nighthawk team to successfully enable distributed load generation in nighthawk..</li>
      <li>Integrating the Nighthawk into the Meshery server and improving the load handling for Nighthawk using the same.</li>
      <li>Handling of the report and displaying mechanisms at the client-side.</li>
      <li>Testing & Debugging the Load Generator & finishing the implementation on Nighthawk.
</li>
    </ul>
    <h4>Need for the Project
    </h4>
    <p>Currently, Meshery which is a multi-service mesh management plane which can operate & adapt to various different service meshes only supports a single way load testing. Understanding the need to support a variety of performance testing scenarios, Meshery has been equipped with a load generator interface as a point of extensibility to support the use of different load generators (see <a href="https://meshery.layer5.io/docs/extensibility">Meshery Extensibility</a> documentation). Meshery Load Generation currently has been equipped with support for both wrk2 and fortio, neither of which support distributed load testing.</p>
    <h4>Why NightHawk</h4>
    <p>Nighthawk is a versatile HTTP load testing tool built out of a need to drill HTTP services with a constant request rate. It can be used both as a command-line utility and a library. </p>
  </div>
  <div class="col m4">
    <img src="/assets/images/layer5/layer5.svg">
    <img src="/assets/images/envoy.png" width="90%">
  </div>
</div>
