---
title: Comparing Policy as Code Frameworks
subtitle: Stacking up OPA Rego, HashiCorp Sentinel, and Common Expression Language
date: 2022-12-22 08:00:00 -0530
author: Lee Calcote
thumbnail: ./terraform-color.svg
darkthumbnail: ./terraform-color.svg
description: "Comparison of Open Policy Agent Rego vs Hashicorp Sentinel vs Common Expression Language"
type: Blog
category: Policy-as-Code
tags:
  - Open Policy Agent
featured: false
published: true
---

import { BlogWrapper } from "../../Blog.style.js";
import { Link } from "gatsby";
import Button from "../../../../reusecore/Button";

<BlogWrapper>

Common Expression Language (CEL) is a policy language developed by Google that is designed to be simple and expressive, yet powerful enough to enable the implementation of complex policies. It is used in a variety of contexts, including cloud security, access control, and data privacy.

In comparison, HashiCorp Sentinel is a policy as code framework that is used to define, enforce, and manage policies within an organization's infrastructure. It is often used in conjunction with HashiCorp's other tools, such as Terraform and Vault, to provide an additional layer of security and compliance.

Open Policy Agent (OPA) is an open source policy engine that is designed to enable users to define and enforce policies across a wide range of systems and applications. It provides a declarative policy language called Rego, which allows users to specify policies in a concise and intuitive way.

One key difference between CEL and the other two policy languages is that CEL is designed to be used in a variety of contexts, whereas Sentinel and Rego are more specialized for use in particular domains, such as infrastructure and application development.

## Contrasting Example Use Cases

Here are some examples of how these policy languages might be used:

### CEL:

A cloud provider might use CEL to define policies for controlling access to cloud resources, such as virtual machines, storage buckets, and database instances. For example, a policy might allow users to create new resources only if they have a specific role or permission, or if they are in a particular location.

### Sentinel:

An organization might use Sentinel to define policies for controlling access to sensitive data stored in a database. For example, a policy might allow users to query the database only if they have a certain level of access, or if they are making requests from a trusted network.

### Rego:

An application developer might use Rego to define policies for controlling access to an API. For example, a policy might allow users to make requests to the API only if they have a valid API key, or if they are making requests from a trusted domain.

The Common Expression Language (CEL) is a policy language developed by Google that is used for evaluating expressions in a variety of contexts. CEL is designed to be simple, flexible, and efficient, with a focus on providing a consistent way to evaluate expressions across different platforms and environments.

One key feature of CEL is its support for custom functions, which allows users to define their own functions and use them in expressions. This enables users to extend the functionality of CEL and tailor it to their specific needs.

HashiCorp Sentinel is another policy language that is commonly used for evaluating expressions in various contexts. Sentinel is designed to be flexible and extensible, with a focus on providing a consistent way to define and enforce policies across different platforms and environments.

Like CEL, Sentinel supports custom functions and allows users to define their own functions and use them in expressions. In addition, Sentinel provides support for a wide range of operators and data types, making it a powerful tool for evaluating complex expressions.

Open Policy Agent Rego is another policy language that is widely used for evaluating expressions and enforcing policies. Rego is designed to be simple and easy to use, with a focus on providing a consistent way to define and enforce policies across different platforms and environments.

Like CEL and Sentinel, Rego supports custom functions and allows users to define their own functions and use them in expressions. In addition, Rego provides support for a wide range of operators and data types, making it a powerful tool for evaluating complex expressions.

## Code Comparisons

To give an example of how these policy languages can be used, consider a scenario in which we want to enforce a policy that allows users to access a certain resource only if they are authorized to do so.

In CEL, we might define the policy as follows:

```function isAuthorized(user: User) -> bool {
  return user.role == "admin" || user.role == "moderator";
}

expression authorizedToAccessResource(user: User, resource: Resource) -> bool {
  return isAuthorized(user) && user.hasPermission(resource);
}```

In Sentinel, we might define the policy as follows:

```import "strings"

authorization_roles = ["admin", "moderator"]

is_authorized(user) {
  user.role in authorization_roles
}

authorized_to_access_resource(user, resource) {
  is_authorized(user) && user.has_permission(resource)
}```

In Rego, we might define the policy as follows:

```
package policy

import data.users

authorization_roles = ["admin", "moderator"]

is_authorized(user) {
  user.role in authorization_roles
}

authorized_to_access_resource(user, resource) {
  is_authorized(user) && user.has_permission(resource)
}
```

In each of these examples, we define a custom function (isAuthorized, is_authorized, and is_authorized respectively) that checks whether a user is authorized to access a resource based on their role. We then use this function in an expression (authorizedToAccessResource, authorized_to_access_resource, and authorized_to_access_resource respectively) to determine whether a user is allowed to access a particular resource.

## Summary

Overall, CEL, Sentinel, and Rego are all powerful policy languages that can be used to define and enforce policies in a variety of contexts. They each have their own strengths and limitations, and the choice of which language to use will depend on the specific needs and requirements of the application or system.



</BlogWrapper>

