---
layout: post
title:  "Performance benchmarking using Nighthawk and Meshery"
date:   2020-09-19 10:30:05 -0530
image: /assets/images/posts/2020-06-23-google-summer-of-code-2020-service-mesh-performance-with-envoy-nighthawk/gsoc-wide.png
author: Kush Trivedi
permalink: /blog/performance-benchmarking-using-nighthawk-and-meshery
---

<div class="center" style="color:gray;position:relative;top:-10px;font-size:1.25em;"><i>Google Summer of Code 2020 Project</i></div>

<h4>What is performance benchmarking and Why should I care?</h4>

Many of you may remember HBO streaming service crashed when the final season of Game of Thrones went live on the service. The streaming service and the website was not able to engage all the user requests and was not robust which ultimately resulted in DoS (Denial of Service). There are many examples of service crashes from time to time which makes us look into performance benchmarking and makes one to care about the product's performance before it is launched in the market.

There are several advantages of early benchmarking of the services which may enhance the reponse time of services, may resolve glitches, can enhance the application's robustness, and bring stability and dependability within an application.

There are several tools for performance benchmarking out of which one of the most important is load generators and benchmarks. Some of the well-known load generators in cloud-native realm :
- Fortio
- Wrk2/Wrk
- Vegeta
and then there is **Nighthawk**

To sum it all up, there is **Meshery**, service mesh management plane with ability to generate load and benchmark service in/out of the service mesh using Fortio, Wrk2 and now, Nighthawk too.


<h4> Meshery + Nighthawk = Robust Distributed and Scalable Services </h4>


Nighthawk, written and maintained by Envoy Community is a L7 (HTTP/HTTPS/HTTP2) performance characterization tool which supports performance benchmarking using HTTP  or gRPC service.

Nighthawk is built using open-source build and test tool Bazel and supports output formatting to well-known formats, allowing integration with other systems and dashboards. To add more to the list, it is going to soon support distribute performance benchmarking which is under active development.

On the other hand, Meshery, written and maintainer by Layer5 Community is the multi-service mesh management plane offering lifecycle, configuration and performance management of service meshes and their workloads. With Meshery,
not only you can manage your service-meshes lifecycle but can also benchmark them with industry grade tools to let you know how much under and over utilised your services are.

Soon, Meshery is going to be a canonical implementation for [Service Mesh Performance Specification](https://github.com/layer5io/service-mesh-performance) which is a common and standardised format to describe :
- Performance test configuration
- Service mesh configuration
- Environment configuration
- Workload configuration
- Performance test results


<h4> How did we achieve it ?</h4>


The following project was proposed as a Google Summer of Code Idea, I was selected as a student mentee to draft the design, architecture and code my way from scratch. On my journey, I received guidance from some amazing mentors, colleagues and open-source stake holders. I discussed the design proposal with Envoy Team as well as Layer5 Team and from suggestions from both, I was able to complete my project.

To sum it all, I deduce the idea to invoke Nighthawk as an seperate container with which Meshery will communicate using a go-lang based middleware.

Yes, the project was a huge success and now Nighthawk is invoked as a load-generator in Meshery. Soon the public release for the new version will be made and then you will be able to use Nighthawk as a performance-benchamark tool alongside with Fortio and Wrk2.


<h4> What's next? </h4>


This is just a milestone in the long-road journey, there are many more milestones which we need to achieve. Following are the few projects which will be completed in upcoming months 
- Invoke Nighthawk as an gRPC Service and support gRPC connection between Nighthawk & Meshery.
- Implement user-profiles for performance benchmarking which may store some preset preferred values according to users.
- Enhance Nighthawk to support distributed load generation and performance benchmarking.
- NATS & gRPC Performance Benchmarking for gRPC and NATS services invoked in Meshery.

and many more awesome and bleeding-edge ideas.


<h4> About me </h4>


I am senior year undergraduate at Indian Institute of Technology (IIT), Jodhpur from Indore, India. In addition to my obligations as an Undergraduate in Computer Science, I have been involved in a plethora of open-source projects and have contributed to various OSS organizations like Cloud Native Computing Foundation (CNCF), FOSSAsia, OpenRefine and Layer5, having gotten an opportunity to intern at CNCF (via the Google Summer of Code – GSoC program). My recent industry experience was at GoJek as a product engineering intern, and have held a previous internship position at FOSSAsia as well. I also had the privilege to mentored pre-university students during Google Code-In 2019 for TensorFlow & FOSSAsia.


<h4> How can I get involved? </h4>

If any of this sounds remotely exciting, I implore you to give this a chance. You won’t regret it.
Head over to our [Slack Channel](http://slack.layer5.io) and join the #performance channel where everything related to performance testing is discussed. We would love to hear your feedback. Stay tuned for more blogs related to Performance Benchmarking, SMI Conformance and all things meshy!!!
