---
title: What are Kubernetes Validating Admission Controllers?
subtitle: A close cousin to Validating Admission Webhooks
date: 2022-12-22 08:00:00 -0530
author: Lee Calcote
thumbnail: ./kubernetes-new.png
darkthumbnail: ./kubernetes-new-dark.png
description: "Kubernetes Validating Admission Controllers and Policies use the Common Expression Language (CEL) to offer a declarative, in-process alternative to Validating Admission Webhooks."
type: Blog
category: Kubernetes
tags:
  - Kubernetes, Policy-as-Code
featured: false
published: true
---

import { BlogWrapper } from "../../Blog.style.js";
import { Link } from "gatsby";
import Button from "../../../../reusecore/Button";

<BlogWrapper>

Kubernetes is an open-source container orchestration system for automating the deployment, scaling, and management of containerized applications. As part of its functionality, Kubernetes offers a feature called "Admission Controllers" that allow administrators to enforce certain policies on resources being created in the cluster.

In this blog post, we will be discussing a new feature in Kubernetes called "Validating Admission Policies" which is currently in alpha stage. This feature allows administrators to define custom validation rules for resources being created in the cluster and enforce those rules using admission controllers.

## What are Admission Controllers?

Admission controllers are pluggable components in the Kubernetes API server that intercept requests to create, update, or delete resources in the cluster. They allow administrators to enforce certain policies on these requests before they are persisted in the etcd database and acted upon by the Kubernetes control plane.

There are various types of admission controllers available in Kubernetes, such as:

- **NamespaceLifecycle**: This admission controller enforces policies related to namespace creation and deletion.
- **LimitRanger**: This admission controller enforces resource limits on pods, such as CPU and memory limits.
- **PodSecurityPolicy**: This admission controller enforces security policies on pods, such as privileged mode, host networking, and volumes.

## Validating Admission Policies

Validating admission policies allow administrators to define custom validation rules for resources being created in the cluster. These rules can be defined using a custom resource definition (CRD) called "ValidatingWebhookConfiguration" and are enforced by the ValidatingAdmissionWebhook admission controller.

For example, an administrator may want to enforce a policy that requires all pods in the cluster to have a specific label. They can define this rule using a ValidatingWebhookConfiguration CRD and configure the ValidatingAdmissionWebhook admission controller to enforce it. Any request to create a pod that does not have the required label will be rejected by the admission controller.

Validating admission policies also allow administrators to use external webhooks to perform the validation. This can be useful when the validation logic is complex or requires access to external resources.

## Conclusion

Validating admission policies is a new feature in Kubernetes that allows administrators to define custom validation rules for resources being created in the cluster. These rules can be enforced using the ValidatingAdmissionWebhook admission controller, and external webhooks can also be used for complex validation logic. This feature can be useful for enforcing policies and ensuring compliance in a Kubernetes cluster.

</BlogWrapper>