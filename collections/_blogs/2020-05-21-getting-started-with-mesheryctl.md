---
layout: post
title:  "Getting started with mesheryctl"
date:   2020-05-21 08:00:05 -0530
image: /assets/images/posts/2020-04-26-getting-started-with-mesheryctl/mesheryctl.png
author: Kush Trivedi
permalink: /blog/getting-started-with-mesheryctl
---

<div class="center sub-heading"><i>no easier way to get started with a service mesh</i></div>
<h4 class="to-uppercase">Introduction to Meshery</h4>
<p class="content-left-margin">
For all those who are unaware of <a href="/meshery">Meshery</a>, Meshery is a multi-service mesh management plane which provides users with service mesh operational best practices, lifecycle and configuration management, but also interoperates between various service meshes, while enabling you with the tools and knowledge to glean the most of out your service mesh performance, while keeping your overhead to a minimum.
</p>
<p class="content-left-margin">
Meshery's vision is to make the operating of any service mesh layer of cloud infrastructure simplified, and to hasten the inevitable, eventual, ubiquituous adoption service meshes as a pervasively present layer of any the way that any modern workload is designed and deployed. Meshery is created by the <a href="/community">Layer5</a>.

Layer5 is a community-first, service mesh company which has technology <a href="partners">partnerships</a> with various tech giants like Microsoft, HashiCorp, CNCF, RedHat and many more to enlist. The community consists of open source leaders like maintainers of trending open-source projects, Google SoCers, Docker Captains, service mesh maintainers, Cloud Native Ambassadors and many more (<a href="http://slack.layer5.io">join in!</a>).
</p>

<h4 class="to-uppercase">What is mesheryctl?</h4>
<p class="content-left-margin">
Meshery provides you with a clean, robust, streamlined command-line interface to manage and benchmark your service meshes, <code>mesheryctl</code>. With <code>mesheryctl</code>, not only you can manage your adapters & containers but you can also benchmark your mesh using the command line. <code>mesheryctl</code> provides support to a number of platforms so that we never miss out users. <code>mesheryctl</code> can be installed with a single bash command by simply executing:
</p>
<pre>
$ curl -L https://git.io/meshery | bash -
</pre>

in your terminal. You will see Meshery getting installed & fired up on port: 9081.
You will see the output as 


<pre>
Extracting mesheryctl-v0.3.14...
Archive:  /Users/kush/meshery.zip
  inflating: LICENSE
  inflating: README.md
  inflating: mesheryctl

Installing mesheryctl in /usr/local/bin.
mesheryctl installed.
permissions moved to kush
Removing installation files and opening Meshery...Updating Meshery now...
Pulling meshery          ... download complete
Pulling meshery-istio    ... done
Pulling meshery-linkerd  ... done
Pulling meshery-consul   ... done
Pulling meshery-octarine ... done
Pulling meshery-nsm      ... done
Pulling meshery-cpx      ... done
Pulling watchtower       ... done
</pre>

and you will be able to see the Meshery UI on <code>https://localhost:9081</code>.

If you are wondering if bash is only way to get <code>mesheryctl</code>, then here is the list of platforms which you can get <code>mesheryctl</code> describing all the different ways to get it.

<table class="table-1" align="center">
<thead>
<tr>
<th>Platform</th>
<th class="text-centre">Supported?</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://meshery.layer5.io/docs/installation/docker">Docker</a></td>
<td class="text-centre">✔️</td>
</tr>
<tr>
<td> - <a href="https://meshery.layer5.io/docs/installation/docker">Docker - Docker App</a></td>
<td class="text-centre">✔️</td>
</tr>
<tr>
<td><a href="https://meshery.layer5.io/docs/installation/kubernetes">Kubernetes</a></td>
<td class="text-centre">✔️</td>
</tr>
<tr>
<td> - <a href="https://meshery.layer5.io/docs/installation/aks">Kubernetes - AKS</a></td>
<td class="text-centre">✔️</td>
</tr>
<tr>
<td> - <a href="https://meshery.layer5.io/docs/installation#mac-or-linux">Kubernetes - Docker Desktop</a></td>
<td class="text-centre">✔️</td>
</tr>
<tr>
<td> - <a href="https://meshery.layer5.io/docs/installation/eks">Kubernetes - EKS</a></td>
<td class="text-centre">✔️</td>
</tr>
<tr>
<td> - <a href="https://meshery.layer5.io/docs/installation/gke">Kubernetes - GKE</a></td>
<td class="text-centre">✔️</td>
</tr>
<tr>
<td> - <a href="https://meshery.layer5.io/docs/installation/kubernetes#helm">Kubernetes - Helm</a></td>
<td class="text-centre">✔️</td>
</tr>
<tr>
<td> - <a href="https://meshery.layer5.io/docs/installation/minikube">Kubernetes - Minikube</a></td>
<td class="text-centre">✔️</td>
</tr>
<tr>
<td> - Kubernetes - OpenShift</td>
<td class="text-centre">In Progress</td>
</tr>
<tr>
<td><a href="https://meshery.layer5.io/docs/installation#mac-or-linux">Linux</a></td>
<td class="text-centre">✔️</td>
</tr>
<tr>
<td><a href="https://meshery.layer5.io/docs/installation#mac-or-linux">Mac</a></td>
<td class="text-centre">✔️</td>
</tr>
<tr>
<td> - <a href="https://meshery.layer5.io/docs/installation#mac-or-linux">Mac - Homebrew</a></td>
<td class="text-centre">✔️</td>
</tr>
<tr>
<td><a href="https://meshery.layer5.io/docs/installation#windows">Windows</a></td>
<td class="text-centre">✔️</td>
</tr>
<tr>
<td> - <a href="https://meshery.layer5.io/docs/installation#windows">Scoop</a></td>
<td class="text-centre">✔️</td>
</tr>
<tr>
<td> - <a href="https://meshery.layer5.io/docs/installation/wsl2">WSL2</a></td>
<td class="text-centre">✔️</td>
</tr>
<tr>
<td>Raspberry Pi</td>
<td class="text-centre">In Progress</td>
</tr>
</tbody>
</table>


