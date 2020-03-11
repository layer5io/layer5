---
layout: post
title:  "Deploying Linkerd with Meshery"
date:   2020-03-11 08:15:05 +0000
image: /assets/images/posts/2020-03-11-deploying-linkerd-with-meshery/Linkerd-with-Meshery.png
author: Ant Weiss
permalink: /blog/deploying-linkerd-with-meshery
---

It’s no secret that service mesh tech is boiling hot. Microservice architectures brought on as many challenges as they have advantages. With operational complexity being one of the most acute pains. 

Service meshes do offer solutions to a number of these operational concerns. Including but not limited to: resilience, improved observability, security and advanced service discovery.

But with so many mesh options around - how do we choose, evaluate and compare them? And once we’ve chosen a solution - how do we make it accessible to all our engineers?

It is to provide an answer to these questions that the Layer5 community has created Meshery - the open-source Universal Service Mesh Management Plane. 

Meshery already supports a number of leading mesh providers with adapters for additional meshes on the way.

In today’s video I’ll show how to use Meshery for rolling out and evaluating Linkerd. 

Linkerd is a system that comes from the service mesh pioneers - the company called Buoyant.

They were the first to realise the need for a distributed network of smart, centrally configured proxies and coin the term “service mesh” back in 2016. 

Today we’ll be looking at Linkerd2.0 - the second generation of their solution.

Some things that Linkerd is known for:



*   Purpose-built for Kubernetes
*   Featuring custom-built, highly performant proxies written in Rust
*   Zero-config option (works out-of-the-box)
*   Network telemetry built-in (includes a pre-configured, optimised Prometheus instance)
*   Low-overhead control-plane
*   Operational simplicity (when compared to Istio, for example, even though Istio is getting better in this regard)

So what is covered in the video? More or less the following:



*   What service mesh tech allows us to do
*   What a typical service mesh architecture looks like
*   What Layer5 is about (hint - it may surprise you!;))
*   What Meshery is
*   What Linkerd is
*   How easy it is to install Meshery on your PC (be it Linux, Mac or Windows)
    *   All it takes is: 
    
        `curl -L https://git.io/meshery | bash -`
*   How Meshery connects to your Kubernetes cluster
    *   Nothing to be done if it’s in your `kubectl config current-context`
*   How to correctly install and remove Linkerd on your Kubernetes cluster using Meshery
*   How to install one of included Linkerd sample applications and verify the installation

That’s quite a lot of content for a 20 minute clip. In the follow-up videos we’ll dive deeper into many of these concepts. And also show how to use Meshery with other service mesh providers.

This video is also the opening shot of Layer5 brand new [video channel](https://www.youtube.com/playlist?list=PL3A-A6hPO2IN_HSU0pSfijBboiHggs5mC) dedicated specifically to tutorials and webinars. If service mesh tech interests you and you’re willing to learn more about it - make sure to subscribe to the playlist and watch for updates.

And let us know if there’s any specific content you want us to create. Or maybe anything you’ve created yourself and would like to share? Layer5 is all about knowledge sharing and we want to talk to you.

Happy meshing!

[![IMAGE ALT TEXT HERE](https://i.ytimg.com/vi/MXQV-i-Hkf8/hqdefault.jpg)](https://www.youtube.com/watch?v=MXQV-i-Hkf8&list=PL3A-A6hPO2IN_HSU0pSfijBboiHggs5mC)