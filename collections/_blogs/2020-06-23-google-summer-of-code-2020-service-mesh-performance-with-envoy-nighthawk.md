---
layout: post
title:  "Google Summer of Code 2020: Service Mesh Performance with Envoy Nighthawk"
date:   2020-06-23 10:30:05 -0530
image: /assets/images/posts/2020-06-23-google-summer-of-code-2020-service-mesh-performance-with-envoy-nighthawk/gsoc-wide.png
author: Kush Trivedi
permalink: /blog/google-summer-of-code-2020-service-mesh-performance-with-envoy-nighthawk
---
<div class="center" style="color:gray;position:relative;top:-10px;font-size:1.25em;"><i>One of the greatest learning experience yet.</i></div>

<h4 style="text-transform: uppercase;">How did it all start?</h4>
<img src="/assets/images/posts/2020-06-23-google-summer-of-code-2020-service-mesh-performance-with-envoy-nighthawk/gsoc.png" align="right" />
<p style="margin-left:.5em;">
I was introduced to the Layer5 community by our very own Lee Calcote, and since then I have been exploring the vast world of service meshes and their performance characteristics.
In the pre-GSoC phase, I had been working with the Layer5 community as an active contributor, exploring various new DevOps tooling like service meshes, sidecar concept and benchmarking of services. I have had a run-in with the Kubernetes community before and initially believed Kubernetes to be the final stage of DevOps, but I was happily surprised when I found out that the kubernetes’ end merely marked the entry point to a whole new world of service meshes.
</p>
<p style="margin-left:.5em;">
And so, we reach the beginning of my GSoC 2020 journey, which began on the night of May 3rd, 2020 when I learned that I had been selected as a GSoC Participant with the Cloud Native Computing Foundation (CNCF). Admittedly, I had tried my best an year ago to get into GSoC’19 with another organisation but due to reasons only Google can tell you, I was not accepted. Everything happens for a reason though, right?
Six months ago, if you would have told me that I would be working with service meshes, gRPC, load testing, performance benchmarking alongside prominent members of the open-source world of Cloud Native, I would have ignored you with the least possible amount of prudence I could muster.
</p>

<h4 style="text-transform: uppercase;">What is my project about?</h4>
<p style="margin-left:.5em;">
My GSoC project is to <strong>Enable Distributed Load Testing for various Service Mesh Planes using Envoy Nighthawk</strong>. For those who are not familiar with <a href="https://github.com/envoyproxy/nighthawk"><strong>Nighthawk</strong></a>, it is a performance benchmark tool written and maintained by the Envoy community. We are in the process of incorporating Nighthawk into <strong>Meshery</strong> - <i>the service mesh management plane</i>.<a href="https://github.com/layer5io/meshery"> <strong>Meshery</strong></a> already supports performance testing of service meshes using fortio & wrk2 as of now, it is maintained by layer5 community & is also a member of CNCF Landscape. For what it is worth, we are also working on <a href="https://github.com/layer5io/service-mesh-performance-specification"><strong>Service Mesh Performance Specification</strong></a> which is another initiative of the Layer5 community to establish a common format for describing and capturing performance benchmark tests and results.
</p>
<p style="margin-left:.5em;">
It has  been a month since I have started my GSoC’20 tenure with the Layer5 community, and in this month, I have learned a lot  from my code contributions. I began with setting up the project roadmap & discussing the potential use-cases of nighthawk with its maintainers during my community bonding period. I came to know some incredible people during the community bonding from big tech giants like Google, Facebook, Microsoft, Affirmed Networks, Solarwinds and many more to list. Before incorporating nighthawk we had to make various enhancements in Meshery, like setting up the performance UI, specifying SMPS format for exporting and importing of load-test preferences, load-generator interface and more.
</p>
<p style="margin-left:.5em;">
During the GSoC period, I have learned a hoard of new things, like gRPC services and how they communicate using protocol buffers, load generation using <b>fortio</b>, writing handlers for various endpoints using golang, and some frontend architecture with next.js.
</p>


<h4 style="text-transform: uppercase;">About the community</h4>
<p style="margin-left:.5em;">
Layer5 has one of the healthiest open source communities that I have ever worked with. In the past, I have worked with a variety of well-maintained and large scale open source communities but I have never experienced a more welcoming & nurturing environment than Layer5. At Layer5, we respect each contributor and their contributions, whether it is a new adapter or just a typo fix. If you can contribute, you’re welcome. It’s that simple! With many awesome initiatives like SMPS, Distributed Load Testing, Performance Benchmarking, the exponential increase of Layer5 and its various projects is inevitable.  
</p>

\-- Kush Trivedi

_**P.S.: If these topics excite you and you want to explore the beautiful realm of service meshes, come and say "Hi" on our [Slack Channel](http://slack.layer5.io) and one of us will reach out to you!**_
