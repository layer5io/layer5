# Layer5 Blog Tags and Categories

Always prefer existing values. Introduce a new one only if nothing fits.

## Categories (exactly one per post)

| Category             | Use for                                                      |
| -------------------- | ------------------------------------------------------------ |
| AI                   | AI, LLMs, AI coding tools, AI agents                         |
| Announcements        | Product launches, major releases, company news               |
| Cloud Native         | CNCF ecosystem, microservices, general cloud infrastructure  |
| Community            | Community updates, contributor spotlights, programs          |
| Docker               | Docker, containers, Docker Compose, Docker Extensions        |
| Engineering          | How-to guides, tutorials, technical deep-dives, debugging    |
| Events               | Conference coverage, KubeCon, meetups, workshops             |
| Internship Programs  | GSoC, LFX, Layer5 internship program posts                   |
| Kanvas               | Kanvas-specific features, tutorials, announcements           |
| Kubernetes           | Kubernetes how-tos, operators, CRDs, cluster management      |
| Layer5 Cloud         | Layer5 Cloud platform features                               |
| Meshery              | Meshery features, releases, tutorials                        |
| Observability        | Monitoring, tracing, logging, Prometheus, Grafana, OTel      |
| Open Source          | Open source culture, contribution guides, maintainer stories |
| Partners             | Partner integrations, collaborations                         |
| Performance          | Benchmarking, load testing, optimization, Nighthawk          |
| Platform Engineering | IDP, platform teams, developer experience, GitOps            |
| Programs             | MeshMate, Ambassador, community programs                     |
| Service Mesh         | Istio, Linkerd, Consul, comparisons                          |
| WebAssembly          | WASM, WASI                                                   |
| AWS                  | AWS-specific content, EKS                                    |
| GCP                  | GCP-specific content, GKE                                    |
| Azure                | Azure-specific content, AKS                                  |

## Tags (2–5 per post — prefer high-frequency ones first)

### High-frequency

- `Open Source` — OSS projects, contributions, culture
- `Meshery` — anything involving the Meshery platform
- `Community` — events, contributor stories, programs
- `Kubernetes` — Kubernetes tutorials, operations
- `ai` — AI/ML topics, LLMs, AI tools (lowercase — matches codebase convention)
- `Meet The Maintainer` — interview series
- `docker` — containers, Docker ecosystem
- `Service Mesh` — service mesh topics

### Technical

- `Engineering`, `Platform Engineering`, `Observability`, `Networking`
- `Performance`, `devops`, `Troubleshooting`, `Policy-as-Code`
- `GitOps`, `Multi-cluster`, `WebAssembly`

### Project/tool

- `mesheryctl`, `Kanvas`, `Nighthawk`, `Envoy`, `Istio`, `Linkerd`
- `OpenTelemetry`, `Catalog`, `Layer5 Cloud`

### Community/event

- `KubeCon`, `Events`, `Announcements`, `Internship`, `GSoC`, `Programs`, `Layer5`

## Tag selection strategy

1. Pick the most specific tag for the primary technology
2. Add the project tag (`Meshery`, `Kubernetes`, etc.)
3. Add the audience/role tag if it fits (`Platform Engineering`, `devops`)
4. Add the content-type tag (`Engineering` for tutorials, `Community` for community posts)
5. Cap at 5 tags

## Examples by post type

**Kubernetes tutorial:**

```yaml
category: Kubernetes
tags: [Kubernetes, Engineering, devops, Open Source]
```

**Meshery feature:**

```yaml
category: Meshery
tags: [Meshery, Announcements, Kubernetes, Open Source]
```

**AI/developer tools:**

```yaml
category: AI
tags: [ai, Engineering, Open Source]
```

**Meet the Maintainer:**

```yaml
category: Open Source
tags: [Open Source, Community, Meet The Maintainer]
```

**Platform engineering guide:**

```yaml
category: Platform Engineering
tags: [Platform Engineering, Kubernetes, devops, Engineering]
```

**KubeCon event:**

```yaml
category: Events
tags: [Events, KubeCon, Community, Kubernetes]
```
