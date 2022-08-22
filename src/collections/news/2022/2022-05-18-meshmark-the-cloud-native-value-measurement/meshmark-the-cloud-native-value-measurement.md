---
title: "MeshMark: the Cloud Native Value Measurement"
subtitle: "An open index for measuring performance of cloud native infrastructure in context of the value provided to your business."
date: 2022-05-17 08:00:00 -0530
author: The Newsroom
thumbnail: ../../../../assets/images/meshmark/stacked/meshmark-dark-full.png
darkthumbnail: ../../../../assets/images/meshmark/stacked/meshmark-dark-full.png
category: "Press Release"
presskit: "/press/kits/MeshMark-press-kit.zip"
description: "Layer5, a provider of cloud native management software, announced today the general availability of the Meshery Docker Extension. Complementing Docker Desktop's role as the go-to Kubernetes environment for cloud native developers, the Meshery Docker Extension provides easy access to the next layer of cloud native infrastructure: service meshes. As an inaugural Docker Extensions Partner and a maker of industry-defining, cloud native software, Layer5’s integration of Meshery provides a visual pathway for existing Docker Compose applications to move into Kubernetes and onto any service mesh."
tags:
 - Announcements
 - Meshery
 - Docker
type: News
resource: false
published: true
---
import { Link } from "gatsby";
import Formula from "./MeshMark-Formula.png";
import MeshmapMeshmark from "./meshmark-score.png";
import { NewsWrapper } from "../../News.style.js";
import Blockquote from "../../../../reusecore/Blockquote";
import BlockquoteAlt from "../../../../reusecore/Blockquote/Blockquote-alt-style";

<NewsWrapper>
<p>
VALENCIA, Spain (May 17th, 2022) - ServiceMeshCon EU /KubeCon EU - <a href="https://smp-spec.io/meshmark">MeshMark</a> is a performance index that measures the <i>value</i> and <i>overhead</i> of your cloud native environment. By converting performance measurements into insights about the value of individual, cloud native application networking functions, MeshMark distills a variety of overhead signals and key performance indicators into a simple index to facilitate quick and common comprehension.
</p>

<BlockquoteAlt 
  className="pull-right"
  quote="Performance measurement data rarely provides a clear and simple picture of how well our applications are performing from a business point of view, which are so often the key efficiency indicators that we really need"
  person="Ken Owens"
  title="Vice President Cyber Cloud Security Engineering at Fiserv"
  />

<p>
A wall of performance metrics causes confusion, not clarity.
</p>

<img src={MeshmapMeshmark} alt="MeshMark in Layer5 MeshMap" width="40%"/>

<p>
By specifying a uniform way to analyze and report on the degree to which measured performance provides business value, MeshMark converts these metrics into insights about the efficiency and value of the functions your cloud native infrastructure is providing to your applications and services.
</p>

<h2>Service Mesh Performance, the project</h2>
<p>
<Link to="/company/news/cncf-adopts-service-mesh-performance-standard-established-by-layer5">Adopted by the Cloud Native Computing Foundation (CNCF)</Link> in October of 2021, <Link to="/projects/service-mesh-performance">Service Mesh Performance</Link> is an open source standard for service mesh efficiency, a growing consideration for cloud native operators and developers utilizing a service mesh in their infrastructure. With the myriad service meshes available and their sophisticated configurations, distributed systems efficacy and performance management is a continuous concern.
</p>

<Blockquote 
  quote="Many cloud native adopters have been put off from using service mesh due to the extra resource consumption and complexity that it can involve. We welcome MeshMark as an objective measure of that overhead, to help drive efficiency and make it easier for users to compare service mesh options."
  person="Liz Rice"
  title="Chief Open Source Officer, Isovalent and Emeritus Chair of the CNCF’s TOC" 
  />

<p>
With project maintainers from Layer5, Intel, HashiCorp, and Red Hat, and collaborators from Isovalent, Buoyant, and FiServ, Service Mesh Performance is a vendor neutral cloud native performance measurement standard.
</p>

<BlockquoteAlt
  quote="While speed is one of Linkerd's core competitive advantages, Linkerd provides much more than just an ultrafast data plane. We are pleased to support MeshMark's establishment of a higher order set of functional considerations that incorporate value into the performance equation."
  person="William Morgan"
  title="CEO of Buoyant and one of the creators of Linkerd" 
  />

