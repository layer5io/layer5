---
title: "Google Petitions to Donate Istio Service Mesh to CNCF"
subtitle: ""
date: 2022-04-25 04:00:05 +0000
author: Container Journal
category: Coverage
thumbnail: istio-to-cncf.jpg
darkthumbnail: istio-to-cncf.jpg
eurl: https://containerjournal.com/features/google-petitions-to-donate-istio-service-mesh-to-cncf/
published: true
type: News
#product: Service Mesh Performance
#resource: true
---

import { NewsWrapper } from "../../News.style.js";

<NewsWrapper>

Google and the Istio Steering Committee today announced at an IstioCon 22 event that they have submitted the open source Istio service mesh for consideration to become an incubating project administered by the Cloud Native Computing Foundation (CNCF).

Previously, Google and the Istio Steering Committee had, for unspecified reasons, declined to donate the Istio service mesh to the CNCF even though the CNCF governs both the Kubernetes orchestration platform and Envoy proxy software upon which Istio depends.

Louis Ryan, a principal engineer for Google, says since then, the Istio project has matured while the Kubernetes community simultaneously advanced the development of a network application programming interface (API) that makes it simpler for service meshes to abstract away the underlying complexity associated with programmatically invoking network services. As such, it now makes more sense to enable contributors working on both Istio and Kubernetes to work more closely with one another, he adds.

The decision to apply to become an incubation project comes on the heels of the donation of Knative, an open source middleware for connecting Kubernetes clusters to serverless computing frameworks—also originally created by Google—to the CNCF. Assuming the CNCF accepts the Istio contribution, the three major cloud-native initiatives led by Google would all be governed under the auspices of a CNCF consortium that requires organizations to give up control over the trademarks attached to any open source project.

Ryan says IT organizations should expect to see ongoing innovation in the months ahead as competition between various service mesh platforms intensifies. At the same time, there may be opportunities to share advances across multiple service meshes being governed by the CNCF. Those service meshes currently include Linkerd, originally developed by Buoyant, and Kuma, originally developed by Kong, Inc. The CNCF is also home to a Meshery framework for managing service meshes created by Layer5 and a Service Mesh Interface (SMI) project originally created by Microsoft.

Service meshes initially emerged as a way to manage APIs at scale instead of relying on proxy software or an API gateway alone. More recently, IT organizations have started to appreciate the programmable layer of abstraction that a service mesh creates above lower-level networking and security interfaces. That layer of abstraction makes those underlying services more accessible to developers.

Competition between service mesh platforms revolves around two core issues. Service meshes like Linkerd are considerably lighter-weight than, for example, Istio. That makes them simpler for a developer to implement. Istio’s advocates argue that it’s only a matter of time before enterprise IT organizations will need the richer set of capabilities their preferred service mesh enables. Of course, the more robust the feature set of a service mesh, the more likely it is to require an IT operations team that has been trained to implement and manage it. The other issue is to what degree a service mesh might need to be applied to both cloud-native and legacy application environments. Unlike Istio or Linkerd, the Kuma service mesh runs across both Kubernetes clusters and virtual machines.

Regardless of the service Mesh platform selected, it is clear that programmatically managing network services is now much closer to becoming a mainstream part of any DevOps workflow.
</NewsWrapper>
