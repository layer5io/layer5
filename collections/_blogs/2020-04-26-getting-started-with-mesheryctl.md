---
layout: post
title:  "Getting started with MesheryCTL"
date:   2020-04-26 01:01:05 +0530
image: /assets/images/posts/2020-04-26-getting-started-with-mesheryctl/mesheryctl.png
author: Kush Trivedi
permalink: /blog/getting-started-with-mesheryctl
---


#### <span style="margin-left:.75em;font-size: 2em; align-content: center;">I</span>ntroduction to Meshery 

To all those who are unaware of Meshery, Meshery is a multi-service mesh management plane which not only interoperates between various service meshes but also tells you the benchmarks and performance standards of your service mesh.

Meshery originated from an idea to be able to manage difference service meshes & tell you which service mesh to adapt from a single place. Meshery is created by the Layer5 organisation.
Layer5 is a service mesh company which has technology partnerships with various tech giants like HashiCorp, CNCF, RedHat and many more to enlist. The community consists of open source leaders like Maintainers of trending open-source projects, ex-GSoCers, Docker Captains, CNCF community leaders and many more. 

#### <span style="margin-left:.75em;font-size: 2em; align-content: center;">W</span>hat is Mesheryctl?

Meshery provides you a clean, robust, streamlined command-line interface to manage and benchmark your service meshes, Mesheryctl. With mesheryctl, not only you can manage your adapters & containers but you can also benchmark your mesh using the command line.

Mesheryctl provides support to a number of platforms so that we never miss out users.
A list of platforms supported by Mesheryctl.

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

I believe we have not missed any of the popular platforms for what it’s worth. We will be rolling out support for RaspberryPi & OpenShift soon 🎉🎉🎉.

There are a few requirements for your local development configuration before getting started with mesheryctl :

- A running Docker Daemon.
- GoLang installed on your local system.
- GoPath setted correctly for smooth working of Go Deps.-

#### <span style="margin-left:.75em;font-size: 2em; align-content: center;">I</span>nto the MesheryCTL

Once you have successfully installed, you will be having the power of a new CLI Command MesheryCTL. As you type `mesheryctl` into your terminal, you will be shown with the various sub-commands & flags `mesheryctl` can support.

<style>
  code, kbd, pre, samp {
    color: mediumblue;
  }
</style>
```sh
Usage:
  mesheryctl [command]

Available Commands:
  cleanup     Clean up Meshery
  help        Help about any command
  logs        Print logs
  perf        Performance Management: testing and benchmarking
  start       Start Meshery
  status      Check Meshery status
  stop        Stop Meshery
  update      Pull new Meshery images from Docker Hub
  version     Version of mesheryctl

Flags:
      --config string   config file (default location is: $HOME/.meshery/meshery.yaml)
  -h, --help            help for mesheryctl
  -t, --toggle          Help message for toggle
  -v, --version         Version of mesheryctl

Use "mesheryctl [command] --help" for more information about a command.
```

Once you do `mesheryctl start`

Meshery will pull it’s adapters & latest docker images. Meshery will also detect your kube configuration & will let you know if the kubernetes is running. 

It will run it’s Client-UI on port-9081 and will let you select the providers before you can start managing your service meshes with this powerful little boy.

**One of the most interesting sub-command of meshery is `perf`.**

Perf subcommand lets you benchmark your service mesh without using the Meshery-UI from the command line interface itself.

Once you type `mesheryctl perf`, it will present you with all the powerful flags you can control with CLI.

<style>
  code, kbd, pre, samp {
    color: mediumblue;
  }
</style>
```sh
Usage:
  mesheryctl perf --[flags]

Available Flags for Performance Command:
  name[string]                  (optional) Name for the Test, if not provided random name will be used.
  url[string]                   (required) URL Endpoint at which test is to be performed
  duration[string]              (required) Duration for which test should be performed. See standard notation https://golang.org/pkg/time/#ParseDuration
  load-generator[string]        (optional) Load-Generator to be used to perform test.(fortio/wrk2) (Default "fortio")
  mesh[string]                  (optional) Name of the service mesh to be tested.
  cookie[string]                (required) Choice of the cloud server provider (Default "Default Local Provider")
  concurrent-requests[string]   (required) Number of parallel requests to be used (Default "1")
  qps[string]                   (required) Queries per second (Default "0")
  help                          Help for perf subcommand
```

An example usage of `mesheryctl perf --[flags]` can be

<style>
  code, kbd, pre, samp {
    color: mediumblue;
  }
</style>
```sh
 mesheryctl perf --name "a quick stress test" --url http://192.168.1.15/productpage --qps 300 --concurrent-requests 2 --duration 30s --cookie "meshery-provider=None"
```



#### <span style="margin-left:.75em;font-size: 2em; align-content: center;">W</span>hat's next?

Meshery is an ever-growing community with attracting contributors from across the globe. We always have a role for everyone whether be a code-writer, a community manager or a marketer. Layer5 community is always open to welcome you warmly.

If this makes you excited, Join the Layer5 community with just a click & someone will be there to make sure you do not get missed.

[Join the community](slack.layer5.io)

Stay Meshy & Happy Meshing!

[Kush Trivedi](https://github.com/kushthedude)
