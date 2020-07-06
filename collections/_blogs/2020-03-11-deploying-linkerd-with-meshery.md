---
layout: post
title:  "Deploying Linkerd with Meshery"
date:   2020-03-11 08:15:05 +0000
image: /assets/images/posts/2020-03-11-deploying-linkerd-with-meshery/Linkerd-with-Meshery.png
author: Ant Weiss
permalink: /blog/deploying-linkerd-with-meshery
---
<style>ul, li { list-style-type: circle; }
</style>

<span class="starting-letter">I</span>t’s no secret that service mesh tech is boiling hot. Microservice architectures brought on as many challenges as they have advantages. With operational complexity being one of the most acute pains. Service meshes do offer solutions to a number of these operational concerns. Including but not limited to: resilience, improved observability, security and advanced service discovery.
<div class="row">
  <div class="col m8">

<iframe width="100%" src="https://www.youtube.com/embed/MXQV-i-Hkf8" frameborder="0" 
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
    style="min-height: 315px; min-width: 280px; 
    "></iframe>
</div>
But with so many mesh options around - how do we choose, evaluate and compare them? And once we’ve chosen a solution - how do we make it accessible to all our engineers? It is to provide an answer to these questions that the Layer5 community has created <a href="/meshery">Meshery</a>, the open-source, service mesh management plane. Meshery already supports a number of leading mesh providers with adapters for additional meshes on the way. In today’s video, I’ll show how to use Meshery for rolling out and evaluating Linkerd.

 Linkerd is a system that comes from the service mesh pioneers - the company called Buoyant. They were the first to realise the need for a distributed network of smart, centrally configured proxies and coin the term “service mesh” back in 2016. Today, we’ll be looking at Linkerd 2.x - the second generation of this now CNCF project.
</div>
<div class="text editable pull-right table-2">
<h5 class="black-text">Meshery Adapters</h5>
    <table class="adapters">
        <thead class="hidden">
            <th>Status</th>
            <th>Adapter</th>
        </thead>
        <tbody>
        <tr>
            <td rowspan="7" class="stable-adapters">stable</td>
        </tr>
        <tr>
            <td><a href="https://github.com/layer5io/meshery-istio">
                <img src='/assets/images/posts/2020-03-11-deploying-linkerd-with-meshery/istio.svg' alt='Istio Service Mesh adapter' class="adapter-logo">Meshery adapter for Istio</a> 
            </td>
        </tr>
        <tr>
            <td><a href="https://github.com/layer5io/meshery-linkerd">
                <img src='/assets/images/posts/2020-03-11-deploying-linkerd-with-meshery/linkerd.svg' alt='Linkerd' class="adapter-logo">Meshery adapter for Linkerd</a> 
            </td>
        </tr>
        <tr>
            <td><a href="https://github.com/layer5io/meshery-consul">
                <img src='/assets/images/posts/2020-03-11-deploying-linkerd-with-meshery/consul.svg' alt='Consul Connect' class="adapter-logo">Meshery adapter for Consul</a>
            </td>
        </tr>
        <tr>
            <td><a href="https://github.com/layer5io/meshery-octarine">
                <img width="30px" src='/assets/images/posts/2020-03-11-deploying-linkerd-with-meshery/octarine.svg' alt='Octarine Service Mesh' class="adapter-logo">Meshery adapter for Octarine</a> 
            </td>
        </tr>
        <tr>
            <td><a href="https://github.com/layer5io/meshery-nsm">
                <img src='/assets/images/posts/2020-03-11-deploying-linkerd-with-meshery/nsm.svg' alt='Network Mesh' class="adapter-logo">Meshery adapter for Network Service Mesh</a>
            </td>
        </tr>
        <tr><td class="stable-adapters"></td></tr>
        <tr>
            <td rowspan="2" class="beta-adapters">beta</td>
            <td><a href="https://github.com/layer5io/meshery-cpx">
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQksHj15DkID308qQw3cmkQrRULPxyzbVquSZVev-9dj1L6sPs-rQ&s' alt='Citrix CPX Service Mesh' class="adapter-logo">Meshery adapter for Citrix CPX</a>
            </td>
        </tr>
        <tr><td class="beta-adapters"></td></tr>
        <tr>
            <td rowspan="6" class="alpha-adapters">alpha</td>
        </tr>
        <tr>
            <td><a href="https://github.com/layer5io/meshery-maesh">
                <img src='https://raw.githubusercontent.com/containous/maesh/master/docs/content/assets/img/maesh.png' alt='Maesh Service Mesh' class="adapter-logo">Meshery adapter for Maesh</a>
            </td>
        </tr>
        <tr>
            <td><a href="https://github.com/layer5io/meshery-app-mesh">
                <img src='/assets/images/posts/2020-03-11-deploying-linkerd-with-meshery/aws-app-mesh.png' alt='AWS App Mesh Service Mesh' class="adapter-logo">Meshery adapter for App Mesh </a>
            </td>
        </tr>
        <tr>
            <td><a href="https://github.com/layer5io/meshery-kuma">
                <img src='https://pbs.twimg.com/profile_images/1171109603158843392/bV2M7l39_400x400.jpg' alt='Kuma Service Mesh' class="adapter-logo">Meshery adapter for Kuma</a>
            </td>
        </tr><tr>
        </tr>
        <tr><td class="alpha-adapters"></td></tr>
        </tbody>
    </table>
</div>

Some things that Linkerd is known for:

<li>Purpose-built for Kubernetes</li>
<li>Featuring custom-built, highly performant proxies written in Rust</li>
<li>Zero-config option (works out-of-the-box)</li>
<li>Network telemetry built-in (includes a pre-configured, optimised Prometheus instance)</li>
<li>Low-overhead control-plane</li>
<li>Operational simplicity (when compared to Istio, for example, even though Istio is getting better in this regard)</li>

So what is covered in the video? More or less the following:

<li>What service mesh tech allows us to do</li>
<li>What a typical service mesh architecture looks like</li>
<li>What Layer5 is about (<i>Lookout - it may surprise you!</i> 😯)</li>
<li>What Meshery is. What Linkerd is.</li>
<li>How easy it is to install Meshery on your PC (be it Linux, Mac or Windows)</li>
<ul><li>All it takes is: 
<div class="fit-content">
<pre>$ curl -L https://git.io/meshery | bash - </pre>
</div>
</li></ul>
<li>How Meshery connects to your Kubernetes cluster (nothing to be done if it’s in your <code>kubectl config current-context</code>)</li>
<li>How to correctly install and remove Linkerd on your Kubernetes cluster using Meshery</li>
<li>How to install one of included Linkerd sample applications and verify the installation</li>

That’s quite a lot of content for a 20 minute clip. In the follow-up videos, we’ll dive deeper into many of these concepts. And also show how to use Meshery with other service mesh providers.

This video is also the opening shot of Layer5's [Learn to Service Mesh](https://www.youtube.com/playlist?list=PL3A-A6hPO2IN_HSU0pSfijBboiHggs5mC) playlist, which is specifically dedicated to tutorials and webinars. If service mesh tech interests you and you’re willing to learn more about it, then make sure to [subscribe to the channel](https://www.youtube.com/channel/UCFL1af7_wdnhHXL1InzaMvA?sub_confirmation=1) and watch for updates.

And let us know if there’s any specific content you want us to create. Or maybe anything you’ve created yourself and would like to share? Layer5 is all about knowledge sharing and we want to talk to you, so please [join the service mesh community](http://slack.layer5.io)!

Happy meshing!
<br />
\- [Ant Weiss](https://twitter.com/antweiss)
