---
layout: post
title:  "Getting started with mesheryctl"
date:   2020-04-26 01:01:05 +0530
image: /assets/images/posts/2020-04-26-getting-started-with-mesheryctl/mesheryctl.png
author: Kush Trivedi
permalink: /blog/getting-started-with-mesheryctl
---
<style>
   kbd, pre, samp {
    background-color: black;
    color: white;
    padding:10px;
  }
  code {
    color: blue;
  }
</style>

#### <span style="margin-left:.75em;font-size: 2em; align-content: center;">I</span>ntroduction to Meshery 

For all those who are unaware of Meshery, Meshery is a multi-service mesh management plane which not only interoperates between various service meshes but also tells you the benchmarks and performance standards of your service mesh.

Meshery originated from an idea to be able to manage difference service meshes & tell you which service mesh to adapt from a single place. Meshery is created by the Layer5 organisation.
Layer5 is a service mesh company which has technology partnerships with various tech giants like HashiCorp, CNCF, RedHat and many more to enlist. The community consists of open source leaders like Maintainers of trending open-source projects, ex-GSoCers, Docker Captains, CNCF community leaders and many more. 

#### <span style="margin-left:.75em;font-size: 2em; align-content: center;">W</span>hat is mesheryctl?

Meshery provides you with a clean, robust, streamlined command-line interface to manage and benchmark your service meshes, `mesheryctl`. With `mesheryctl`, not only you can manage your adapters & containers but you can also benchmark your mesh using the command line.

`mesheryctl` provides support to a number of platforms so that we never miss out users.

`mesheryctl` can be installed with a single bash command by simply executing:

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

and you will be able to see the Meshery UI on `https://localhost:9081`.

If you are wondering if bash is only way to get `mesheryctl`, then here is the list of platforms which you can get `mesheryctl` describing all the different ways to get it.

| Platform | Supported? |
| --- | :---: |
| [Docker](https://meshery.layer5.io/docs/installation/docker) | ✔️ |
| - [Docker - Docker App](https://meshery.layer5.io/docs/installation/docker) | ✔️ |
| [Kubernetes](https://meshery.layer5.io/docs/installation/kubernetes) | ✔️ |
| - [Kubernetes - Docker Desktop](https://meshery.layer5.io/docs/installation#mac-or-linux) | ✔️ |
| - [Kubernetes - EKS](https://meshery.layer5.io/docs/installation/eks) | ✔️ |
| - [Kubernetes - GKE](https://meshery.layer5.io/docs/installation/gke) | ✔️ |
| - [Kubernetes - Helm](https://meshery.layer5.io/docs/installation/kubernetes#helm) | ✔️ |
| - [Kubernetes - Minikube](https://meshery.layer5.io/docs/installation/minikube) | ✔️ |
| [Linux](https://meshery.layer5.io/docs/installation#mac-or-linux) | ✔️ |
| [Mac](https://meshery.layer5.io/docs/installation#mac-or-linux) | ✔️ |
| - [Mac - Homebrew](https://meshery.layer5.io/docs/installation#mac-or-linux) | ✔️ |
| [Windows](https://meshery.layer5.io/docs/installation#windows) | ✔️ |
| - [Scoop](https://meshery.layer5.io/docs/installation#windows) | ✔️ |
| - [WSL2](https://meshery.layer5.io/docs/installation/wsl2) | ✔️ |

We believe we have not missed any of the popular platforms for what it’s worth, we will be rolling out support for RaspberryPi & OpenShift soon 🎉🎉🎉.

If you are thinking about the requirements you would have to run `mesheryctl`, so to your surprise, to successfully run `mesheryctl` you will only need :

- A running Docker Daemon.

#### <span style="margin-left:.75em;font-size: 2em; align-content: center;">I</span>nto the MesheryCTL

Once you have successfully installed, you will be having the power of a new CLI Command MesheryCTL. As you type `mesheryctl` into your terminal, you will be shown with the various sub-commands & flags `mesheryctl` can support.

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

Once you do `mesheryctl start`

Meshery will pull its adapters & latest docker images. Meshery will also detect your Kube configuration & will let you know if the Kubernetes is running. 

It will run it’s Client-UI on port 9081 and will let you select the providers before you can start managing your service meshes with this powerful little boy.

**One of the most interesting sub-commands of `mesheryctl` is `perf`.**

Perf subcommand lets you benchmark your service mesh without using the Meshery UI from the command line interface itself.

Once you type `mesheryctl perf`, it will present you with all the powerful flags you can control with CLI.

<pre>
Performance Testing & Benchmarking using Meshery CLI.

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
  file[string]                  (optional) file containing SMPS-compatible test configuration. See https://github.com/layer5io/service-mesh-performance-specification
  help                          Help for perf subcommand

url, duration, concurrent-requests, and qps can be considered optional flags if specified through an SMPS compatible yaml file using --file


</pre>

An example usage of `mesheryctl perf --[flags]` can be

<pre>
 mesheryctl perf --name "a quick stress test" --url http://192.168.1.15/productpage --qps 300 --concurrent-requests 2 --duration 30s --token "provider=Meshery"
</pre>

You can also provide a SMPS Configuration file with `perf` subcommand, with this file provided you will not have to specify url, duration, concurrent-requests & qps. However, if specified the value provided through file will be over-rided by value through CLI. For more info about file configuration, see [here](https://github.com/layer5io/service-mesh-performance-specification/blob/master/smps.yaml).

<pre>
 mesheryctl perf --name "a quick stress test" --file {path}/smps.yaml --token "provider=Meshery"
</pre>

#### <span style="margin-left:.75em;font-size: 2em; align-content: center;">W</span>hat's next?

Meshery is an ever-growing community with attracting contributors from across the globe. We always have a role for everyone whether to be a code-writer, a community manager or a marketer. Layer5 community is always open to welcome you warmly.

If this makes you excited, [join the Layer5 community](slack.layer5.io) with just a click & someone will be there to make sure you do not get missed.

Stay meshy and happy meshing!

\- _[Kush Trivedi](https://github.com/kushthedude)_