<p>
With the project’s <Link to="/company/news/analyzing-service-mesh-performance">approach to performance analysis</Link> published in IEEE The Bridge, ongoing analysis of nearly 40,000 performance test results will comprise the initial release of the <a href="https://smp-spec.io/dashboard">Service Mesh Performance Dashboard</a>, also unveiling at KubeCon EU. <Link to="/cloud-native-management/meshery">Meshery</Link>, the cloud native manager, orchestrates the provisioning and configuration of Kubernetes and each service mesh. With <Link to="projects/nighthawk">Nighthawk</Link> embedded, Meshery’s performance management functions are what drives the tests run within the CNCF Lab.
</p>
<Blockquote style="display:block;"
  quote="The precision by which performance measurements are generated and analyzed is a pinnacle focus of Nighthawk. Mesh performance characterization should be distilled from a set of value measurements, and that is where MeshMark compliments to create the ultimate comprehensive efficiency calculation."
  person="Otto van der Schaaf"
  title="Principal Engineer at Red Hat" 
  />

<h2>MeshMark, the formula</h2>
<Blockquote className="pull-right"
  quote="Are my resources utilized as best as possible? Why am I not getting the SLO met with 4 resources when I only needed 1 resource without the service mesh? How can I improve my 99.9% latencies or can I map my service policy to utilization? Is the network a performance hog, or storage, or cache? MeshMark will model and provide an index in answer to such questions."
  person="Mrittika Ganguli"
  title="Principal Engineer & Director Cloud Native Network Pathfinding"
  />  
<p>
MeshMark functions as a value performance index (a scale) to provide organizations the ability to weigh the value of their service mesh versus the overhead of their service mesh and assess whether they are getting out of the mesh what they are “paying” for in it. MeshMark’s scoring system ranges from 0 to 100 and incorporates collections of resource utilization efficiency calculations, categorized into similar consumption classes.
</p>

<img src={Formula} alt="MeshMark Formula" />
<p>
A Mesh Utilization Efficiency (MUE) is a calculated, combined ratio of specific infrastructure resource utilizations to assigned resources to cloud native infrastructure.
</p>

<BlockquoteAlt 
  quote="A sophisticated, but simply communicated value-performance index, MeshMark, redefines efficiency utilization, bringing business, application, and infrastructure KPIs under a single unit of measure."
  person="Lee Calcote"
  title="Founder and CEO of Layer5, and Co-Chair of the CNCF TAG Network"
  />

<p>
Learn how we distill a variety of microarchitecture performance signals and application key performance indicators into a simple measurement scale. Join the open source effort and explore the other side of the performance measurement coin: <i>value measurement</i>.
</p>
<div>
<iframe width="100%" height="315" style="margin-right: 1.5rem;margin-left:1.5rem;" src="https://www.youtube.com/embed/yvqn6ckO7BI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<p style="font-style:italic;font-size:1rem;margin-left:1rem;">MeshMark in Meshery (an excerpt from ServiceMeshCon EU 2022 demo)</p>
</div>

#### Resources
<ul>
<li>Attend <Link to="/community/events/servicemeshcon-eu-2022">MeshMark: the Cloud Native Value Measurement</Link> presentation at ServiceMeshCon EU 2022.</li>
<li>Attend <Link to="/community/events/kubecon-cloudnativecon-eu-virtual-2022">CNCF Tag Network and Service Mesh Working Group Deep Dive</Link> at KubeCon EU 2022. </li>
<li>Subscribe to the <a href="https://smp-spec.io/subscribe">project newsletter</a> and engage in the <a href="https://discuss.layer5.io/">discussion forum</a>.</li>
<li>Learn more about <a href="https://smp-spec.io/meshmark">MeshMark</a> on the <a href="https://smp-spec.io">Service Mesh Performance</a> website.</li>
<li>Follow <a href="https://twitter.com/smp_spec">@smp_spec</a>, <a href="https://twitter.com/mesheryio">@mesheryio</a>, <a href="https://twitter.com/layer5">@layer5</a> on Twitter.</li>
</ul>

##### About Layer5, Inc.
<p style="font-size:1rem">
Layer5 offers cloud native application management by harnessing the unique position service meshes have in changing how developers write applications, how operators run modern infrastructure and how product owners manage their service offerings. For more information, visit <Link to="/">layer5.io</Link></p>

##### About Service Mesh Performance 
<p style="font-size:1rem">
Hosted within the CNCF, <Link to="/projects/service-mesh-performance">Service Mesh Performance</Link> is a vendor-neutral cloud native performance measurement standard. Based on SMP, MeshMark provides a universal performance index to gauge your cloud native infrastructure’s efficiency and value. Visit <a href="https://smp-spec.io/">smp-spec.io</a></p>


</NewsWrapper>