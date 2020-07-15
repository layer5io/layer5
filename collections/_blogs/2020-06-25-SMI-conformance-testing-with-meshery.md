---
layout: post
title:  "Starting SMI Conformance Testing with Meshery"
date:   2020-06-25 10:30:05 -0530
image: /assets/images/posts/2019-05-21-a-standard-interface-for-service-meshes/smi-logo.png
author: Naveen Kumar
permalink: /blog/smi-conformance-testing-with-meshery
---

<img src="/assets/images/posts/2019-05-21-a-standard-interface-for-service-meshes/smi-logo.png" align="right" width="200px" />

### About SMI

The Service Mesh Interface (SMI) is a specification for service meshes that run on Kubernetes. It utilizes CRDs to modify the behavior of service mesh. The project is under development at [SMI Github Repository](https://github.com/servicemeshinterface/smi-spec). Please visit the github repository page to know latest advancements in the spec. The complete spec is written [here](https://github.com/servicemeshinterface/smi-spec/blob/master/SPEC.md). 

### APIs in SMI 

Currently SMI supports 4 set of APIs:

- [Traffic Specs](https://github.com/servicemeshinterface/smi-spec/blob/master/SPEC.md#traffic-specs) used to define traffic, currently only supports TCP, HTTP traffic.
- [Traffic Access Control](https://github.com/servicemeshinterface/smi-spec/blob/master/SPEC.md#traffic-access-control) used to specify whether a particular form of traffic is allowed or not
- [Traffic Split](https://github.com/servicemeshinterface/smi-spec/blob/master/SPEC.md#traffic-split) used to redirect/divide a request for a resource between 2 or more resources. Useful in canary testing
- [Traffic Metrics](https://github.com/servicemeshinterface/smi-spec/blob/master/SPEC.md#traffic-metrics) used to expose common traffic metrics like p99 in a specific format that can be utilized by single dashboard for all the service meshes.

### About SMI Conformance Tests

***SMI Conformance Tests*** checks whether the service mesh that is installed in the kubernetes cluster, conforms to SMI or not? Does it have the required CRDs? Do these CRDs perform as they should when applied or not applied.
Are we able to get metrics in a proper format? All these questions will be answered by SMI conformance tests.

And the biggest beneifit of mesh conforming to SMI would be that:- Building tools for SMI compatible mesh would be easier, and one time development of the tool would in turn support all the meshes that conforms to SMI.

Sounds fun, right? Well let's dig deeper into the SMI conformance project.

### Meshery'ing with Conformance Tests

**[Meshery](/meshery)** is the **service mesh management plane**, it supports all the popular meshes, how to manage them, apply custom or recommended configuration, tests for checking whether meshes are compatible or not, performing performance tests for mesh and lots more. The SMI conformance testing required performance testing capabiliy, load generation (meshery is about to support distributed load generation as well), and other functionality such that these conformance tests can be easily used in pipeline of all the popular service mesh. Mesheryctl does have a perf command that can be used in pipeline of service meshes, I aim at making such capability for SMI conformance too. 

Ok, I hope by this time you know what SMI is, what SMI conformance mean, how meshery's amazing engineering can be utilized for conformance tests, but there might be questions like how these tests were written, how do we validate the traffic, what tools do we use, let's see everything in the bigger picture.

### The Bigger Picture

Do you know that almost all of the test cases that we would write in this project would be just raw YAML files? To those doing traditional unit and integration tests, this might sound crazy at first, maybe crazier than the Joker in Batman series, but wait we are sane, and hopefully average engineers😛 (we would like to think so).

Presenting an awesome tool for testing all things related to Kubernetes:

#### [kuttl](https://kuttl.dev/) 

kuttl is a tool for testing kubernetes operators using yaml, it can assert whether any kind of resource exist or not in the kubernetes cluster, it can sping up a kind cluster and do lots of awesome stuff. It's entirely declarative. We have a special use case where we wanted to run some go code just after each step in test case was executed, So we forked kuttl and modified it a little. You can see our modified version [here](https://github.com/kanishkarj/kuttl).

We are planning to use kuttl for all the APIs in SMI. We are also planning to use the meshery load generator with the modified version of `kuttl`. 

#### [Learn Layer5](https://github.com/layer5io/learn-layer5/)

Learn Layer5 is a sample app which is very lightweight and simple to deploy. It is a simple sample app for learing about service meshes. We are planning to use the same app for testing for SMI conformance. The sample app is deployed when we test for SMI conformance and traffic is generated from one service/deployment/pod to another.

### [SMI Conformance Repository](https://github.com/layer5io/smi-conformance)

This is where all the test cases along with the code will be placed. Currently there is much overlap in `learn-layer5` and `smi-conformance` testing files, all those changes will be transferred here.

Excited? Please head on to our [Slack](http://slack.layer5.io) and join the #smi channel where everything related to conformance testing is discussed. We would love to hear your feedbacks. Also all the code will remain in [smi-conformance](https://github.com/layer5io/smi-conformance) repository and [Learn Layer5](https://github.com/layer5io/learn-layer5/). Please stay tuned for more blogs related to SMI Conformance and all things meshy!!!

 \-[Naveen Kumar](https://www.linkedin.com/in/nveenjain/)