We believe we have not missed any of the popular platforms for what it’s worth, we will be rolling out support for RaspberryPi and OpenShift soon 🎉🎉🎉.

If you are thinking about the requirements you would have to run <code>mesheryctl</code>, so to your surprise, to successfully run <code>mesheryctl</code> you will only need :

<table align="center" class="table-box"><tr><td class="text-centre">a running Docker daemon</td></tr></table>

<h4 class="to-uppercase">Into the MesheryCTL</h4>

Once you have successfully installed, you will be having the power of a new CLI Command MesheryCTL. As you type <code>mesheryctl</code> into your terminal, you will be shown with the various sub-commands and flags <code>mesheryctl</code> can support.

<pre>
Meshery is the service mesh management plane, providing lifecycle, performance, and configuration management of service meshes and their workloads.

Usage:
  mesheryctl [command]

Available Commands:
  help        Help about any command
  perf        Performance Management
  system      Meshery Lifecyle Management
  version     Print mesheryctl version


Flags:
      --config string    config file (default location is: $HOME/.meshery//meshery.yaml)
  -h, --help            help for mesheryctl
  -v, --version         Version of mesheryctl

Use "mesheryctl [command] --help" for more information about a command.
</pre>

Once you do <code>mesheryctl system start</code>, Meshery will pull its adapters and latest docker images. Meshery will also detect your Kubernetes configuration and will let you know if Kubernetes is running. Meshery will run it’s web-based user interface on localhost port <code>9081</code> and will let you select your choice of <a href="https://meshery.layer5.io/docs/extensibility#Providers">Provider</a> before you can start managing your service meshes with this powerful utility.

<table align="center" class="table-box"><tr><td class="text-centre">One of the most interesting sub-commands of <code>mesheryctl</code> is <strong><code>perf</code></strong>.</td></tr></table>

The <code>perf</code> subcommand enables you to being managing the performance of your service mesh deployment and your workloads running atop of them. It lets you benchmark your service mesh without using the Meshery UI from the command line interface itself. Once you type <code>mesheryctl perf</code>, it will present you with all the powerful flags you can control with CLI, including providing it with a <code>--file</code> flag that points to any of a number of performance test profiles that you may have saved.

<pre>
Performance Management and Benchmarking using Meshery CLI.

Usage:
  mesheryctl perf --[flags]

Available Flags for Performance Command:
  name[string]                  (optional) A short descriptor to serve as reference for this test. If not provided, a random name will be generate.
  url[string]                   (required) URL endpoint to send requests.
  duration[string]              (required) Length of time to perform test (e.g 30s, 15m, 1hr). See standard notation https://golang.org/pkg/time/#ParseDuration
  load-generator[string]        (optional) Name of load generator to be used to perform test (default: "fortio")
  mesh[string]                  (optional) Name of the service mesh to be tested (default: "None")
  provider[string]              (required) Choice of Provider (default: "Meshery")
  concurrent-requests[string]   (optional) Number of parallel requests to be sent (default: "1")
  qps[string]                   (required) Queries per second (default: "0")
  file[string]                  (optional) file containing SMP-compatible test configuration. See https://github.com/layer5io/service-mesh-performance-specification
  help                          Help for perf subcommand

url, duration, concurrent-requests, and qps can be considered optional flags if specified through an SMP compatible yaml file using --file


</pre>

An example usage of <code>mesheryctl perf --[flags]</code> can be

<pre>
 mesheryctl perf --name "a quick stress test" --url http://192.168.1.15/productpage --qps 300 --concurrent-requests 2 --duration 30s --token "provider=Meshery"
</pre>

You can also provide a SMP Configuration file with `perf` subcommand, with this file provided you will not have to specify url, duration, concurrent-requests & qps. However, if specified the value provided through file will be over-rided by value through CLI. For more info about file configuration, see [here](https://github.com/layer5io/service-mesh-performance-specification/blob/master/smp.yaml).

<pre>
 mesheryctl perf --name "a quick stress test" --file {path}/smp.yaml --token "provider=Meshery"
</pre>

<h4 class="to-uppercase">What's next?</h4>

Meshery is an ever-growing community with attracting contributors from across the globe. We always have a role for everyone whether to be a code-writer, a community manager or a marketer. Layer5 community is always open to welcome you warmly.

If this makes you excited, [join the Layer5 community](http://slack.layer5.io) with just a click & someone will be there to make sure you do not get missed.

Stay meshy and happy meshing!

\- _[Kush Trivedi](https://github.com/kushthedude)_
