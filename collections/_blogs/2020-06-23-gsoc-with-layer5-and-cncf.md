---
layout: post
title:  "Google Summer of Code 2020 with Layer5 and CNCF"
date:   2020-06-23 10:30:05 -0530
image: /assets/images/posts/2020-06-23-gsoc-with-layer5-and-cncf/gsoc.png
author: Kush Trivedi
#permalink: /blog/gsoc-with-layer5-and-cncf
---
<div class="center" style="color:gray;position:relative;top:-10px;font-size:1.25em;"><i>One of the greatest learning experience yet.</i></div>

<h4 style="text-transform: uppercase;">How it all started ?</h4>
<img src="/assets/images/posts/2020-06-23-gsoc-with-layer5-and-cncf/gsoc.png" align="right" />
<p style="margin-left:.5em;">
I was introduced to the Layer5 community by our very own Lee Calcote, and since then I have been exploring the vast world of service meshes, and their performance specs. Before my acceptance into GSoC while working with Layer5 community, I had explored various new DevOps tooling like service meshes, sidecar concept & benchmarking of services. I was involved with kubernetes community before & thought Kubernetes is the final stage of DevOps, but to my surprise where the kubernetes ends the concept of service meshes starts.
</p>
<p style="margin-left:.5em;">
So it was the night of May 3rd, 2020 when I came to know that I have been selected as a GSoC Participant with the CNCF. If I’m being honest, I’ll say that I tried my best to get into GSoC’19 with another organisation, but I was not accepted that year. Everything happens for a reason, though, right? 6 months ago, if you would have told me that I would be working with service meshes, gRPC, load testing, performance benchmarking alongside prominent members of the open-source world of Cloud Native, I would have dismissed any such suggestion and simply ignored you. 
</p>

<h4 style="text-transform: uppercase;">What my project is about?</h4>
<p style="margin-left:.5em;">
My GSoC project is to <strong>Enable Distributed Load Testing for various Service Mesh Planes using Envoy Nighthawk</strong>. For those who are not familiar with <a href="https://github.com/envoyproxy/nighthawk"><strong>Nighthawk</strong></a>, it is a performance benchmark tool written and maintained by the Envoy community. We are in the process of incorporating Nighthawk into <strong>Meshery</strong> - <i>the service mesh management plane</i>.<a href="https://github.com/layer5io/meshery"> <strong>Meshery</strong></a> already supports performance testing of service meshes using fortio & wrk2 as of now, it is maintained by layer5 community & is also a member of CNCF Landscape. For what it is worth, we are also working on <a href="https://github.com/layer5io/service-mesh-performance-specification"><strong>Service Mesh Performance Specification</strong></a> which is another initiative of the Layer5 community to establish a common format for describing and capturing performance benchmark tests and results.
</p>
<p style="margin-left:.5em;">
It has already been a month since I am working with the Layer5 community, and in this month I have learned a lot of new stuff from my code contributions. I began with setting up the project roadmap & discussing the potential use-cases of nighthawk with its maintainers during my community bonding period. I came to know some awesome people during the community bonding from big tech giants like Google, Facebook, Microsoft, Affirmed Networks, Solarwinds and many more to list. Before incorporating nighthawk we had to make various enhancements in Meshery, like setting up performance-UI, specifying SMPS format for exporting/importing of load-test preferences, load-generator interface and more.
</p>
<p style="margin-left:.5em;">
During the GSoC period, I have learned many new kinds of stuff like gRPC services & how they communicate using protocol buffers, load generation using fortio, writing handlers for various endpoints using golang, and some frontend architecture with next.js.
</p>


<h4 style="text-transform: uppercase;">About the community</h4>
<p style="margin-left:.5em;">
Coming to the community, it is one of the healthiest communities I have ever worked with. In the past, I was involved with various famous open source communities but I have never experienced a more welcoming & nurturing environment than Layer5. At Layer5, we respect each contributor and it’s contributions whether it is just a typo fix, with many awesome initiatives like SMPS, Distributed Load Testing, Performance Benchmarking, it is not quite long that Layer5 & it’s project will grow exponentially.
</p>

\-- Kush Trivedi

_**P.S.: If these topics excite you and you want to explore the beautiful realm of service meshes, come to say "hi" in our [Slack](http://slack.layer5.io) and one of us will reach out to you!**_

