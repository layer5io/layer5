---
title: "The Ultimate List of Open Source Cloud-Native Tools"
subtitle: ""
date: 2022-08-29 00:00:08 +0000
category: Coverage
author: Bill Doerrfeld
thumbnail: ./tools.jpg
darkthumbnail: ./tools.jpg
eurl: https://containerjournal.com/features/the-ultimate-list-of-open-source-cloud-native-tools/
published: true
type: News
---

import { NewsWrapper } from "../../News.style.js";
import { Link } from "gatsby";

<NewsWrapper>

<div className="test">

There are so many great open source cloud-native tools for nearly everything you want to do.
And they’re all in one place—look no further than the Cloud Native Computing Foundation (CNCF).This Linux Foundation body has become a locus of some stellar cloud-native open source projects. The CNCF now hosts an array of helpful packages, spanning container scheduling, observability, persistent storage, container runtime and other areas.

Odds are the cloud-native DevOps tool you need has already been developed—it’s only a matter of finding it. In recent posts, we highlighted many CNCF tools across various areas. Below, we’ll gloss over each category from a birds-eye view. Click each headline for the full rundown, or read below for a summary of the tools in each category.

### Scheduling  Orchestration
Kubernetes is the most popular container scheduling tool. It can be used to automate the deployment and management of multi-cloud applications. Other scheduling and orchestration utilities from CNCF include Crossplane, Fluid, Karmada, kube-rs, Open Cluster Management and Volcano.

### Observability and Analysis
Prometheus tops the list of observability and analysis tools. The platform can be used to power your monitoring and alerting systems with fine-grained metrics and excellent querying capabilities. Other CNCF tools for observability and analysis include Jaeger, Fluentd, Thanos, Cortex and OpenTelemetry.
<br />

### Security and Compliance
Open Policy Agent (OPA) can be used to unify cloud-native policies across the cloud-native stack. OPA uses a common language to express authorization policies and provides a policy engine to make authorization decisions. Other CNCF projects that deliver security-as-code include The Update Framework (TUF), Falco, Notary, cert-manager and Curiefense.
<br />

### CI/CD
Argo is a suite of packages that help direct jobs on Kubernetes to aid a continuous delivery pipeline. Using Argo, developers can create multi-step custom workflows and share these workflows across a cluster. Other CI/CD tools hosted by CNCF include Flux, Brigade, Keptn, OpenGitOps and OpenKruise.

### Service Mesh Tools
Linkerd is a highly performant developer-favorite service mesh comprised of a control plane to apply configurations and a data plane that deploys its own unique proxy. This proxy can apply consistent security, observability, monitoring and telemetry features across distributed microservices. Other service mesh tools from CNCF include Kuma, Open Service Mesh (OSM), <Link to="/projects/service-mesh-interface-conformance">Service Mesh Interface (SMI) </Link> , <Link to="/meshery">Meshery</Link> and <Link to="/projects/service-mesh-performance">Service Mesh Performance</Link>

### Service Proxies
Envoy is a service proxy commonly used within service meshes like Istio and Kuma. Envoy is intended to run alongside applications to help standardize networking and observability within large microservices networks. Other service proxy projects include Contour BFE and OpenELB.

### Persistent Storage
Rook is a tool that helps automate away some of the pains of managing cloud-native persistent storage. Rook supports file, block and object storage types and can be used for programmatic storage, migration, disaster recovery, monitoring and resource management. Other cloud-native persistent storage projects include Longhorn, CubeFS, K8up, OpenEBS, ORAS, Piraeus Datastore and Vineyard.

### Cloud-Native Database Tools
TiKV is a unified distributed storage layer that can process large amounts of data. The project supports a key-value API and has rapid response times. Other cloud-native database utilities include Vitess, a clustering system for horizontal scaling of MySQL and SchemaHero, a Kubernetes operator for declarative database schema management.

### Container Runtime
Containerd is an industry-standard container runtime supported by most container-based systems. Originally built as part of Docker, containerd was donated to the Linux Foundation in 2015. Other notable CNCF container runtime utilities include CRI-O, Inclavare Containers and WasmEdge Runtime.

### App Definition and Build Tools
Helm is a prevalent Kubernetes package manager widely used to share a manifest of dependencies. Operators often use Helm charts to find and install third-party applications. Other notable tools which help address operational concerns of Kubernetes include Buildpacks, KubeVirt, Operator Framework and Backstage.

### Cloud-Native Networking
Cilium is a tool that brings eBPF-based networking, security and observability. Cilium helps build out networking between container workloads and cross-cluster connectivity. Additional cloud-native networking utilities include Antrea, CNI-Genie, Kube-OVN, Network Service Mesh (NSM) and Submariner. There’s also the Container Network Interface (CNI), an interface specification for container networking.

### Streaming and Messaging
CloudEvents offers a specification intended to help standardize the event-based communication from various event publisher systems. By having a way to describe events consistently, developers could solve interoperability issues. Other CNCF streaming and messaging projects include NATS, Pravega, Strimzi and Tremor.

### Chaos Engineering
Chaos Mesh is a chaos engineering platform for Kubernetes. Using Chaos Mesh, operators can push their Kubernetes deployments to the limit with stress testing, fault injections, and other testing behaviors. You can also schedule routine tests. Other cloud-native chaos testing tools from CNCF include Litmus and ChaosBlade.

### Key Management
SPIFFE is defined as a universal identity control plane for a distributed architecture. Using SPIFFE, engineers can quickly construct a standard method to identify workloads and automatically secure service-to-service communication. SPIRE is the product-ready reference implementation of SPIFFE. Other key management tools from CNCF include Athenz and Teller.

### Edge Computing and Bare Metal
KubeEdge helps extend cloud-native capabilities into edge computing. It’s specifically designed with the constraints of edge nodes in mind, such as reliability and resource limitations. Other projects that help extend Kubernetes to the edge include Akri, OpenYurt and SuperEdge. Other tools aid in provisioning K8s on bare metal, such as Metal3.io and Tinkerbell.

### The Forecast Looks Cloud-Native
By 2023, the . The cloud-native world is here to stay, and open source is the foundation to support our new era of microservices, containerization and DevOps.

Although you could technically self-host your way through development and operations using these open source projects, organizations will most likely adopt a blend of open source, proprietary and as-a-service cloud offerings to get the job done. Regardless, it’s cool to know what’s available for free use.

It should also be mentioned that tools change from time to time. As such, you can always view the up-to-date CNCF landscape here. Stay tuned as we keep an eye on CNCF and related bodies that continue to carry the cloud-native torch forward!
</div>

</NewsWrapper>
