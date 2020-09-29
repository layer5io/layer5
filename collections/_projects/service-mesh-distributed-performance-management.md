---
layout: project
title:  "Distributed Performance Management of Service Meshes"
description: "Layer5 is an industry leader in the management of service meshes and their workloads.
In collaboration with Google, Layer5 is advancing the state of the industry through novel projects like that of distributed performance management."
author:
  twitter: layer5
image:
  path: /assets/projects/distributed-performance/distributed-performance_white.svg
  width: 1200
thumbnail: /assets/projects/distributed-performance/distributed-performance_white.svg
lang: en
permalink:
link: /projects/service-mesh-distributed-performance-management
redirect_from: distributed-performance

---
<img src="/assets/projects/distributed-performance/distributed-performance_green.svg" 
  style="float:left; width:30%;margin-right:15px;margin-bottom:15px;" />

<h3>Purpose and Overview</h3>

Distributed load testing offers insight into system behaviors that arguably more accurately represent real world behaviors of services under load as that load comes from any number of sources. 

<h4>Project Aim</h4>

The main aim of this project is to enhance the current load generation and analysis technique of Nighthawk to include distributed load testing which may ultimately benefit the meshery to directly adopt the distributed load generation.

<h4>Project Goals</h4>
<ul>
  <li>Identifying the use-cases of Nighthawk. Working with the nighthawk team to successfully enable distributed load generation in nighthawk..</li>
  <li>Integrating the Nighthawk into the Meshery server and improving the load handling for Nighthawk using the same.</li>
  <li>Handling of the report and displaying mechanisms at the client-side.</li>
  <li>Testing & Debugging the Load Generator & finishing the implementation on Nighthawk.
</li>
</ul>
<h4>Need for the Project</h4>

<img src="/assets/projects/distributed-performance/envoy-stacked-color.svg"
  align="right" style="width:30%;margin-left:10px;" />
  
  Currently, Meshery which is a multi-service mesh management plane which can operate & adapt to various different service meshes only supports a single way load testing. Understanding the need to support a variety of performance testing scenarios, Meshery has been equipped with a load generator interface as a point of extensibility to support the use of different load generators (see <a href="https://meshery.layer5.io/docs/extensibility">Meshery Extensibility</a> documentation). Meshery Load Generation currently has been equipped with support for both wrk2 and fortio, neither of which support distributed load testing.



<h4>Why NightHawk</h4>

Nighthawk is a versatile HTTP load testing tool built out of a need to drill HTTP services with a constant request rate. It can be used both as a command-line utility and a library.

<h4>Contributors</h4>

This project is being developed by Kush Trivedi as a Google Summer of Code project with the CNCF and in collaboration with Layer5 and Google.

<strong>
<a href="https://docs.google.com/document/d/1_hhQ5w1iLClgf7RvboI6il-eMKKAVPwz50GHm2VN4Bg/edit#">Here</a> is the design document for invoking distributed load generation & performance benchmarking using nighthawk.
</strong>

<div class="row">
  <div class="col s12 m6" style=" display: flex; height: auto; flex-direction: column;
    flex-flow: column; vertical-align: top; text-align: center;
    position: relative; margin: auto">
  <iframe 
    src="https://docs.google.com/presentation/d/e/2PACX-1vSWhREOZIfJqTG8jHtitgb5e-OAHC7E8EMmoVCaTRmC8b_itHkeFUNKcBVn9oaTpX5ozYvlhscvBXiK/embed?start=false&loop=false&delayms=3000" 
    frameborder="0" width="100%" height="320" allowfullscreen="true" mozallowfullscreen="true" 
    webkitallowfullscreen="true"></iframe>
    <p><i>Participate in the CNCF Service Mesh Working Group</i></p>  
  </div>
</div>

<h5 class="l5-dark-grey-text" style="padding-top:25px;text-align: center;font-weight: bold;">
  Jump into the <a href="http://slack.layer5.io">#performance </a>channel to learn more about this initative.
</h5>

