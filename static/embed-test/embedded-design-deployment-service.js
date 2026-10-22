import cytoscape from "https://cdn.jsdelivr.net/npm/cytoscape@3.27.0/+esm";
const data = {
  elements: {
    nodes: [
      {
        data: {
          id: "4f9d3c78-2304-47bf-84cb-f34c95485d65",
          type: "Service",
          meshType: "kubernetes",
          model: "kubernetes",
          config: {
            name: "edge-stack-admin",
            services: {
              "4f9d3c78-2304-47bf-84cb-f34c95485d65": {
                namespace: "ambassador",
                settings: {
                  spec: {
                    ports: [
                      {
                        name: "ambassador-admin",
                        port: 8877,
                        protocol: "TCP",
                        "target Port": "admin"
                      },
                      {
                        name: "ambassador-snapshot",
                        port: 8005,
                        protocol: "TCP",
                        "target Port": 8005
                      }
                    ],
                    selector: {
                      "app.kubernetes.io/instance": "edge-stack",
                      "app.kubernetes.io/name": "edge-stack"
                    },
                    type: "ClusterIP"
                  },
                  name: "edge-stack-admin",
                  namespace: "ambassador",
                  labels: {
                    "app.kubernetes.io/instance": "edge-stack",
                    "app.kubernetes.io/managed-by": "getambassador.io",
                    "app.kubernetes.io/name": "edge-stack",
                    "app.kubernetes.io/part-of": "edge-stack",
                    product: "aes",
                    service: "ambassador-admin"
                  },
                  annotations: {
                    "a8r.io/bugs": "https://github.com/datawire/ambassador/issues",
                    "a8r.io/chat": "http://a8r.io/Slack",
                    "a8r.io/dependencies": "None",
                    "a8r.io/description":
                      "The Ambassador Edge Stack admin service for internal use and health checks.",
                    "a8r.io/documentation":
                      "https://www.getambassador.io/docs/edge-stack/latest/",
                    "a8r.io/owner": "Ambassador Labs",
                    "a8r.io/repository": "github.com/datawire/ambassador",
                    "a8r.io/support": "https://www.getambassador.io/about-us/support/"
                  }
                },
                traits: {
                  meshmap: {
                    edges: [
                      {
                        data: {
                          id: "6a8f392a-6d03-4376-8c41-669c513ba6bb",
                          metadata: { port: 8877, protocol: "TCP" },
                          source: "4f9d3c78-2304-47bf-84cb-f34c95485d65",
                          subType: "Network",
                          target: "6a66429c-181f-4a78-83e4-0be23ed730e3"
                        },
                        style: {
                          "control-point-distances": null,
                          "control-point-weights": "0.5",
                          "curve-style": "bezier",
                          "haystack-radius": "0",
                          "line-color": "rgb(153,153,153)",
                          "line-style": "dotted",
                          opacity: "1",
                          "segment-distances": "20px",
                          "segment-weights": "0.5",
                          "target-arrow-shape": "vee",
                          "taxi-direction": "auto",
                          "taxi-turn": "50%",
                          "taxi-turn-min-distance": "10px",
                          width: "1.5px"
                        }
                      }
                    ],
                    id: "4f9d3c78-2304-47bf-84cb-f34c95485d65",
                    "meshmodel-metadata": {
                      capabilities: "",
                      defaultData: "",
                      genealogy: "",
                      isAnnotation: false,
                      isCustomResource: false,
                      isModelAnnotation: "FALSE",
                      isNamespaced: true,
                      logoURL:
                        "https://github.com/cncf/artwork/blob/master/projects/kubernetes/icon/white/kubernetes-icon-white.svg",
                      model: "kubernetes",
                      modelDisplayName: "Kubernetes",
                      primaryColor: "#326CE5",
                      secondaryColor: "#7aa1f0",
                      shape: "round-triangle",
                      shapePolygonPoints: "",
                      status: "enabled",
                      styleOverrides:
                        '{"height":20,"width":20,"padding":12,"background-position-y":4.5,"x":"10px","y":"12px"}',
                      styles:
                        '{"height":20,"width":20,"padding":12,"background-position-y":4.5,"x":"10px","y":"12px"}',
                      subCategory: "",
                      svgColor:
                        "ui/public/static/img/meshmodels/kubernetes/color/service-color.svg",
                      svgComplete: "",
                      svgWhite:
                        "ui/public/static/img/meshmodels/kubernetes/white/service-white.svg"
                    },
                    position: { posX: -80.18287118372115, posY: -56.04761131403264 },
                    whiteboardData: { style: {} }
                  }
                },
                type: "Service"
              }
            }
          },
          inventoryLength: 0
        },
        position: { x: -80.18287118372115, y: -56.04761131403264 },
        group: "nodes",
        removed: false,
        selected: false,
        selectable: true,
        locked: false,
        grabbable: true,
        pannable: false,
        classes: ""
      },
      {
        data: {
          id: "d1ec2c27-9f42-4bd1-91f7-290752a59d91",
          type: "Deployment",
          meshType: "kubernetes",
          model: "kubernetes",
          config: {
            name: "edge-stack-agent",
            services: {
              "d1ec2c27-9f42-4bd1-91f7-290752a59d91": {
                namespace: "ambassador",
                settings: {
                  spec: {
                    "progress Deadline Seconds": 600,
                    replicas: 1,
                    selector: {
                      "match Labels": {
                        "app.kubernetes.io/instance": "edge-stack",
                        "app.kubernetes.io/name": "edge-stack-agent"
                      }
                    },
                    template: {
                      metadata: {
                        labels: {
                          "app.kubernetes.io/instance": "edge-stack",
                          "app.kubernetes.io/managed-by": "getambassador.io",
                          "app.kubernetes.io/name": "edge-stack-agent",
                          "app.kubernetes.io/part-of": "edge-stack",
                          product: "aes"
                        }
                      },
                      spec: {
                        containers: [
                          {
                            env: [
                              {
                                name: "AGENT_NAMESPACE",
                                "value From": {
                                  "field Ref": { "field Path": "metadata.namespace" }
                                }
                              },
                              {
                                name: "AGENT_CONFIG_RESOURCE_NAME",
                                value: "edge-stack-agent-cloud-token"
                              },
                              {
                                name: "RPC_CONNECTION_ADDRESS",
                                value: "https://app.getambassador.io/"
                              },
                              {
                                name: "AES_SNAPSHOT_URL",
                                value:
                                  "http://edge-stack-admin.ambassador:8005/snapshot-external"
                              },
                              { name: "AES_REPORT_DIAGNOSTICS_TO_CLOUD", value: "true" },
                              {
                                name: "AES_DIAGNOSTICS_URL",
                                value:
                                  "http://edge-stack-admin.ambassador:8877/ambassador/v0/diag/?json=true"
                              }
                            ],
                            image: "docker.io/ambassador/ambassador-agent:1.0.14",
                            "image Pull Policy": "IfNotPresent",
                            name: "agent",
                            ports: [{ "container Port": 8080, name: "http" }]
                          }
                        ],
                        "service Account Name": "edge-stack-agent"
                      }
                    }
                  },
                  name: "edge-stack-agent",
                  namespace: "ambassador",
                  labels: {
                    "app.kubernetes.io/instance": "edge-stack",
                    "app.kubernetes.io/managed-by": "getambassador.io",
                    "app.kubernetes.io/name": "edge-stack-agent",
                    "app.kubernetes.io/part-of": "edge-stack",
                    product: "aes"
                  }
                },
                traits: {
                  meshmap: {
                    edges: [
                      {
                        data: {
                          id: "18063b44-442d-4c82-923c-8c78d09f572d",
                          metadata: { port: 80, protocol: "TCP" },
                          source: "b9702cdb-2390-4f2a-a9c7-096ef1a7d84d",
                          subType: "Network",
                          target: "d1ec2c27-9f42-4bd1-91f7-290752a59d91"
                        },
                        style: {
                          "control-point-distances": null,
                          "control-point-weights": "0.5",
                          "curve-style": "bezier",
                          "haystack-radius": "0",
                          "line-color": "rgb(153,153,153)",
                          "line-style": "dotted",
                          opacity: "1",
                          "segment-distances": "20px",
                          "segment-weights": "0.5",
                          "target-arrow-shape": "vee",
                          "taxi-direction": "auto",
                          "taxi-turn": "50%",
                          "taxi-turn-min-distance": "10px",
                          width: "1.5px"
                        }
                      }
                    ],
                    id: "d1ec2c27-9f42-4bd1-91f7-290752a59d91",
                    "meshmodel-metadata": {
                      capabilities:
                        '{\n  "fieldRefs": [\n    {\n      "fieldPath": "spec.template.spec.containers",\n      "jsonSchemaPath": "properties.spec.allOf[0].properties.template.allOf[0].properties.spec.allOf[0].properties.containers.items.allOf[0]",\n      "component": {\n        "kind": "Container",\n        "model": "meshery-core"\n      },\n      "renderChildren": true\n    }\n  ],\n  "designer": {\n    "edit": {\n      "shape": {\n        "convert-shape": false\n      }\n    }\n  }\n}',
                      defaultData: "",
                      genealogy: "parent",
                      isAnnotation: false,
                      isCustomResource: false,
                      isModelAnnotation: "FALSE",
                      isNamespaced: true,
                      logoURL: "Created by Meshery Authors",
                      model: "kubernetes",
                      modelDisplayName: "Kubernetes",
                      primaryColor: "#326CE5",
                      secondaryColor: "#7aa1f0",
                      shape: "round-rectangle",
                      shapePolygonPoints: "",
                      status: "enabled",
                      styleOverrides: {
                        "background-opacity": 0.5,
                        "border-width": 2,
                        "z-index": 3
                      },
                      styles: '{"border-width":2,"background-opacity":0.5}',
                      subCategory: "",
                      svgColor:
                        "ui/public/static/img/meshmodels/kubernetes/color/deployment-color.svg",
                      svgComplete:
                        "ui/public/static/img/meshmodels/kubernetes/complete/deployment-complete.svg",
                      svgWhite:
                        "ui/public/static/img/meshmodels/kubernetes/white/deployment-white.svg"
                    },
                    position: { posX: 122.35302250930877, posY: 23.549326575940697 },
                    whiteboardData: { style: {} }
                  }
                },
                type: "Deployment"
              }
            }
          },
          inventoryLength: 0
        },
        position: { x: 118.35302250930877, y: 28.549326575940697 },
        group: "nodes",
        removed: false,
        selected: false,
        selectable: true,
        locked: false,
        grabbable: true,
        pannable: false,
        classes: ""
      },
      {
        data: {
          id: "6a66429c-181f-4a78-83e4-0be23ed730e3",
          type: "Deployment",
          meshType: "kubernetes",
          model: "kubernetes",
          config: {
            name: "edge-stack",
            services: {
              "6a66429c-181f-4a78-83e4-0be23ed730e3": {
                namespace: "ambassador",
                settings: {
                  spec: {
                    "progress Deadline Seconds": 600,
                    replicas: 1,
                    selector: {
                      "match Labels": {
                        "app.kubernetes.io/instance": "edge-stack",
                        "app.kubernetes.io/name": "edge-stack"
                      }
                    },
                    strategy: { type: "RollingUpdate" },
                    template: {
                      metadata: {
                        annotations: {
                          "consul.hashicorp.com/connect-inject": "false",
                          "sidecar.istio.io/inject": "false"
                        },
                        labels: {
                          "app.kubernetes.io/instance": "edge-stack",
                          "app.kubernetes.io/managed-by": "getambassador.io",
                          "app.kubernetes.io/name": "edge-stack",
                          "app.kubernetes.io/part-of": "edge-stack",
                          product: "aes",
                          profile: "main"
                        }
                      },
                      spec: {
                        affinity: {
                          "pod Anti Affinity": {
                            "preferred During Scheduling Ignored During Execution": [
                              {
                                "pod Affinity Term": {
                                  "label Selector": {
                                    "match Labels": { service: "ambassador" }
                                  },
                                  "topology Key": "kubernetes.io/hostname"
                                },
                                weight: 100
                              }
                            ]
                          }
                        },
                        containers: [
                          {
                            env: [
                              {
                                name: "AMBASSADOR_NAMESPACE",
                                "value From": {
                                  "field Ref": { "field Path": "metadata.namespace" }
                                }
                              },
                              {
                                name: "AGENT_CONFIG_RESOURCE_NAME",
                                value: "edge-stack-agent-cloud-token"
                              },
                              { name: "AMBASSADOR_DRAIN_TIME", value: "600" },
                              {
                                name: "AMBASSADOR_INTERNAL_URL",
                                value: "https://127.0.0.1:8443"
                              },
                              { name: "POLL_EVERY_SECS", value: "60" },
                              { name: "REDIS_URL", value: "edge-stack-redis:6379" }
                            ],
                            image: "docker.io/datawire/aes:3.11.0",
                            "image Pull Policy": "IfNotPresent",
                            "liveness Probe": {
                              "failure Threshold": 5,
                              "http Get": {
                                path: "/ambassador/v0/check_alive",
                                port: "admin"
                              },
                              "initial Delay Seconds": 60,
                              "period Seconds": 10
                            },
                            name: "aes",
                            ports: [
                              { "container Port": 8080, name: "http" },
                              { "container Port": 8443, name: "https" },
                              { "container Port": 8877, name: "admin" }
                            ],
                            "readiness Probe": {
                              "failure Threshold": 5,
                              "http Get": {
                                path: "/ambassador/v0/check_ready",
                                port: "admin"
                              },
                              "initial Delay Seconds": 60,
                              "period Seconds": 10
                            },
                            resources: {
                              limits: { cpu: "1000m", memory: "600Mi" },
                              requests: { cpu: "200m", memory: "300Mi" }
                            },
                            "security Context": { "allow Privilege Escalation": false },
                            "volume Mounts": [
                              {
                                "mount Path": "/tmp/ambassador-pod-info",
                                name: "ambassador-pod-info",
                                "read Only": true
                              }
                            ]
                          }
                        ],
                        "dns Policy": "ClusterFirst",
                        "host Network": false,
                        "image Pull Secrets": [],
                        "init Containers": [
                          {
                            args: [
                              'deployment_name="emissary-apiext"\ndeployment_namespace="emissary-system"\nwhile true; do\n  echo "checking if deployment/$deployment_name in namespace: $deployment_namespace exists."\n  if kubectl get deployment "$deployment_name" -n $deployment_namespace > /dev/null 2>&1; then\n    echo "$deployment_name.$deployment_namespace exists."\n    echo "checking if $deployment_name.$deployment_namespace is fully available..."\n    kubectl wait --for=condition=available deployment/"$deployment_name" -n $deployment_namespace --timeout=5m\n    if [ $? -eq 0 ]; then\n      echo "$deployment_name.$deployment_namespace is available"\n      while true; do\n      desired_replicas=$(kubectl get deployment $deployment_name -n $deployment_namespace -o jsonpath=\'{.spec.replicas}\')\n      current_replicas=$(kubectl get deployment $deployment_name -n $deployment_namespace -o jsonpath=\'{.status.replicas}\')\n      if [[ $current_replicas != $desired_replicas ]]; then\n        echo "$deployment_name.$deployment_namespace is in the process of restarting. Have: $current_replicas, want $desired_replicas"\n        sleep 3\n      else\n        echo "$deployment_name.$deployment_namespace is fully ready and not currently restarting.  Have: $current_replicas, want $desired_replicas"\n        break\n      fi\n      done\n      break\n    else\n      echo "$deployment_name.$deployment_namespace did not become available within the timeout"\n    fi\n  else\n    echo "$deployment_name.$deployment_namespace does not exist yet. Waiting..."\n    sleep 3\n  fi\ndone\n'
                            ],
                            command: ["/bin/sh", "-c"],
                            image: "istio/kubectl:1.5.10",
                            "image Pull Policy": "IfNotPresent",
                            name: "wait-for-apiext",
                            "security Context": { "run As User": 8888 }
                          }
                        ],
                        "restart Policy": "Always",
                        "security Context": { "run As User": 8888 },
                        "service Account Name": "edge-stack",
                        "termination Grace Period Seconds": 0,
                        volumes: [
                          {
                            "downward API": {
                              items: [
                                {
                                  "field Ref": { "field Path": "metadata.labels" },
                                  path: "labels"
                                }
                              ]
                            },
                            name: "ambassador-pod-info"
                          }
                        ]
                      }
                    }
                  },
                  name: "edge-stack",
                  namespace: "ambassador",
                  labels: {
                    "app.kubernetes.io/instance": "edge-stack",
                    "app.kubernetes.io/managed-by": "getambassador.io",
                    "app.kubernetes.io/name": "edge-stack",
                    "app.kubernetes.io/part-of": "edge-stack",
                    product: "aes"
                  }
                },
                traits: {
                  meshmap: {
                    edges: [
                      {
                        data: {
                          id: "6a8f392a-6d03-4376-8c41-669c513ba6bb",
                          metadata: { port: 8877, protocol: "TCP" },
                          source: "4f9d3c78-2304-47bf-84cb-f34c95485d65",
                          subType: "Network",
                          target: "6a66429c-181f-4a78-83e4-0be23ed730e3"
                        },
                        style: {
                          "control-point-distances": null,
                          "control-point-weights": "0.5",
                          "curve-style": "bezier",
                          "haystack-radius": "0",
                          "line-color": "rgb(153,153,153)",
                          "line-style": "dotted",
                          opacity: "1",
                          "segment-distances": "20px",
                          "segment-weights": "0.5",
                          "target-arrow-shape": "vee",
                          "taxi-direction": "auto",
                          "taxi-turn": "50%",
                          "taxi-turn-min-distance": "10px",
                          width: "1.5px"
                        }
                      },
                      {
                        data: {
                          id: "ffcadef7-b7f8-4fad-8f07-ebf6230c6978",
                          metadata: { port: 80, protocol: "TCP" },
                          source: "b9702cdb-2390-4f2a-a9c7-096ef1a7d84d",
                          subType: "Network",
                          target: "6a66429c-181f-4a78-83e4-0be23ed730e3"
                        },
                        style: {
                          "control-point-distances": null,
                          "control-point-weights": "0.5",
                          "curve-style": "bezier",
                          "haystack-radius": "0",
                          "line-color": "rgb(153,153,153)",
                          "line-style": "dotted",
                          opacity: "1",
                          "segment-distances": "20px",
                          "segment-weights": "0.5",
                          "target-arrow-shape": "vee",
                          "taxi-direction": "auto",
                          "taxi-turn": "50%",
                          "taxi-turn-min-distance": "10px",
                          width: "1.5px"
                        }
                      }
                    ],
                    id: "6a66429c-181f-4a78-83e4-0be23ed730e3",
                    "meshmodel-metadata": {
                      capabilities:
                        '{\n  "fieldRefs": [\n    {\n      "fieldPath": "spec.template.spec.containers",\n      "jsonSchemaPath": "properties.spec.allOf[0].properties.template.allOf[0].properties.spec.allOf[0].properties.containers.items.allOf[0]",\n      "component": {\n        "kind": "Container",\n        "model": "meshery-core"\n      },\n      "renderChildren": true\n    }\n  ],\n  "designer": {\n    "edit": {\n      "shape": {\n        "convert-shape": false\n      }\n    }\n  }\n}',
                      defaultData: "",
                      genealogy: "parent",
                      isAnnotation: false,
                      isCustomResource: false,
                      isModelAnnotation: "FALSE",
                      isNamespaced: true,
                      logoURL: "Created by Meshery Authors",
                      model: "kubernetes",
                      modelDisplayName: "Kubernetes",
                      primaryColor: "#326CE5",
                      secondaryColor: "#7aa1f0",
                      shape: "round-rectangle",
                      shapePolygonPoints: "",
                      status: "enabled",
                      styleOverrides: {
                        "background-opacity": 0.5,
                        "border-width": 2,
                        "z-index": 3
                      },
                      styles: '{"border-width":2,"background-opacity":0.5}',
                      subCategory: "",
                      svgColor:
                        "ui/public/static/img/meshmodels/kubernetes/color/deployment-color.svg",
                      svgComplete:
                        "ui/public/static/img/meshmodels/kubernetes/complete/deployment-complete.svg",
                      svgWhite:
                        "ui/public/static/img/meshmodels/kubernetes/white/deployment-white.svg"
                    },
                    position: { posX: -57.75, posY: 52.5 },
                    whiteboardData: { style: {} }
                  }
                },
                type: "Deployment"
              }
            }
          },
          inventoryLength: 0
        },
        position: { x: -61.75, y: 57.5 },
        group: "nodes",
        removed: false,
        selected: false,
        selectable: true,
        locked: false,
        grabbable: true,
        pannable: false,
        classes: ""
      },
      {
        data: {
          id: "b9702cdb-2390-4f2a-a9c7-096ef1a7d84d",
          type: "Service",
          meshType: "kubernetes",
          model: "kubernetes",
          config: {
            name: "edge-stack",
            services: {
              "b9702cdb-2390-4f2a-a9c7-096ef1a7d84d": {
                namespace: "ambassador",
                settings: {
                  spec: {
                    ports: [
                      { name: "http", port: 80, "target Port": 8080 },
                      { name: "https", port: 443, "target Port": 8443 }
                    ],
                    selector: {
                      "app.kubernetes.io/instance": "edge-stack",
                      "app.kubernetes.io/name": "edge-stack",
                      profile: "main"
                    },
                    type: "LoadBalancer"
                  },
                  name: "edge-stack",
                  namespace: "ambassador",
                  labels: {
                    "app.kubernetes.io/component": "ambassador-service",
                    "app.kubernetes.io/instance": "edge-stack",
                    "app.kubernetes.io/managed-by": "getambassador.io",
                    "app.kubernetes.io/name": "edge-stack",
                    "app.kubernetes.io/part-of": "edge-stack",
                    product: "aes"
                  },
                  annotations: {
                    "a8r.io/bugs": "https://github.com/datawire/ambassador/issues",
                    "a8r.io/chat": "http://a8r.io/Slack",
                    "a8r.io/dependencies": "edge-stack-redis.ambassador",
                    "a8r.io/description":
                      "The Ambassador Edge Stack goes beyond traditional API Gateways and Ingress Controllers with the advanced edge features needed to support developer self-service and full-cycle development.",
                    "a8r.io/documentation":
                      "https://www.getambassador.io/docs/edge-stack/latest/",
                    "a8r.io/owner": "Ambassador Labs",
                    "a8r.io/repository": "github.com/datawire/ambassador",
                    "a8r.io/support": "https://www.getambassador.io/about-us/support/"
                  }
                },
                traits: {
                  meshmap: {
                    edges: [
                      {
                        data: {
                          id: "ffcadef7-b7f8-4fad-8f07-ebf6230c6978",
                          metadata: { port: 80, protocol: "TCP" },
                          source: "b9702cdb-2390-4f2a-a9c7-096ef1a7d84d",
                          subType: "Network",
                          target: "6a66429c-181f-4a78-83e4-0be23ed730e3"
                        },
                        style: {
                          "control-point-distances": null,
                          "control-point-weights": "0.5",
                          "curve-style": "bezier",
                          "haystack-radius": "0",
                          "line-color": "rgb(153,153,153)",
                          "line-style": "dotted",
                          opacity: "1",
                          "segment-distances": "20px",
                          "segment-weights": "0.5",
                          "target-arrow-shape": "vee",
                          "taxi-direction": "auto",
                          "taxi-turn": "50%",
                          "taxi-turn-min-distance": "10px",
                          width: "1.5px"
                        }
                      },
                      {
                        data: {
                          id: "18063b44-442d-4c82-923c-8c78d09f572d",
                          metadata: { port: 80, protocol: "TCP" },
                          source: "b9702cdb-2390-4f2a-a9c7-096ef1a7d84d",
                          subType: "Network",
                          target: "d1ec2c27-9f42-4bd1-91f7-290752a59d91"
                        },
                        style: {
                          "control-point-distances": null,
                          "control-point-weights": "0.5",
                          "curve-style": "bezier",
                          "haystack-radius": "0",
                          "line-color": "rgb(153,153,153)",
                          "line-style": "dotted",
                          opacity: "1",
                          "segment-distances": "20px",
                          "segment-weights": "0.5",
                          "target-arrow-shape": "vee",
                          "taxi-direction": "auto",
                          "taxi-turn": "50%",
                          "taxi-turn-min-distance": "10px",
                          width: "1.5px"
                        }
                      }
                    ],
                    id: "b9702cdb-2390-4f2a-a9c7-096ef1a7d84d",
                    "meshmodel-metadata": {
                      capabilities: "",
                      defaultData: "",
                      genealogy: "",
                      isAnnotation: false,
                      isCustomResource: false,
                      isModelAnnotation: "FALSE",
                      isNamespaced: true,
                      logoURL:
                        "https://github.com/cncf/artwork/blob/master/projects/kubernetes/icon/white/kubernetes-icon-white.svg",
                      model: "kubernetes",
                      modelDisplayName: "Kubernetes",
                      primaryColor: "#326CE5",
                      secondaryColor: "#7aa1f0",
                      shape: "round-triangle",
                      shapePolygonPoints: "",
                      status: "enabled",
                      styleOverrides: {
                        "background-position-y": 4.5,
                        height: 20,
                        padding: 12,
                        width: 20,
                        x: "10px",
                        y: "12px",
                        "z-index": 3
                      },
                      styles:
                        '{"height":20,"width":20,"padding":12,"background-position-y":4.5,"x":"10px","y":"12px"}',
                      subCategory: "",
                      svgColor:
                        "ui/public/static/img/meshmodels/kubernetes/color/service-color.svg",
                      svgComplete: "",
                      svgWhite:
                        "ui/public/static/img/meshmodels/kubernetes/white/service-white.svg"
                    },
                    position: { posX: 20.71206623443326, posY: 97.00171526190805 },
                    whiteboardData: { style: {} }
                  }
                },
                type: "Service"
              }
            }
          },
          inventoryLength: 0
        },
        position: { x: 20.71206623443326, y: 97.00171526190805 },
        group: "nodes",
        removed: false,
        selected: false,
        selectable: true,
        locked: false,
        grabbable: true,
        pannable: false,
        classes: ""
      },
      {
        data: {
          elementType: "FIELD_REF_NODE",
          label: "spec.template.spec.containers[0]",
          fieldPath: "spec.template.spec.containers[0]",
          jsonSchemaPath:
            "properties.spec.allOf[0].properties.template.allOf[0].properties.spec.allOf[0].properties.containers.items.allOf[0]",
          schemaFragment: {
            description:
              "A single application container that you want to run within a pod.",
            properties: {
              args: {
                description:
                  'Arguments to the entrypoint. The container image\'s CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container\'s environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell',
                items: { default: "", type: "string" },
                type: "array"
              },
              command: {
                description:
                  'Entrypoint array. Not executed within a shell. The container image\'s ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container\'s environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell',
                items: { default: "", type: "string" },
                type: "array"
              },
              env: {
                description:
                  "List of environment variables to set in the container. Cannot be updated.",
                items: {
                  allOf: [
                    {
                      description:
                        "Env Var represents an environment variable present in a Container.",
                      properties: {
                        name: {
                          default: "",
                          description:
                            "Name of the environment variable. Must be a C_IDENTIFIER.",
                          type: "string"
                        },
                        value: {
                          description:
                            'Variable references $(VAR_NAME) are expanded using the previously defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to "".',
                          type: "string"
                        },
                        "value From": {
                          allOf: [
                            {
                              description:
                                "Env Var Source represents a source for the value of an Env Var.",
                              properties: {
                                "config Map Key Ref": {
                                  allOf: [
                                    {
                                      description: "Selects a key from a Config Map.",
                                      properties: {
                                        key: {
                                          default: "",
                                          description: "The key to select.",
                                          type: "string"
                                        },
                                        name: {
                                          description:
                                            "Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names",
                                          type: "string"
                                        },
                                        optional: {
                                          description:
                                            "Specify whether the Config Map or its key must be defined",
                                          type: "boolean"
                                        }
                                      },
                                      required: ["key"],
                                      type: "object",
                                      "x-kubernetes-map-type": "atomic"
                                    }
                                  ],
                                  description: "Selects a key of a Config Map."
                                },
                                "field Ref": {
                                  allOf: [
                                    {
                                      description:
                                        "Object Field Selector selects an API Versioned field of an object.",
                                      properties: {
                                        "api Version": {
                                          description:
                                            'Version of the schema the Field Path is written in terms of, defaults to "v1".',
                                          type: "string"
                                        },
                                        "field Path": {
                                          default: "",
                                          description:
                                            "Path of the field to select in the specified API version.",
                                          type: "string"
                                        }
                                      },
                                      required: ["field Path"],
                                      type: "object",
                                      "x-kubernetes-map-type": "atomic"
                                    }
                                  ],
                                  description:
                                    "Selects a field of the pod: supports metadata.name, metadata.namespace, `metadata.labels['<KEY>']`, `metadata.annotations['<KEY>']`, spec.node Name, spec.service Account Name, status.host IP, status.pod IP, status.pod I Ps."
                                },
                                "resource Field Ref": {
                                  allOf: [
                                    {
                                      description:
                                        "Resource Field Selector represents container resources (cpu, memory) and their output format",
                                      properties: {
                                        "container Name": {
                                          description:
                                            "Container name: required for volumes, optional for env vars",
                                          type: "string"
                                        },
                                        divisor: {
                                          allOf: [
                                            {
                                              description:
                                                'Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and As Int64() accessors. The serialization format is: ``` <quantity> ::= <signed Number><suffix> (Note that <suffix> may be empty, from the "" case in <decimal SI>.) <digit> ::= 0 | 1 | ... | 9 <digits> ::= <digit> | <digit><digits> <number> ::= <digits> | <digits>.<digits> | <digits>. | .<digits> <sign> ::= "+" | "-" <signed Number> ::= <number> | <sign><number> <suffix> ::= <binary SI> | <decimal Exponent> | <decimal SI> <binary SI> ::= Ki | Mi | Gi | Ti | Pi | Ei (International System of units; See: http://physics.nist.gov/cuu/Units/binary.html) <decimal SI> ::= m | "" | k | M | G | T | P | E (Note that 1024 = 1Ki but 1000 = 1k; I didn\'t choose the capitalization.) <decimal Exponent> ::= "e" <signed Number> | "E" <signed Number> ``` No matter which of the three exponent forms is used, no quantity may represent a number greater than 2^63-1 in magnitude, nor may it have more than 3 decimal places. Numbers larger or more precise will be capped or rounded up. (E.g.: 0.1m will rounded up to 1m.) This may be extended in the future if we require larger or smaller quantities. When a Quantity is parsed from a string, it will remember the type of suffix it had, and will use the same type again when it is serialized. Before serializing, Quantity will be put in "canonical form". This means that Exponent/suffix will be adjusted up or down (with a corresponding increase or decrease in Mantissa) such that: - No precision is lost - No fractional digits will be emitted - The exponent (or suffix) is as large as possible. The sign will be omitted unless the number is negative. Examples: - 1.5 will be serialized as "1500m" - 1.5Gi will be serialized as "1536Mi" Note that the quantity will NEVER be internally represented by a floating point number. That is the whole point of this exercise. Non-canonical values will still parse as long as they are well formed, but will be re-emitted in their canonical form. (So always use canonical form, or don\'t diff.) This format is intended to make it difficult to use these numbers without writing some sort of special handling code in the hopes that that will cause implementors to also use a fixed point implementation.',
                                              oneOf: [
                                                { type: "string" },
                                                { type: "number" }
                                              ]
                                            }
                                          ],
                                          default: {},
                                          description:
                                            'Specifies the output format of the exposed resources, defaults to "1"'
                                        },
                                        resource: {
                                          default: "",
                                          description: "Required: resource to select",
                                          type: "string"
                                        }
                                      },
                                      required: ["resource"],
                                      type: "object",
                                      "x-kubernetes-map-type": "atomic"
                                    }
                                  ],
                                  description:
                                    "Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, limits.ephemeral-storage, requests.cpu, requests.memory and requests.ephemeral-storage) are currently supported."
                                },
                                "secret Key Ref": {
                                  allOf: [
                                    {
                                      description:
                                        "Secret Key Selector selects a key of a Secret.",
                                      properties: {
                                        key: {
                                          default: "",
                                          description:
                                            "The key of the secret to select from. Must be a valid secret key.",
                                          type: "string"
                                        },
                                        name: {
                                          description:
                                            "Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names",
                                          type: "string"
                                        },
                                        optional: {
                                          description:
                                            "Specify whether the Secret or its key must be defined",
                                          type: "boolean"
                                        }
                                      },
                                      required: ["key"],
                                      type: "object",
                                      "x-kubernetes-map-type": "atomic"
                                    }
                                  ],
                                  description:
                                    "Selects a key of a secret in the pod's namespace"
                                }
                              },
                              type: "object"
                            }
                          ],
                          description:
                            "Source for the environment variable's value. Cannot be used if value is not empty."
                        }
                      },
                      required: ["name"],
                      type: "object"
                    }
                  ],
                  default: {}
                },
                type: "array",
                "x-kubernetes-patch-merge-key": "name",
                "x-kubernetes-patch-strategy": "merge"
              },
              "env From": {
                description:
                  "List of sources to populate environment variables in the container. The keys defined within a source must be a C_IDENTIFIER. All invalid keys will be reported as an event when the container is starting. When a key exists in multiple sources, the value associated with the last source will take precedence. Values defined by an Env with a duplicate key will take precedence. Cannot be updated.",
                items: {
                  allOf: [
                    {
                      description:
                        "Env From Source represents the source of a set of Config Maps",
                      properties: {
                        "config Map Ref": {
                          allOf: [
                            {
                              description:
                                "Config Map Env Source selects a Config Map to populate the environment variables with. The contents of the target Config Map's Data field will represent the key-value pairs as environment variables.",
                              properties: {
                                name: {
                                  description:
                                    "Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names",
                                  type: "string"
                                },
                                optional: {
                                  description:
                                    "Specify whether the Config Map must be defined",
                                  type: "boolean"
                                }
                              },
                              type: "object"
                            }
                          ],
                          description: "The Config Map to select from"
                        },
                        prefix: {
                          description:
                            "An optional identifier to prepend to each key in the Config Map. Must be a C_IDENTIFIER.",
                          type: "string"
                        },
                        "secret Ref": {
                          allOf: [
                            {
                              description:
                                "Secret Env Source selects a Secret to populate the environment variables with. The contents of the target Secret's Data field will represent the key-value pairs as environment variables.",
                              properties: {
                                name: {
                                  description:
                                    "Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names",
                                  type: "string"
                                },
                                optional: {
                                  description:
                                    "Specify whether the Secret must be defined",
                                  type: "boolean"
                                }
                              },
                              type: "object"
                            }
                          ],
                          description: "The Secret to select from"
                        }
                      },
                      type: "object"
                    }
                  ],
                  default: {}
                },
                type: "array"
              },
              image: {
                description:
                  "Container image name. More info: https://kubernetes.io/docs/concepts/containers/images This field is optional to allow higher level config management to default or override container images in workload controllers like Deployments and Stateful Sets.",
                type: "string"
              },
              "image Pull Policy": {
                description:
                  'Image pull policy. One of Always, Never, If Not Present. Defaults to Always if :latest tag is specified, or If Not Present otherwise. Cannot be updated. More info: https://kubernetes.io/docs/concepts/containers/images#updating-images Possible enum values: - `"Always"` means that kubelet always attempts to pull the latest image. Container will fail If the pull fails. - `"If Not Present"` means that kubelet pulls if the image isn\'t present on disk. Container will fail if the image isn\'t present and the pull fails. - `"Never"` means that kubelet never pulls an image, but only uses a local image. Container will fail if the image isn\'t present',
                enum: ["Always", "IfNotPresent", "Never"],
                type: "string"
              },
              lifecycle: {
                allOf: [
                  {
                    description:
                      "Lifecycle describes actions that the management system should take in response to container lifecycle events. For the Post Start and Pre Stop lifecycle handlers, management of the container blocks until the action is complete, unless the container process fails, in which case the handler is aborted.",
                    properties: {
                      "post Start": {
                        allOf: [
                          {
                            description:
                              "Lifecycle Handler defines a specific action that should be taken in a lifecycle hook. One and only one of the fields, except TCP Socket must be specified.",
                            properties: {
                              exec: {
                                allOf: [
                                  {
                                    description:
                                      'Exec Action describes a "run in container" action.',
                                    properties: {
                                      command: {
                                        description:
                                          "Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.",
                                        items: { default: "", type: "string" },
                                        type: "array"
                                      }
                                    },
                                    type: "object"
                                  }
                                ],
                                description: "Exec specifies the action to take."
                              },
                              "http Get": {
                                allOf: [
                                  {
                                    description:
                                      "HTTP Get Action describes an action based on HTTP Get requests.",
                                    properties: {
                                      host: {
                                        description:
                                          'Host name to connect to, defaults to the pod IP. You probably want to set "Host" in http Headers instead.',
                                        type: "string"
                                      },
                                      "http Headers": {
                                        description:
                                          "Custom headers to set in the request. HTTP allows repeated headers.",
                                        items: {
                                          allOf: [
                                            {
                                              description:
                                                "HTTP Header describes a custom header to be used in HTTP probes",
                                              properties: {
                                                name: {
                                                  default: "",
                                                  description: "The header field name",
                                                  type: "string"
                                                },
                                                value: {
                                                  default: "",
                                                  description: "The header field value",
                                                  type: "string"
                                                }
                                              },
                                              required: ["name", "value"],
                                              type: "object"
                                            }
                                          ],
                                          default: {}
                                        },
                                        type: "array"
                                      },
                                      path: {
                                        description: "Path to access on the HTTP server.",
                                        type: "string"
                                      },
                                      port: {
                                        allOf: [
                                          {
                                            description:
                                              "Int Or String is a type that can hold an int32 or a string. When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type. This allows you to have, for example, a JSON field that can accept a name or number.",
                                            format: "int-or-string",
                                            oneOf: [
                                              { type: "integer" },
                                              { type: "string" }
                                            ]
                                          }
                                        ],
                                        default: {},
                                        description:
                                          "Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME."
                                      },
                                      scheme: {
                                        description:
                                          'Scheme to use for connecting to the host. Defaults to HTTP. Possible enum values: - `"HTTP"` means that the scheme used will be http:// - `"HTTPS"` means that the scheme used will be https://',
                                        enum: ["HTTP", "HTTPS"],
                                        type: "string"
                                      }
                                    },
                                    required: ["port"],
                                    type: "object"
                                  }
                                ],
                                description:
                                  "HTTP Get specifies the http request to perform."
                              },
                              "tcp Socket": {
                                allOf: [
                                  {
                                    description:
                                      "TCP Socket Action describes an action based on opening a socket",
                                    properties: {
                                      host: {
                                        description:
                                          "Optional: Host name to connect to, defaults to the pod IP.",
                                        type: "string"
                                      },
                                      port: {
                                        allOf: [
                                          {
                                            description:
                                              "Int Or String is a type that can hold an int32 or a string. When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type. This allows you to have, for example, a JSON field that can accept a name or number.",
                                            format: "int-or-string",
                                            oneOf: [
                                              { type: "integer" },
                                              { type: "string" }
                                            ]
                                          }
                                        ],
                                        default: {},
                                        description:
                                          "Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME."
                                      }
                                    },
                                    required: ["port"],
                                    type: "object"
                                  }
                                ],
                                description:
                                  "Deprecated. TCP Socket is NOT supported as a Lifecycle Handler and kept for the backward compatibility. There are no validation of this field and lifecycle hooks will fail in runtime when tcp handler is specified."
                              }
                            },
                            type: "object"
                          }
                        ],
                        description:
                          "Post Start is called immediately after a container is created. If the handler fails, the container is terminated and restarted according to its restart policy. Other management of the container blocks until the hook completes. More info: https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/#container-hooks"
                      },
                      "pre Stop": {
                        allOf: [
                          {
                            description:
                              "Lifecycle Handler defines a specific action that should be taken in a lifecycle hook. One and only one of the fields, except TCP Socket must be specified.",
                            properties: {
                              exec: {
                                allOf: [
                                  {
                                    description:
                                      'Exec Action describes a "run in container" action.',
                                    properties: {
                                      command: {
                                        description:
                                          "Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.",
                                        items: { default: "", type: "string" },
                                        type: "array"
                                      }
                                    },
                                    type: "object"
                                  }
                                ],
                                description: "Exec specifies the action to take."
                              },
                              "http Get": {
                                allOf: [
                                  {
                                    description:
                                      "HTTP Get Action describes an action based on HTTP Get requests.",
                                    properties: {
                                      host: {
                                        description:
                                          'Host name to connect to, defaults to the pod IP. You probably want to set "Host" in http Headers instead.',
                                        type: "string"
                                      },
                                      "http Headers": {
                                        description:
                                          "Custom headers to set in the request. HTTP allows repeated headers.",
                                        items: {
                                          allOf: [
                                            {
                                              description:
                                                "HTTP Header describes a custom header to be used in HTTP probes",
                                              properties: {
                                                name: {
                                                  default: "",
                                                  description: "The header field name",
                                                  type: "string"
                                                },
                                                value: {
                                                  default: "",
                                                  description: "The header field value",
                                                  type: "string"
                                                }
                                              },
                                              required: ["name", "value"],
                                              type: "object"
                                            }
                                          ],
                                          default: {}
                                        },
                                        type: "array"
                                      },
                                      path: {
                                        description: "Path to access on the HTTP server.",
                                        type: "string"
                                      },
                                      port: {
                                        allOf: [
                                          {
                                            description:
                                              "Int Or String is a type that can hold an int32 or a string. When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type. This allows you to have, for example, a JSON field that can accept a name or number.",
                                            format: "int-or-string",
                                            oneOf: [
                                              { type: "integer" },
                                              { type: "string" }
                                            ]
                                          }
                                        ],
                                        default: {},
                                        description:
                                          "Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME."
                                      },
                                      scheme: {
                                        description:
                                          'Scheme to use for connecting to the host. Defaults to HTTP. Possible enum values: - `"HTTP"` means that the scheme used will be http:// - `"HTTPS"` means that the scheme used will be https://',
                                        enum: ["HTTP", "HTTPS"],
                                        type: "string"
                                      }
                                    },
                                    required: ["port"],
                                    type: "object"
                                  }
                                ],
                                description:
                                  "HTTP Get specifies the http request to perform."
                              },
                              "tcp Socket": {
                                allOf: [
                                  {
                                    description:
                                      "TCP Socket Action describes an action based on opening a socket",
                                    properties: {
                                      host: {
                                        description:
                                          "Optional: Host name to connect to, defaults to the pod IP.",
                                        type: "string"
                                      },
                                      port: {
                                        allOf: [
                                          {
                                            description:
                                              "Int Or String is a type that can hold an int32 or a string. When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type. This allows you to have, for example, a JSON field that can accept a name or number.",
                                            format: "int-or-string",
                                            oneOf: [
                                              { type: "integer" },
                                              { type: "string" }
                                            ]
                                          }
                                        ],
                                        default: {},
                                        description:
                                          "Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME."
                                      }
                                    },
                                    required: ["port"],
                                    type: "object"
                                  }
                                ],
                                description:
                                  "Deprecated. TCP Socket is NOT supported as a Lifecycle Handler and kept for the backward compatibility. There are no validation of this field and lifecycle hooks will fail in runtime when tcp handler is specified."
                              }
                            },
                            type: "object"
                          }
                        ],
                        description:
                          "Pre Stop is called immediately before a container is terminated due to an API request or management event such as liveness/startup probe failure, preemption, resource contention, etc. The handler is not called if the container crashes or exits. The Pod's termination grace period countdown begins before the Pre Stop hook is executed. Regardless of the outcome of the handler, the container will eventually terminate within the Pod's termination grace period (unless delayed by finalizers). Other management of the container blocks until the hook completes or until the termination grace period is reached. More info: https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/#container-hooks"
                      }
                    },
                    type: "object"
                  }
                ],
                description:
                  "Actions that the management system should take in response to container lifecycle events. Cannot be updated."
              },
              "liveness Probe": {
                allOf: [
                  {
                    description:
                      "Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic.",
                    properties: {
                      exec: {
                        allOf: [
                          {
                            description:
                              'Exec Action describes a "run in container" action.',
                            properties: {
                              command: {
                                description:
                                  "Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.",
                                items: { default: "", type: "string" },
                                type: "array"
                              }
                            },
                            type: "object"
                          }
                        ],
                        description: "Exec specifies the action to take."
                      },
                      "failure Threshold": {
                        description:
                          "Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.",
                        format: "int32",
                        type: "integer"
                      },
                      grpc: {
                        allOf: [
                          {
                            properties: {
                              port: {
                                default: 0,
                                description:
                                  "Port number of the g RPC service. Number must be in the range 1 to 65535.",
                                format: "int32",
                                type: "integer"
                              },
                              service: {
                                default: "",
                                description:
                                  "Service is the name of the service to place in the g RPC Health Check Request (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md). If this is not specified, the default behavior is defined by g RPC.",
                                type: "string"
                              }
                            },
                            required: ["port"],
                            type: "object"
                          }
                        ],
                        description:
                          "GRPC specifies an action involving a GRPC port. This is a beta field and requires enabling GRPC Container Probe feature gate."
                      },
                      "http Get": {
                        allOf: [
                          {
                            description:
                              "HTTP Get Action describes an action based on HTTP Get requests.",
                            properties: {
                              host: {
                                description:
                                  'Host name to connect to, defaults to the pod IP. You probably want to set "Host" in http Headers instead.',
                                type: "string"
                              },
                              "http Headers": {
                                description:
                                  "Custom headers to set in the request. HTTP allows repeated headers.",
                                items: {
                                  allOf: [
                                    {
                                      description:
                                        "HTTP Header describes a custom header to be used in HTTP probes",
                                      properties: {
                                        name: {
                                          default: "",
                                          description: "The header field name",
                                          type: "string"
                                        },
                                        value: {
                                          default: "",
                                          description: "The header field value",
                                          type: "string"
                                        }
                                      },
                                      required: ["name", "value"],
                                      type: "object"
                                    }
                                  ],
                                  default: {}
                                },
                                type: "array"
                              },
                              path: {
                                description: "Path to access on the HTTP server.",
                                type: "string"
                              },
                              port: {
                                allOf: [
                                  {
                                    description:
                                      "Int Or String is a type that can hold an int32 or a string. When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type. This allows you to have, for example, a JSON field that can accept a name or number.",
                                    format: "int-or-string",
                                    oneOf: [{ type: "integer" }, { type: "string" }]
                                  }
                                ],
                                default: {},
                                description:
                                  "Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME."
                              },
                              scheme: {
                                description:
                                  'Scheme to use for connecting to the host. Defaults to HTTP. Possible enum values: - `"HTTP"` means that the scheme used will be http:// - `"HTTPS"` means that the scheme used will be https://',
                                enum: ["HTTP", "HTTPS"],
                                type: "string"
                              }
                            },
                            required: ["port"],
                            type: "object"
                          }
                        ],
                        description: "HTTP Get specifies the http request to perform."
                      },
                      "initial Delay Seconds": {
                        description:
                          "Number of seconds after the container has started before liveness probes are initiated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes",
                        format: "int32",
                        type: "integer"
                      },
                      "period Seconds": {
                        description:
                          "How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1.",
                        format: "int32",
                        type: "integer"
                      },
                      "success Threshold": {
                        description:
                          "Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1.",
                        format: "int32",
                        type: "integer"
                      },
                      "tcp Socket": {
                        allOf: [
                          {
                            description:
                              "TCP Socket Action describes an action based on opening a socket",
                            properties: {
                              host: {
                                description:
                                  "Optional: Host name to connect to, defaults to the pod IP.",
                                type: "string"
                              },
                              port: {
                                allOf: [
                                  {
                                    description:
                                      "Int Or String is a type that can hold an int32 or a string. When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type. This allows you to have, for example, a JSON field that can accept a name or number.",
                                    format: "int-or-string",
                                    oneOf: [{ type: "integer" }, { type: "string" }]
                                  }
                                ],
                                default: {},
                                description:
                                  "Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME."
                              }
                            },
                            required: ["port"],
                            type: "object"
                          }
                        ],
                        description:
                          "TCP Socket specifies an action involving a TCP port."
                      },
                      "termination Grace Period Seconds": {
                        description:
                          "Optional duration in seconds the pod needs to terminate gracefully upon probe failure. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. If this value is nil, the pod's termination Grace Period Seconds will be used. Otherwise, this value overrides the value provided by the pod spec. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). This is a beta field and requires enabling Probe Termination Grace Period feature gate. Minimum value is 1. spec.termination Grace Period Seconds is used if unset.",
                        format: "int64",
                        type: "integer"
                      },
                      "timeout Seconds": {
                        description:
                          "Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes",
                        format: "int32",
                        type: "integer"
                      }
                    },
                    type: "object"
                  }
                ],
                description:
                  "Periodic probe of container liveness. Container will be restarted if the probe fails. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes"
              },
              name: {
                default: "",
                description:
                  "Name of the container specified as a DNS_LABEL. Each container in a pod must have a unique name (DNS_LABEL). Cannot be updated.",
                type: "string"
              },
              ports: {
                description:
                  'List of ports to expose from the container. Not specifying a port here DOES NOT prevent that port from being exposed. Any port which is listening on the default "0.0.0.0" address inside a container will be accessible from the network. Modifying this array with strategic merge patch may corrupt the data. For more information See https://github.com/kubernetes/kubernetes/issues/108255. Cannot be updated.',
                items: {
                  allOf: [
                    {
                      description:
                        "Container Port represents a network port in a single container.",
                      properties: {
                        "container Port": {
                          default: 0,
                          description:
                            "Number of port to expose on the pod's IP address. This must be a valid port number, 0 < x < 65536.",
                          format: "int32",
                          type: "integer"
                        },
                        "host IP": {
                          description: "What host IP to bind the external port to.",
                          type: "string"
                        },
                        "host Port": {
                          description:
                            "Number of port to expose on the host. If specified, this must be a valid port number, 0 < x < 65536. If Host Network is specified, this must match Container Port. Most containers do not need this.",
                          format: "int32",
                          type: "integer"
                        },
                        name: {
                          description:
                            "If specified, this must be an IANA_SVC_NAME and unique within the pod. Each named port in a pod must have a unique name. Name for the port that can be referred to by services.",
                          type: "string"
                        },
                        protocol: {
                          default: "TCP",
                          description:
                            'Protocol for port. Must be UDP, TCP, or SCTP. Defaults to "TCP". Possible enum values: - `"SCTP"` is the SCTP protocol. - `"TCP"` is the TCP protocol. - `"UDP"` is the UDP protocol.',
                          enum: ["SCTP", "TCP", "UDP"],
                          type: "string"
                        }
                      },
                      required: ["container Port"],
                      type: "object"
                    }
                  ],
                  default: {}
                },
                type: "array",
                "x-kubernetes-list-map-keys": ["container Port", "protocol"],
                "x-kubernetes-list-type": "map",
                "x-kubernetes-patch-merge-key": "container Port",
                "x-kubernetes-patch-strategy": "merge"
              },
              "readiness Probe": {
                allOf: [
                  {
                    description:
                      "Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic.",
                    properties: {
                      exec: {
                        allOf: [
                          {
                            description:
                              'Exec Action describes a "run in container" action.',
                            properties: {
                              command: {
                                description:
                                  "Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.",
                                items: { default: "", type: "string" },
                                type: "array"
                              }
                            },
                            type: "object"
                          }
                        ],
                        description: "Exec specifies the action to take."
                      },
                      "failure Threshold": {
                        description:
                          "Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.",
                        format: "int32",
                        type: "integer"
                      },
                      grpc: {
                        allOf: [
                          {
                            properties: {
                              port: {
                                default: 0,
                                description:
                                  "Port number of the g RPC service. Number must be in the range 1 to 65535.",
                                format: "int32",
                                type: "integer"
                              },
                              service: {
                                default: "",
                                description:
                                  "Service is the name of the service to place in the g RPC Health Check Request (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md). If this is not specified, the default behavior is defined by g RPC.",
                                type: "string"
                              }
                            },
                            required: ["port"],
                            type: "object"
                          }
                        ],
                        description:
                          "GRPC specifies an action involving a GRPC port. This is a beta field and requires enabling GRPC Container Probe feature gate."
                      },
                      "http Get": {
                        allOf: [
                          {
                            description:
                              "HTTP Get Action describes an action based on HTTP Get requests.",
                            properties: {
                              host: {
                                description:
                                  'Host name to connect to, defaults to the pod IP. You probably want to set "Host" in http Headers instead.',
                                type: "string"
                              },
                              "http Headers": {
                                description:
                                  "Custom headers to set in the request. HTTP allows repeated headers.",
                                items: {
                                  allOf: [
                                    {
                                      description:
                                        "HTTP Header describes a custom header to be used in HTTP probes",
                                      properties: {
                                        name: {
                                          default: "",
                                          description: "The header field name",
                                          type: "string"
                                        },
                                        value: {
                                          default: "",
                                          description: "The header field value",
                                          type: "string"
                                        }
                                      },
                                      required: ["name", "value"],
                                      type: "object"
                                    }
                                  ],
                                  default: {}
                                },
                                type: "array"
                              },
                              path: {
                                description: "Path to access on the HTTP server.",
                                type: "string"
                              },
                              port: {
                                allOf: [
                                  {
                                    description:
                                      "Int Or String is a type that can hold an int32 or a string. When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type. This allows you to have, for example, a JSON field that can accept a name or number.",
                                    format: "int-or-string",
                                    oneOf: [{ type: "integer" }, { type: "string" }]
                                  }
                                ],
                                default: {},
                                description:
                                  "Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME."
                              },
                              scheme: {
                                description:
                                  'Scheme to use for connecting to the host. Defaults to HTTP. Possible enum values: - `"HTTP"` means that the scheme used will be http:// - `"HTTPS"` means that the scheme used will be https://',
                                enum: ["HTTP", "HTTPS"],
                                type: "string"
                              }
                            },
                            required: ["port"],
                            type: "object"
                          }
                        ],
                        description: "HTTP Get specifies the http request to perform."
                      },
                      "initial Delay Seconds": {
                        description:
                          "Number of seconds after the container has started before liveness probes are initiated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes",
                        format: "int32",
                        type: "integer"
                      },
                      "period Seconds": {
                        description:
                          "How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1.",
                        format: "int32",
                        type: "integer"
                      },
                      "success Threshold": {
                        description:
                          "Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1.",
                        format: "int32",
                        type: "integer"
                      },
                      "tcp Socket": {
                        allOf: [
                          {
                            description:
                              "TCP Socket Action describes an action based on opening a socket",
                            properties: {
                              host: {
                                description:
                                  "Optional: Host name to connect to, defaults to the pod IP.",
                                type: "string"
                              },
                              port: {
                                allOf: [
                                  {
                                    description:
                                      "Int Or String is a type that can hold an int32 or a string. When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type. This allows you to have, for example, a JSON field that can accept a name or number.",
                                    format: "int-or-string",
                                    oneOf: [{ type: "integer" }, { type: "string" }]
                                  }
                                ],
                                default: {},
                                description:
                                  "Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME."
                              }
                            },
                            required: ["port"],
                            type: "object"
                          }
                        ],
                        description:
                          "TCP Socket specifies an action involving a TCP port."
                      },
                      "termination Grace Period Seconds": {
                        description:
                          "Optional duration in seconds the pod needs to terminate gracefully upon probe failure. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. If this value is nil, the pod's termination Grace Period Seconds will be used. Otherwise, this value overrides the value provided by the pod spec. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). This is a beta field and requires enabling Probe Termination Grace Period feature gate. Minimum value is 1. spec.termination Grace Period Seconds is used if unset.",
                        format: "int64",
                        type: "integer"
                      },
                      "timeout Seconds": {
                        description:
                          "Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes",
                        format: "int32",
                        type: "integer"
                      }
                    },
                    type: "object"
                  }
                ],
                description:
                  "Periodic probe of container service readiness. Container will be removed from service endpoints if the probe fails. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes"
              },
              resources: {
                allOf: [
                  {
                    description:
                      "Resource Requirements describes the compute resource requirements.",
                    properties: {
                      limits: {
                        additionalProperties: {
                          allOf: [
                            {
                              description:
                                'Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and As Int64() accessors. The serialization format is: ``` <quantity> ::= <signed Number><suffix> (Note that <suffix> may be empty, from the "" case in <decimal SI>.) <digit> ::= 0 | 1 | ... | 9 <digits> ::= <digit> | <digit><digits> <number> ::= <digits> | <digits>.<digits> | <digits>. | .<digits> <sign> ::= "+" | "-" <signed Number> ::= <number> | <sign><number> <suffix> ::= <binary SI> | <decimal Exponent> | <decimal SI> <binary SI> ::= Ki | Mi | Gi | Ti | Pi | Ei (International System of units; See: http://physics.nist.gov/cuu/Units/binary.html) <decimal SI> ::= m | "" | k | M | G | T | P | E (Note that 1024 = 1Ki but 1000 = 1k; I didn\'t choose the capitalization.) <decimal Exponent> ::= "e" <signed Number> | "E" <signed Number> ``` No matter which of the three exponent forms is used, no quantity may represent a number greater than 2^63-1 in magnitude, nor may it have more than 3 decimal places. Numbers larger or more precise will be capped or rounded up. (E.g.: 0.1m will rounded up to 1m.) This may be extended in the future if we require larger or smaller quantities. When a Quantity is parsed from a string, it will remember the type of suffix it had, and will use the same type again when it is serialized. Before serializing, Quantity will be put in "canonical form". This means that Exponent/suffix will be adjusted up or down (with a corresponding increase or decrease in Mantissa) such that: - No precision is lost - No fractional digits will be emitted - The exponent (or suffix) is as large as possible. The sign will be omitted unless the number is negative. Examples: - 1.5 will be serialized as "1500m" - 1.5Gi will be serialized as "1536Mi" Note that the quantity will NEVER be internally represented by a floating point number. That is the whole point of this exercise. Non-canonical values will still parse as long as they are well formed, but will be re-emitted in their canonical form. (So always use canonical form, or don\'t diff.) This format is intended to make it difficult to use these numbers without writing some sort of special handling code in the hopes that that will cause implementors to also use a fixed point implementation.',
                              oneOf: [{ type: "string" }, { type: "number" }]
                            }
                          ],
                          default: {}
                        },
                        description:
                          "Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/",
                        type: "object"
                      },
                      requests: {
                        additionalProperties: {
                          allOf: [
                            {
                              description:
                                'Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and As Int64() accessors. The serialization format is: ``` <quantity> ::= <signed Number><suffix> (Note that <suffix> may be empty, from the "" case in <decimal SI>.) <digit> ::= 0 | 1 | ... | 9 <digits> ::= <digit> | <digit><digits> <number> ::= <digits> | <digits>.<digits> | <digits>. | .<digits> <sign> ::= "+" | "-" <signed Number> ::= <number> | <sign><number> <suffix> ::= <binary SI> | <decimal Exponent> | <decimal SI> <binary SI> ::= Ki | Mi | Gi | Ti | Pi | Ei (International System of units; See: http://physics.nist.gov/cuu/Units/binary.html) <decimal SI> ::= m | "" | k | M | G | T | P | E (Note that 1024 = 1Ki but 1000 = 1k; I didn\'t choose the capitalization.) <decimal Exponent> ::= "e" <signed Number> | "E" <signed Number> ``` No matter which of the three exponent forms is used, no quantity may represent a number greater than 2^63-1 in magnitude, nor may it have more than 3 decimal places. Numbers larger or more precise will be capped or rounded up. (E.g.: 0.1m will rounded up to 1m.) This may be extended in the future if we require larger or smaller quantities. When a Quantity is parsed from a string, it will remember the type of suffix it had, and will use the same type again when it is serialized. Before serializing, Quantity will be put in "canonical form". This means that Exponent/suffix will be adjusted up or down (with a corresponding increase or decrease in Mantissa) such that: - No precision is lost - No fractional digits will be emitted - The exponent (or suffix) is as large as possible. The sign will be omitted unless the number is negative. Examples: - 1.5 will be serialized as "1500m" - 1.5Gi will be serialized as "1536Mi" Note that the quantity will NEVER be internally represented by a floating point number. That is the whole point of this exercise. Non-canonical values will still parse as long as they are well formed, but will be re-emitted in their canonical form. (So always use canonical form, or don\'t diff.) This format is intended to make it difficult to use these numbers without writing some sort of special handling code in the hopes that that will cause implementors to also use a fixed point implementation.',
                              oneOf: [{ type: "string" }, { type: "number" }]
                            }
                          ],
                          default: {}
                        },
                        description:
                          "Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/",
                        type: "object"
                      }
                    },
                    type: "object"
                  }
                ],
                default: {},
                description:
                  "Compute Resources required by this container. Cannot be updated. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/"
              },
              "security Context": {
                allOf: [
                  {
                    description:
                      "Security Context holds security configuration that will be applied to a container. Some fields are present in both Security Context and Pod Security Context. When both are set, the values in Security Context take precedence.",
                    properties: {
                      "allow Privilege Escalation": {
                        description:
                          "Allow Privilege Escalation controls whether a process can gain more privileges than its parent process. This bool directly controls if the no_new_privs flag will be set on the container process. Allow Privilege Escalation is true always when the container is: 1) run as Privileged 2) has CAP_SYS_ADMIN Note that this field cannot be set when spec.os.name is windows.",
                        type: "boolean"
                      },
                      capabilities: {
                        allOf: [
                          {
                            description:
                              "Adds and removes POSIX capabilities from running containers.",
                            properties: {
                              add: {
                                description: "Added capabilities",
                                items: { default: "", type: "string" },
                                type: "array"
                              },
                              drop: {
                                description: "Removed capabilities",
                                items: { default: "", type: "string" },
                                type: "array"
                              }
                            },
                            type: "object"
                          }
                        ],
                        description:
                          "The capabilities to add/drop when running containers. Defaults to the default set of capabilities granted by the container runtime. Note that this field cannot be set when spec.os.name is windows."
                      },
                      privileged: {
                        description:
                          "Run container in privileged mode. Processes in privileged containers are essentially equivalent to root on the host. Defaults to false. Note that this field cannot be set when spec.os.name is windows.",
                        type: "boolean"
                      },
                      "proc Mount": {
                        description:
                          "proc Mount denotes the type of proc mount to use for the containers. The default is Default Proc Mount which uses the container runtime defaults for readonly paths and masked paths. This requires the Proc Mount Type feature flag to be enabled. Note that this field cannot be set when spec.os.name is windows.",
                        type: "string"
                      },
                      "read Only Root Filesystem": {
                        description:
                          "Whether this container has a read-only root filesystem. Default is false. Note that this field cannot be set when spec.os.name is windows.",
                        type: "boolean"
                      },
                      "run As Group": {
                        description:
                          "The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in Pod Security Context. If set in both Security Context and Pod Security Context, the value specified in Security Context takes precedence. Note that this field cannot be set when spec.os.name is windows.",
                        format: "int64",
                        type: "integer"
                      },
                      "run As Non Root": {
                        description:
                          "Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in Pod Security Context. If set in both Security Context and Pod Security Context, the value specified in Security Context takes precedence.",
                        type: "boolean"
                      },
                      "run As User": {
                        description:
                          "The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in Pod Security Context. If set in both Security Context and Pod Security Context, the value specified in Security Context takes precedence. Note that this field cannot be set when spec.os.name is windows.",
                        format: "int64",
                        type: "integer"
                      },
                      "se Linux Options": {
                        allOf: [
                          {
                            description:
                              "SE Linux Options are the labels to be applied to the container",
                            properties: {
                              level: {
                                description:
                                  "Level is SE Linux level label that applies to the container.",
                                type: "string"
                              },
                              role: {
                                description:
                                  "Role is a SE Linux role label that applies to the container.",
                                type: "string"
                              },
                              type: {
                                description:
                                  "Type is a SE Linux type label that applies to the container.",
                                type: "string"
                              },
                              user: {
                                description:
                                  "User is a SE Linux user label that applies to the container.",
                                type: "string"
                              }
                            },
                            type: "object"
                          }
                        ],
                        description:
                          "The SE Linux context to be applied to the container. If unspecified, the container runtime will allocate a random SE Linux context for each container. May also be set in Pod Security Context. If set in both Security Context and Pod Security Context, the value specified in Security Context takes precedence. Note that this field cannot be set when spec.os.name is windows."
                      },
                      "seccomp Profile": {
                        allOf: [
                          {
                            description:
                              "Seccomp Profile defines a pod/container's seccomp profile settings. Only one profile source may be set.",
                            properties: {
                              "localhost Profile": {
                                description:
                                  'localhost Profile indicates a profile defined in a file on the node should be used. The profile must be preconfigured on the node to work. Must be a descending path, relative to the kubelet\'s configured seccomp profile location. Must only be set if type is "Localhost".',
                                type: "string"
                              },
                              type: {
                                default: "",
                                description:
                                  'type indicates which kind of seccomp profile will be applied. Valid options are: Localhost - a profile defined in a file on the node should be used. Runtime Default - the container runtime default profile should be used. Unconfined - no profile should be applied. Possible enum values: - `"Localhost"` indicates a profile defined in a file on the node should be used. The file\'s location relative to <kubelet-root-dir>/seccomp. - `"Runtime Default"` represents the default container runtime seccomp profile. - `"Unconfined"` indicates no seccomp profile is applied (A.K.A. unconfined).',
                                enum: ["Localhost", "RuntimeDefault", "Unconfined"],
                                type: "string"
                              }
                            },
                            required: ["type"],
                            type: "object",
                            "x-kubernetes-unions": [
                              {
                                discriminator: "type",
                                "fields-to-discriminate By": {
                                  "localhost Profile": "Localhost Profile"
                                }
                              }
                            ]
                          }
                        ],
                        description:
                          "The seccomp options to use by this container. If seccomp options are provided at both the pod & container level, the container options override the pod options. Note that this field cannot be set when spec.os.name is windows."
                      },
                      "windows Options": {
                        allOf: [
                          {
                            description:
                              "Windows Security Context Options contain Windows-specific options and credentials.",
                            properties: {
                              "gmsa Credential Spec": {
                                description:
                                  "GMSA Credential Spec is where the GMSA admission webhook (https://github.com/kubernetes-sigs/windows-gmsa) inlines the contents of the GMSA credential spec named by the GMSA Credential Spec Name field.",
                                type: "string"
                              },
                              "gmsa Credential Spec Name": {
                                description:
                                  "GMSA Credential Spec Name is the name of the GMSA credential spec to use.",
                                type: "string"
                              },
                              "host Process": {
                                description:
                                  "Host Process determines if a container should be run as a 'Host Process' container. This field is alpha-level and will only be honored by components that enable the Windows Host Process Containers feature flag. Setting this field without the feature flag will result in errors when validating the Pod. All of a Pod's containers must have the same effective Host Process value (it is not allowed to have a mix of Host Process containers and non-Host Process containers). In addition, if Host Process is true then Host Network must also be set to true.",
                                type: "boolean"
                              },
                              "run As User Name": {
                                description:
                                  "The User Name in Windows to run the entrypoint of the container process. Defaults to the user specified in image metadata if unspecified. May also be set in Pod Security Context. If set in both Security Context and Pod Security Context, the value specified in Security Context takes precedence.",
                                type: "string"
                              }
                            },
                            type: "object"
                          }
                        ],
                        description:
                          "The Windows specific settings applied to all containers. If unspecified, the options from the Pod Security Context will be used. If set in both Security Context and Pod Security Context, the value specified in Security Context takes precedence. Note that this field cannot be set when spec.os.name is linux."
                      }
                    },
                    type: "object"
                  }
                ],
                description:
                  "Security Context defines the security options the container should be run with. If set, the fields of Security Context override the equivalent fields of Pod Security Context. More info: https://kubernetes.io/docs/tasks/configure-pod-container/security-context/"
              },
              "startup Probe": {
                allOf: [
                  {
                    description:
                      "Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic.",
                    properties: {
                      exec: {
                        allOf: [
                          {
                            description:
                              'Exec Action describes a "run in container" action.',
                            properties: {
                              command: {
                                description:
                                  "Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.",
                                items: { default: "", type: "string" },
                                type: "array"
                              }
                            },
                            type: "object"
                          }
                        ],
                        description: "Exec specifies the action to take."
                      },
                      "failure Threshold": {
                        description:
                          "Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.",
                        format: "int32",
                        type: "integer"
                      },
                      grpc: {
                        allOf: [
                          {
                            properties: {
                              port: {
                                default: 0,
                                description:
                                  "Port number of the g RPC service. Number must be in the range 1 to 65535.",
                                format: "int32",
                                type: "integer"
                              },
                              service: {
                                default: "",
                                description:
                                  "Service is the name of the service to place in the g RPC Health Check Request (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md). If this is not specified, the default behavior is defined by g RPC.",
                                type: "string"
                              }
                            },
                            required: ["port"],
                            type: "object"
                          }
                        ],
                        description:
                          "GRPC specifies an action involving a GRPC port. This is a beta field and requires enabling GRPC Container Probe feature gate."
                      },
                      "http Get": {
                        allOf: [
                          {
                            description:
                              "HTTP Get Action describes an action based on HTTP Get requests.",
                            properties: {
                              host: {
                                description:
                                  'Host name to connect to, defaults to the pod IP. You probably want to set "Host" in http Headers instead.',
                                type: "string"
                              },
                              "http Headers": {
                                description:
                                  "Custom headers to set in the request. HTTP allows repeated headers.",
                                items: {
                                  allOf: [
                                    {
                                      description:
                                        "HTTP Header describes a custom header to be used in HTTP probes",
                                      properties: {
                                        name: {
                                          default: "",
                                          description: "The header field name",
                                          type: "string"
                                        },
                                        value: {
                                          default: "",
                                          description: "The header field value",
                                          type: "string"
                                        }
                                      },
                                      required: ["name", "value"],
                                      type: "object"
                                    }
                                  ],
                                  default: {}
                                },
                                type: "array"
                              },
                              path: {
                                description: "Path to access on the HTTP server.",
                                type: "string"
                              },
                              port: {
                                allOf: [
                                  {
                                    description:
                                      "Int Or String is a type that can hold an int32 or a string. When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type. This allows you to have, for example, a JSON field that can accept a name or number.",
                                    format: "int-or-string",
                                    oneOf: [{ type: "integer" }, { type: "string" }]
                                  }
                                ],
                                default: {},
                                description:
                                  "Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME."
                              },
                              scheme: {
                                description:
                                  'Scheme to use for connecting to the host. Defaults to HTTP. Possible enum values: - `"HTTP"` means that the scheme used will be http:// - `"HTTPS"` means that the scheme used will be https://',
                                enum: ["HTTP", "HTTPS"],
                                type: "string"
                              }
                            },
                            required: ["port"],
                            type: "object"
                          }
                        ],
                        description: "HTTP Get specifies the http request to perform."
                      },
                      "initial Delay Seconds": {
                        description:
                          "Number of seconds after the container has started before liveness probes are initiated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes",
                        format: "int32",
                        type: "integer"
                      },
                      "period Seconds": {
                        description:
                          "How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1.",
                        format: "int32",
                        type: "integer"
                      },
                      "success Threshold": {
                        description:
                          "Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1.",
                        format: "int32",
                        type: "integer"
                      },
                      "tcp Socket": {
                        allOf: [
                          {
                            description:
                              "TCP Socket Action describes an action based on opening a socket",
                            properties: {
                              host: {
                                description:
                                  "Optional: Host name to connect to, defaults to the pod IP.",
                                type: "string"
                              },
                              port: {
                                allOf: [
                                  {
                                    description:
                                      "Int Or String is a type that can hold an int32 or a string. When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type. This allows you to have, for example, a JSON field that can accept a name or number.",
                                    format: "int-or-string",
                                    oneOf: [{ type: "integer" }, { type: "string" }]
                                  }
                                ],
                                default: {},
                                description:
                                  "Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME."
                              }
                            },
                            required: ["port"],
                            type: "object"
                          }
                        ],
                        description:
                          "TCP Socket specifies an action involving a TCP port."
                      },
                      "termination Grace Period Seconds": {
                        description:
                          "Optional duration in seconds the pod needs to terminate gracefully upon probe failure. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. If this value is nil, the pod's termination Grace Period Seconds will be used. Otherwise, this value overrides the value provided by the pod spec. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). This is a beta field and requires enabling Probe Termination Grace Period feature gate. Minimum value is 1. spec.termination Grace Period Seconds is used if unset.",
                        format: "int64",
                        type: "integer"
                      },
                      "timeout Seconds": {
                        description:
                          "Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes",
                        format: "int32",
                        type: "integer"
                      }
                    },
                    type: "object"
                  }
                ],
                description:
                  "Startup Probe indicates that the Pod has successfully initialized. If specified, no other probes are executed until this completes successfully. If this probe fails, the Pod will be restarted, just as if the liveness Probe failed. This can be used to provide different probe parameters at the beginning of a Pod's lifecycle, when it might take a long time to load data or warm a cache, than during steady-state operation. This cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes"
              },
              stdin: {
                description:
                  "Whether this container should allocate a buffer for stdin in the container runtime. If this is not set, reads from stdin in the container will always result in EOF. Default is false.",
                type: "boolean"
              },
              "stdin Once": {
                description:
                  "Whether the container runtime should close the stdin channel after it has been opened by a single attach. When stdin is true the stdin stream will remain open across multiple attach sessions. If stdin Once is set to true, stdin is opened on container start, is empty until the first client attaches to stdin, and then remains open and accepts data until the client disconnects, at which time stdin is closed and remains closed until the container is restarted. If this flag is false, a container processes that reads from stdin will never receive an EOF. Default is false",
                type: "boolean"
              },
              "termination Message Path": {
                description:
                  "Optional: Path at which the file to which the container's termination message will be written is mounted into the container's filesystem. Message written is intended to be brief final status, such as an assertion failure message. Will be truncated by the node if greater than 4096 bytes. The total message length across all containers will be limited to 12kb. Defaults to /dev/termination-log. Cannot be updated.",
                type: "string"
              },
              "termination Message Policy": {
                description:
                  'Indicate how the termination message should be populated. File will use the contents of termination Message Path to populate the container status message on both success and failure. Fallback To Logs On Error will use the last chunk of container log output if the termination message file is empty and the container exited with an error. The log output is limited to 2048 bytes or 80 lines, whichever is smaller. Defaults to File. Cannot be updated. Possible enum values: - `"Fallback To Logs On Error"` will read the most recent contents of the container logs for the container status message when the container exits with an error and the termination Message Path has no contents. - `"File"` is the default behavior and will set the container status message to the contents of the container\'s termination Message Path when the container exits.',
                enum: ["FallbackToLogsOnError", "File"],
                type: "string"
              },
              tty: {
                description:
                  "Whether this container should allocate a TTY for itself, also requires 'stdin' to be true. Default is false.",
                type: "boolean"
              },
              "volume Devices": {
                description:
                  "volume Devices is the list of block devices to be used by the container.",
                items: {
                  allOf: [
                    {
                      description:
                        "volume Device describes a mapping of a raw block device within a container.",
                      properties: {
                        "device Path": {
                          default: "",
                          description:
                            "device Path is the path inside of the container that the device will be mapped to.",
                          type: "string"
                        },
                        name: {
                          default: "",
                          description:
                            "name must match the name of a persistent Volume Claim in the pod",
                          type: "string"
                        }
                      },
                      required: ["name", "device Path"],
                      type: "object"
                    }
                  ],
                  default: {}
                },
                type: "array",
                "x-kubernetes-patch-merge-key": "device Path",
                "x-kubernetes-patch-strategy": "merge"
              },
              "volume Mounts": {
                description:
                  "Pod volumes to mount into the container's filesystem. Cannot be updated.",
                items: {
                  allOf: [
                    {
                      description:
                        "Volume Mount describes a mounting of a Volume within a container.",
                      properties: {
                        "mount Path": {
                          default: "",
                          description:
                            "Path within the container at which the volume should be mounted. Must not contain ':'.",
                          type: "string"
                        },
                        "mount Propagation": {
                          description:
                            "mount Propagation determines how mounts are propagated from the host to container and the other way around. When not set, Mount Propagation None is used. This field is beta in 1.10.",
                          type: "string"
                        },
                        name: {
                          default: "",
                          description: "This must match the Name of a Volume.",
                          type: "string"
                        },
                        "read Only": {
                          description:
                            "Mounted read-only if true, read-write otherwise (false or unspecified). Defaults to false.",
                          type: "boolean"
                        },
                        "sub Path": {
                          description:
                            "Path within the volume from which the container's volume should be mounted. Defaults to \"\" (volume's root).",
                          type: "string"
                        },
                        "sub Path Expr": {
                          description:
                            "Expanded path within the volume from which the container's volume should be mounted. Behaves similarly to Sub Path but environment variable references $(VAR_NAME) are expanded using the container's environment. Defaults to \"\" (volume's root). Sub Path Expr and Sub Path are mutually exclusive.",
                          type: "string"
                        }
                      },
                      required: ["name", "mount Path"],
                      type: "object"
                    }
                  ],
                  default: {}
                },
                type: "array",
                "x-kubernetes-patch-merge-key": "mount Path",
                "x-kubernetes-patch-strategy": "merge"
              },
              "working Dir": {
                description:
                  "Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image. Cannot be updated.",
                type: "string"
              }
            },
            required: ["name"],
            type: "object"
          },
          componentDefinition: {
            id: "fcd41e59-cb70-481c-9302-9221e389087c",
            schemaVersion: "core.meshery.io/v1beta1",
            version: "v1.0.0",
            displayName: "Container",
            description: "",
            format: "JSON",
            model: {
              id: "b2626b4d-0761-57bb-b27a-9dc5339b0c86",
              schemaVersion: "core.meshery.io/v1beta1",
              version: "v1.0.0",
              name: "meshery-core",
              displayName: "Meshery Core",
              description: "",
              status: "enabled",
              hostID: "26e64aa8-2d86-57bd-92b3-2a73160d27b4",
              registrant: { hostname: "artifacthub" },
              category: { name: "Orchestration & Management", metadata: null },
              subCategory: "App Definition and Development",
              metadata: {
                isAnnotation: false,
                subCategory: "App Definition and Development",
                svgColor:
                  "ui/public/static/img/meshmodels/meshery-core/color/meshery-core-color.svg",
                svgComplete: "",
                svgWhite:
                  "ui/public/static/img/meshmodels/meshery-core/color/meshery-core-color.svg"
              },
              model: { version: "0.7.2" },
              components: null,
              relationships: null
            },
            metadata: {
              capabilities:
                '{\n  "designer": {\n    "capabilities": {\n      "config": true,\n      "label": false,\n      "policy": false,\n      "relationships": false,\n      "json-schema": false,\n      "permissions": false,\n      "workflow": false,\n      "gitops": false,\n      "history": false\n    },\n    "supportsCompoundDragAndDrop": false,\n    "edit": {\n      "config": true,\n      "copy": false,\n      "delete": true,\n      "duplicate": false,\n      "reset-styles": false,\n      "resolve": false,\n      "lock": false,\n      "shape": {\n        "convert-shape": false\n      },\n      "style": false\n    },\n    "label": {\n      "edit": false,\n      "show": true,\n      "sync-with-config-property": "name"\n    }\n  }\n}',
              defaultData: "",
              genealogy: "",
              hasInvalidSchema: true,
              isAnnotation: true,
              primaryColor: "#326CE5",
              secondaryColor: "#00D3A9",
              shape: "circle",
              shapePolygonPoints: "",
              status: "enabled",
              styleOverrides: "",
              styles: "",
              subCategory: "",
              svgColor:
                "ui/public/static/img/meshmodels/meshery-core/color/container-color.svg",
              svgComplete: "",
              svgWhite:
                "ui/public/static/img/meshmodels/meshery-core/white/container-white.svg"
            },
            component: {
              kind: "Container",
              version: "core.meshery.io/v1alpha1",
              schema: "{}"
            },
            duplicates: 6
          },
          parent: "d1ec2c27-9f42-4bd1-91f7-290752a59d91",
          id: "03351f05-31d2-4eb6-b374-4645b6889ada",
          config: {
            services: {
              "03351f05-31d2-4eb6-b374-4645b6889ada": { settings: { name: "agent" } }
            }
          }
        },
        position: { x: 118.35302250930877, y: 19.549326575940697 },
        group: "nodes",
        removed: false,
        selected: false,
        selectable: true,
        locked: false,
        grabbable: true,
        pannable: false,
        classes: "fieldRefNode"
      },
      {
        data: {
          elementType: "FIELD_REF_NODE",
          label: "spec.template.spec.containers[0]",
          fieldPath: "spec.template.spec.containers[0]",
          jsonSchemaPath:
            "properties.spec.allOf[0].properties.template.allOf[0].properties.spec.allOf[0].properties.containers.items.allOf[0]",
          schemaFragment: {
            description:
              "A single application container that you want to run within a pod.",
            properties: {
              args: {
                description:
                  'Arguments to the entrypoint. The container image\'s CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container\'s environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell',
                items: { default: "", type: "string" },
                type: "array"
              },
              command: {
                description:
                  'Entrypoint array. Not executed within a shell. The container image\'s ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container\'s environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell',
                items: { default: "", type: "string" },
                type: "array"
              },
              env: {
                description:
                  "List of environment variables to set in the container. Cannot be updated.",
                items: {
                  allOf: [
                    {
                      description:
                        "Env Var represents an environment variable present in a Container.",
                      properties: {
                        name: {
                          default: "",
                          description:
                            "Name of the environment variable. Must be a C_IDENTIFIER.",
                          type: "string"
                        },
                        value: {
                          description:
                            'Variable references $(VAR_NAME) are expanded using the previously defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to "".',
                          type: "string"
                        },
                        "value From": {
                          allOf: [
                            {
                              description:
                                "Env Var Source represents a source for the value of an Env Var.",
                              properties: {
                                "config Map Key Ref": {
                                  allOf: [
                                    {
                                      description: "Selects a key from a Config Map.",
                                      properties: {
                                        key: {
                                          default: "",
                                          description: "The key to select.",
                                          type: "string"
                                        },
                                        name: {
                                          description:
                                            "Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names",
                                          type: "string"
                                        },
                                        optional: {
                                          description:
                                            "Specify whether the Config Map or its key must be defined",
                                          type: "boolean"
                                        }
                                      },
                                      required: ["key"],
                                      type: "object",
                                      "x-kubernetes-map-type": "atomic"
                                    }
                                  ],
                                  description: "Selects a key of a Config Map."
                                },
                                "field Ref": {
                                  allOf: [
                                    {
                                      description:
                                        "Object Field Selector selects an API Versioned field of an object.",
                                      properties: {
                                        "api Version": {
                                          description:
                                            'Version of the schema the Field Path is written in terms of, defaults to "v1".',
                                          type: "string"
                                        },
                                        "field Path": {
                                          default: "",
                                          description:
                                            "Path of the field to select in the specified API version.",
                                          type: "string"
                                        }
                                      },
                                      required: ["field Path"],
                                      type: "object",
                                      "x-kubernetes-map-type": "atomic"
                                    }
                                  ],
                                  description:
                                    "Selects a field of the pod: supports metadata.name, metadata.namespace, `metadata.labels['<KEY>']`, `metadata.annotations['<KEY>']`, spec.node Name, spec.service Account Name, status.host IP, status.pod IP, status.pod I Ps."
                                },
                                "resource Field Ref": {
                                  allOf: [
                                    {
                                      description:
                                        "Resource Field Selector represents container resources (cpu, memory) and their output format",
                                      properties: {
                                        "container Name": {
                                          description:
                                            "Container name: required for volumes, optional for env vars",
                                          type: "string"
                                        },
                                        divisor: {
                                          allOf: [
                                            {
                                              description:
                                                'Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and As Int64() accessors. The serialization format is: ``` <quantity> ::= <signed Number><suffix> (Note that <suffix> may be empty, from the "" case in <decimal SI>.) <digit> ::= 0 | 1 | ... | 9 <digits> ::= <digit> | <digit><digits> <number> ::= <digits> | <digits>.<digits> | <digits>. | .<digits> <sign> ::= "+" | "-" <signed Number> ::= <number> | <sign><number> <suffix> ::= <binary SI> | <decimal Exponent> | <decimal SI> <binary SI> ::= Ki | Mi | Gi | Ti | Pi | Ei (International System of units; See: http://physics.nist.gov/cuu/Units/binary.html) <decimal SI> ::= m | "" | k | M | G | T | P | E (Note that 1024 = 1Ki but 1000 = 1k; I didn\'t choose the capitalization.) <decimal Exponent> ::= "e" <signed Number> | "E" <signed Number> ``` No matter which of the three exponent forms is used, no quantity may represent a number greater than 2^63-1 in magnitude, nor may it have more than 3 decimal places. Numbers larger or more precise will be capped or rounded up. (E.g.: 0.1m will rounded up to 1m.) This may be extended in the future if we require larger or smaller quantities. When a Quantity is parsed from a string, it will remember the type of suffix it had, and will use the same type again when it is serialized. Before serializing, Quantity will be put in "canonical form". This means that Exponent/suffix will be adjusted up or down (with a corresponding increase or decrease in Mantissa) such that: - No precision is lost - No fractional digits will be emitted - The exponent (or suffix) is as large as possible. The sign will be omitted unless the number is negative. Examples: - 1.5 will be serialized as "1500m" - 1.5Gi will be serialized as "1536Mi" Note that the quantity will NEVER be internally represented by a floating point number. That is the whole point of this exercise. Non-canonical values will still parse as long as they are well formed, but will be re-emitted in their canonical form. (So always use canonical form, or don\'t diff.) This format is intended to make it difficult to use these numbers without writing some sort of special handling code in the hopes that that will cause implementors to also use a fixed point implementation.',
                                              oneOf: [
                                                { type: "string" },
                                                { type: "number" }
                                              ]
                                            }
                                          ],
                                          default: {},
                                          description:
                                            'Specifies the output format of the exposed resources, defaults to "1"'
                                        },
                                        resource: {
                                          default: "",
                                          description: "Required: resource to select",
                                          type: "string"
                                        }
                                      },
                                      required: ["resource"],
                                      type: "object",
                                      "x-kubernetes-map-type": "atomic"
                                    }
                                  ],
                                  description:
                                    "Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, limits.ephemeral-storage, requests.cpu, requests.memory and requests.ephemeral-storage) are currently supported."
                                },
                                "secret Key Ref": {
                                  allOf: [
                                    {
                                      description:
                                        "Secret Key Selector selects a key of a Secret.",
                                      properties: {
                                        key: {
                                          default: "",
                                          description:
                                            "The key of the secret to select from. Must be a valid secret key.",
                                          type: "string"
                                        },
                                        name: {
                                          description:
                                            "Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names",
                                          type: "string"
                                        },
                                        optional: {
                                          description:
                                            "Specify whether the Secret or its key must be defined",
                                          type: "boolean"
                                        }
                                      },
                                      required: ["key"],
                                      type: "object",
                                      "x-kubernetes-map-type": "atomic"
                                    }
                                  ],
                                  description:
                                    "Selects a key of a secret in the pod's namespace"
                                }
                              },
                              type: "object"
                            }
                          ],
                          description:
                            "Source for the environment variable's value. Cannot be used if value is not empty."
                        }
                      },
                      required: ["name"],
                      type: "object"
                    }
                  ],
                  default: {}
                },
                type: "array",
                "x-kubernetes-patch-merge-key": "name",
                "x-kubernetes-patch-strategy": "merge"
              },
              "env From": {
                description:
                  "List of sources to populate environment variables in the container. The keys defined within a source must be a C_IDENTIFIER. All invalid keys will be reported as an event when the container is starting. When a key exists in multiple sources, the value associated with the last source will take precedence. Values defined by an Env with a duplicate key will take precedence. Cannot be updated.",
                items: {
                  allOf: [
                    {
                      description:
                        "Env From Source represents the source of a set of Config Maps",
                      properties: {
                        "config Map Ref": {
                          allOf: [
                            {
                              description:
                                "Config Map Env Source selects a Config Map to populate the environment variables with. The contents of the target Config Map's Data field will represent the key-value pairs as environment variables.",
                              properties: {
                                name: {
                                  description:
                                    "Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names",
                                  type: "string"
                                },
                                optional: {
                                  description:
                                    "Specify whether the Config Map must be defined",
                                  type: "boolean"
                                }
                              },
                              type: "object"
                            }
                          ],
                          description: "The Config Map to select from"
                        },
                        prefix: {
                          description:
                            "An optional identifier to prepend to each key in the Config Map. Must be a C_IDENTIFIER.",
                          type: "string"
                        },
                        "secret Ref": {
                          allOf: [
                            {
                              description:
                                "Secret Env Source selects a Secret to populate the environment variables with. The contents of the target Secret's Data field will represent the key-value pairs as environment variables.",
                              properties: {
                                name: {
                                  description:
                                    "Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names",
                                  type: "string"
                                },
                                optional: {
                                  description:
                                    "Specify whether the Secret must be defined",
                                  type: "boolean"
                                }
                              },
                              type: "object"
                            }
                          ],
                          description: "The Secret to select from"
                        }
                      },
                      type: "object"
                    }
                  ],
                  default: {}
                },
                type: "array"
              },
              image: {
                description:
                  "Container image name. More info: https://kubernetes.io/docs/concepts/containers/images This field is optional to allow higher level config management to default or override container images in workload controllers like Deployments and Stateful Sets.",
                type: "string"
              },
              "image Pull Policy": {
                description:
                  'Image pull policy. One of Always, Never, If Not Present. Defaults to Always if :latest tag is specified, or If Not Present otherwise. Cannot be updated. More info: https://kubernetes.io/docs/concepts/containers/images#updating-images Possible enum values: - `"Always"` means that kubelet always attempts to pull the latest image. Container will fail If the pull fails. - `"If Not Present"` means that kubelet pulls if the image isn\'t present on disk. Container will fail if the image isn\'t present and the pull fails. - `"Never"` means that kubelet never pulls an image, but only uses a local image. Container will fail if the image isn\'t present',
                enum: ["Always", "IfNotPresent", "Never"],
                type: "string"
              },
              lifecycle: {
                allOf: [
                  {
                    description:
                      "Lifecycle describes actions that the management system should take in response to container lifecycle events. For the Post Start and Pre Stop lifecycle handlers, management of the container blocks until the action is complete, unless the container process fails, in which case the handler is aborted.",
                    properties: {
                      "post Start": {
                        allOf: [
                          {
                            description:
                              "Lifecycle Handler defines a specific action that should be taken in a lifecycle hook. One and only one of the fields, except TCP Socket must be specified.",
                            properties: {
                              exec: {
                                allOf: [
                                  {
                                    description:
                                      'Exec Action describes a "run in container" action.',
                                    properties: {
                                      command: {
                                        description:
                                          "Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.",
                                        items: { default: "", type: "string" },
                                        type: "array"
                                      }
                                    },
                                    type: "object"
                                  }
                                ],
                                description: "Exec specifies the action to take."
                              },
                              "http Get": {
                                allOf: [
                                  {
                                    description:
                                      "HTTP Get Action describes an action based on HTTP Get requests.",
                                    properties: {
                                      host: {
                                        description:
                                          'Host name to connect to, defaults to the pod IP. You probably want to set "Host" in http Headers instead.',
                                        type: "string"
                                      },
                                      "http Headers": {
                                        description:
                                          "Custom headers to set in the request. HTTP allows repeated headers.",
                                        items: {
                                          allOf: [
                                            {
                                              description:
                                                "HTTP Header describes a custom header to be used in HTTP probes",
                                              properties: {
                                                name: {
                                                  default: "",
                                                  description: "The header field name",
                                                  type: "string"
                                                },
                                                value: {
                                                  default: "",
                                                  description: "The header field value",
                                                  type: "string"
                                                }
                                              },
                                              required: ["name", "value"],
                                              type: "object"
                                            }
                                          ],
                                          default: {}
                                        },
                                        type: "array"
                                      },
                                      path: {
                                        description: "Path to access on the HTTP server.",
                                        type: "string"
                                      },
                                      port: {
                                        allOf: [
                                          {
                                            description:
                                              "Int Or String is a type that can hold an int32 or a string. When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type. This allows you to have, for example, a JSON field that can accept a name or number.",
                                            format: "int-or-string",
                                            oneOf: [
                                              { type: "integer" },
                                              { type: "string" }
                                            ]
                                          }
                                        ],
                                        default: {},
                                        description:
                                          "Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME."
                                      },
                                      scheme: {
                                        description:
                                          'Scheme to use for connecting to the host. Defaults to HTTP. Possible enum values: - `"HTTP"` means that the scheme used will be http:// - `"HTTPS"` means that the scheme used will be https://',
                                        enum: ["HTTP", "HTTPS"],
                                        type: "string"
                                      }
                                    },
                                    required: ["port"],
                                    type: "object"
                                  }
                                ],
                                description:
                                  "HTTP Get specifies the http request to perform."
                              },
                              "tcp Socket": {
                                allOf: [
                                  {
                                    description:
                                      "TCP Socket Action describes an action based on opening a socket",
                                    properties: {
                                      host: {
                                        description:
                                          "Optional: Host name to connect to, defaults to the pod IP.",
                                        type: "string"
                                      },
                                      port: {
                                        allOf: [
                                          {
                                            description:
                                              "Int Or String is a type that can hold an int32 or a string. When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type. This allows you to have, for example, a JSON field that can accept a name or number.",
                                            format: "int-or-string",
                                            oneOf: [
                                              { type: "integer" },
                                              { type: "string" }
                                            ]
                                          }
                                        ],
                                        default: {},
                                        description:
                                          "Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME."
                                      }
                                    },
                                    required: ["port"],
                                    type: "object"
                                  }
                                ],
                                description:
                                  "Deprecated. TCP Socket is NOT supported as a Lifecycle Handler and kept for the backward compatibility. There are no validation of this field and lifecycle hooks will fail in runtime when tcp handler is specified."
                              }
                            },
                            type: "object"
                          }
                        ],
                        description:
                          "Post Start is called immediately after a container is created. If the handler fails, the container is terminated and restarted according to its restart policy. Other management of the container blocks until the hook completes. More info: https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/#container-hooks"
                      },
                      "pre Stop": {
                        allOf: [
                          {
                            description:
                              "Lifecycle Handler defines a specific action that should be taken in a lifecycle hook. One and only one of the fields, except TCP Socket must be specified.",
                            properties: {
                              exec: {
                                allOf: [
                                  {
                                    description:
                                      'Exec Action describes a "run in container" action.',
                                    properties: {
                                      command: {
                                        description:
                                          "Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.",
                                        items: { default: "", type: "string" },
                                        type: "array"
                                      }
                                    },
                                    type: "object"
                                  }
                                ],
                                description: "Exec specifies the action to take."
                              },
                              "http Get": {
                                allOf: [
                                  {
                                    description:
                                      "HTTP Get Action describes an action based on HTTP Get requests.",
                                    properties: {
                                      host: {
                                        description:
                                          'Host name to connect to, defaults to the pod IP. You probably want to set "Host" in http Headers instead.',
                                        type: "string"
                                      },
                                      "http Headers": {
                                        description:
                                          "Custom headers to set in the request. HTTP allows repeated headers.",
                                        items: {
                                          allOf: [
                                            {
                                              description:
                                                "HTTP Header describes a custom header to be used in HTTP probes",
                                              properties: {
                                                name: {
                                                  default: "",
                                                  description: "The header field name",
                                                  type: "string"
                                                },
                                                value: {
                                                  default: "",
                                                  description: "The header field value",
                                                  type: "string"
                                                }
                                              },
                                              required: ["name", "value"],
                                              type: "object"
                                            }
                                          ],
                                          default: {}
                                        },
                                        type: "array"
                                      },
                                      path: {
                                        description: "Path to access on the HTTP server.",
                                        type: "string"
                                      },
                                      port: {
                                        allOf: [
                                          {
                                            description:
                                              "Int Or String is a type that can hold an int32 or a string. When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type. This allows you to have, for example, a JSON field that can accept a name or number.",
                                            format: "int-or-string",
                                            oneOf: [
                                              { type: "integer" },
                                              { type: "string" }
                                            ]
                                          }
                                        ],
                                        default: {},
                                        description:
                                          "Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME."
                                      },
                                      scheme: {
                                        description:
                                          'Scheme to use for connecting to the host. Defaults to HTTP. Possible enum values: - `"HTTP"` means that the scheme used will be http:// - `"HTTPS"` means that the scheme used will be https://',
                                        enum: ["HTTP", "HTTPS"],
                                        type: "string"
                                      }
                                    },
                                    required: ["port"],
                                    type: "object"
                                  }
                                ],
                                description:
                                  "HTTP Get specifies the http request to perform."
                              },
                              "tcp Socket": {
                                allOf: [
                                  {
                                    description:
                                      "TCP Socket Action describes an action based on opening a socket",
                                    properties: {
                                      host: {
                                        description:
                                          "Optional: Host name to connect to, defaults to the pod IP.",
                                        type: "string"
                                      },
                                      port: {
                                        allOf: [
                                          {
                                            description:
                                              "Int Or String is a type that can hold an int32 or a string. When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type. This allows you to have, for example, a JSON field that can accept a name or number.",
                                            format: "int-or-string",
                                            oneOf: [
                                              { type: "integer" },
                                              { type: "string" }
                                            ]
                                          }
                                        ],
                                        default: {},
                                        description:
                                          "Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME."
                                      }
                                    },
                                    required: ["port"],
                                    type: "object"
                                  }
                                ],
                                description:
                                  "Deprecated. TCP Socket is NOT supported as a Lifecycle Handler and kept for the backward compatibility. There are no validation of this field and lifecycle hooks will fail in runtime when tcp handler is specified."
                              }
                            },
                            type: "object"
                          }
                        ],
                        description:
                          "Pre Stop is called immediately before a container is terminated due to an API request or management event such as liveness/startup probe failure, preemption, resource contention, etc. The handler is not called if the container crashes or exits. The Pod's termination grace period countdown begins before the Pre Stop hook is executed. Regardless of the outcome of the handler, the container will eventually terminate within the Pod's termination grace period (unless delayed by finalizers). Other management of the container blocks until the hook completes or until the termination grace period is reached. More info: https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/#container-hooks"
                      }
                    },
                    type: "object"
                  }
                ],
                description:
                  "Actions that the management system should take in response to container lifecycle events. Cannot be updated."
              },
              "liveness Probe": {
                allOf: [
                  {
                    description:
                      "Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic.",
                    properties: {
                      exec: {
                        allOf: [
                          {
                            description:
                              'Exec Action describes a "run in container" action.',
                            properties: {
                              command: {
                                description:
                                  "Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.",
                                items: { default: "", type: "string" },
                                type: "array"
                              }
                            },
                            type: "object"
                          }
                        ],
                        description: "Exec specifies the action to take."
                      },
                      "failure Threshold": {
                        description:
                          "Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.",
                        format: "int32",
                        type: "integer"
                      },
                      grpc: {
                        allOf: [
                          {
                            properties: {
                              port: {
                                default: 0,
                                description:
                                  "Port number of the g RPC service. Number must be in the range 1 to 65535.",
                                format: "int32",
                                type: "integer"
                              },
                              service: {
                                default: "",
                                description:
                                  "Service is the name of the service to place in the g RPC Health Check Request (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md). If this is not specified, the default behavior is defined by g RPC.",
                                type: "string"
                              }
                            },
                            required: ["port"],
                            type: "object"
                          }
                        ],
                        description:
                          "GRPC specifies an action involving a GRPC port. This is a beta field and requires enabling GRPC Container Probe feature gate."
                      },
                      "http Get": {
                        allOf: [
                          {
                            description:
                              "HTTP Get Action describes an action based on HTTP Get requests.",
                            properties: {
                              host: {
                                description:
                                  'Host name to connect to, defaults to the pod IP. You probably want to set "Host" in http Headers instead.',
                                type: "string"
                              },
                              "http Headers": {
                                description:
                                  "Custom headers to set in the request. HTTP allows repeated headers.",
                                items: {
                                  allOf: [
                                    {
                                      description:
                                        "HTTP Header describes a custom header to be used in HTTP probes",
                                      properties: {
                                        name: {
                                          default: "",
                                          description: "The header field name",
                                          type: "string"
                                        },
                                        value: {
                                          default: "",
                                          description: "The header field value",
                                          type: "string"
                                        }
                                      },
                                      required: ["name", "value"],
                                      type: "object"
                                    }
                                  ],
                                  default: {}
                                },
                                type: "array"
                              },
                              path: {
                                description: "Path to access on the HTTP server.",
                                type: "string"
                              },
                              port: {
                                allOf: [
                                  {
                                    description:
                                      "Int Or String is a type that can hold an int32 or a string. When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type. This allows you to have, for example, a JSON field that can accept a name or number.",
                                    format: "int-or-string",
                                    oneOf: [{ type: "integer" }, { type: "string" }]
                                  }
                                ],
                                default: {},
                                description:
                                  "Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME."
                              },
                              scheme: {
                                description:
                                  'Scheme to use for connecting to the host. Defaults to HTTP. Possible enum values: - `"HTTP"` means that the scheme used will be http:// - `"HTTPS"` means that the scheme used will be https://',
                                enum: ["HTTP", "HTTPS"],
                                type: "string"
                              }
                            },
                            required: ["port"],
                            type: "object"
                          }
                        ],
                        description: "HTTP Get specifies the http request to perform."
                      },
                      "initial Delay Seconds": {
                        description:
                          "Number of seconds after the container has started before liveness probes are initiated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes",
                        format: "int32",
                        type: "integer"
                      },
                      "period Seconds": {
                        description:
                          "How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1.",
                        format: "int32",
                        type: "integer"
                      },
                      "success Threshold": {
                        description:
                          "Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1.",
                        format: "int32",
                        type: "integer"
                      },
                      "tcp Socket": {
                        allOf: [
                          {
                            description:
                              "TCP Socket Action describes an action based on opening a socket",
                            properties: {
                              host: {
                                description:
                                  "Optional: Host name to connect to, defaults to the pod IP.",
                                type: "string"
                              },
                              port: {
                                allOf: [
                                  {
                                    description:
                                      "Int Or String is a type that can hold an int32 or a string. When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type. This allows you to have, for example, a JSON field that can accept a name or number.",
                                    format: "int-or-string",
                                    oneOf: [{ type: "integer" }, { type: "string" }]
                                  }
                                ],
                                default: {},
                                description:
                                  "Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME."
                              }
                            },
                            required: ["port"],
                            type: "object"
                          }
                        ],
                        description:
                          "TCP Socket specifies an action involving a TCP port."
                      },
                      "termination Grace Period Seconds": {
                        description:
                          "Optional duration in seconds the pod needs to terminate gracefully upon probe failure. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. If this value is nil, the pod's termination Grace Period Seconds will be used. Otherwise, this value overrides the value provided by the pod spec. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). This is a beta field and requires enabling Probe Termination Grace Period feature gate. Minimum value is 1. spec.termination Grace Period Seconds is used if unset.",
                        format: "int64",
                        type: "integer"
                      },
                      "timeout Seconds": {
                        description:
                          "Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes",
                        format: "int32",
                        type: "integer"
                      }
                    },
                    type: "object"
                  }
                ],
                description:
                  "Periodic probe of container liveness. Container will be restarted if the probe fails. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes"
              },
              name: {
                default: "",
                description:
                  "Name of the container specified as a DNS_LABEL. Each container in a pod must have a unique name (DNS_LABEL). Cannot be updated.",
                type: "string"
              },
              ports: {
                description:
                  'List of ports to expose from the container. Not specifying a port here DOES NOT prevent that port from being exposed. Any port which is listening on the default "0.0.0.0" address inside a container will be accessible from the network. Modifying this array with strategic merge patch may corrupt the data. For more information See https://github.com/kubernetes/kubernetes/issues/108255. Cannot be updated.',
                items: {
                  allOf: [
                    {
                      description:
                        "Container Port represents a network port in a single container.",
                      properties: {
                        "container Port": {
                          default: 0,
                          description:
                            "Number of port to expose on the pod's IP address. This must be a valid port number, 0 < x < 65536.",
                          format: "int32",
                          type: "integer"
                        },
                        "host IP": {
                          description: "What host IP to bind the external port to.",
                          type: "string"
                        },
                        "host Port": {
                          description:
                            "Number of port to expose on the host. If specified, this must be a valid port number, 0 < x < 65536. If Host Network is specified, this must match Container Port. Most containers do not need this.",
                          format: "int32",
                          type: "integer"
                        },
                        name: {
                          description:
                            "If specified, this must be an IANA_SVC_NAME and unique within the pod. Each named port in a pod must have a unique name. Name for the port that can be referred to by services.",
                          type: "string"
                        },
                        protocol: {
                          default: "TCP",
                          description:
                            'Protocol for port. Must be UDP, TCP, or SCTP. Defaults to "TCP". Possible enum values: - `"SCTP"` is the SCTP protocol. - `"TCP"` is the TCP protocol. - `"UDP"` is the UDP protocol.',
                          enum: ["SCTP", "TCP", "UDP"],
                          type: "string"
                        }
                      },
                      required: ["container Port"],
                      type: "object"
                    }
                  ],
                  default: {}
                },
                type: "array",
                "x-kubernetes-list-map-keys": ["container Port", "protocol"],
                "x-kubernetes-list-type": "map",
                "x-kubernetes-patch-merge-key": "container Port",
                "x-kubernetes-patch-strategy": "merge"
              },
              "readiness Probe": {
                allOf: [
                  {
                    description:
                      "Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic.",
                    properties: {
                      exec: {
                        allOf: [
                          {
                            description:
                              'Exec Action describes a "run in container" action.',
                            properties: {
                              command: {
                                description:
                                  "Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.",
                                items: { default: "", type: "string" },
                                type: "array"
                              }
                            },
                            type: "object"
                          }
                        ],
                        description: "Exec specifies the action to take."
                      },
                      "failure Threshold": {
                        description:
                          "Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.",
                        format: "int32",
                        type: "integer"
                      },
                      grpc: {
                        allOf: [
                          {
                            properties: {
                              port: {
                                default: 0,
                                description:
                                  "Port number of the g RPC service. Number must be in the range 1 to 65535.",
                                format: "int32",
                                type: "integer"
                              },
                              service: {
                                default: "",
                                description:
                                  "Service is the name of the service to place in the g RPC Health Check Request (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md). If this is not specified, the default behavior is defined by g RPC.",
                                type: "string"
                              }
                            },
                            required: ["port"],
                            type: "object"
                          }
                        ],
                        description:
                          "GRPC specifies an action involving a GRPC port. This is a beta field and requires enabling GRPC Container Probe feature gate."
                      },
                      "http Get": {
                        allOf: [
                          {
                            description:
                              "HTTP Get Action describes an action based on HTTP Get requests.",
                            properties: {
                              host: {
                                description:
                                  'Host name to connect to, defaults to the pod IP. You probably want to set "Host" in http Headers instead.',
                                type: "string"
                              },
                              "http Headers": {
                                description:
                                  "Custom headers to set in the request. HTTP allows repeated headers.",
                                items: {
                                  allOf: [
                                    {
                                      description:
                                        "HTTP Header describes a custom header to be used in HTTP probes",
                                      properties: {
                                        name: {
                                          default: "",
                                          description: "The header field name",
                                          type: "string"
                                        },
                                        value: {
                                          default: "",
                                          description: "The header field value",
                                          type: "string"
                                        }
                                      },
                                      required: ["name", "value"],
                                      type: "object"
                                    }
                                  ],
                                  default: {}
                                },
                                type: "array"
                              },
                              path: {
                                description: "Path to access on the HTTP server.",
                                type: "string"
                              },
                              port: {
                                allOf: [
                                  {
                                    description:
                                      "Int Or String is a type that can hold an int32 or a string. When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type. This allows you to have, for example, a JSON field that can accept a name or number.",
                                    format: "int-or-string",
                                    oneOf: [{ type: "integer" }, { type: "string" }]
                                  }
                                ],
                                default: {},
                                description:
                                  "Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME."
                              },
                              scheme: {
                                description:
                                  'Scheme to use for connecting to the host. Defaults to HTTP. Possible enum values: - `"HTTP"` means that the scheme used will be http:// - `"HTTPS"` means that the scheme used will be https://',
                                enum: ["HTTP", "HTTPS"],
                                type: "string"
                              }
                            },
                            required: ["port"],
                            type: "object"
                          }
                        ],
                        description: "HTTP Get specifies the http request to perform."
                      },
                      "initial Delay Seconds": {
                        description:
                          "Number of seconds after the container has started before liveness probes are initiated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes",
                        format: "int32",
                        type: "integer"
                      },
                      "period Seconds": {
                        description:
                          "How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1.",
                        format: "int32",
                        type: "integer"
                      },
                      "success Threshold": {
                        description:
                          "Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1.",
                        format: "int32",
                        type: "integer"
                      },
                      "tcp Socket": {
                        allOf: [
                          {
                            description:
                              "TCP Socket Action describes an action based on opening a socket",
                            properties: {
                              host: {
                                description:
                                  "Optional: Host name to connect to, defaults to the pod IP.",
                                type: "string"
                              },
                              port: {
                                allOf: [
                                  {
                                    description:
                                      "Int Or String is a type that can hold an int32 or a string. When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type. This allows you to have, for example, a JSON field that can accept a name or number.",
                                    format: "int-or-string",
                                    oneOf: [{ type: "integer" }, { type: "string" }]
                                  }
                                ],
                                default: {},
                                description:
                                  "Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME."
                              }
                            },
                            required: ["port"],
                            type: "object"
                          }
                        ],
                        description:
                          "TCP Socket specifies an action involving a TCP port."
                      },
                      "termination Grace Period Seconds": {
                        description:
                          "Optional duration in seconds the pod needs to terminate gracefully upon probe failure. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. If this value is nil, the pod's termination Grace Period Seconds will be used. Otherwise, this value overrides the value provided by the pod spec. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). This is a beta field and requires enabling Probe Termination Grace Period feature gate. Minimum value is 1. spec.termination Grace Period Seconds is used if unset.",
                        format: "int64",
                        type: "integer"
                      },
                      "timeout Seconds": {
                        description:
                          "Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes",
                        format: "int32",
                        type: "integer"
                      }
                    },
                    type: "object"
                  }
                ],
                description:
                  "Periodic probe of container service readiness. Container will be removed from service endpoints if the probe fails. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes"
              },
              resources: {
                allOf: [
                  {
                    description:
                      "Resource Requirements describes the compute resource requirements.",
                    properties: {
                      limits: {
                        additionalProperties: {
                          allOf: [
                            {
                              description:
                                'Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and As Int64() accessors. The serialization format is: ``` <quantity> ::= <signed Number><suffix> (Note that <suffix> may be empty, from the "" case in <decimal SI>.) <digit> ::= 0 | 1 | ... | 9 <digits> ::= <digit> | <digit><digits> <number> ::= <digits> | <digits>.<digits> | <digits>. | .<digits> <sign> ::= "+" | "-" <signed Number> ::= <number> | <sign><number> <suffix> ::= <binary SI> | <decimal Exponent> | <decimal SI> <binary SI> ::= Ki | Mi | Gi | Ti | Pi | Ei (International System of units; See: http://physics.nist.gov/cuu/Units/binary.html) <decimal SI> ::= m | "" | k | M | G | T | P | E (Note that 1024 = 1Ki but 1000 = 1k; I didn\'t choose the capitalization.) <decimal Exponent> ::= "e" <signed Number> | "E" <signed Number> ``` No matter which of the three exponent forms is used, no quantity may represent a number greater than 2^63-1 in magnitude, nor may it have more than 3 decimal places. Numbers larger or more precise will be capped or rounded up. (E.g.: 0.1m will rounded up to 1m.) This may be extended in the future if we require larger or smaller quantities. When a Quantity is parsed from a string, it will remember the type of suffix it had, and will use the same type again when it is serialized. Before serializing, Quantity will be put in "canonical form". This means that Exponent/suffix will be adjusted up or down (with a corresponding increase or decrease in Mantissa) such that: - No precision is lost - No fractional digits will be emitted - The exponent (or suffix) is as large as possible. The sign will be omitted unless the number is negative. Examples: - 1.5 will be serialized as "1500m" - 1.5Gi will be serialized as "1536Mi" Note that the quantity will NEVER be internally represented by a floating point number. That is the whole point of this exercise. Non-canonical values will still parse as long as they are well formed, but will be re-emitted in their canonical form. (So always use canonical form, or don\'t diff.) This format is intended to make it difficult to use these numbers without writing some sort of special handling code in the hopes that that will cause implementors to also use a fixed point implementation.',
                              oneOf: [{ type: "string" }, { type: "number" }]
                            }
                          ],
                          default: {}
                        },
                        description:
                          "Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/",
                        type: "object"
                      },
                      requests: {
                        additionalProperties: {
                          allOf: [
                            {
                              description:
                                'Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and As Int64() accessors. The serialization format is: ``` <quantity> ::= <signed Number><suffix> (Note that <suffix> may be empty, from the "" case in <decimal SI>.) <digit> ::= 0 | 1 | ... | 9 <digits> ::= <digit> | <digit><digits> <number> ::= <digits> | <digits>.<digits> | <digits>. | .<digits> <sign> ::= "+" | "-" <signed Number> ::= <number> | <sign><number> <suffix> ::= <binary SI> | <decimal Exponent> | <decimal SI> <binary SI> ::= Ki | Mi | Gi | Ti | Pi | Ei (International System of units; See: http://physics.nist.gov/cuu/Units/binary.html) <decimal SI> ::= m | "" | k | M | G | T | P | E (Note that 1024 = 1Ki but 1000 = 1k; I didn\'t choose the capitalization.) <decimal Exponent> ::= "e" <signed Number> | "E" <signed Number> ``` No matter which of the three exponent forms is used, no quantity may represent a number greater than 2^63-1 in magnitude, nor may it have more than 3 decimal places. Numbers larger or more precise will be capped or rounded up. (E.g.: 0.1m will rounded up to 1m.) This may be extended in the future if we require larger or smaller quantities. When a Quantity is parsed from a string, it will remember the type of suffix it had, and will use the same type again when it is serialized. Before serializing, Quantity will be put in "canonical form". This means that Exponent/suffix will be adjusted up or down (with a corresponding increase or decrease in Mantissa) such that: - No precision is lost - No fractional digits will be emitted - The exponent (or suffix) is as large as possible. The sign will be omitted unless the number is negative. Examples: - 1.5 will be serialized as "1500m" - 1.5Gi will be serialized as "1536Mi" Note that the quantity will NEVER be internally represented by a floating point number. That is the whole point of this exercise. Non-canonical values will still parse as long as they are well formed, but will be re-emitted in their canonical form. (So always use canonical form, or don\'t diff.) This format is intended to make it difficult to use these numbers without writing some sort of special handling code in the hopes that that will cause implementors to also use a fixed point implementation.',
                              oneOf: [{ type: "string" }, { type: "number" }]
                            }
                          ],
                          default: {}
                        },
                        description:
                          "Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/",
                        type: "object"
                      }
                    },
                    type: "object"
                  }
                ],
                default: {},
                description:
                  "Compute Resources required by this container. Cannot be updated. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/"
              },
              "security Context": {
                allOf: [
                  {
                    description:
                      "Security Context holds security configuration that will be applied to a container. Some fields are present in both Security Context and Pod Security Context. When both are set, the values in Security Context take precedence.",
                    properties: {
                      "allow Privilege Escalation": {
                        description:
                          "Allow Privilege Escalation controls whether a process can gain more privileges than its parent process. This bool directly controls if the no_new_privs flag will be set on the container process. Allow Privilege Escalation is true always when the container is: 1) run as Privileged 2) has CAP_SYS_ADMIN Note that this field cannot be set when spec.os.name is windows.",
                        type: "boolean"
                      },
                      capabilities: {
                        allOf: [
                          {
                            description:
                              "Adds and removes POSIX capabilities from running containers.",
                            properties: {
                              add: {
                                description: "Added capabilities",
                                items: { default: "", type: "string" },
                                type: "array"
                              },
                              drop: {
                                description: "Removed capabilities",
                                items: { default: "", type: "string" },
                                type: "array"
                              }
                            },
                            type: "object"
                          }
                        ],
                        description:
                          "The capabilities to add/drop when running containers. Defaults to the default set of capabilities granted by the container runtime. Note that this field cannot be set when spec.os.name is windows."
                      },
                      privileged: {
                        description:
                          "Run container in privileged mode. Processes in privileged containers are essentially equivalent to root on the host. Defaults to false. Note that this field cannot be set when spec.os.name is windows.",
                        type: "boolean"
                      },
                      "proc Mount": {
                        description:
                          "proc Mount denotes the type of proc mount to use for the containers. The default is Default Proc Mount which uses the container runtime defaults for readonly paths and masked paths. This requires the Proc Mount Type feature flag to be enabled. Note that this field cannot be set when spec.os.name is windows.",
                        type: "string"
                      },
                      "read Only Root Filesystem": {
                        description:
                          "Whether this container has a read-only root filesystem. Default is false. Note that this field cannot be set when spec.os.name is windows.",
                        type: "boolean"
                      },
                      "run As Group": {
                        description:
                          "The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in Pod Security Context. If set in both Security Context and Pod Security Context, the value specified in Security Context takes precedence. Note that this field cannot be set when spec.os.name is windows.",
                        format: "int64",
                        type: "integer"
                      },
                      "run As Non Root": {
                        description:
                          "Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in Pod Security Context. If set in both Security Context and Pod Security Context, the value specified in Security Context takes precedence.",
                        type: "boolean"
                      },
                      "run As User": {
                        description:
                          "The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in Pod Security Context. If set in both Security Context and Pod Security Context, the value specified in Security Context takes precedence. Note that this field cannot be set when spec.os.name is windows.",
                        format: "int64",
                        type: "integer"
                      },
                      "se Linux Options": {
                        allOf: [
                          {
                            description:
                              "SE Linux Options are the labels to be applied to the container",
                            properties: {
                              level: {
                                description:
                                  "Level is SE Linux level label that applies to the container.",
                                type: "string"
                              },
                              role: {
                                description:
                                  "Role is a SE Linux role label that applies to the container.",
                                type: "string"
                              },
                              type: {
                                description:
                                  "Type is a SE Linux type label that applies to the container.",
                                type: "string"
                              },
                              user: {
                                description:
                                  "User is a SE Linux user label that applies to the container.",
                                type: "string"
                              }
                            },
                            type: "object"
                          }
                        ],
                        description:
                          "The SE Linux context to be applied to the container. If unspecified, the container runtime will allocate a random SE Linux context for each container. May also be set in Pod Security Context. If set in both Security Context and Pod Security Context, the value specified in Security Context takes precedence. Note that this field cannot be set when spec.os.name is windows."
                      },
                      "seccomp Profile": {
                        allOf: [
                          {
                            description:
                              "Seccomp Profile defines a pod/container's seccomp profile settings. Only one profile source may be set.",
                            properties: {
                              "localhost Profile": {
                                description:
                                  'localhost Profile indicates a profile defined in a file on the node should be used. The profile must be preconfigured on the node to work. Must be a descending path, relative to the kubelet\'s configured seccomp profile location. Must only be set if type is "Localhost".',
                                type: "string"
                              },
                              type: {
                                default: "",
                                description:
                                  'type indicates which kind of seccomp profile will be applied. Valid options are: Localhost - a profile defined in a file on the node should be used. Runtime Default - the container runtime default profile should be used. Unconfined - no profile should be applied. Possible enum values: - `"Localhost"` indicates a profile defined in a file on the node should be used. The file\'s location relative to <kubelet-root-dir>/seccomp. - `"Runtime Default"` represents the default container runtime seccomp profile. - `"Unconfined"` indicates no seccomp profile is applied (A.K.A. unconfined).',
                                enum: ["Localhost", "RuntimeDefault", "Unconfined"],
                                type: "string"
                              }
                            },
                            required: ["type"],
                            type: "object",
                            "x-kubernetes-unions": [
                              {
                                discriminator: "type",
                                "fields-to-discriminate By": {
                                  "localhost Profile": "Localhost Profile"
                                }
                              }
                            ]
                          }
                        ],
                        description:
                          "The seccomp options to use by this container. If seccomp options are provided at both the pod & container level, the container options override the pod options. Note that this field cannot be set when spec.os.name is windows."
                      },
                      "windows Options": {
                        allOf: [
                          {
                            description:
                              "Windows Security Context Options contain Windows-specific options and credentials.",
                            properties: {
                              "gmsa Credential Spec": {
                                description:
                                  "GMSA Credential Spec is where the GMSA admission webhook (https://github.com/kubernetes-sigs/windows-gmsa) inlines the contents of the GMSA credential spec named by the GMSA Credential Spec Name field.",
                                type: "string"
                              },
                              "gmsa Credential Spec Name": {
                                description:
                                  "GMSA Credential Spec Name is the name of the GMSA credential spec to use.",
                                type: "string"
                              },
                              "host Process": {
                                description:
                                  "Host Process determines if a container should be run as a 'Host Process' container. This field is alpha-level and will only be honored by components that enable the Windows Host Process Containers feature flag. Setting this field without the feature flag will result in errors when validating the Pod. All of a Pod's containers must have the same effective Host Process value (it is not allowed to have a mix of Host Process containers and non-Host Process containers). In addition, if Host Process is true then Host Network must also be set to true.",
                                type: "boolean"
                              },
                              "run As User Name": {
                                description:
                                  "The User Name in Windows to run the entrypoint of the container process. Defaults to the user specified in image metadata if unspecified. May also be set in Pod Security Context. If set in both Security Context and Pod Security Context, the value specified in Security Context takes precedence.",
                                type: "string"
                              }
                            },
                            type: "object"
                          }
                        ],
                        description:
                          "The Windows specific settings applied to all containers. If unspecified, the options from the Pod Security Context will be used. If set in both Security Context and Pod Security Context, the value specified in Security Context takes precedence. Note that this field cannot be set when spec.os.name is linux."
                      }
                    },
                    type: "object"
                  }
                ],
                description:
                  "Security Context defines the security options the container should be run with. If set, the fields of Security Context override the equivalent fields of Pod Security Context. More info: https://kubernetes.io/docs/tasks/configure-pod-container/security-context/"
              },
              "startup Probe": {
                allOf: [
                  {
                    description:
                      "Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic.",
                    properties: {
                      exec: {
                        allOf: [
                          {
                            description:
                              'Exec Action describes a "run in container" action.',
                            properties: {
                              command: {
                                description:
                                  "Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.",
                                items: { default: "", type: "string" },
                                type: "array"
                              }
                            },
                            type: "object"
                          }
                        ],
                        description: "Exec specifies the action to take."
                      },
                      "failure Threshold": {
                        description:
                          "Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.",
                        format: "int32",
                        type: "integer"
                      },
                      grpc: {
                        allOf: [
                          {
                            properties: {
                              port: {
                                default: 0,
                                description:
                                  "Port number of the g RPC service. Number must be in the range 1 to 65535.",
                                format: "int32",
                                type: "integer"
                              },
                              service: {
                                default: "",
                                description:
                                  "Service is the name of the service to place in the g RPC Health Check Request (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md). If this is not specified, the default behavior is defined by g RPC.",
                                type: "string"
                              }
                            },
                            required: ["port"],
                            type: "object"
                          }
                        ],
                        description:
                          "GRPC specifies an action involving a GRPC port. This is a beta field and requires enabling GRPC Container Probe feature gate."
                      },
                      "http Get": {
                        allOf: [
                          {
                            description:
                              "HTTP Get Action describes an action based on HTTP Get requests.",
                            properties: {
                              host: {
                                description:
                                  'Host name to connect to, defaults to the pod IP. You probably want to set "Host" in http Headers instead.',
                                type: "string"
                              },
                              "http Headers": {
                                description:
                                  "Custom headers to set in the request. HTTP allows repeated headers.",
                                items: {
                                  allOf: [
                                    {
                                      description:
                                        "HTTP Header describes a custom header to be used in HTTP probes",
                                      properties: {
                                        name: {
                                          default: "",
                                          description: "The header field name",
                                          type: "string"
                                        },
                                        value: {
                                          default: "",
                                          description: "The header field value",
                                          type: "string"
                                        }
                                      },
                                      required: ["name", "value"],
                                      type: "object"
                                    }
                                  ],
                                  default: {}
                                },
                                type: "array"
                              },
                              path: {
                                description: "Path to access on the HTTP server.",
                                type: "string"
                              },
                              port: {
                                allOf: [
                                  {
                                    description:
                                      "Int Or String is a type that can hold an int32 or a string. When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type. This allows you to have, for example, a JSON field that can accept a name or number.",
                                    format: "int-or-string",
                                    oneOf: [{ type: "integer" }, { type: "string" }]
                                  }
                                ],
                                default: {},
                                description:
                                  "Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME."
                              },
                              scheme: {
                                description:
                                  'Scheme to use for connecting to the host. Defaults to HTTP. Possible enum values: - `"HTTP"` means that the scheme used will be http:// - `"HTTPS"` means that the scheme used will be https://',
                                enum: ["HTTP", "HTTPS"],
                                type: "string"
                              }
                            },
                            required: ["port"],
                            type: "object"
                          }
                        ],
                        description: "HTTP Get specifies the http request to perform."
                      },
                      "initial Delay Seconds": {
                        description:
                          "Number of seconds after the container has started before liveness probes are initiated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes",
                        format: "int32",
                        type: "integer"
                      },
                      "period Seconds": {
                        description:
                          "How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1.",
                        format: "int32",
                        type: "integer"
                      },
                      "success Threshold": {
                        description:
                          "Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1.",
                        format: "int32",
                        type: "integer"
                      },
                      "tcp Socket": {
                        allOf: [
                          {
                            description:
                              "TCP Socket Action describes an action based on opening a socket",
                            properties: {
                              host: {
                                description:
                                  "Optional: Host name to connect to, defaults to the pod IP.",
                                type: "string"
                              },
                              port: {
                                allOf: [
                                  {
                                    description:
                                      "Int Or String is a type that can hold an int32 or a string. When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type. This allows you to have, for example, a JSON field that can accept a name or number.",
                                    format: "int-or-string",
                                    oneOf: [{ type: "integer" }, { type: "string" }]
                                  }
                                ],
                                default: {},
                                description:
                                  "Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME."
                              }
                            },
                            required: ["port"],
                            type: "object"
                          }
                        ],
                        description:
                          "TCP Socket specifies an action involving a TCP port."
                      },
                      "termination Grace Period Seconds": {
                        description:
                          "Optional duration in seconds the pod needs to terminate gracefully upon probe failure. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. If this value is nil, the pod's termination Grace Period Seconds will be used. Otherwise, this value overrides the value provided by the pod spec. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). This is a beta field and requires enabling Probe Termination Grace Period feature gate. Minimum value is 1. spec.termination Grace Period Seconds is used if unset.",
                        format: "int64",
                        type: "integer"
                      },
                      "timeout Seconds": {
                        description:
                          "Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes",
                        format: "int32",
                        type: "integer"
                      }
                    },
                    type: "object"
                  }
                ],
                description:
                  "Startup Probe indicates that the Pod has successfully initialized. If specified, no other probes are executed until this completes successfully. If this probe fails, the Pod will be restarted, just as if the liveness Probe failed. This can be used to provide different probe parameters at the beginning of a Pod's lifecycle, when it might take a long time to load data or warm a cache, than during steady-state operation. This cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes"
              },
              stdin: {
                description:
                  "Whether this container should allocate a buffer for stdin in the container runtime. If this is not set, reads from stdin in the container will always result in EOF. Default is false.",
                type: "boolean"
              },
              "stdin Once": {
                description:
                  "Whether the container runtime should close the stdin channel after it has been opened by a single attach. When stdin is true the stdin stream will remain open across multiple attach sessions. If stdin Once is set to true, stdin is opened on container start, is empty until the first client attaches to stdin, and then remains open and accepts data until the client disconnects, at which time stdin is closed and remains closed until the container is restarted. If this flag is false, a container processes that reads from stdin will never receive an EOF. Default is false",
                type: "boolean"
              },
              "termination Message Path": {
                description:
                  "Optional: Path at which the file to which the container's termination message will be written is mounted into the container's filesystem. Message written is intended to be brief final status, such as an assertion failure message. Will be truncated by the node if greater than 4096 bytes. The total message length across all containers will be limited to 12kb. Defaults to /dev/termination-log. Cannot be updated.",
                type: "string"
              },
              "termination Message Policy": {
                description:
                  'Indicate how the termination message should be populated. File will use the contents of termination Message Path to populate the container status message on both success and failure. Fallback To Logs On Error will use the last chunk of container log output if the termination message file is empty and the container exited with an error. The log output is limited to 2048 bytes or 80 lines, whichever is smaller. Defaults to File. Cannot be updated. Possible enum values: - `"Fallback To Logs On Error"` will read the most recent contents of the container logs for the container status message when the container exits with an error and the termination Message Path has no contents. - `"File"` is the default behavior and will set the container status message to the contents of the container\'s termination Message Path when the container exits.',
                enum: ["FallbackToLogsOnError", "File"],
                type: "string"
              },
              tty: {
                description:
                  "Whether this container should allocate a TTY for itself, also requires 'stdin' to be true. Default is false.",
                type: "boolean"
              },
              "volume Devices": {
                description:
                  "volume Devices is the list of block devices to be used by the container.",
                items: {
                  allOf: [
                    {
                      description:
                        "volume Device describes a mapping of a raw block device within a container.",
                      properties: {
                        "device Path": {
                          default: "",
                          description:
                            "device Path is the path inside of the container that the device will be mapped to.",
                          type: "string"
                        },
                        name: {
                          default: "",
                          description:
                            "name must match the name of a persistent Volume Claim in the pod",
                          type: "string"
                        }
                      },
                      required: ["name", "device Path"],
                      type: "object"
                    }
                  ],
                  default: {}
                },
                type: "array",
                "x-kubernetes-patch-merge-key": "device Path",
                "x-kubernetes-patch-strategy": "merge"
              },
              "volume Mounts": {
                description:
                  "Pod volumes to mount into the container's filesystem. Cannot be updated.",
                items: {
                  allOf: [
                    {
                      description:
                        "Volume Mount describes a mounting of a Volume within a container.",
                      properties: {
                        "mount Path": {
                          default: "",
                          description:
                            "Path within the container at which the volume should be mounted. Must not contain ':'.",
                          type: "string"
                        },
                        "mount Propagation": {
                          description:
                            "mount Propagation determines how mounts are propagated from the host to container and the other way around. When not set, Mount Propagation None is used. This field is beta in 1.10.",
                          type: "string"
                        },
                        name: {
                          default: "",
                          description: "This must match the Name of a Volume.",
                          type: "string"
                        },
                        "read Only": {
                          description:
                            "Mounted read-only if true, read-write otherwise (false or unspecified). Defaults to false.",
                          type: "boolean"
                        },
                        "sub Path": {
                          description:
                            "Path within the volume from which the container's volume should be mounted. Defaults to \"\" (volume's root).",
                          type: "string"
                        },
                        "sub Path Expr": {
                          description:
                            "Expanded path within the volume from which the container's volume should be mounted. Behaves similarly to Sub Path but environment variable references $(VAR_NAME) are expanded using the container's environment. Defaults to \"\" (volume's root). Sub Path Expr and Sub Path are mutually exclusive.",
                          type: "string"
                        }
                      },
                      required: ["name", "mount Path"],
                      type: "object"
                    }
                  ],
                  default: {}
                },
                type: "array",
                "x-kubernetes-patch-merge-key": "mount Path",
                "x-kubernetes-patch-strategy": "merge"
              },
              "working Dir": {
                description:
                  "Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image. Cannot be updated.",
                type: "string"
              }
            },
            required: ["name"],
            type: "object"
          },
          componentDefinition: {
            id: "fcd41e59-cb70-481c-9302-9221e389087c",
            schemaVersion: "core.meshery.io/v1beta1",
            version: "v1.0.0",
            displayName: "Container",
            description: "",
            format: "JSON",
            model: {
              id: "b2626b4d-0761-57bb-b27a-9dc5339b0c86",
              schemaVersion: "core.meshery.io/v1beta1",
              version: "v1.0.0",
              name: "meshery-core",
              displayName: "Meshery Core",
              description: "",
              status: "enabled",
              hostID: "26e64aa8-2d86-57bd-92b3-2a73160d27b4",
              registrant: { hostname: "artifacthub" },
              category: { name: "Orchestration & Management", metadata: null },
              subCategory: "App Definition and Development",
              metadata: {
                isAnnotation: false,
                subCategory: "App Definition and Development",
                svgColor:
                  "ui/public/static/img/meshmodels/meshery-core/color/meshery-core-color.svg",
                svgComplete: "",
                svgWhite:
                  "ui/public/static/img/meshmodels/meshery-core/color/meshery-core-color.svg"
              },
              model: { version: "0.7.2" },
              components: null,
              relationships: null
            },
            metadata: {
              capabilities:
                '{\n  "designer": {\n    "capabilities": {\n      "config": true,\n      "label": false,\n      "policy": false,\n      "relationships": false,\n      "json-schema": false,\n      "permissions": false,\n      "workflow": false,\n      "gitops": false,\n      "history": false\n    },\n    "supportsCompoundDragAndDrop": false,\n    "edit": {\n      "config": true,\n      "copy": false,\n      "delete": true,\n      "duplicate": false,\n      "reset-styles": false,\n      "resolve": false,\n      "lock": false,\n      "shape": {\n        "convert-shape": false\n      },\n      "style": false\n    },\n    "label": {\n      "edit": false,\n      "show": true,\n      "sync-with-config-property": "name"\n    }\n  }\n}',
              defaultData: "",
              genealogy: "",
              hasInvalidSchema: true,
              isAnnotation: true,
              primaryColor: "#326CE5",
              secondaryColor: "#00D3A9",
              shape: "circle",
              shapePolygonPoints: "",
              status: "enabled",
              styleOverrides: "",
              styles: "",
              subCategory: "",
              svgColor:
                "ui/public/static/img/meshmodels/meshery-core/color/container-color.svg",
              svgComplete: "",
              svgWhite:
                "ui/public/static/img/meshmodels/meshery-core/white/container-white.svg"
            },
            component: {
              kind: "Container",
              version: "core.meshery.io/v1alpha1",
              schema: "{}"
            },
            duplicates: 6
          },
          parent: "6a66429c-181f-4a78-83e4-0be23ed730e3",
          id: "d69e6c5e-8101-48ec-85db-f08daed73b36",
          config: {
            services: {
              "d69e6c5e-8101-48ec-85db-f08daed73b36": { settings: { name: "aes" } }
            }
          }
        },
        position: { x: -61.75, y: 48.5 },
        group: "nodes",
        removed: false,
        selected: false,
        selectable: true,
        locked: false,
        grabbable: true,
        pannable: false,
        classes: "fieldRefNode"
      }
    ],
    edges: [
      {
        data: {
          id: "6a8f392a-6d03-4376-8c41-669c513ba6bb",
          metadata: { port: 8877, protocol: "TCP" },
          source: "4f9d3c78-2304-47bf-84cb-f34c95485d65",
          subType: "Network",
          target: "6a66429c-181f-4a78-83e4-0be23ed730e3"
        },
        position: { x: 0, y: 0 },
        group: "edges",
        removed: false,
        selected: false,
        selectable: true,
        locked: false,
        grabbable: true,
        pannable: true,
        classes: ""
      },
      {
        data: {
          id: "18063b44-442d-4c82-923c-8c78d09f572d",
          metadata: { port: 80, protocol: "TCP" },
          source: "b9702cdb-2390-4f2a-a9c7-096ef1a7d84d",
          subType: "Network",
          target: "d1ec2c27-9f42-4bd1-91f7-290752a59d91"
        },
        position: { x: 0, y: 0 },
        group: "edges",
        removed: false,
        selected: false,
        selectable: true,
        locked: false,
        grabbable: true,
        pannable: true,
        classes: ""
      },
      {
        data: {
          id: "ffcadef7-b7f8-4fad-8f07-ebf6230c6978",
          metadata: { port: 80, protocol: "TCP" },
          source: "b9702cdb-2390-4f2a-a9c7-096ef1a7d84d",
          subType: "Network",
          target: "6a66429c-181f-4a78-83e4-0be23ed730e3"
        },
        position: { x: 0, y: 0 },
        group: "edges",
        removed: false,
        selected: false,
        selectable: true,
        locked: false,
        grabbable: true,
        pannable: true,
        classes: ""
      }
    ]
  },
  elementStyles: {
    "4f9d3c78-2304-47bf-84cb-f34c95485d65": {
      events: "yes",
      "text-events": "no",
      textEvents: "no",
      "transition-property": "none",
      transitionProperty: "none",
      "transition-duration": "0ms",
      transitionDuration: "0ms",
      "transition-delay": "0ms",
      transitionDelay: "0ms",
      "transition-timing-function": "linear",
      transitionTimingFunction: "linear",
      display: "element",
      visibility: "visible",
      opacity: "1",
      "text-opacity": "1",
      textOpacity: "1",
      "min-zoomed-font-size": "12px",
      minZoomedFontSize: "12px",
      "z-compound-depth": "auto",
      zCompoundDepth: "auto",
      "z-index-compare": "manual",
      zIndexCompare: "manual",
      "z-index": "2",
      zIndex: "2",
      "overlay-padding": "10px",
      overlayPadding: "10px",
      "overlay-color": "rgb(0,0,0)",
      overlayColor: "rgb(0,0,0)",
      "overlay-opacity": "0",
      overlayOpacity: "0",
      "overlay-shape": "round-rectangle",
      overlayShape: "round-rectangle",
      "underlay-padding": "10px",
      underlayPadding: "10px",
      "underlay-color": "rgb(0,0,0)",
      underlayColor: "rgb(0,0,0)",
      "underlay-opacity": "0",
      underlayOpacity: "0",
      "underlay-shape": "round-rectangle",
      underlayShape: "round-rectangle",
      ghost: "no",
      "ghost-offset-x": "0px",
      ghostOffsetX: "0px",
      "ghost-offset-y": "0px",
      ghostOffsetY: "0px",
      "ghost-opacity": "0",
      ghostOpacity: "0",
      "text-valign": "bottom",
      textValign: "bottom",
      "text-halign": "center",
      textHalign: "center",
      color: "rgb(0,0,0)",
      "text-outline-color": "rgb(0,0,0)",
      textOutlineColor: "rgb(0,0,0)",
      "text-outline-opacity": "1",
      textOutlineOpacity: "1",
      "text-background-color": "rgb(210,212,210)",
      textBackgroundColor: "rgb(210,212,210)",
      "text-background-opacity": "0.7",
      textBackgroundOpacity: "0.7",
      "text-background-padding": "2px",
      textBackgroundPadding: "2px",
      "text-border-opacity": "0",
      textBorderOpacity: "0",
      "text-border-color": "rgb(0,0,0)",
      textBorderColor: "rgb(0,0,0)",
      "text-border-width": "0px",
      textBorderWidth: "0px",
      "text-border-style": "solid",
      textBorderStyle: "solid",
      "text-background-shape": "round-rectangle",
      textBackgroundShape: "round-rectangle",
      "text-justification": "auto",
      textJustification: "auto",
      "font-family": "Qanelas Soft, sans-serif",
      fontFamily: "Qanelas Soft, sans-serif",
      "font-style": "normal",
      fontStyle: "normal",
      "font-weight": "300",
      fontWeight: "300",
      "font-size": "8px",
      fontSize: "8px",
      "text-transform": "none",
      textTransform: "none",
      "text-wrap": "ellipsis",
      textWrap: "ellipsis",
      "text-overflow-wrap": "whitespace",
      textOverflowWrap: "whitespace",
      "text-max-width": "80px",
      textMaxWidth: "80px",
      "text-outline-width": "0px",
      textOutlineWidth: "0px",
      "line-height": "1",
      lineHeight: "1",
      label: "edge-stack-admin",
      "text-rotation": "none",
      textRotation: "none",
      "text-margin-x": "0px",
      textMarginX: "0px",
      "text-margin-y": "7px",
      textMarginY: "7px",
      "source-label": "",
      sourceLabel: "",
      "source-text-rotation": "none",
      sourceTextRotation: "none",
      "source-text-margin-x": "0px",
      sourceTextMarginX: "0px",
      "source-text-margin-y": "0px",
      sourceTextMarginY: "0px",
      "source-text-offset": "0px",
      sourceTextOffset: "0px",
      "target-label": "",
      targetLabel: "",
      "target-text-rotation": "none",
      targetTextRotation: "none",
      "target-text-margin-x": "0px",
      targetTextMarginX: "0px",
      "target-text-margin-y": "0px",
      targetTextMarginY: "0px",
      "target-text-offset": "0px",
      targetTextOffset: "0px",
      height: "20px",
      width: "20px",
      shape: "round-triangle",
      "shape-polygon-points": "-1 -1 1 -1 1 1 -1 1",
      shapePolygonPoints: "-1 -1 1 -1 1 1 -1 1",
      "background-color": "rgb(50,108,229)",
      backgroundColor: "rgb(50,108,229)",
      "background-fill": "solid",
      backgroundFill: "solid",
      "background-opacity": "1",
      backgroundOpacity: "1",
      "background-blacken": "0",
      backgroundBlacken: "0",
      "background-gradient-stop-colors": "rgb(153,153,153)",
      backgroundGradientStopColors: "rgb(153,153,153)",
      "background-gradient-stop-positions": "0%",
      backgroundGradientStopPositions: "0%",
      "background-gradient-direction": "to-bottom",
      backgroundGradientDirection: "to-bottom",
      padding: "12px",
      "padding-relative-to": "width",
      paddingRelativeTo: "width",
      "bounds-expansion": "0px",
      boundsExpansion: "0px",
      "border-color": "rgb(60,129,255)",
      borderColor: "rgb(60,129,255)",
      "border-opacity": "1",
      borderOpacity: "1",
      "border-width": "0px",
      borderWidth: "0px",
      "border-style": "solid",
      borderStyle: "solid",
      "outline-color": "rgb(153,153,153)",
      outlineColor: "rgb(153,153,153)",
      "outline-opacity": "1",
      outlineOpacity: "1",
      "outline-width": "0px",
      outlineWidth: "0px",
      "outline-style": "solid",
      outlineStyle: "solid",
      "outline-offset": "0px",
      outlineOffset: "0px",
      "background-image":
        "url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODQiIGhlaWdodD0iNzciIHZpZXdCb3g9IjAgMCA4NCA3NyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zMC4xOSAwQzI5LjY1OTYgMCAyOS4xNTA5IDAuMjEwNzE0IDI4Ljc3NTggMC41ODU3ODZDMjguNDAwNyAwLjk2MDg1OSAyOC4xOSAxLjQ2OTU3IDI4LjE5IDJWMjQuNDVDMjguMTkgMjQuOTgwNCAyOC40MDA3IDI1LjQ4OTEgMjguNzc1OCAyNS44NjQyQzI5LjE1MDkgMjYuMjM5MyAyOS42NTk2IDI2LjQ1IDMwLjE5IDI2LjQ1SDM4Ljc4VjM4LjIySDExLjE3VjUwLjU1SDJDMS40Njk1NyA1MC41NSAwLjk2MDg1OSA1MC43NjA3IDAuNTg1Nzg2IDUxLjEzNThDMC4yMTA3MTQgNTEuNTEwOSAwIDUyLjAxOTYgMCA1Mi41NUwwIDc1QzAgNzUuNTMwNCAwLjIxMDcxNCA3Ni4wMzkxIDAuNTg1Nzg2IDc2LjQxNDJDMC45NjA4NTkgNzYuNzg5MyAxLjQ2OTU3IDc3IDIgNzdIMjQuNDNDMjQuOTYwNCA3NyAyNS40NjkxIDc2Ljc4OTMgMjUuODQ0MiA3Ni40MTQyQzI2LjIxOTMgNzYuMDM5MSAyNi40MyA3NS41MzA0IDI2LjQzIDc1VjUyLjU1QzI2LjQzIDUyLjAxOTYgMjYuMjE5MyA1MS41MTA5IDI1Ljg0NDIgNTEuMTM1OEMyNS40NjkxIDUwLjc2MDcgMjQuOTYwNCA1MC41NSAyNC40MyA1MC41NUgxNS44NVY0Mi45SDY4LjQ1VjUwLjU1SDU5LjU3QzU5LjAzOTYgNTAuNTUgNTguNTMwOSA1MC43NjA3IDU4LjE1NTggNTEuMTM1OEM1Ny43ODA3IDUxLjUxMDkgNTcuNTcgNTIuMDE5NiA1Ny41NyA1Mi41NVY3NUM1Ny41NyA3NS41MzA0IDU3Ljc4MDcgNzYuMDM5MSA1OC4xNTU4IDc2LjQxNDJDNTguNTMwOSA3Ni43ODkzIDU5LjAzOTYgNzcgNTkuNTcgNzdIODJDODIuNTMwNCA3NyA4My4wMzkxIDc2Ljc4OTMgODMuNDE0MiA3Ni40MTQyQzgzLjc4OTMgNzYuMDM5MSA4NCA3NS41MzA0IDg0IDc1VjUyLjU1Qzg0IDUyLjAxOTYgODMuNzg5MyA1MS41MTA5IDgzLjQxNDIgNTEuMTM1OEM4My4wMzkxIDUwLjc2MDcgODIuNTMwNCA1MC41NSA4MiA1MC41NUg3My4xMlYzOC4yMkg0My40NlYyNi40NUg1Mi42M0M1My4xNjA0IDI2LjQ1IDUzLjY2OTEgMjYuMjM5MyA1NC4wNDQyIDI1Ljg2NDJDNTQuNDE5MyAyNS40ODkxIDU0LjYzIDI0Ljk4MDQgNTQuNjMgMjQuNDVWMkM1NC42MyAxLjQ2OTU3IDU0LjQxOTMgMC45NjA4NTkgNTQuMDQ0MiAwLjU4NTc4NkM1My42NjkxIDAuMjEwNzE0IDUzLjE2MDQgMCA1Mi42MyAwTDMwLjE5IDBaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4=)",
      backgroundImage:
        "url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODQiIGhlaWdodD0iNzciIHZpZXdCb3g9IjAgMCA4NCA3NyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zMC4xOSAwQzI5LjY1OTYgMCAyOS4xNTA5IDAuMjEwNzE0IDI4Ljc3NTggMC41ODU3ODZDMjguNDAwNyAwLjk2MDg1OSAyOC4xOSAxLjQ2OTU3IDI4LjE5IDJWMjQuNDVDMjguMTkgMjQuOTgwNCAyOC40MDA3IDI1LjQ4OTEgMjguNzc1OCAyNS44NjQyQzI5LjE1MDkgMjYuMjM5MyAyOS42NTk2IDI2LjQ1IDMwLjE5IDI2LjQ1SDM4Ljc4VjM4LjIySDExLjE3VjUwLjU1SDJDMS40Njk1NyA1MC41NSAwLjk2MDg1OSA1MC43NjA3IDAuNTg1Nzg2IDUxLjEzNThDMC4yMTA3MTQgNTEuNTEwOSAwIDUyLjAxOTYgMCA1Mi41NUwwIDc1QzAgNzUuNTMwNCAwLjIxMDcxNCA3Ni4wMzkxIDAuNTg1Nzg2IDc2LjQxNDJDMC45NjA4NTkgNzYuNzg5MyAxLjQ2OTU3IDc3IDIgNzdIMjQuNDNDMjQuOTYwNCA3NyAyNS40NjkxIDc2Ljc4OTMgMjUuODQ0MiA3Ni40MTQyQzI2LjIxOTMgNzYuMDM5MSAyNi40MyA3NS41MzA0IDI2LjQzIDc1VjUyLjU1QzI2LjQzIDUyLjAxOTYgMjYuMjE5MyA1MS41MTA5IDI1Ljg0NDIgNTEuMTM1OEMyNS40NjkxIDUwLjc2MDcgMjQuOTYwNCA1MC41NSAyNC40MyA1MC41NUgxNS44NVY0Mi45SDY4LjQ1VjUwLjU1SDU5LjU3QzU5LjAzOTYgNTAuNTUgNTguNTMwOSA1MC43NjA3IDU4LjE1NTggNTEuMTM1OEM1Ny43ODA3IDUxLjUxMDkgNTcuNTcgNTIuMDE5NiA1Ny41NyA1Mi41NVY3NUM1Ny41NyA3NS41MzA0IDU3Ljc4MDcgNzYuMDM5MSA1OC4xNTU4IDc2LjQxNDJDNTguNTMwOSA3Ni43ODkzIDU5LjAzOTYgNzcgNTkuNTcgNzdIODJDODIuNTMwNCA3NyA4My4wMzkxIDc2Ljc4OTMgODMuNDE0MiA3Ni40MTQyQzgzLjc4OTMgNzYuMDM5MSA4NCA3NS41MzA0IDg0IDc1VjUyLjU1Qzg0IDUyLjAxOTYgODMuNzg5MyA1MS41MTA5IDgzLjQxNDIgNTEuMTM1OEM4My4wMzkxIDUwLjc2MDcgODIuNTMwNCA1MC41NSA4MiA1MC41NUg3My4xMlYzOC4yMkg0My40NlYyNi40NUg1Mi42M0M1My4xNjA0IDI2LjQ1IDUzLjY2OTEgMjYuMjM5MyA1NC4wNDQyIDI1Ljg2NDJDNTQuNDE5MyAyNS40ODkxIDU0LjYzIDI0Ljk4MDQgNTQuNjMgMjQuNDVWMkM1NC42MyAxLjQ2OTU3IDU0LjQxOTMgMC45NjA4NTkgNTQuMDQ0MiAwLjU4NTc4NkM1My42NjkxIDAuMjEwNzE0IDUzLjE2MDQgMCA1Mi42MyAwTDMwLjE5IDBaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4=)",
      "background-image-crossorigin": "anonymous",
      backgroundImageCrossorigin: "anonymous",
      "background-image-opacity": "1",
      backgroundImageOpacity: "1",
      "background-image-containment": "inside",
      backgroundImageContainment: "inside",
      "background-image-smoothing": "yes",
      backgroundImageSmoothing: "yes",
      "background-position-x": "50%",
      backgroundPositionX: "50%",
      "background-position-y": "4.5px",
      backgroundPositionY: "4.5px",
      "background-width-relative-to": "inner",
      backgroundWidthRelativeTo: "inner",
      "background-height-relative-to": "inner",
      backgroundHeightRelativeTo: "inner",
      "background-repeat": "no-repeat",
      backgroundRepeat: "no-repeat",
      "background-fit": "contain",
      backgroundFit: "contain",
      "background-clip": "none",
      backgroundClip: "none",
      "background-width": "auto",
      backgroundWidth: "auto",
      "background-height": "auto",
      backgroundHeight: "auto",
      "background-offset-x": "0px",
      backgroundOffsetX: "0px",
      "background-offset-y": "0px",
      backgroundOffsetY: "0px",
      "pie-size": "100%",
      pieSize: "100%",
      "pie-1-background-color": "rgb(0,0,0)",
      pie1BackgroundColor: "rgb(0,0,0)",
      "pie-1-background-size": "0%",
      pie1BackgroundSize: "0%",
      "pie-1-background-opacity": "1",
      pie1BackgroundOpacity: "1",
      "pie-2-background-color": "rgb(0,0,0)",
      pie2BackgroundColor: "rgb(0,0,0)",
      "pie-2-background-size": "0%",
      pie2BackgroundSize: "0%",
      "pie-2-background-opacity": "1",
      pie2BackgroundOpacity: "1",
      "pie-3-background-color": "rgb(0,0,0)",
      pie3BackgroundColor: "rgb(0,0,0)",
      "pie-3-background-size": "0%",
      pie3BackgroundSize: "0%",
      "pie-3-background-opacity": "1",
      pie3BackgroundOpacity: "1",
      "pie-4-background-color": "rgb(0,0,0)",
      pie4BackgroundColor: "rgb(0,0,0)",
      "pie-4-background-size": "0%",
      pie4BackgroundSize: "0%",
      "pie-4-background-opacity": "1",
      pie4BackgroundOpacity: "1",
      "pie-5-background-color": "rgb(0,0,0)",
      pie5BackgroundColor: "rgb(0,0,0)",
      "pie-5-background-size": "0%",
      pie5BackgroundSize: "0%",
      "pie-5-background-opacity": "1",
      pie5BackgroundOpacity: "1",
      "pie-6-background-color": "rgb(0,0,0)",
      pie6BackgroundColor: "rgb(0,0,0)",
      "pie-6-background-size": "0%",
      pie6BackgroundSize: "0%",
      "pie-6-background-opacity": "1",
      pie6BackgroundOpacity: "1",
      "pie-7-background-color": "rgb(0,0,0)",
      pie7BackgroundColor: "rgb(0,0,0)",
      "pie-7-background-size": "0%",
      pie7BackgroundSize: "0%",
      "pie-7-background-opacity": "1",
      pie7BackgroundOpacity: "1",
      "pie-8-background-color": "rgb(0,0,0)",
      pie8BackgroundColor: "rgb(0,0,0)",
      "pie-8-background-size": "0%",
      pie8BackgroundSize: "0%",
      "pie-8-background-opacity": "1",
      pie8BackgroundOpacity: "1",
      "pie-9-background-color": "rgb(0,0,0)",
      pie9BackgroundColor: "rgb(0,0,0)",
      "pie-9-background-size": "0%",
      pie9BackgroundSize: "0%",
      "pie-9-background-opacity": "1",
      pie9BackgroundOpacity: "1",
      "pie-10-background-color": "rgb(0,0,0)",
      pie10BackgroundColor: "rgb(0,0,0)",
      "pie-10-background-size": "0%",
      pie10BackgroundSize: "0%",
      "pie-10-background-opacity": "1",
      pie10BackgroundOpacity: "1",
      "pie-11-background-color": "rgb(0,0,0)",
      pie11BackgroundColor: "rgb(0,0,0)",
      "pie-11-background-size": "0%",
      pie11BackgroundSize: "0%",
      "pie-11-background-opacity": "1",
      pie11BackgroundOpacity: "1",
      "pie-12-background-color": "rgb(0,0,0)",
      pie12BackgroundColor: "rgb(0,0,0)",
      "pie-12-background-size": "0%",
      pie12BackgroundSize: "0%",
      "pie-12-background-opacity": "1",
      pie12BackgroundOpacity: "1",
      "pie-13-background-color": "rgb(0,0,0)",
      pie13BackgroundColor: "rgb(0,0,0)",
      "pie-13-background-size": "0%",
      pie13BackgroundSize: "0%",
      "pie-13-background-opacity": "1",
      pie13BackgroundOpacity: "1",
      "pie-14-background-color": "rgb(0,0,0)",
      pie14BackgroundColor: "rgb(0,0,0)",
      "pie-14-background-size": "0%",
      pie14BackgroundSize: "0%",
      "pie-14-background-opacity": "1",
      pie14BackgroundOpacity: "1",
      "pie-15-background-color": "rgb(0,0,0)",
      pie15BackgroundColor: "rgb(0,0,0)",
      "pie-15-background-size": "0%",
      pie15BackgroundSize: "0%",
      "pie-15-background-opacity": "1",
      pie15BackgroundOpacity: "1",
      "pie-16-background-color": "rgb(0,0,0)",
      pie16BackgroundColor: "rgb(0,0,0)",
      "pie-16-background-size": "0%",
      pie16BackgroundSize: "0%",
      "pie-16-background-opacity": "1",
      pie16BackgroundOpacity: "1",
      position: "origin",
      "compound-sizing-wrt-labels": "include",
      compoundSizingWrtLabels: "include",
      "min-width": "0px",
      minWidth: "0px",
      "min-width-bias-left": "0px",
      minWidthBiasLeft: "0px",
      "min-width-bias-right": "0px",
      minWidthBiasRight: "0px",
      "min-height": "0px",
      minHeight: "0px",
      "min-height-bias-top": "0px",
      minHeightBiasTop: "0px",
      "min-height-bias-bottom": "0px",
      minHeightBiasBottom: "0px",
      "line-style": "solid",
      lineStyle: "solid",
      "line-color": "rgb(153,153,153)",
      lineColor: "rgb(153,153,153)",
      "line-fill": "solid",
      lineFill: "solid",
      "line-cap": "butt",
      lineCap: "butt",
      "line-opacity": "1",
      lineOpacity: "1",
      "line-dash-pattern": "6 3",
      lineDashPattern: "6 3",
      "line-dash-offset": "0",
      lineDashOffset: "0",
      "line-gradient-stop-colors": "rgb(153,153,153)",
      lineGradientStopColors: "rgb(153,153,153)",
      "line-gradient-stop-positions": "0%",
      lineGradientStopPositions: "0%",
      "curve-style": "haystack",
      curveStyle: "haystack",
      "haystack-radius": "0",
      haystackRadius: "0",
      "source-endpoint": "outside-to-node",
      sourceEndpoint: "outside-to-node",
      "target-endpoint": "outside-to-node",
      targetEndpoint: "outside-to-node",
      "control-point-step-size": "40px",
      controlPointStepSize: "40px",
      "control-point-weights": "0.5",
      controlPointWeights: "0.5",
      "segment-distances": "20px",
      segmentDistances: "20px",
      "segment-weights": "0.5",
      segmentWeights: "0.5",
      "taxi-turn": "50%",
      taxiTurn: "50%",
      "taxi-turn-min-distance": "10px",
      taxiTurnMinDistance: "10px",
      "taxi-direction": "auto",
      taxiDirection: "auto",
      "edge-distances": "intersection",
      edgeDistances: "intersection",
      "arrow-scale": "1",
      arrowScale: "1",
      "loop-direction": "-45deg",
      loopDirection: "-45deg",
      "loop-sweep": "-90deg",
      loopSweep: "-90deg",
      "source-distance-from-node": "0px",
      sourceDistanceFromNode: "0px",
      "target-distance-from-node": "0px",
      targetDistanceFromNode: "0px",
      "source-arrow-shape": "none",
      sourceArrowShape: "none",
      "mid-source-arrow-shape": "none",
      midSourceArrowShape: "none",
      "target-arrow-shape": "none",
      targetArrowShape: "none",
      "mid-target-arrow-shape": "none",
      midTargetArrowShape: "none",
      "source-arrow-color": "rgb(153,153,153)",
      sourceArrowColor: "rgb(153,153,153)",
      "mid-source-arrow-color": "rgb(153,153,153)",
      midSourceArrowColor: "rgb(153,153,153)",
      "target-arrow-color": "rgb(153,153,153)",
      targetArrowColor: "rgb(153,153,153)",
      "mid-target-arrow-color": "rgb(153,153,153)",
      midTargetArrowColor: "rgb(153,153,153)",
      "source-arrow-fill": "filled",
      sourceArrowFill: "filled",
      "mid-source-arrow-fill": "filled",
      midSourceArrowFill: "filled",
      "target-arrow-fill": "filled",
      targetArrowFill: "filled",
      "mid-target-arrow-fill": "filled",
      midTargetArrowFill: "filled",
      "source-arrow-width": "1px",
      sourceArrowWidth: "1px",
      "mid-source-arrow-width": "1px",
      midSourceArrowWidth: "1px",
      "target-arrow-width": "1px",
      targetArrowWidth: "1px",
      "mid-target-arrow-width": "1px",
      midTargetArrowWidth: "1px",
      "selection-box-color": "rgb(221,221,221)",
      selectionBoxColor: "rgb(221,221,221)",
      "selection-box-opacity": "0.65",
      selectionBoxOpacity: "0.65",
      "selection-box-border-color": "rgb(170,170,170)",
      selectionBoxBorderColor: "rgb(170,170,170)",
      "selection-box-border-width": "1px",
      selectionBoxBorderWidth: "1px",
      "active-bg-color": "rgb(0,0,0)",
      activeBgColor: "rgb(0,0,0)",
      "active-bg-opacity": "0.15",
      activeBgOpacity: "0.15",
      "active-bg-size": "30px",
      activeBgSize: "30px",
      "outside-texture-bg-color": "rgb(0,0,0)",
      outsideTextureBgColor: "rgb(0,0,0)",
      "outside-texture-bg-opacity": "0.125",
      outsideTextureBgOpacity: "0.125",
      content: "edge-stack-admin",
      "control-point-weight": "0.5",
      controlPointWeight: "0.5",
      "edge-text-rotation": "none",
      edgeTextRotation: "none",
      "padding-left": "12px",
      paddingLeft: "12px",
      "padding-right": "12px",
      paddingRight: "12px",
      "padding-top": "12px",
      paddingTop: "12px",
      "padding-bottom": "12px",
      paddingBottom: "12px"
    },
    "d1ec2c27-9f42-4bd1-91f7-290752a59d91": {
      events: "yes",
      "text-events": "no",
      textEvents: "no",
      "transition-property": "none",
      transitionProperty: "none",
      "transition-duration": "0ms",
      transitionDuration: "0ms",
      "transition-delay": "0ms",
      transitionDelay: "0ms",
      "transition-timing-function": "linear",
      transitionTimingFunction: "linear",
      display: "element",
      visibility: "visible",
      opacity: "1",
      "text-opacity": "1",
      textOpacity: "1",
      "min-zoomed-font-size": "12px",
      minZoomedFontSize: "12px",
      "z-compound-depth": "auto",
      zCompoundDepth: "auto",
      "z-index-compare": "manual",
      zIndexCompare: "manual",
      "z-index": "3",
      zIndex: "3",
      "overlay-padding": "10px",
      overlayPadding: "10px",
      "overlay-color": "rgb(0,0,0)",
      overlayColor: "rgb(0,0,0)",
      "overlay-opacity": "0",
      overlayOpacity: "0",
      "overlay-shape": "round-rectangle",
      overlayShape: "round-rectangle",
      "underlay-padding": "10px",
      underlayPadding: "10px",
      "underlay-color": "rgb(0,0,0)",
      underlayColor: "rgb(0,0,0)",
      "underlay-opacity": "0",
      underlayOpacity: "0",
      "underlay-shape": "round-rectangle",
      underlayShape: "round-rectangle",
      ghost: "no",
      "ghost-offset-x": "0px",
      ghostOffsetX: "0px",
      "ghost-offset-y": "0px",
      ghostOffsetY: "0px",
      "ghost-opacity": "0",
      ghostOpacity: "0",
      "text-valign": "bottom",
      textValign: "bottom",
      "text-halign": "center",
      textHalign: "center",
      color: "rgb(0,0,0)",
      "text-outline-color": "rgb(0,0,0)",
      textOutlineColor: "rgb(0,0,0)",
      "text-outline-opacity": "1",
      textOutlineOpacity: "1",
      "text-background-color": "rgb(210,212,210)",
      textBackgroundColor: "rgb(210,212,210)",
      "text-background-opacity": "0.7",
      textBackgroundOpacity: "0.7",
      "text-background-padding": "2px",
      textBackgroundPadding: "2px",
      "text-border-opacity": "0",
      textBorderOpacity: "0",
      "text-border-color": "rgb(0,0,0)",
      textBorderColor: "rgb(0,0,0)",
      "text-border-width": "0px",
      textBorderWidth: "0px",
      "text-border-style": "solid",
      textBorderStyle: "solid",
      "text-background-shape": "round-rectangle",
      textBackgroundShape: "round-rectangle",
      "text-justification": "auto",
      textJustification: "auto",
      "font-family": "Qanelas Soft, sans-serif",
      fontFamily: "Qanelas Soft, sans-serif",
      "font-style": "normal",
      fontStyle: "normal",
      "font-weight": "300",
      fontWeight: "300",
      "font-size": "8px",
      fontSize: "8px",
      "text-transform": "none",
      textTransform: "none",
      "text-wrap": "ellipsis",
      textWrap: "ellipsis",
      "text-overflow-wrap": "whitespace",
      textOverflowWrap: "whitespace",
      "text-max-width": "80px",
      textMaxWidth: "80px",
      "text-outline-width": "0px",
      textOutlineWidth: "0px",
      "line-height": "1",
      lineHeight: "1",
      label: "edge-stack-agent",
      "text-rotation": "none",
      textRotation: "none",
      "text-margin-x": "0px",
      textMarginX: "0px",
      "text-margin-y": "7px",
      textMarginY: "7px",
      "source-label": "",
      sourceLabel: "",
      "source-text-rotation": "none",
      sourceTextRotation: "none",
      "source-text-margin-x": "0px",
      sourceTextMarginX: "0px",
      "source-text-margin-y": "0px",
      sourceTextMarginY: "0px",
      "source-text-offset": "0px",
      sourceTextOffset: "0px",
      "target-label": "",
      targetLabel: "",
      "target-text-rotation": "none",
      targetTextRotation: "none",
      "target-text-margin-x": "0px",
      targetTextMarginX: "0px",
      "target-text-margin-y": "0px",
      targetTextMarginY: "0px",
      "target-text-offset": "0px",
      targetTextOffset: "0px",
      height: "20px",
      width: "20px",
      shape: "round-rectangle",
      "shape-polygon-points": "-1 -1 1 -1 1 1 -1 1",
      shapePolygonPoints: "-1 -1 1 -1 1 1 -1 1",
      "background-color": "rgb(50,108,229)",
      backgroundColor: "rgb(50,108,229)",
      "background-fill": "solid",
      backgroundFill: "solid",
      "background-opacity": "0.5",
      backgroundOpacity: "0.5",
      "background-blacken": "0",
      backgroundBlacken: "0",
      "background-gradient-stop-colors": "rgb(153,153,153)",
      backgroundGradientStopColors: "rgb(153,153,153)",
      "background-gradient-stop-positions": "0%",
      backgroundGradientStopPositions: "0%",
      "background-gradient-direction": "to-bottom",
      backgroundGradientDirection: "to-bottom",
      padding: "6px",
      "padding-relative-to": "width",
      paddingRelativeTo: "width",
      "bounds-expansion": "0px",
      boundsExpansion: "0px",
      "border-color": "rgb(60,129,255)",
      borderColor: "rgb(60,129,255)",
      "border-opacity": "1",
      borderOpacity: "1",
      "border-width": "2px",
      borderWidth: "2px",
      "border-style": "solid",
      borderStyle: "solid",
      "outline-color": "rgb(153,153,153)",
      outlineColor: "rgb(153,153,153)",
      "outline-opacity": "1",
      outlineOpacity: "1",
      "outline-width": "0px",
      outlineWidth: "0px",
      "outline-style": "solid",
      outlineStyle: "solid",
      "outline-offset": "0px",
      outlineOffset: "0px",
      "background-image":
        "url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTY3IiBoZWlnaHQ9IjE1NiIgdmlld0JveD0iMCAwIDE2NyAxNTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+IDxwYXRoIGQ9Ik05My44MTg1IDcuMDE4NDhDODUuOTMyNSAxLjI4ODk5IDc1LjI1NDEgMS4yODg5OSA2Ny4zNjgxIDcuMDE4NDlMMTIuMDE5OSA0Ny4yMzEzQzQuMTMzOTEgNTIuOTYwOCAwLjgzNDExNSA2My4xMTY2IDMuODQ2MjkgNzIuMzg3MUwyNC45ODc0IDEzNy40NTNDMjcuOTk5NiAxNDYuNzIzIDM2LjYzODYgMTUzIDQ2LjM4NjIgMTUzSDExNC44QzEyNC41NDggMTUzIDEzMy4xODcgMTQ2LjcyMyAxMzYuMTk5IDEzNy40NTNMMTU3LjM0IDcyLjM4NzFDMTYwLjM1MiA2My4xMTY2IDE1Ny4wNTMgNTIuOTYwOCAxNDkuMTY3IDQ3LjIzMTNMOTMuODE4NSA3LjAxODQ4WiIgZmlsbD0iIzMyNkNFNSIgZmlsbC1vcGFjaXR5PSIwLjEiIHN0cm9rZT0iIzMyNkNFNSIgc3Ryb2tlLXdpZHRoPSI1Ii8+IDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTM3LjMwMiAxMjkuNTFDMTI3LjE3MSAxMjQuNjgyIDEyMi44OSAxMTIuNTkxIDEyNy43NCAxMDIuNTA1QzEzMC4wNjkgOTcuNjYxMiAxMzQuMjM1IDkzLjkzNzEgMTM5LjMyMiA5Mi4xNTE4QzE0NC40MDkgOTAuMzY2NCAxNTAgOTAuNjY2MSAxNTQuODY0IDkyLjk4NDlDMTY0Ljk5NSA5Ny44MTM0IDE2OS4yNzYgMTA5LjkwNCAxNjQuNDI2IDExOS45OUMxNTkuNTc2IDEzMC4wNzcgMTQ3LjQzMyAxMzQuMzM5IDEzNy4zMDIgMTI5LjUxWiIgZmlsbD0iIzMyNkNFNSIvPiA8cGF0aCBkPSJNMTQ1Ljg5IDk5LjEwMjJDMTQ1LjY2MiA5OS4xMTM2IDE0NS40MzggOTkuMTcgMTQ1LjIzMiA5OS4yNjhMMTM2LjI1MiAxMDMuNTM5QzEzNi4wMiAxMDMuNjUgMTM1LjgxNiAxMDMuODExIDEzNS42NTUgMTA0LjAxQzEzNS40OTQgMTA0LjIwOSAxMzUuMzgxIDEwNC40NDEgMTM1LjMyMyAxMDQuNjlMMTMzLjEwOCAxMTQuMjg0QzEzMy4wNTcgMTE0LjUwNSAxMzMuMDUxIDExNC43MzQgMTMzLjA5MSAxMTQuOTU4QzEzMy4xMzEgMTE1LjE4MSAxMzMuMjE2IDExNS4zOTQgMTMzLjM0MSAxMTUuNTg0QzEzMy4zNzEgMTE1LjYzMSAxMzMuNDA0IDExNS42NzYgMTMzLjQzOCAxMTUuNzE5TDEzOS42NTQgMTIzLjQxMkMxMzkuODE1IDEyMy42MTEgMTQwLjAxOSAxMjMuNzcyIDE0MC4yNTEgMTIzLjg4M0MxNDAuNDg0IDEyMy45OTMgMTQwLjczOSAxMjQuMDUgMTQwLjk5NiAxMjQuMDVMMTUwLjk2NCAxMjQuMDQ4QzE1MS4yMjIgMTI0LjA0OCAxNTEuNDc2IDEyMy45OTEgMTUxLjcwOSAxMjMuODgxQzE1MS45NDEgMTIzLjc3MSAxNTIuMTQ2IDEyMy42MSAxNTIuMzA3IDEyMy40MTFMMTU4LjUyIDExNS43MTdDMTU4LjY4MSAxMTUuNTE4IDE1OC43OTQgMTE1LjI4NSAxNTguODUyIDExNS4wMzdDMTU4LjkwOSAxMTQuNzg4IDE1OC45MDkgMTE0LjUzIDE1OC44NTIgMTE0LjI4MkwxNTYuNjMzIDEwNC42ODdDMTU2LjU3NSAxMDQuNDM5IDE1Ni40NjIgMTA0LjIwNyAxNTYuMzAxIDEwNC4wMDdDMTU2LjE0IDEwMy44MDggMTU1LjkzNiAxMDMuNjQ4IDE1NS43MDQgMTAzLjUzN0wxNDYuNzIzIDk5LjI2OEMxNDYuNDY0IDk5LjE0NDcgMTQ2LjE3NyA5OS4wODc3IDE0NS44OSA5OS4xMDIyWiIgZmlsbD0id2hpdGUiLz4gPHBhdGggZD0iTTE0NS45NzkgMTAyLjM2N0MxNDUuNjgyIDEwMi4zNjcgMTQ1LjQ0MiAxMDIuNjM0IDE0NS40NDIgMTAyLjk2MkMxNDUuNDQyIDEwMi45NjcgMTQ1LjQ0MyAxMDIuOTcyIDE0NS40NDMgMTAyLjk3N0MxNDUuNDQyIDEwMy4wMjEgMTQ1LjQ0IDEwMy4wNzUgMTQ1LjQ0MiAxMDMuMTE0QzE0NS40NDkgMTAzLjMwMyAxNDUuNDkgMTAzLjQ0OCAxNDUuNTE1IDEwMy42MjNDMTQ1LjU2IDEwMy45OTYgMTQ1LjU5OCAxMDQuMzA2IDE0NS41NzUgMTA0LjU5M0MxNDUuNTUyIDEwNC43MDIgMTQ1LjQ3MiAxMDQuODAxIDE0NS40IDEwNC44N0wxNDUuMzg4IDEwNS4wOTZDMTQ1LjA2NSAxMDUuMTIzIDE0NC43NCAxMDUuMTcyIDE0NC40MTYgMTA1LjI0NUMxNDMuMDIgMTA1LjU2MSAxNDEuODE5IDEwNi4yNzYgMTQwLjkwNCAxMDcuMjQyQzE0MC44NDUgMTA3LjIwMiAxNDAuNzQxIDEwNy4xMjggMTQwLjcxIDEwNy4xMDVDMTQwLjYxNCAxMDcuMTE4IDE0MC41MTcgMTA3LjE0OCAxNDAuMzkxIDEwNy4wNzRDMTQwLjE1IDEwNi45MTMgMTM5LjkzMSAxMDYuNjkxIDEzOS42NjYgMTA2LjQyM0MxMzkuNTQ0IDEwNi4yOTQgMTM5LjQ1NyAxMDYuMTcyIDEzOS4zMTIgMTA2LjA0OUMxMzkuMjc5IDEwNi4wMjEgMTM5LjIyOSAxMDUuOTgzIDEzOS4xOTMgMTA1Ljk1NEMxMzkuMDggMTA1Ljg2NCAxMzguOTQ3IDEwNS44MTggMTM4LjgxOCAxMDUuODEzQzEzOC42NTMgMTA1LjgwOCAxMzguNDk0IDEwNS44NzIgMTM4LjM5IDEwNi4wMDJDMTM4LjIwNSAxMDYuMjMzIDEzOC4yNjQgMTA2LjU4NiAxMzguNTIyIDEwNi43OTFDMTM4LjUyNSAxMDYuNzkzIDEzOC41MjcgMTA2Ljc5NSAxMzguNTMgMTA2Ljc5N0MxMzguNTY2IDEwNi44MjUgMTM4LjYwOSAxMDYuODYyIDEzOC42NDIgMTA2Ljg4NkMxMzguNzk1IDEwNi45OTggMTM4LjkzNSAxMDcuMDU2IDEzOS4wODcgMTA3LjE0NUMxMzkuNDA5IDEwNy4zNDMgMTM5LjY3NSAxMDcuNTA3IDEzOS44ODYgMTA3LjcwNEMxMzkuOTY5IDEwNy43OTIgMTM5Ljk4MyAxMDcuOTQ2IDEzOS45OTQgMTA4LjAxM0wxNDAuMTY3IDEwOC4xNjZDMTM5LjI0NCAxMDkuNTQ4IDEzOC44MTggMTExLjI1NCAxMzkuMDcgMTEyLjk5M0wxMzguODQ1IDExMy4wNThDMTM4Ljc4NSAxMTMuMTM1IDEzOC43MDIgMTEzLjI1NSAxMzguNjE0IDExMy4yOTFDMTM4LjMzNyAxMTMuMzc3IDEzOC4wMjYgMTEzLjQwOSAxMzcuNjUgMTEzLjQ0OEMxMzcuNDc0IDExMy40NjMgMTM3LjMyMiAxMTMuNDU0IDEzNy4xMzUgMTEzLjQ5QzEzNy4wOTQgMTEzLjQ5NyAxMzcuMDM2IDExMy41MTIgMTM2Ljk5MSAxMTMuNTIzQzEzNi45OSAxMTMuNTIzIDEzNi45ODggMTEzLjUyMyAxMzYuOTg3IDExMy41MjRDMTM2Ljk4NCAxMTMuNTI0IDEzNi45ODEgMTEzLjUyNiAxMzYuOTc5IDExMy41MjZDMTM2LjY2MiAxMTMuNjAyIDEzNi40NTggMTEzLjg5MiAxMzYuNTI0IDExNC4xNzhDMTM2LjU4OSAxMTQuNDYzIDEzNi44OTkgMTE0LjYzNyAxMzcuMjE3IDExNC41NjlDMTM3LjIyIDExNC41NjggMTM3LjIyMyAxMTQuNTY4IDEzNy4yMjUgMTE0LjU2OEMxMzcuMjI5IDExNC41NjcgMTM3LjIzMiAxMTQuNTY1IDEzNy4yMzYgMTE0LjU2NEMxMzcuMjggMTE0LjU1NSAxMzcuMzM2IDExNC41NDQgMTM3LjM3NSAxMTQuNTMzQzEzNy41NTkgMTE0LjQ4NCAxMzcuNjkyIDExNC40MTIgMTM3Ljg1NyAxMTQuMzQ5QzEzOC4yMTMgMTE0LjIyMiAxMzguNTA3IDExNC4xMTYgMTM4Ljc5NCAxMTQuMDc1QzEzOC45MTQgMTE0LjA2NiAxMzkuMDQgMTE0LjE0OCAxMzkuMTAzIDExNC4xODNMMTM5LjMzNyAxMTQuMTQzQzEzOS44NzcgMTE1LjgwOCAxNDEuMDA2IDExNy4xNTIgMTQyLjQzNyAxMTcuOTk2TDE0Mi4zNCAxMTguMjNDMTQyLjM3NSAxMTguMzIgMTQyLjQxNCAxMTguNDQzIDE0Mi4zODcgMTE4LjUzMkMxNDIuMjgzIDExOC44MDIgMTQyLjEwNCAxMTkuMDg2IDE0MS45MDEgMTE5LjQwM0MxNDEuODAyIDExOS41NDkgMTQxLjcwMSAxMTkuNjYzIDE0MS42MTMgMTE5LjgzQzE0MS41OTEgMTE5Ljg3IDE0MS41NjQgMTE5LjkzMiAxNDEuNTQ0IDExOS45NzRDMTQxLjQwNiAxMjAuMjY5IDE0MS41MDcgMTIwLjYwNyAxNDEuNzcyIDEyMC43MzVDMTQyLjAzOSAxMjAuODYzIDE0Mi4zNzEgMTIwLjcyOCAxNDIuNTE0IDEyMC40MzNDMTQyLjUxNCAxMjAuNDMyIDE0Mi41MTUgMTIwLjQzMiAxNDIuNTE1IDEyMC40MzJDMTQyLjUxNSAxMjAuNDMxIDE0Mi41MTUgMTIwLjQzMSAxNDIuNTE1IDEyMC40MzFDMTQyLjUzNiAxMjAuMzg5IDE0Mi41NjUgMTIwLjMzNCAxNDIuNTgyIDEyMC4yOTRDMTQyLjY1OCAxMjAuMTIxIDE0Mi42ODMgMTE5Ljk3MiAxNDIuNzM3IDExOS44MDRDMTQyLjg3OSAxMTkuNDQ4IDE0Mi45NTcgMTE5LjA3NSAxNDMuMTUzIDExOC44NDNDMTQzLjIwNyAxMTguNzc5IDE0My4yOTQgMTE4Ljc1NSAxNDMuMzg1IDExOC43M0wxNDMuNTA2IDExOC41MTFDMTQ0Ljc1NCAxMTguOTg4IDE0Ni4xNSAxMTkuMTE1IDE0Ny41NDQgMTE4LjhDMTQ3Ljg2MyAxMTguNzI4IDE0OC4xNyAxMTguNjM1IDE0OC40NjcgMTE4LjUyNEMxNDguNTAxIDExOC41ODQgMTQ4LjU2NCAxMTguNyAxNDguNTgxIDExOC43MjlDMTQ4LjY3NCAxMTguNzU5IDE0OC43NzQgMTE4Ljc3NSAxNDguODU2IDExOC44OTVDMTQ5LjAwMiAxMTkuMTQ0IDE0OS4xMDMgMTE5LjQzOSAxNDkuMjI1IDExOS43OTVDMTQ5LjI3OCAxMTkuOTYzIDE0OS4zMDUgMTIwLjExMiAxNDkuMzgxIDEyMC4yODVDMTQ5LjM5OCAxMjAuMzI1IDE0OS40MjcgMTIwLjM4MSAxNDkuNDQ3IDEyMC40MjNDMTQ5LjU5MSAxMjAuNzE4IDE0OS45MjMgMTIwLjg1NCAxNTAuMTkgMTIwLjcyNkMxNTAuNDU2IDEyMC41OTggMTUwLjU1NyAxMjAuMjU5IDE1MC40MTkgMTE5Ljk2NUMxNTAuMzk4IDExOS45MjMgMTUwLjM3IDExOS44NjEgMTUwLjM0OSAxMTkuODIxQzE1MC4yNiAxMTkuNjU0IDE1MC4xNTkgMTE5LjU0MSAxNTAuMDYxIDExOS4zOTVDMTQ5Ljg1NyAxMTkuMDc4IDE0OS42ODggMTE4LjgxNSAxNDkuNTg0IDExOC41NDVDMTQ5LjU0IDExOC40MDYgMTQ5LjU5MSAxMTguMzIgMTQ5LjYyNSAxMTguMjNDMTQ5LjYwNSAxMTguMjA2IDE0OS41NjEgMTE4LjA3NSAxNDkuNTM2IDExOC4wMTRDMTUxLjAyMyAxMTcuMTQgMTUyLjExOSAxMTUuNzQ0IDE1Mi42MzQgMTE0LjEzM0MxNTIuNzA0IDExNC4xNDQgMTUyLjgyNSAxMTQuMTY1IDE1Mi44NjQgMTE0LjE3M0MxNTIuOTQ1IDExNC4xMiAxNTMuMDE5IDExNC4wNTEgMTUzLjE2NSAxMTQuMDYyQzE1My40NTIgMTE0LjEwNCAxNTMuNzQ2IDExNC4yMSAxNTQuMTAyIDExNC4zMzdDMTU0LjI2NyAxMTQuNCAxNTQuNDAxIDExNC40NzMgMTU0LjU4NCAxMTQuNTIyQzE1NC42MjMgMTE0LjUzMiAxNTQuNjc5IDExNC41NDIgMTU0LjcyMyAxMTQuNTUyQzE1NC43MjcgMTE0LjU1MyAxNTQuNzMgMTE0LjU1NCAxNTQuNzM0IDExNC41NTVDMTU0LjczNiAxMTQuNTU2IDE1NC43MzkgMTE0LjU1NiAxNTQuNzQyIDExNC41NTZDMTU1LjA2IDExNC42MjUgMTU1LjM3IDExNC40NTEgMTU1LjQzNSAxMTQuMTY1QzE1NS41MDEgMTEzLjg4IDE1NS4yOTcgMTEzLjU5IDE1NC45ODEgMTEzLjUxNEMxNTQuOTM1IDExMy41MDMgMTU0Ljg2OSAxMTMuNDg1IDE1NC44MjQgMTEzLjQ3N0MxNTQuNjM3IDExMy40NDIgMTU0LjQ4NSAxMTMuNDUgMTU0LjMwOSAxMTMuNDM2QzE1My45MzMgMTEzLjM5NyAxNTMuNjIyIDExMy4zNjUgMTUzLjM0NSAxMTMuMjc4QzE1My4yMzIgMTEzLjIzNCAxNTMuMTUyIDExMy4xMDEgMTUzLjExMyAxMTMuMDQ2TDE1Mi44OTYgMTEyLjk4M0MxNTMuMDA5IDExMi4xNzIgMTUyLjk3OCAxMTEuMzI5IDE1Mi43ODQgMTEwLjQ4NUMxNTIuNTg3IDEwOS42MzMgMTUyLjI0IDEwOC44NTQgMTUxLjc3NiAxMDguMTY3QzE1MS44MzIgMTA4LjExNyAxNTEuOTM3IDEwOC4wMjQgMTUxLjk2NyAxMDcuOTk3QzE1MS45NzYgMTA3LjkwMSAxNTEuOTY4IDEwNy44IDE1Mi4wNjggMTA3LjY5NEMxNTIuMjggMTA3LjQ5NiAxNTIuNTQ2IDEwNy4zMzMgMTUyLjg2NyAxMDcuMTM1QzE1My4wMiAxMDcuMDQ2IDE1My4xNjEgMTA2Ljk4OCAxNTMuMzE0IDEwNi44NzVDMTUzLjM0OSAxMDYuODUgMTUzLjM5NiAxMDYuODEgMTUzLjQzMyAxMDYuNzgxQzE1My42OSAxMDYuNTc2IDE1My43NSAxMDYuMjIzIDE1My41NjUgMTA1Ljk5MkMxNTMuMzc5IDEwNS43NjEgMTUzLjAyMSAxMDUuNzM5IDE1Mi43NjMgMTA1Ljk0NEMxNTIuNzI2IDEwNS45NzMgMTUyLjY3NiAxMDYuMDEgMTUyLjY0NCAxMDYuMDM5QzE1Mi40OTkgMTA2LjE2MiAxNTIuNDEgMTA2LjI4NCAxNTIuMjg5IDEwNi40MTJDMTUyLjAyNCAxMDYuNjggMTUxLjgwNSAxMDYuOTA0IDE1MS41NjQgMTA3LjA2NUMxNTEuNDYgMTA3LjEyNiAxNTEuMzA3IDEwNy4xMDUgMTUxLjIzOCAxMDcuMTAxTDE1MS4wMzMgMTA3LjI0NkMxNDkuODY4IDEwNi4wMjkgMTQ4LjI4MSAxMDUuMjUxIDE0Ni41NzIgMTA1LjFDMTQ2LjU2NyAxMDUuMDI5IDE0Ni41NjEgMTA0LjkgMTQ2LjU1OSAxMDQuODYxQzE0Ni40ODkgMTA0Ljc5NCAxNDYuNDA1IDEwNC43MzcgMTQ2LjM4MyAxMDQuNTkzQzE0Ni4zNiAxMDQuMzA2IDE0Ni4zOTkgMTAzLjk5NiAxNDYuNDQ0IDEwMy42MjNDMTQ2LjQ2OSAxMDMuNDQ4IDE0Ni41MTEgMTAzLjMwMyAxNDYuNTE4IDEwMy4xMTRDMTQ2LjUxOSAxMDMuMDcxIDE0Ni41MTcgMTAzLjAwOCAxNDYuNTE3IDEwMi45NjJDMTQ2LjUxNiAxMDIuNjM0IDE0Ni4yNzYgMTAyLjM2NyAxNDUuOTc5IDEwMi4zNjdIMTQ1Ljk3OVpNMTQ1LjMwNiAxMDYuNTE4TDE0NS4xNDYgMTA5LjMyNEwxNDUuMTM1IDEwOS4zM0MxNDUuMTI0IDEwOS41ODEgMTQ0LjkxNyAxMDkuNzgyIDE0NC42NjIgMTA5Ljc4MkMxNDQuNTU3IDEwOS43ODIgMTQ0LjQ2MSAxMDkuNzQ4IDE0NC4zODMgMTA5LjY5MUwxNDQuMzc4IDEwOS42OTRMMTQyLjA2NiAxMDguMDYyQzE0Mi43NzcgMTA3LjM2NyAxNDMuNjg2IDEwNi44NTMgMTQ0LjczMyAxMDYuNjE2QzE0NC45MjQgMTA2LjU3MyAxNDUuMTE2IDEwNi41NDEgMTQ1LjMwNiAxMDYuNTE4Wk0xNDYuNjUzIDEwNi41MThDMTQ3Ljg3NiAxMDYuNjY3IDE0OS4wMDcgMTA3LjIxOSAxNDkuODczIDEwOC4wNjNMMTQ3LjU3NyAxMDkuNjg1TDE0Ny41NjggMTA5LjY4MUMxNDcuMzY1IDEwOS44MjkgMTQ3LjA3NyAxMDkuNzkzIDE0Ni45MTggMTA5LjU5NEMxNDYuODUzIDEwOS41MTMgMTQ2LjgxOSAxMDkuNDE3IDE0Ni44MTUgMTA5LjMyMUwxNDYuODEzIDEwOS4zMkwxNDYuNjUzIDEwNi41MThaTTE0MS4yMjggMTA5LjExMUwxNDMuMzM5IDExMC45OUwxNDMuMzM2IDExMS4wMDJDMTQzLjUyNyAxMTEuMTY3IDE0My41NTUgMTExLjQ1MyAxNDMuMzk2IDExMS42NTFDMTQzLjMzMSAxMTEuNzMyIDE0My4yNDQgMTExLjc4NyAxNDMuMTUgMTExLjgxMkwxNDMuMTQ4IDExMS44MjFMMTQwLjQ0MiAxMTIuNTk5QzE0MC4zMDUgMTExLjM0NSAxNDAuNjAxIDExMC4xMjcgMTQxLjIyOCAxMDkuMTExWk0xNTAuNzE1IDEwOS4xMTJDMTUxLjAyOSAxMDkuNjE4IDE1MS4yNjYgMTEwLjE4MyAxNTEuNDA4IDExMC43OTZDMTUxLjU0NyAxMTEuNDAxIDE1MS41ODMgMTEyLjAwNiAxNTEuNTI1IDExMi41OUwxNDguODA1IDExMS44MUwxNDguODAzIDExMS43OTlDMTQ4LjU2IDExMS43MzIgMTQ4LjQxIDExMS40ODYgMTQ4LjQ2NyAxMTEuMjM4QzE0OC40OSAxMTEuMTM3IDE0OC41NDQgMTExLjA1MSAxNDguNjE3IDExMC45ODhMMTQ4LjYxNiAxMTAuOTgyTDE1MC43MTUgMTA5LjExMkgxNTAuNzE1Wk0xNDUuNTQ2IDExMS4xMzVIMTQ2LjQxMUwxNDYuOTQ4IDExMS44MDRMMTQ2Ljc1NSAxMTIuNjM5TDE0NS45NzkgMTEzLjAxTDE0NS4yIDExMi42MzhMMTQ1LjAwNyAxMTEuODAzTDE0NS41NDYgMTExLjEzNVpNMTQ4LjMxOCAxMTMuNDI0QzE0OC4zNTUgMTEzLjQyMiAxNDguMzkyIDExMy40MjYgMTQ4LjQyOCAxMTMuNDMyTDE0OC40MzIgMTEzLjQyN0wxNTEuMjMxIDExMy44OThDMTUwLjgyMSAxMTUuMDQzIDE1MC4wMzggMTE2LjAzNiAxNDguOTkgMTE2LjdMMTQ3LjkwNCAxMTQuMDg3TDE0Ny45MDcgMTE0LjA4M0MxNDcuODA3IDExMy44NTIgMTQ3LjkwNyAxMTMuNTgxIDE0OC4xMzcgMTEzLjQ3MUMxNDguMTk2IDExMy40NDMgMTQ4LjI1NyAxMTMuNDI3IDE0OC4zMTggMTEzLjQyNEgxNDguMzE4Wk0xNDMuNjE4IDExMy40MzZDMTQzLjgzMSAxMTMuNDM5IDE0NC4wMjMgMTEzLjU4NiAxNDQuMDczIDExMy44MDNDMTQ0LjA5NiAxMTMuOTA0IDE0NC4wODUgMTE0LjAwNCAxNDQuMDQ2IDExNC4wOTNMMTQ0LjA1NCAxMTQuMTAzTDE0Mi45NzkgMTE2LjY5QzE0MS45NzQgMTE2LjA0OCAxNDEuMTc0IDExNS4wODYgMTQwLjc0NSAxMTMuOTA3TDE0My41MiAxMTMuNDM4TDE0My41MjUgMTEzLjQ0NEMxNDMuNTU2IDExMy40MzggMTQzLjU4NyAxMTMuNDM1IDE0My42MTggMTEzLjQzNlYxMTMuNDM2Wk0xNDUuOTYyIDExNC41NjlDMTQ2LjAzNiAxMTQuNTY2IDE0Ni4xMTIgMTE0LjU4MSAxNDYuMTgzIDExNC42MTZDMTQ2LjI3OCAxMTQuNjYxIDE0Ni4zNSAxMTQuNzMyIDE0Ni4zOTYgMTE0LjgxN0gxNDYuNDA2TDE0Ny43NzQgMTE3LjI3N0MxNDcuNTk3IDExNy4zMzcgMTQ3LjQxNCAxMTcuMzg3IDE0Ny4yMjcgMTE3LjQyOUMxNDYuMTgxIDExNy42NjYgMTQ1LjEzOSAxMTcuNTk0IDE0NC4xOTQgMTE3LjI3NEwxNDUuNTU5IDExNC44MThIMTQ1LjU2MUMxNDUuNjQzIDExNC42NjYgMTQ1Ljc5OCAxMTQuNTc1IDE0NS45NjIgMTE0LjU2OVoiIGZpbGw9IiMzMjZDRTUiIHN0cm9rZT0iIzMyNkNFNSIgc3Ryb2tlLXdpZHRoPSIwLjI1Ii8+IDwvc3ZnPg==)",
      backgroundImage:
        "url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTY3IiBoZWlnaHQ9IjE1NiIgdmlld0JveD0iMCAwIDE2NyAxNTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+IDxwYXRoIGQ9Ik05My44MTg1IDcuMDE4NDhDODUuOTMyNSAxLjI4ODk5IDc1LjI1NDEgMS4yODg5OSA2Ny4zNjgxIDcuMDE4NDlMMTIuMDE5OSA0Ny4yMzEzQzQuMTMzOTEgNTIuOTYwOCAwLjgzNDExNSA2My4xMTY2IDMuODQ2MjkgNzIuMzg3MUwyNC45ODc0IDEzNy40NTNDMjcuOTk5NiAxNDYuNzIzIDM2LjYzODYgMTUzIDQ2LjM4NjIgMTUzSDExNC44QzEyNC41NDggMTUzIDEzMy4xODcgMTQ2LjcyMyAxMzYuMTk5IDEzNy40NTNMMTU3LjM0IDcyLjM4NzFDMTYwLjM1MiA2My4xMTY2IDE1Ny4wNTMgNTIuOTYwOCAxNDkuMTY3IDQ3LjIzMTNMOTMuODE4NSA3LjAxODQ4WiIgZmlsbD0iIzMyNkNFNSIgZmlsbC1vcGFjaXR5PSIwLjEiIHN0cm9rZT0iIzMyNkNFNSIgc3Ryb2tlLXdpZHRoPSI1Ii8+IDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTM3LjMwMiAxMjkuNTFDMTI3LjE3MSAxMjQuNjgyIDEyMi44OSAxMTIuNTkxIDEyNy43NCAxMDIuNTA1QzEzMC4wNjkgOTcuNjYxMiAxMzQuMjM1IDkzLjkzNzEgMTM5LjMyMiA5Mi4xNTE4QzE0NC40MDkgOTAuMzY2NCAxNTAgOTAuNjY2MSAxNTQuODY0IDkyLjk4NDlDMTY0Ljk5NSA5Ny44MTM0IDE2OS4yNzYgMTA5LjkwNCAxNjQuNDI2IDExOS45OUMxNTkuNTc2IDEzMC4wNzcgMTQ3LjQzMyAxMzQuMzM5IDEzNy4zMDIgMTI5LjUxWiIgZmlsbD0iIzMyNkNFNSIvPiA8cGF0aCBkPSJNMTQ1Ljg5IDk5LjEwMjJDMTQ1LjY2MiA5OS4xMTM2IDE0NS40MzggOTkuMTcgMTQ1LjIzMiA5OS4yNjhMMTM2LjI1MiAxMDMuNTM5QzEzNi4wMiAxMDMuNjUgMTM1LjgxNiAxMDMuODExIDEzNS42NTUgMTA0LjAxQzEzNS40OTQgMTA0LjIwOSAxMzUuMzgxIDEwNC40NDEgMTM1LjMyMyAxMDQuNjlMMTMzLjEwOCAxMTQuMjg0QzEzMy4wNTcgMTE0LjUwNSAxMzMuMDUxIDExNC43MzQgMTMzLjA5MSAxMTQuOTU4QzEzMy4xMzEgMTE1LjE4MSAxMzMuMjE2IDExNS4zOTQgMTMzLjM0MSAxMTUuNTg0QzEzMy4zNzEgMTE1LjYzMSAxMzMuNDA0IDExNS42NzYgMTMzLjQzOCAxMTUuNzE5TDEzOS42NTQgMTIzLjQxMkMxMzkuODE1IDEyMy42MTEgMTQwLjAxOSAxMjMuNzcyIDE0MC4yNTEgMTIzLjg4M0MxNDAuNDg0IDEyMy45OTMgMTQwLjczOSAxMjQuMDUgMTQwLjk5NiAxMjQuMDVMMTUwLjk2NCAxMjQuMDQ4QzE1MS4yMjIgMTI0LjA0OCAxNTEuNDc2IDEyMy45OTEgMTUxLjcwOSAxMjMuODgxQzE1MS45NDEgMTIzLjc3MSAxNTIuMTQ2IDEyMy42MSAxNTIuMzA3IDEyMy40MTFMMTU4LjUyIDExNS43MTdDMTU4LjY4MSAxMTUuNTE4IDE1OC43OTQgMTE1LjI4NSAxNTguODUyIDExNS4wMzdDMTU4LjkwOSAxMTQuNzg4IDE1OC45MDkgMTE0LjUzIDE1OC44NTIgMTE0LjI4MkwxNTYuNjMzIDEwNC42ODdDMTU2LjU3NSAxMDQuNDM5IDE1Ni40NjIgMTA0LjIwNyAxNTYuMzAxIDEwNC4wMDdDMTU2LjE0IDEwMy44MDggMTU1LjkzNiAxMDMuNjQ4IDE1NS43MDQgMTAzLjUzN0wxNDYuNzIzIDk5LjI2OEMxNDYuNDY0IDk5LjE0NDcgMTQ2LjE3NyA5OS4wODc3IDE0NS44OSA5OS4xMDIyWiIgZmlsbD0id2hpdGUiLz4gPHBhdGggZD0iTTE0NS45NzkgMTAyLjM2N0MxNDUuNjgyIDEwMi4zNjcgMTQ1LjQ0MiAxMDIuNjM0IDE0NS40NDIgMTAyLjk2MkMxNDUuNDQyIDEwMi45NjcgMTQ1LjQ0MyAxMDIuOTcyIDE0NS40NDMgMTAyLjk3N0MxNDUuNDQyIDEwMy4wMjEgMTQ1LjQ0IDEwMy4wNzUgMTQ1LjQ0MiAxMDMuMTE0QzE0NS40NDkgMTAzLjMwMyAxNDUuNDkgMTAzLjQ0OCAxNDUuNTE1IDEwMy42MjNDMTQ1LjU2IDEwMy45OTYgMTQ1LjU5OCAxMDQuMzA2IDE0NS41NzUgMTA0LjU5M0MxNDUuNTUyIDEwNC43MDIgMTQ1LjQ3MiAxMDQuODAxIDE0NS40IDEwNC44N0wxNDUuMzg4IDEwNS4wOTZDMTQ1LjA2NSAxMDUuMTIzIDE0NC43NCAxMDUuMTcyIDE0NC40MTYgMTA1LjI0NUMxNDMuMDIgMTA1LjU2MSAxNDEuODE5IDEwNi4yNzYgMTQwLjkwNCAxMDcuMjQyQzE0MC44NDUgMTA3LjIwMiAxNDAuNzQxIDEwNy4xMjggMTQwLjcxIDEwNy4xMDVDMTQwLjYxNCAxMDcuMTE4IDE0MC41MTcgMTA3LjE0OCAxNDAuMzkxIDEwNy4wNzRDMTQwLjE1IDEwNi45MTMgMTM5LjkzMSAxMDYuNjkxIDEzOS42NjYgMTA2LjQyM0MxMzkuNTQ0IDEwNi4yOTQgMTM5LjQ1NyAxMDYuMTcyIDEzOS4zMTIgMTA2LjA0OUMxMzkuMjc5IDEwNi4wMjEgMTM5LjIyOSAxMDUuOTgzIDEzOS4xOTMgMTA1Ljk1NEMxMzkuMDggMTA1Ljg2NCAxMzguOTQ3IDEwNS44MTggMTM4LjgxOCAxMDUuODEzQzEzOC42NTMgMTA1LjgwOCAxMzguNDk0IDEwNS44NzIgMTM4LjM5IDEwNi4wMDJDMTM4LjIwNSAxMDYuMjMzIDEzOC4yNjQgMTA2LjU4NiAxMzguNTIyIDEwNi43OTFDMTM4LjUyNSAxMDYuNzkzIDEzOC41MjcgMTA2Ljc5NSAxMzguNTMgMTA2Ljc5N0MxMzguNTY2IDEwNi44MjUgMTM4LjYwOSAxMDYuODYyIDEzOC42NDIgMTA2Ljg4NkMxMzguNzk1IDEwNi45OTggMTM4LjkzNSAxMDcuMDU2IDEzOS4wODcgMTA3LjE0NUMxMzkuNDA5IDEwNy4zNDMgMTM5LjY3NSAxMDcuNTA3IDEzOS44ODYgMTA3LjcwNEMxMzkuOTY5IDEwNy43OTIgMTM5Ljk4MyAxMDcuOTQ2IDEzOS45OTQgMTA4LjAxM0wxNDAuMTY3IDEwOC4xNjZDMTM5LjI0NCAxMDkuNTQ4IDEzOC44MTggMTExLjI1NCAxMzkuMDcgMTEyLjk5M0wxMzguODQ1IDExMy4wNThDMTM4Ljc4NSAxMTMuMTM1IDEzOC43MDIgMTEzLjI1NSAxMzguNjE0IDExMy4yOTFDMTM4LjMzNyAxMTMuMzc3IDEzOC4wMjYgMTEzLjQwOSAxMzcuNjUgMTEzLjQ0OEMxMzcuNDc0IDExMy40NjMgMTM3LjMyMiAxMTMuNDU0IDEzNy4xMzUgMTEzLjQ5QzEzNy4wOTQgMTEzLjQ5NyAxMzcuMDM2IDExMy41MTIgMTM2Ljk5MSAxMTMuNTIzQzEzNi45OSAxMTMuNTIzIDEzNi45ODggMTEzLjUyMyAxMzYuOTg3IDExMy41MjRDMTM2Ljk4NCAxMTMuNTI0IDEzNi45ODEgMTEzLjUyNiAxMzYuOTc5IDExMy41MjZDMTM2LjY2MiAxMTMuNjAyIDEzNi40NTggMTEzLjg5MiAxMzYuNTI0IDExNC4xNzhDMTM2LjU4OSAxMTQuNDYzIDEzNi44OTkgMTE0LjYzNyAxMzcuMjE3IDExNC41NjlDMTM3LjIyIDExNC41NjggMTM3LjIyMyAxMTQuNTY4IDEzNy4yMjUgMTE0LjU2OEMxMzcuMjI5IDExNC41NjcgMTM3LjIzMiAxMTQuNTY1IDEzNy4yMzYgMTE0LjU2NEMxMzcuMjggMTE0LjU1NSAxMzcuMzM2IDExNC41NDQgMTM3LjM3NSAxMTQuNTMzQzEzNy41NTkgMTE0LjQ4NCAxMzcuNjkyIDExNC40MTIgMTM3Ljg1NyAxMTQuMzQ5QzEzOC4yMTMgMTE0LjIyMiAxMzguNTA3IDExNC4xMTYgMTM4Ljc5NCAxMTQuMDc1QzEzOC45MTQgMTE0LjA2NiAxMzkuMDQgMTE0LjE0OCAxMzkuMTAzIDExNC4xODNMMTM5LjMzNyAxMTQuMTQzQzEzOS44NzcgMTE1LjgwOCAxNDEuMDA2IDExNy4xNTIgMTQyLjQzNyAxMTcuOTk2TDE0Mi4zNCAxMTguMjNDMTQyLjM3NSAxMTguMzIgMTQyLjQxNCAxMTguNDQzIDE0Mi4zODcgMTE4LjUzMkMxNDIuMjgzIDExOC44MDIgMTQyLjEwNCAxMTkuMDg2IDE0MS45MDEgMTE5LjQwM0MxNDEuODAyIDExOS41NDkgMTQxLjcwMSAxMTkuNjYzIDE0MS42MTMgMTE5LjgzQzE0MS41OTEgMTE5Ljg3IDE0MS41NjQgMTE5LjkzMiAxNDEuNTQ0IDExOS45NzRDMTQxLjQwNiAxMjAuMjY5IDE0MS41MDcgMTIwLjYwNyAxNDEuNzcyIDEyMC43MzVDMTQyLjAzOSAxMjAuODYzIDE0Mi4zNzEgMTIwLjcyOCAxNDIuNTE0IDEyMC40MzNDMTQyLjUxNCAxMjAuNDMyIDE0Mi41MTUgMTIwLjQzMiAxNDIuNTE1IDEyMC40MzJDMTQyLjUxNSAxMjAuNDMxIDE0Mi41MTUgMTIwLjQzMSAxNDIuNTE1IDEyMC40MzFDMTQyLjUzNiAxMjAuMzg5IDE0Mi41NjUgMTIwLjMzNCAxNDIuNTgyIDEyMC4yOTRDMTQyLjY1OCAxMjAuMTIxIDE0Mi42ODMgMTE5Ljk3MiAxNDIuNzM3IDExOS44MDRDMTQyLjg3OSAxMTkuNDQ4IDE0Mi45NTcgMTE5LjA3NSAxNDMuMTUzIDExOC44NDNDMTQzLjIwNyAxMTguNzc5IDE0My4yOTQgMTE4Ljc1NSAxNDMuMzg1IDExOC43M0wxNDMuNTA2IDExOC41MTFDMTQ0Ljc1NCAxMTguOTg4IDE0Ni4xNSAxMTkuMTE1IDE0Ny41NDQgMTE4LjhDMTQ3Ljg2MyAxMTguNzI4IDE0OC4xNyAxMTguNjM1IDE0OC40NjcgMTE4LjUyNEMxNDguNTAxIDExOC41ODQgMTQ4LjU2NCAxMTguNyAxNDguNTgxIDExOC43MjlDMTQ4LjY3NCAxMTguNzU5IDE0OC43NzQgMTE4Ljc3NSAxNDguODU2IDExOC44OTVDMTQ5LjAwMiAxMTkuMTQ0IDE0OS4xMDMgMTE5LjQzOSAxNDkuMjI1IDExOS43OTVDMTQ5LjI3OCAxMTkuOTYzIDE0OS4zMDUgMTIwLjExMiAxNDkuMzgxIDEyMC4yODVDMTQ5LjM5OCAxMjAuMzI1IDE0OS40MjcgMTIwLjM4MSAxNDkuNDQ3IDEyMC40MjNDMTQ5LjU5MSAxMjAuNzE4IDE0OS45MjMgMTIwLjg1NCAxNTAuMTkgMTIwLjcyNkMxNTAuNDU2IDEyMC41OTggMTUwLjU1NyAxMjAuMjU5IDE1MC40MTkgMTE5Ljk2NUMxNTAuMzk4IDExOS45MjMgMTUwLjM3IDExOS44NjEgMTUwLjM0OSAxMTkuODIxQzE1MC4yNiAxMTkuNjU0IDE1MC4xNTkgMTE5LjU0MSAxNTAuMDYxIDExOS4zOTVDMTQ5Ljg1NyAxMTkuMDc4IDE0OS42ODggMTE4LjgxNSAxNDkuNTg0IDExOC41NDVDMTQ5LjU0IDExOC40MDYgMTQ5LjU5MSAxMTguMzIgMTQ5LjYyNSAxMTguMjNDMTQ5LjYwNSAxMTguMjA2IDE0OS41NjEgMTE4LjA3NSAxNDkuNTM2IDExOC4wMTRDMTUxLjAyMyAxMTcuMTQgMTUyLjExOSAxMTUuNzQ0IDE1Mi42MzQgMTE0LjEzM0MxNTIuNzA0IDExNC4xNDQgMTUyLjgyNSAxMTQuMTY1IDE1Mi44NjQgMTE0LjE3M0MxNTIuOTQ1IDExNC4xMiAxNTMuMDE5IDExNC4wNTEgMTUzLjE2NSAxMTQuMDYyQzE1My40NTIgMTE0LjEwNCAxNTMuNzQ2IDExNC4yMSAxNTQuMTAyIDExNC4zMzdDMTU0LjI2NyAxMTQuNCAxNTQuNDAxIDExNC40NzMgMTU0LjU4NCAxMTQuNTIyQzE1NC42MjMgMTE0LjUzMiAxNTQuNjc5IDExNC41NDIgMTU0LjcyMyAxMTQuNTUyQzE1NC43MjcgMTE0LjU1MyAxNTQuNzMgMTE0LjU1NCAxNTQuNzM0IDExNC41NTVDMTU0LjczNiAxMTQuNTU2IDE1NC43MzkgMTE0LjU1NiAxNTQuNzQyIDExNC41NTZDMTU1LjA2IDExNC42MjUgMTU1LjM3IDExNC40NTEgMTU1LjQzNSAxMTQuMTY1QzE1NS41MDEgMTEzLjg4IDE1NS4yOTcgMTEzLjU5IDE1NC45ODEgMTEzLjUxNEMxNTQuOTM1IDExMy41MDMgMTU0Ljg2OSAxMTMuNDg1IDE1NC44MjQgMTEzLjQ3N0MxNTQuNjM3IDExMy40NDIgMTU0LjQ4NSAxMTMuNDUgMTU0LjMwOSAxMTMuNDM2QzE1My45MzMgMTEzLjM5NyAxNTMuNjIyIDExMy4zNjUgMTUzLjM0NSAxMTMuMjc4QzE1My4yMzIgMTEzLjIzNCAxNTMuMTUyIDExMy4xMDEgMTUzLjExMyAxMTMuMDQ2TDE1Mi44OTYgMTEyLjk4M0MxNTMuMDA5IDExMi4xNzIgMTUyLjk3OCAxMTEuMzI5IDE1Mi43ODQgMTEwLjQ4NUMxNTIuNTg3IDEwOS42MzMgMTUyLjI0IDEwOC44NTQgMTUxLjc3NiAxMDguMTY3QzE1MS44MzIgMTA4LjExNyAxNTEuOTM3IDEwOC4wMjQgMTUxLjk2NyAxMDcuOTk3QzE1MS45NzYgMTA3LjkwMSAxNTEuOTY4IDEwNy44IDE1Mi4wNjggMTA3LjY5NEMxNTIuMjggMTA3LjQ5NiAxNTIuNTQ2IDEwNy4zMzMgMTUyLjg2NyAxMDcuMTM1QzE1My4wMiAxMDcuMDQ2IDE1My4xNjEgMTA2Ljk4OCAxNTMuMzE0IDEwNi44NzVDMTUzLjM0OSAxMDYuODUgMTUzLjM5NiAxMDYuODEgMTUzLjQzMyAxMDYuNzgxQzE1My42OSAxMDYuNTc2IDE1My43NSAxMDYuMjIzIDE1My41NjUgMTA1Ljk5MkMxNTMuMzc5IDEwNS43NjEgMTUzLjAyMSAxMDUuNzM5IDE1Mi43NjMgMTA1Ljk0NEMxNTIuNzI2IDEwNS45NzMgMTUyLjY3NiAxMDYuMDEgMTUyLjY0NCAxMDYuMDM5QzE1Mi40OTkgMTA2LjE2MiAxNTIuNDEgMTA2LjI4NCAxNTIuMjg5IDEwNi40MTJDMTUyLjAyNCAxMDYuNjggMTUxLjgwNSAxMDYuOTA0IDE1MS41NjQgMTA3LjA2NUMxNTEuNDYgMTA3LjEyNiAxNTEuMzA3IDEwNy4xMDUgMTUxLjIzOCAxMDcuMTAxTDE1MS4wMzMgMTA3LjI0NkMxNDkuODY4IDEwNi4wMjkgMTQ4LjI4MSAxMDUuMjUxIDE0Ni41NzIgMTA1LjFDMTQ2LjU2NyAxMDUuMDI5IDE0Ni41NjEgMTA0LjkgMTQ2LjU1OSAxMDQuODYxQzE0Ni40ODkgMTA0Ljc5NCAxNDYuNDA1IDEwNC43MzcgMTQ2LjM4MyAxMDQuNTkzQzE0Ni4zNiAxMDQuMzA2IDE0Ni4zOTkgMTAzLjk5NiAxNDYuNDQ0IDEwMy42MjNDMTQ2LjQ2OSAxMDMuNDQ4IDE0Ni41MTEgMTAzLjMwMyAxNDYuNTE4IDEwMy4xMTRDMTQ2LjUxOSAxMDMuMDcxIDE0Ni41MTcgMTAzLjAwOCAxNDYuNTE3IDEwMi45NjJDMTQ2LjUxNiAxMDIuNjM0IDE0Ni4yNzYgMTAyLjM2NyAxNDUuOTc5IDEwMi4zNjdIMTQ1Ljk3OVpNMTQ1LjMwNiAxMDYuNTE4TDE0NS4xNDYgMTA5LjMyNEwxNDUuMTM1IDEwOS4zM0MxNDUuMTI0IDEwOS41ODEgMTQ0LjkxNyAxMDkuNzgyIDE0NC42NjIgMTA5Ljc4MkMxNDQuNTU3IDEwOS43ODIgMTQ0LjQ2MSAxMDkuNzQ4IDE0NC4zODMgMTA5LjY5MUwxNDQuMzc4IDEwOS42OTRMMTQyLjA2NiAxMDguMDYyQzE0Mi43NzcgMTA3LjM2NyAxNDMuNjg2IDEwNi44NTMgMTQ0LjczMyAxMDYuNjE2QzE0NC45MjQgMTA2LjU3MyAxNDUuMTE2IDEwNi41NDEgMTQ1LjMwNiAxMDYuNTE4Wk0xNDYuNjUzIDEwNi41MThDMTQ3Ljg3NiAxMDYuNjY3IDE0OS4wMDcgMTA3LjIxOSAxNDkuODczIDEwOC4wNjNMMTQ3LjU3NyAxMDkuNjg1TDE0Ny41NjggMTA5LjY4MUMxNDcuMzY1IDEwOS44MjkgMTQ3LjA3NyAxMDkuNzkzIDE0Ni45MTggMTA5LjU5NEMxNDYuODUzIDEwOS41MTMgMTQ2LjgxOSAxMDkuNDE3IDE0Ni44MTUgMTA5LjMyMUwxNDYuODEzIDEwOS4zMkwxNDYuNjUzIDEwNi41MThaTTE0MS4yMjggMTA5LjExMUwxNDMuMzM5IDExMC45OUwxNDMuMzM2IDExMS4wMDJDMTQzLjUyNyAxMTEuMTY3IDE0My41NTUgMTExLjQ1MyAxNDMuMzk2IDExMS42NTFDMTQzLjMzMSAxMTEuNzMyIDE0My4yNDQgMTExLjc4NyAxNDMuMTUgMTExLjgxMkwxNDMuMTQ4IDExMS44MjFMMTQwLjQ0MiAxMTIuNTk5QzE0MC4zMDUgMTExLjM0NSAxNDAuNjAxIDExMC4xMjcgMTQxLjIyOCAxMDkuMTExWk0xNTAuNzE1IDEwOS4xMTJDMTUxLjAyOSAxMDkuNjE4IDE1MS4yNjYgMTEwLjE4MyAxNTEuNDA4IDExMC43OTZDMTUxLjU0NyAxMTEuNDAxIDE1MS41ODMgMTEyLjAwNiAxNTEuNTI1IDExMi41OUwxNDguODA1IDExMS44MUwxNDguODAzIDExMS43OTlDMTQ4LjU2IDExMS43MzIgMTQ4LjQxIDExMS40ODYgMTQ4LjQ2NyAxMTEuMjM4QzE0OC40OSAxMTEuMTM3IDE0OC41NDQgMTExLjA1MSAxNDguNjE3IDExMC45ODhMMTQ4LjYxNiAxMTAuOTgyTDE1MC43MTUgMTA5LjExMkgxNTAuNzE1Wk0xNDUuNTQ2IDExMS4xMzVIMTQ2LjQxMUwxNDYuOTQ4IDExMS44MDRMMTQ2Ljc1NSAxMTIuNjM5TDE0NS45NzkgMTEzLjAxTDE0NS4yIDExMi42MzhMMTQ1LjAwNyAxMTEuODAzTDE0NS41NDYgMTExLjEzNVpNMTQ4LjMxOCAxMTMuNDI0QzE0OC4zNTUgMTEzLjQyMiAxNDguMzkyIDExMy40MjYgMTQ4LjQyOCAxMTMuNDMyTDE0OC40MzIgMTEzLjQyN0wxNTEuMjMxIDExMy44OThDMTUwLjgyMSAxMTUuMDQzIDE1MC4wMzggMTE2LjAzNiAxNDguOTkgMTE2LjdMMTQ3LjkwNCAxMTQuMDg3TDE0Ny45MDcgMTE0LjA4M0MxNDcuODA3IDExMy44NTIgMTQ3LjkwNyAxMTMuNTgxIDE0OC4xMzcgMTEzLjQ3MUMxNDguMTk2IDExMy40NDMgMTQ4LjI1NyAxMTMuNDI3IDE0OC4zMTggMTEzLjQyNEgxNDguMzE4Wk0xNDMuNjE4IDExMy40MzZDMTQzLjgzMSAxMTMuNDM5IDE0NC4wMjMgMTEzLjU4NiAxNDQuMDczIDExMy44MDNDMTQ0LjA5NiAxMTMuOTA0IDE0NC4wODUgMTE0LjAwNCAxNDQuMDQ2IDExNC4wOTNMMTQ0LjA1NCAxMTQuMTAzTDE0Mi45NzkgMTE2LjY5QzE0MS45NzQgMTE2LjA0OCAxNDEuMTc0IDExNS4wODYgMTQwLjc0NSAxMTMuOTA3TDE0My41MiAxMTMuNDM4TDE0My41MjUgMTEzLjQ0NEMxNDMuNTU2IDExMy40MzggMTQzLjU4NyAxMTMuNDM1IDE0My42MTggMTEzLjQzNlYxMTMuNDM2Wk0xNDUuOTYyIDExNC41NjlDMTQ2LjAzNiAxMTQuNTY2IDE0Ni4xMTIgMTE0LjU4MSAxNDYuMTgzIDExNC42MTZDMTQ2LjI3OCAxMTQuNjYxIDE0Ni4zNSAxMTQuNzMyIDE0Ni4zOTYgMTE0LjgxN0gxNDYuNDA2TDE0Ny43NzQgMTE3LjI3N0MxNDcuNTk3IDExNy4zMzcgMTQ3LjQxNCAxMTcuMzg3IDE0Ny4yMjcgMTE3LjQyOUMxNDYuMTgxIDExNy42NjYgMTQ1LjEzOSAxMTcuNTk0IDE0NC4xOTQgMTE3LjI3NEwxNDUuNTU5IDExNC44MThIMTQ1LjU2MUMxNDUuNjQzIDExNC42NjYgMTQ1Ljc5OCAxMTQuNTc1IDE0NS45NjIgMTE0LjU2OVoiIGZpbGw9IiMzMjZDRTUiIHN0cm9rZT0iIzMyNkNFNSIgc3Ryb2tlLXdpZHRoPSIwLjI1Ii8+IDwvc3ZnPg==)",
      "background-image-crossorigin": "anonymous",
      backgroundImageCrossorigin: "anonymous",
      "background-image-opacity": "0",
      backgroundImageOpacity: "0",
      "background-image-containment": "inside",
      backgroundImageContainment: "inside",
      "background-image-smoothing": "yes",
      backgroundImageSmoothing: "yes",
      "background-position-x": "50%",
      backgroundPositionX: "50%",
      "background-position-y": "50%",
      backgroundPositionY: "50%",
      "background-width-relative-to": "inner",
      backgroundWidthRelativeTo: "inner",
      "background-height-relative-to": "inner",
      backgroundHeightRelativeTo: "inner",
      "background-repeat": "no-repeat",
      backgroundRepeat: "no-repeat",
      "background-fit": "contain",
      backgroundFit: "contain",
      "background-clip": "none",
      backgroundClip: "none",
      "background-width": "auto",
      backgroundWidth: "auto",
      "background-height": "auto",
      backgroundHeight: "auto",
      "background-offset-x": "0px",
      backgroundOffsetX: "0px",
      "background-offset-y": "0px",
      backgroundOffsetY: "0px",
      "pie-size": "100%",
      pieSize: "100%",
      "pie-1-background-color": "rgb(0,0,0)",
      pie1BackgroundColor: "rgb(0,0,0)",
      "pie-1-background-size": "0%",
      pie1BackgroundSize: "0%",
      "pie-1-background-opacity": "1",
      pie1BackgroundOpacity: "1",
      "pie-2-background-color": "rgb(0,0,0)",
      pie2BackgroundColor: "rgb(0,0,0)",
      "pie-2-background-size": "0%",
      pie2BackgroundSize: "0%",
      "pie-2-background-opacity": "1",
      pie2BackgroundOpacity: "1",
      "pie-3-background-color": "rgb(0,0,0)",
      pie3BackgroundColor: "rgb(0,0,0)",
      "pie-3-background-size": "0%",
      pie3BackgroundSize: "0%",
      "pie-3-background-opacity": "1",
      pie3BackgroundOpacity: "1",
      "pie-4-background-color": "rgb(0,0,0)",
      pie4BackgroundColor: "rgb(0,0,0)",
      "pie-4-background-size": "0%",
      pie4BackgroundSize: "0%",
      "pie-4-background-opacity": "1",
      pie4BackgroundOpacity: "1",
      "pie-5-background-color": "rgb(0,0,0)",
      pie5BackgroundColor: "rgb(0,0,0)",
      "pie-5-background-size": "0%",
      pie5BackgroundSize: "0%",
      "pie-5-background-opacity": "1",
      pie5BackgroundOpacity: "1",
      "pie-6-background-color": "rgb(0,0,0)",
      pie6BackgroundColor: "rgb(0,0,0)",
      "pie-6-background-size": "0%",
      pie6BackgroundSize: "0%",
      "pie-6-background-opacity": "1",
      pie6BackgroundOpacity: "1",
      "pie-7-background-color": "rgb(0,0,0)",
      pie7BackgroundColor: "rgb(0,0,0)",
      "pie-7-background-size": "0%",
      pie7BackgroundSize: "0%",
      "pie-7-background-opacity": "1",
      pie7BackgroundOpacity: "1",
      "pie-8-background-color": "rgb(0,0,0)",
      pie8BackgroundColor: "rgb(0,0,0)",
      "pie-8-background-size": "0%",
      pie8BackgroundSize: "0%",
      "pie-8-background-opacity": "1",
      pie8BackgroundOpacity: "1",
      "pie-9-background-color": "rgb(0,0,0)",
      pie9BackgroundColor: "rgb(0,0,0)",
      "pie-9-background-size": "0%",
      pie9BackgroundSize: "0%",
      "pie-9-background-opacity": "1",
      pie9BackgroundOpacity: "1",
      "pie-10-background-color": "rgb(0,0,0)",
      pie10BackgroundColor: "rgb(0,0,0)",
      "pie-10-background-size": "0%",
      pie10BackgroundSize: "0%",
      "pie-10-background-opacity": "1",
      pie10BackgroundOpacity: "1",
      "pie-11-background-color": "rgb(0,0,0)",
      pie11BackgroundColor: "rgb(0,0,0)",
      "pie-11-background-size": "0%",
      pie11BackgroundSize: "0%",
      "pie-11-background-opacity": "1",
      pie11BackgroundOpacity: "1",
      "pie-12-background-color": "rgb(0,0,0)",
      pie12BackgroundColor: "rgb(0,0,0)",
      "pie-12-background-size": "0%",
      pie12BackgroundSize: "0%",
      "pie-12-background-opacity": "1",
      pie12BackgroundOpacity: "1",
      "pie-13-background-color": "rgb(0,0,0)",
      pie13BackgroundColor: "rgb(0,0,0)",
      "pie-13-background-size": "0%",
      pie13BackgroundSize: "0%",
      "pie-13-background-opacity": "1",
      pie13BackgroundOpacity: "1",
      "pie-14-background-color": "rgb(0,0,0)",
      pie14BackgroundColor: "rgb(0,0,0)",
      "pie-14-background-size": "0%",
      pie14BackgroundSize: "0%",
      "pie-14-background-opacity": "1",
      pie14BackgroundOpacity: "1",
      "pie-15-background-color": "rgb(0,0,0)",
      pie15BackgroundColor: "rgb(0,0,0)",
      "pie-15-background-size": "0%",
      pie15BackgroundSize: "0%",
      "pie-15-background-opacity": "1",
      pie15BackgroundOpacity: "1",
      "pie-16-background-color": "rgb(0,0,0)",
      pie16BackgroundColor: "rgb(0,0,0)",
      "pie-16-background-size": "0%",
      pie16BackgroundSize: "0%",
      "pie-16-background-opacity": "1",
      pie16BackgroundOpacity: "1",
      position: "origin",
      "compound-sizing-wrt-labels": "include",
      compoundSizingWrtLabels: "include",
      "min-width": "0px",
      minWidth: "0px",
      "min-width-bias-left": "0px",
      minWidthBiasLeft: "0px",
      "min-width-bias-right": "0px",
      minWidthBiasRight: "0px",
      "min-height": "0px",
      minHeight: "0px",
      "min-height-bias-top": "0px",
      minHeightBiasTop: "0px",
      "min-height-bias-bottom": "0px",
      minHeightBiasBottom: "0px",
      "line-style": "solid",
      lineStyle: "solid",
      "line-color": "rgb(153,153,153)",
      lineColor: "rgb(153,153,153)",
      "line-fill": "solid",
      lineFill: "solid",
      "line-cap": "butt",
      lineCap: "butt",
      "line-opacity": "1",
      lineOpacity: "1",
      "line-dash-pattern": "6 3",
      lineDashPattern: "6 3",
      "line-dash-offset": "0",
      lineDashOffset: "0",
      "line-gradient-stop-colors": "rgb(153,153,153)",
      lineGradientStopColors: "rgb(153,153,153)",
      "line-gradient-stop-positions": "0%",
      lineGradientStopPositions: "0%",
      "curve-style": "haystack",
      curveStyle: "haystack",
      "haystack-radius": "0",
      haystackRadius: "0",
      "source-endpoint": "outside-to-node",
      sourceEndpoint: "outside-to-node",
      "target-endpoint": "outside-to-node",
      targetEndpoint: "outside-to-node",
      "control-point-step-size": "40px",
      controlPointStepSize: "40px",
      "control-point-weights": "0.5",
      controlPointWeights: "0.5",
      "segment-distances": "20px",
      segmentDistances: "20px",
      "segment-weights": "0.5",
      segmentWeights: "0.5",
      "taxi-turn": "50%",
      taxiTurn: "50%",
      "taxi-turn-min-distance": "10px",
      taxiTurnMinDistance: "10px",
      "taxi-direction": "auto",
      taxiDirection: "auto",
      "edge-distances": "intersection",
      edgeDistances: "intersection",
      "arrow-scale": "1",
      arrowScale: "1",
      "loop-direction": "-45deg",
      loopDirection: "-45deg",
      "loop-sweep": "-90deg",
      loopSweep: "-90deg",
      "source-distance-from-node": "0px",
      sourceDistanceFromNode: "0px",
      "target-distance-from-node": "0px",
      targetDistanceFromNode: "0px",
      "source-arrow-shape": "none",
      sourceArrowShape: "none",
      "mid-source-arrow-shape": "none",
      midSourceArrowShape: "none",
      "target-arrow-shape": "none",
      targetArrowShape: "none",
      "mid-target-arrow-shape": "none",
      midTargetArrowShape: "none",
      "source-arrow-color": "rgb(153,153,153)",
      sourceArrowColor: "rgb(153,153,153)",
      "mid-source-arrow-color": "rgb(153,153,153)",
      midSourceArrowColor: "rgb(153,153,153)",
      "target-arrow-color": "rgb(153,153,153)",
      targetArrowColor: "rgb(153,153,153)",
      "mid-target-arrow-color": "rgb(153,153,153)",
      midTargetArrowColor: "rgb(153,153,153)",
      "source-arrow-fill": "filled",
      sourceArrowFill: "filled",
      "mid-source-arrow-fill": "filled",
      midSourceArrowFill: "filled",
      "target-arrow-fill": "filled",
      targetArrowFill: "filled",
      "mid-target-arrow-fill": "filled",
      midTargetArrowFill: "filled",
      "source-arrow-width": "1px",
      sourceArrowWidth: "1px",
      "mid-source-arrow-width": "1px",
      midSourceArrowWidth: "1px",
      "target-arrow-width": "1px",
      targetArrowWidth: "1px",
      "mid-target-arrow-width": "1px",
      midTargetArrowWidth: "1px",
      "selection-box-color": "rgb(221,221,221)",
      selectionBoxColor: "rgb(221,221,221)",
      "selection-box-opacity": "0.65",
      selectionBoxOpacity: "0.65",
      "selection-box-border-color": "rgb(170,170,170)",
      selectionBoxBorderColor: "rgb(170,170,170)",
      "selection-box-border-width": "1px",
      selectionBoxBorderWidth: "1px",
      "active-bg-color": "rgb(0,0,0)",
      activeBgColor: "rgb(0,0,0)",
      "active-bg-opacity": "0.15",
      activeBgOpacity: "0.15",
      "active-bg-size": "30px",
      activeBgSize: "30px",
      "outside-texture-bg-color": "rgb(0,0,0)",
      outsideTextureBgColor: "rgb(0,0,0)",
      "outside-texture-bg-opacity": "0.125",
      outsideTextureBgOpacity: "0.125",
      content: "edge-stack-agent",
      "control-point-weight": "0.5",
      controlPointWeight: "0.5",
      "edge-text-rotation": "none",
      edgeTextRotation: "none",
      "padding-left": "6px",
      paddingLeft: "6px",
      "padding-right": "6px",
      paddingRight: "6px",
      "padding-top": "6px",
      paddingTop: "6px",
      "padding-bottom": "6px",
      paddingBottom: "6px"
    },
    "6a66429c-181f-4a78-83e4-0be23ed730e3": {
      events: "yes",
      "text-events": "no",
      textEvents: "no",
      "transition-property": "none",
      transitionProperty: "none",
      "transition-duration": "0ms",
      transitionDuration: "0ms",
      "transition-delay": "0ms",
      transitionDelay: "0ms",
      "transition-timing-function": "linear",
      transitionTimingFunction: "linear",
      display: "element",
      visibility: "visible",
      opacity: "1",
      "text-opacity": "1",
      textOpacity: "1",
      "min-zoomed-font-size": "12px",
      minZoomedFontSize: "12px",
      "z-compound-depth": "auto",
      zCompoundDepth: "auto",
      "z-index-compare": "manual",
      zIndexCompare: "manual",
      "z-index": "4",
      zIndex: "4",
      "overlay-padding": "10px",
      overlayPadding: "10px",
      "overlay-color": "rgb(0,0,0)",
      overlayColor: "rgb(0,0,0)",
      "overlay-opacity": "0",
      overlayOpacity: "0",
      "overlay-shape": "round-rectangle",
      overlayShape: "round-rectangle",
      "underlay-padding": "10px",
      underlayPadding: "10px",
      "underlay-color": "rgb(0,0,0)",
      underlayColor: "rgb(0,0,0)",
      "underlay-opacity": "0",
      underlayOpacity: "0",
      "underlay-shape": "round-rectangle",
      underlayShape: "round-rectangle",
      ghost: "no",
      "ghost-offset-x": "0px",
      ghostOffsetX: "0px",
      "ghost-offset-y": "0px",
      ghostOffsetY: "0px",
      "ghost-opacity": "0",
      ghostOpacity: "0",
      "text-valign": "bottom",
      textValign: "bottom",
      "text-halign": "center",
      textHalign: "center",
      color: "rgb(0,0,0)",
      "text-outline-color": "rgb(0,0,0)",
      textOutlineColor: "rgb(0,0,0)",
      "text-outline-opacity": "1",
      textOutlineOpacity: "1",
      "text-background-color": "rgb(210,212,210)",
      textBackgroundColor: "rgb(210,212,210)",
      "text-background-opacity": "0.7",
      textBackgroundOpacity: "0.7",
      "text-background-padding": "2px",
      textBackgroundPadding: "2px",
      "text-border-opacity": "0",
      textBorderOpacity: "0",
      "text-border-color": "rgb(0,0,0)",
      textBorderColor: "rgb(0,0,0)",
      "text-border-width": "0px",
      textBorderWidth: "0px",
      "text-border-style": "solid",
      textBorderStyle: "solid",
      "text-background-shape": "round-rectangle",
      textBackgroundShape: "round-rectangle",
      "text-justification": "auto",
      textJustification: "auto",
      "font-family": "Qanelas Soft, sans-serif",
      fontFamily: "Qanelas Soft, sans-serif",
      "font-style": "normal",
      fontStyle: "normal",
      "font-weight": "300",
      fontWeight: "300",
      "font-size": "8px",
      fontSize: "8px",
      "text-transform": "none",
      textTransform: "none",
      "text-wrap": "ellipsis",
      textWrap: "ellipsis",
      "text-overflow-wrap": "whitespace",
      textOverflowWrap: "whitespace",
      "text-max-width": "80px",
      textMaxWidth: "80px",
      "text-outline-width": "0px",
      textOutlineWidth: "0px",
      "line-height": "1",
      lineHeight: "1",
      label: "edge-stack",
      "text-rotation": "none",
      textRotation: "none",
      "text-margin-x": "0px",
      textMarginX: "0px",
      "text-margin-y": "7px",
      textMarginY: "7px",
      "source-label": "",
      sourceLabel: "",
      "source-text-rotation": "none",
      sourceTextRotation: "none",
      "source-text-margin-x": "0px",
      sourceTextMarginX: "0px",
      "source-text-margin-y": "0px",
      sourceTextMarginY: "0px",
      "source-text-offset": "0px",
      sourceTextOffset: "0px",
      "target-label": "",
      targetLabel: "",
      "target-text-rotation": "none",
      targetTextRotation: "none",
      "target-text-margin-x": "0px",
      targetTextMarginX: "0px",
      "target-text-margin-y": "0px",
      targetTextMarginY: "0px",
      "target-text-offset": "0px",
      targetTextOffset: "0px",
      height: "20px",
      width: "20px",
      shape: "round-rectangle",
      "shape-polygon-points": "-1 -1 1 -1 1 1 -1 1",
      shapePolygonPoints: "-1 -1 1 -1 1 1 -1 1",
      "background-color": "rgb(50,108,229)",
      backgroundColor: "rgb(50,108,229)",
      "background-fill": "solid",
      backgroundFill: "solid",
      "background-opacity": "0.5",
      backgroundOpacity: "0.5",
      "background-blacken": "0",
      backgroundBlacken: "0",
      "background-gradient-stop-colors": "rgb(153,153,153)",
      backgroundGradientStopColors: "rgb(153,153,153)",
      "background-gradient-stop-positions": "0%",
      backgroundGradientStopPositions: "0%",
      "background-gradient-direction": "to-bottom",
      backgroundGradientDirection: "to-bottom",
      padding: "6px",
      "padding-relative-to": "width",
      paddingRelativeTo: "width",
      "bounds-expansion": "0px",
      boundsExpansion: "0px",
      "border-color": "rgb(60,129,255)",
      borderColor: "rgb(60,129,255)",
      "border-opacity": "1",
      borderOpacity: "1",
      "border-width": "2px",
      borderWidth: "2px",
      "border-style": "solid",
      borderStyle: "solid",
      "outline-color": "rgb(153,153,153)",
      outlineColor: "rgb(153,153,153)",
      "outline-opacity": "1",
      outlineOpacity: "1",
      "outline-width": "0px",
      outlineWidth: "0px",
      "outline-style": "solid",
      outlineStyle: "solid",
      "outline-offset": "0px",
      outlineOffset: "0px",
      "background-image":
        "url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTY3IiBoZWlnaHQ9IjE1NiIgdmlld0JveD0iMCAwIDE2NyAxNTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+IDxwYXRoIGQ9Ik05My44MTg1IDcuMDE4NDhDODUuOTMyNSAxLjI4ODk5IDc1LjI1NDEgMS4yODg5OSA2Ny4zNjgxIDcuMDE4NDlMMTIuMDE5OSA0Ny4yMzEzQzQuMTMzOTEgNTIuOTYwOCAwLjgzNDExNSA2My4xMTY2IDMuODQ2MjkgNzIuMzg3MUwyNC45ODc0IDEzNy40NTNDMjcuOTk5NiAxNDYuNzIzIDM2LjYzODYgMTUzIDQ2LjM4NjIgMTUzSDExNC44QzEyNC41NDggMTUzIDEzMy4xODcgMTQ2LjcyMyAxMzYuMTk5IDEzNy40NTNMMTU3LjM0IDcyLjM4NzFDMTYwLjM1MiA2My4xMTY2IDE1Ny4wNTMgNTIuOTYwOCAxNDkuMTY3IDQ3LjIzMTNMOTMuODE4NSA3LjAxODQ4WiIgZmlsbD0iIzMyNkNFNSIgZmlsbC1vcGFjaXR5PSIwLjEiIHN0cm9rZT0iIzMyNkNFNSIgc3Ryb2tlLXdpZHRoPSI1Ii8+IDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTM3LjMwMiAxMjkuNTFDMTI3LjE3MSAxMjQuNjgyIDEyMi44OSAxMTIuNTkxIDEyNy43NCAxMDIuNTA1QzEzMC4wNjkgOTcuNjYxMiAxMzQuMjM1IDkzLjkzNzEgMTM5LjMyMiA5Mi4xNTE4QzE0NC40MDkgOTAuMzY2NCAxNTAgOTAuNjY2MSAxNTQuODY0IDkyLjk4NDlDMTY0Ljk5NSA5Ny44MTM0IDE2OS4yNzYgMTA5LjkwNCAxNjQuNDI2IDExOS45OUMxNTkuNTc2IDEzMC4wNzcgMTQ3LjQzMyAxMzQuMzM5IDEzNy4zMDIgMTI5LjUxWiIgZmlsbD0iIzMyNkNFNSIvPiA8cGF0aCBkPSJNMTQ1Ljg5IDk5LjEwMjJDMTQ1LjY2MiA5OS4xMTM2IDE0NS40MzggOTkuMTcgMTQ1LjIzMiA5OS4yNjhMMTM2LjI1MiAxMDMuNTM5QzEzNi4wMiAxMDMuNjUgMTM1LjgxNiAxMDMuODExIDEzNS42NTUgMTA0LjAxQzEzNS40OTQgMTA0LjIwOSAxMzUuMzgxIDEwNC40NDEgMTM1LjMyMyAxMDQuNjlMMTMzLjEwOCAxMTQuMjg0QzEzMy4wNTcgMTE0LjUwNSAxMzMuMDUxIDExNC43MzQgMTMzLjA5MSAxMTQuOTU4QzEzMy4xMzEgMTE1LjE4MSAxMzMuMjE2IDExNS4zOTQgMTMzLjM0MSAxMTUuNTg0QzEzMy4zNzEgMTE1LjYzMSAxMzMuNDA0IDExNS42NzYgMTMzLjQzOCAxMTUuNzE5TDEzOS42NTQgMTIzLjQxMkMxMzkuODE1IDEyMy42MTEgMTQwLjAxOSAxMjMuNzcyIDE0MC4yNTEgMTIzLjg4M0MxNDAuNDg0IDEyMy45OTMgMTQwLjczOSAxMjQuMDUgMTQwLjk5NiAxMjQuMDVMMTUwLjk2NCAxMjQuMDQ4QzE1MS4yMjIgMTI0LjA0OCAxNTEuNDc2IDEyMy45OTEgMTUxLjcwOSAxMjMuODgxQzE1MS45NDEgMTIzLjc3MSAxNTIuMTQ2IDEyMy42MSAxNTIuMzA3IDEyMy40MTFMMTU4LjUyIDExNS43MTdDMTU4LjY4MSAxMTUuNTE4IDE1OC43OTQgMTE1LjI4NSAxNTguODUyIDExNS4wMzdDMTU4LjkwOSAxMTQuNzg4IDE1OC45MDkgMTE0LjUzIDE1OC44NTIgMTE0LjI4MkwxNTYuNjMzIDEwNC42ODdDMTU2LjU3NSAxMDQuNDM5IDE1Ni40NjIgMTA0LjIwNyAxNTYuMzAxIDEwNC4wMDdDMTU2LjE0IDEwMy44MDggMTU1LjkzNiAxMDMuNjQ4IDE1NS43MDQgMTAzLjUzN0wxNDYuNzIzIDk5LjI2OEMxNDYuNDY0IDk5LjE0NDcgMTQ2LjE3NyA5OS4wODc3IDE0NS44OSA5OS4xMDIyWiIgZmlsbD0id2hpdGUiLz4gPHBhdGggZD0iTTE0NS45NzkgMTAyLjM2N0MxNDUuNjgyIDEwMi4zNjcgMTQ1LjQ0MiAxMDIuNjM0IDE0NS40NDIgMTAyLjk2MkMxNDUuNDQyIDEwMi45NjcgMTQ1LjQ0MyAxMDIuOTcyIDE0NS40NDMgMTAyLjk3N0MxNDUuNDQyIDEwMy4wMjEgMTQ1LjQ0IDEwMy4wNzUgMTQ1LjQ0MiAxMDMuMTE0QzE0NS40NDkgMTAzLjMwMyAxNDUuNDkgMTAzLjQ0OCAxNDUuNTE1IDEwMy42MjNDMTQ1LjU2IDEwMy45OTYgMTQ1LjU5OCAxMDQuMzA2IDE0NS41NzUgMTA0LjU5M0MxNDUuNTUyIDEwNC43MDIgMTQ1LjQ3MiAxMDQuODAxIDE0NS40IDEwNC44N0wxNDUuMzg4IDEwNS4wOTZDMTQ1LjA2NSAxMDUuMTIzIDE0NC43NCAxMDUuMTcyIDE0NC40MTYgMTA1LjI0NUMxNDMuMDIgMTA1LjU2MSAxNDEuODE5IDEwNi4yNzYgMTQwLjkwNCAxMDcuMjQyQzE0MC44NDUgMTA3LjIwMiAxNDAuNzQxIDEwNy4xMjggMTQwLjcxIDEwNy4xMDVDMTQwLjYxNCAxMDcuMTE4IDE0MC41MTcgMTA3LjE0OCAxNDAuMzkxIDEwNy4wNzRDMTQwLjE1IDEwNi45MTMgMTM5LjkzMSAxMDYuNjkxIDEzOS42NjYgMTA2LjQyM0MxMzkuNTQ0IDEwNi4yOTQgMTM5LjQ1NyAxMDYuMTcyIDEzOS4zMTIgMTA2LjA0OUMxMzkuMjc5IDEwNi4wMjEgMTM5LjIyOSAxMDUuOTgzIDEzOS4xOTMgMTA1Ljk1NEMxMzkuMDggMTA1Ljg2NCAxMzguOTQ3IDEwNS44MTggMTM4LjgxOCAxMDUuODEzQzEzOC42NTMgMTA1LjgwOCAxMzguNDk0IDEwNS44NzIgMTM4LjM5IDEwNi4wMDJDMTM4LjIwNSAxMDYuMjMzIDEzOC4yNjQgMTA2LjU4NiAxMzguNTIyIDEwNi43OTFDMTM4LjUyNSAxMDYuNzkzIDEzOC41MjcgMTA2Ljc5NSAxMzguNTMgMTA2Ljc5N0MxMzguNTY2IDEwNi44MjUgMTM4LjYwOSAxMDYuODYyIDEzOC42NDIgMTA2Ljg4NkMxMzguNzk1IDEwNi45OTggMTM4LjkzNSAxMDcuMDU2IDEzOS4wODcgMTA3LjE0NUMxMzkuNDA5IDEwNy4zNDMgMTM5LjY3NSAxMDcuNTA3IDEzOS44ODYgMTA3LjcwNEMxMzkuOTY5IDEwNy43OTIgMTM5Ljk4MyAxMDcuOTQ2IDEzOS45OTQgMTA4LjAxM0wxNDAuMTY3IDEwOC4xNjZDMTM5LjI0NCAxMDkuNTQ4IDEzOC44MTggMTExLjI1NCAxMzkuMDcgMTEyLjk5M0wxMzguODQ1IDExMy4wNThDMTM4Ljc4NSAxMTMuMTM1IDEzOC43MDIgMTEzLjI1NSAxMzguNjE0IDExMy4yOTFDMTM4LjMzNyAxMTMuMzc3IDEzOC4wMjYgMTEzLjQwOSAxMzcuNjUgMTEzLjQ0OEMxMzcuNDc0IDExMy40NjMgMTM3LjMyMiAxMTMuNDU0IDEzNy4xMzUgMTEzLjQ5QzEzNy4wOTQgMTEzLjQ5NyAxMzcuMDM2IDExMy41MTIgMTM2Ljk5MSAxMTMuNTIzQzEzNi45OSAxMTMuNTIzIDEzNi45ODggMTEzLjUyMyAxMzYuOTg3IDExMy41MjRDMTM2Ljk4NCAxMTMuNTI0IDEzNi45ODEgMTEzLjUyNiAxMzYuOTc5IDExMy41MjZDMTM2LjY2MiAxMTMuNjAyIDEzNi40NTggMTEzLjg5MiAxMzYuNTI0IDExNC4xNzhDMTM2LjU4OSAxMTQuNDYzIDEzNi44OTkgMTE0LjYzNyAxMzcuMjE3IDExNC41NjlDMTM3LjIyIDExNC41NjggMTM3LjIyMyAxMTQuNTY4IDEzNy4yMjUgMTE0LjU2OEMxMzcuMjI5IDExNC41NjcgMTM3LjIzMiAxMTQuNTY1IDEzNy4yMzYgMTE0LjU2NEMxMzcuMjggMTE0LjU1NSAxMzcuMzM2IDExNC41NDQgMTM3LjM3NSAxMTQuNTMzQzEzNy41NTkgMTE0LjQ4NCAxMzcuNjkyIDExNC40MTIgMTM3Ljg1NyAxMTQuMzQ5QzEzOC4yMTMgMTE0LjIyMiAxMzguNTA3IDExNC4xMTYgMTM4Ljc5NCAxMTQuMDc1QzEzOC45MTQgMTE0LjA2NiAxMzkuMDQgMTE0LjE0OCAxMzkuMTAzIDExNC4xODNMMTM5LjMzNyAxMTQuMTQzQzEzOS44NzcgMTE1LjgwOCAxNDEuMDA2IDExNy4xNTIgMTQyLjQzNyAxMTcuOTk2TDE0Mi4zNCAxMTguMjNDMTQyLjM3NSAxMTguMzIgMTQyLjQxNCAxMTguNDQzIDE0Mi4zODcgMTE4LjUzMkMxNDIuMjgzIDExOC44MDIgMTQyLjEwNCAxMTkuMDg2IDE0MS45MDEgMTE5LjQwM0MxNDEuODAyIDExOS41NDkgMTQxLjcwMSAxMTkuNjYzIDE0MS42MTMgMTE5LjgzQzE0MS41OTEgMTE5Ljg3IDE0MS41NjQgMTE5LjkzMiAxNDEuNTQ0IDExOS45NzRDMTQxLjQwNiAxMjAuMjY5IDE0MS41MDcgMTIwLjYwNyAxNDEuNzcyIDEyMC43MzVDMTQyLjAzOSAxMjAuODYzIDE0Mi4zNzEgMTIwLjcyOCAxNDIuNTE0IDEyMC40MzNDMTQyLjUxNCAxMjAuNDMyIDE0Mi41MTUgMTIwLjQzMiAxNDIuNTE1IDEyMC40MzJDMTQyLjUxNSAxMjAuNDMxIDE0Mi41MTUgMTIwLjQzMSAxNDIuNTE1IDEyMC40MzFDMTQyLjUzNiAxMjAuMzg5IDE0Mi41NjUgMTIwLjMzNCAxNDIuNTgyIDEyMC4yOTRDMTQyLjY1OCAxMjAuMTIxIDE0Mi42ODMgMTE5Ljk3MiAxNDIuNzM3IDExOS44MDRDMTQyLjg3OSAxMTkuNDQ4IDE0Mi45NTcgMTE5LjA3NSAxNDMuMTUzIDExOC44NDNDMTQzLjIwNyAxMTguNzc5IDE0My4yOTQgMTE4Ljc1NSAxNDMuMzg1IDExOC43M0wxNDMuNTA2IDExOC41MTFDMTQ0Ljc1NCAxMTguOTg4IDE0Ni4xNSAxMTkuMTE1IDE0Ny41NDQgMTE4LjhDMTQ3Ljg2MyAxMTguNzI4IDE0OC4xNyAxMTguNjM1IDE0OC40NjcgMTE4LjUyNEMxNDguNTAxIDExOC41ODQgMTQ4LjU2NCAxMTguNyAxNDguNTgxIDExOC43MjlDMTQ4LjY3NCAxMTguNzU5IDE0OC43NzQgMTE4Ljc3NSAxNDguODU2IDExOC44OTVDMTQ5LjAwMiAxMTkuMTQ0IDE0OS4xMDMgMTE5LjQzOSAxNDkuMjI1IDExOS43OTVDMTQ5LjI3OCAxMTkuOTYzIDE0OS4zMDUgMTIwLjExMiAxNDkuMzgxIDEyMC4yODVDMTQ5LjM5OCAxMjAuMzI1IDE0OS40MjcgMTIwLjM4MSAxNDkuNDQ3IDEyMC40MjNDMTQ5LjU5MSAxMjAuNzE4IDE0OS45MjMgMTIwLjg1NCAxNTAuMTkgMTIwLjcyNkMxNTAuNDU2IDEyMC41OTggMTUwLjU1NyAxMjAuMjU5IDE1MC40MTkgMTE5Ljk2NUMxNTAuMzk4IDExOS45MjMgMTUwLjM3IDExOS44NjEgMTUwLjM0OSAxMTkuODIxQzE1MC4yNiAxMTkuNjU0IDE1MC4xNTkgMTE5LjU0MSAxNTAuMDYxIDExOS4zOTVDMTQ5Ljg1NyAxMTkuMDc4IDE0OS42ODggMTE4LjgxNSAxNDkuNTg0IDExOC41NDVDMTQ5LjU0IDExOC40MDYgMTQ5LjU5MSAxMTguMzIgMTQ5LjYyNSAxMTguMjNDMTQ5LjYwNSAxMTguMjA2IDE0OS41NjEgMTE4LjA3NSAxNDkuNTM2IDExOC4wMTRDMTUxLjAyMyAxMTcuMTQgMTUyLjExOSAxMTUuNzQ0IDE1Mi42MzQgMTE0LjEzM0MxNTIuNzA0IDExNC4xNDQgMTUyLjgyNSAxMTQuMTY1IDE1Mi44NjQgMTE0LjE3M0MxNTIuOTQ1IDExNC4xMiAxNTMuMDE5IDExNC4wNTEgMTUzLjE2NSAxMTQuMDYyQzE1My40NTIgMTE0LjEwNCAxNTMuNzQ2IDExNC4yMSAxNTQuMTAyIDExNC4zMzdDMTU0LjI2NyAxMTQuNCAxNTQuNDAxIDExNC40NzMgMTU0LjU4NCAxMTQuNTIyQzE1NC42MjMgMTE0LjUzMiAxNTQuNjc5IDExNC41NDIgMTU0LjcyMyAxMTQuNTUyQzE1NC43MjcgMTE0LjU1MyAxNTQuNzMgMTE0LjU1NCAxNTQuNzM0IDExNC41NTVDMTU0LjczNiAxMTQuNTU2IDE1NC43MzkgMTE0LjU1NiAxNTQuNzQyIDExNC41NTZDMTU1LjA2IDExNC42MjUgMTU1LjM3IDExNC40NTEgMTU1LjQzNSAxMTQuMTY1QzE1NS41MDEgMTEzLjg4IDE1NS4yOTcgMTEzLjU5IDE1NC45ODEgMTEzLjUxNEMxNTQuOTM1IDExMy41MDMgMTU0Ljg2OSAxMTMuNDg1IDE1NC44MjQgMTEzLjQ3N0MxNTQuNjM3IDExMy40NDIgMTU0LjQ4NSAxMTMuNDUgMTU0LjMwOSAxMTMuNDM2QzE1My45MzMgMTEzLjM5NyAxNTMuNjIyIDExMy4zNjUgMTUzLjM0NSAxMTMuMjc4QzE1My4yMzIgMTEzLjIzNCAxNTMuMTUyIDExMy4xMDEgMTUzLjExMyAxMTMuMDQ2TDE1Mi44OTYgMTEyLjk4M0MxNTMuMDA5IDExMi4xNzIgMTUyLjk3OCAxMTEuMzI5IDE1Mi43ODQgMTEwLjQ4NUMxNTIuNTg3IDEwOS42MzMgMTUyLjI0IDEwOC44NTQgMTUxLjc3NiAxMDguMTY3QzE1MS44MzIgMTA4LjExNyAxNTEuOTM3IDEwOC4wMjQgMTUxLjk2NyAxMDcuOTk3QzE1MS45NzYgMTA3LjkwMSAxNTEuOTY4IDEwNy44IDE1Mi4wNjggMTA3LjY5NEMxNTIuMjggMTA3LjQ5NiAxNTIuNTQ2IDEwNy4zMzMgMTUyLjg2NyAxMDcuMTM1QzE1My4wMiAxMDcuMDQ2IDE1My4xNjEgMTA2Ljk4OCAxNTMuMzE0IDEwNi44NzVDMTUzLjM0OSAxMDYuODUgMTUzLjM5NiAxMDYuODEgMTUzLjQzMyAxMDYuNzgxQzE1My42OSAxMDYuNTc2IDE1My43NSAxMDYuMjIzIDE1My41NjUgMTA1Ljk5MkMxNTMuMzc5IDEwNS43NjEgMTUzLjAyMSAxMDUuNzM5IDE1Mi43NjMgMTA1Ljk0NEMxNTIuNzI2IDEwNS45NzMgMTUyLjY3NiAxMDYuMDEgMTUyLjY0NCAxMDYuMDM5QzE1Mi40OTkgMTA2LjE2MiAxNTIuNDEgMTA2LjI4NCAxNTIuMjg5IDEwNi40MTJDMTUyLjAyNCAxMDYuNjggMTUxLjgwNSAxMDYuOTA0IDE1MS41NjQgMTA3LjA2NUMxNTEuNDYgMTA3LjEyNiAxNTEuMzA3IDEwNy4xMDUgMTUxLjIzOCAxMDcuMTAxTDE1MS4wMzMgMTA3LjI0NkMxNDkuODY4IDEwNi4wMjkgMTQ4LjI4MSAxMDUuMjUxIDE0Ni41NzIgMTA1LjFDMTQ2LjU2NyAxMDUuMDI5IDE0Ni41NjEgMTA0LjkgMTQ2LjU1OSAxMDQuODYxQzE0Ni40ODkgMTA0Ljc5NCAxNDYuNDA1IDEwNC43MzcgMTQ2LjM4MyAxMDQuNTkzQzE0Ni4zNiAxMDQuMzA2IDE0Ni4zOTkgMTAzLjk5NiAxNDYuNDQ0IDEwMy42MjNDMTQ2LjQ2OSAxMDMuNDQ4IDE0Ni41MTEgMTAzLjMwMyAxNDYuNTE4IDEwMy4xMTRDMTQ2LjUxOSAxMDMuMDcxIDE0Ni41MTcgMTAzLjAwOCAxNDYuNTE3IDEwMi45NjJDMTQ2LjUxNiAxMDIuNjM0IDE0Ni4yNzYgMTAyLjM2NyAxNDUuOTc5IDEwMi4zNjdIMTQ1Ljk3OVpNMTQ1LjMwNiAxMDYuNTE4TDE0NS4xNDYgMTA5LjMyNEwxNDUuMTM1IDEwOS4zM0MxNDUuMTI0IDEwOS41ODEgMTQ0LjkxNyAxMDkuNzgyIDE0NC42NjIgMTA5Ljc4MkMxNDQuNTU3IDEwOS43ODIgMTQ0LjQ2MSAxMDkuNzQ4IDE0NC4zODMgMTA5LjY5MUwxNDQuMzc4IDEwOS42OTRMMTQyLjA2NiAxMDguMDYyQzE0Mi43NzcgMTA3LjM2NyAxNDMuNjg2IDEwNi44NTMgMTQ0LjczMyAxMDYuNjE2QzE0NC45MjQgMTA2LjU3MyAxNDUuMTE2IDEwNi41NDEgMTQ1LjMwNiAxMDYuNTE4Wk0xNDYuNjUzIDEwNi41MThDMTQ3Ljg3NiAxMDYuNjY3IDE0OS4wMDcgMTA3LjIxOSAxNDkuODczIDEwOC4wNjNMMTQ3LjU3NyAxMDkuNjg1TDE0Ny41NjggMTA5LjY4MUMxNDcuMzY1IDEwOS44MjkgMTQ3LjA3NyAxMDkuNzkzIDE0Ni45MTggMTA5LjU5NEMxNDYuODUzIDEwOS41MTMgMTQ2LjgxOSAxMDkuNDE3IDE0Ni44MTUgMTA5LjMyMUwxNDYuODEzIDEwOS4zMkwxNDYuNjUzIDEwNi41MThaTTE0MS4yMjggMTA5LjExMUwxNDMuMzM5IDExMC45OUwxNDMuMzM2IDExMS4wMDJDMTQzLjUyNyAxMTEuMTY3IDE0My41NTUgMTExLjQ1MyAxNDMuMzk2IDExMS42NTFDMTQzLjMzMSAxMTEuNzMyIDE0My4yNDQgMTExLjc4NyAxNDMuMTUgMTExLjgxMkwxNDMuMTQ4IDExMS44MjFMMTQwLjQ0MiAxMTIuNTk5QzE0MC4zMDUgMTExLjM0NSAxNDAuNjAxIDExMC4xMjcgMTQxLjIyOCAxMDkuMTExWk0xNTAuNzE1IDEwOS4xMTJDMTUxLjAyOSAxMDkuNjE4IDE1MS4yNjYgMTEwLjE4MyAxNTEuNDA4IDExMC43OTZDMTUxLjU0NyAxMTEuNDAxIDE1MS41ODMgMTEyLjAwNiAxNTEuNTI1IDExMi41OUwxNDguODA1IDExMS44MUwxNDguODAzIDExMS43OTlDMTQ4LjU2IDExMS43MzIgMTQ4LjQxIDExMS40ODYgMTQ4LjQ2NyAxMTEuMjM4QzE0OC40OSAxMTEuMTM3IDE0OC41NDQgMTExLjA1MSAxNDguNjE3IDExMC45ODhMMTQ4LjYxNiAxMTAuOTgyTDE1MC43MTUgMTA5LjExMkgxNTAuNzE1Wk0xNDUuNTQ2IDExMS4xMzVIMTQ2LjQxMUwxNDYuOTQ4IDExMS44MDRMMTQ2Ljc1NSAxMTIuNjM5TDE0NS45NzkgMTEzLjAxTDE0NS4yIDExMi42MzhMMTQ1LjAwNyAxMTEuODAzTDE0NS41NDYgMTExLjEzNVpNMTQ4LjMxOCAxMTMuNDI0QzE0OC4zNTUgMTEzLjQyMiAxNDguMzkyIDExMy40MjYgMTQ4LjQyOCAxMTMuNDMyTDE0OC40MzIgMTEzLjQyN0wxNTEuMjMxIDExMy44OThDMTUwLjgyMSAxMTUuMDQzIDE1MC4wMzggMTE2LjAzNiAxNDguOTkgMTE2LjdMMTQ3LjkwNCAxMTQuMDg3TDE0Ny45MDcgMTE0LjA4M0MxNDcuODA3IDExMy44NTIgMTQ3LjkwNyAxMTMuNTgxIDE0OC4xMzcgMTEzLjQ3MUMxNDguMTk2IDExMy40NDMgMTQ4LjI1NyAxMTMuNDI3IDE0OC4zMTggMTEzLjQyNEgxNDguMzE4Wk0xNDMuNjE4IDExMy40MzZDMTQzLjgzMSAxMTMuNDM5IDE0NC4wMjMgMTEzLjU4NiAxNDQuMDczIDExMy44MDNDMTQ0LjA5NiAxMTMuOTA0IDE0NC4wODUgMTE0LjAwNCAxNDQuMDQ2IDExNC4wOTNMMTQ0LjA1NCAxMTQuMTAzTDE0Mi45NzkgMTE2LjY5QzE0MS45NzQgMTE2LjA0OCAxNDEuMTc0IDExNS4wODYgMTQwLjc0NSAxMTMuOTA3TDE0My41MiAxMTMuNDM4TDE0My41MjUgMTEzLjQ0NEMxNDMuNTU2IDExMy40MzggMTQzLjU4NyAxMTMuNDM1IDE0My42MTggMTEzLjQzNlYxMTMuNDM2Wk0xNDUuOTYyIDExNC41NjlDMTQ2LjAzNiAxMTQuNTY2IDE0Ni4xMTIgMTE0LjU4MSAxNDYuMTgzIDExNC42MTZDMTQ2LjI3OCAxMTQuNjYxIDE0Ni4zNSAxMTQuNzMyIDE0Ni4zOTYgMTE0LjgxN0gxNDYuNDA2TDE0Ny43NzQgMTE3LjI3N0MxNDcuNTk3IDExNy4zMzcgMTQ3LjQxNCAxMTcuMzg3IDE0Ny4yMjcgMTE3LjQyOUMxNDYuMTgxIDExNy42NjYgMTQ1LjEzOSAxMTcuNTk0IDE0NC4xOTQgMTE3LjI3NEwxNDUuNTU5IDExNC44MThIMTQ1LjU2MUMxNDUuNjQzIDExNC42NjYgMTQ1Ljc5OCAxMTQuNTc1IDE0NS45NjIgMTE0LjU2OVoiIGZpbGw9IiMzMjZDRTUiIHN0cm9rZT0iIzMyNkNFNSIgc3Ryb2tlLXdpZHRoPSIwLjI1Ii8+IDwvc3ZnPg==)",
      backgroundImage:
        "url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTY3IiBoZWlnaHQ9IjE1NiIgdmlld0JveD0iMCAwIDE2NyAxNTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+IDxwYXRoIGQ9Ik05My44MTg1IDcuMDE4NDhDODUuOTMyNSAxLjI4ODk5IDc1LjI1NDEgMS4yODg5OSA2Ny4zNjgxIDcuMDE4NDlMMTIuMDE5OSA0Ny4yMzEzQzQuMTMzOTEgNTIuOTYwOCAwLjgzNDExNSA2My4xMTY2IDMuODQ2MjkgNzIuMzg3MUwyNC45ODc0IDEzNy40NTNDMjcuOTk5NiAxNDYuNzIzIDM2LjYzODYgMTUzIDQ2LjM4NjIgMTUzSDExNC44QzEyNC41NDggMTUzIDEzMy4xODcgMTQ2LjcyMyAxMzYuMTk5IDEzNy40NTNMMTU3LjM0IDcyLjM4NzFDMTYwLjM1MiA2My4xMTY2IDE1Ny4wNTMgNTIuOTYwOCAxNDkuMTY3IDQ3LjIzMTNMOTMuODE4NSA3LjAxODQ4WiIgZmlsbD0iIzMyNkNFNSIgZmlsbC1vcGFjaXR5PSIwLjEiIHN0cm9rZT0iIzMyNkNFNSIgc3Ryb2tlLXdpZHRoPSI1Ii8+IDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTM3LjMwMiAxMjkuNTFDMTI3LjE3MSAxMjQuNjgyIDEyMi44OSAxMTIuNTkxIDEyNy43NCAxMDIuNTA1QzEzMC4wNjkgOTcuNjYxMiAxMzQuMjM1IDkzLjkzNzEgMTM5LjMyMiA5Mi4xNTE4QzE0NC40MDkgOTAuMzY2NCAxNTAgOTAuNjY2MSAxNTQuODY0IDkyLjk4NDlDMTY0Ljk5NSA5Ny44MTM0IDE2OS4yNzYgMTA5LjkwNCAxNjQuNDI2IDExOS45OUMxNTkuNTc2IDEzMC4wNzcgMTQ3LjQzMyAxMzQuMzM5IDEzNy4zMDIgMTI5LjUxWiIgZmlsbD0iIzMyNkNFNSIvPiA8cGF0aCBkPSJNMTQ1Ljg5IDk5LjEwMjJDMTQ1LjY2MiA5OS4xMTM2IDE0NS40MzggOTkuMTcgMTQ1LjIzMiA5OS4yNjhMMTM2LjI1MiAxMDMuNTM5QzEzNi4wMiAxMDMuNjUgMTM1LjgxNiAxMDMuODExIDEzNS42NTUgMTA0LjAxQzEzNS40OTQgMTA0LjIwOSAxMzUuMzgxIDEwNC40NDEgMTM1LjMyMyAxMDQuNjlMMTMzLjEwOCAxMTQuMjg0QzEzMy4wNTcgMTE0LjUwNSAxMzMuMDUxIDExNC43MzQgMTMzLjA5MSAxMTQuOTU4QzEzMy4xMzEgMTE1LjE4MSAxMzMuMjE2IDExNS4zOTQgMTMzLjM0MSAxMTUuNTg0QzEzMy4zNzEgMTE1LjYzMSAxMzMuNDA0IDExNS42NzYgMTMzLjQzOCAxMTUuNzE5TDEzOS42NTQgMTIzLjQxMkMxMzkuODE1IDEyMy42MTEgMTQwLjAxOSAxMjMuNzcyIDE0MC4yNTEgMTIzLjg4M0MxNDAuNDg0IDEyMy45OTMgMTQwLjczOSAxMjQuMDUgMTQwLjk5NiAxMjQuMDVMMTUwLjk2NCAxMjQuMDQ4QzE1MS4yMjIgMTI0LjA0OCAxNTEuNDc2IDEyMy45OTEgMTUxLjcwOSAxMjMuODgxQzE1MS45NDEgMTIzLjc3MSAxNTIuMTQ2IDEyMy42MSAxNTIuMzA3IDEyMy40MTFMMTU4LjUyIDExNS43MTdDMTU4LjY4MSAxMTUuNTE4IDE1OC43OTQgMTE1LjI4NSAxNTguODUyIDExNS4wMzdDMTU4LjkwOSAxMTQuNzg4IDE1OC45MDkgMTE0LjUzIDE1OC44NTIgMTE0LjI4MkwxNTYuNjMzIDEwNC42ODdDMTU2LjU3NSAxMDQuNDM5IDE1Ni40NjIgMTA0LjIwNyAxNTYuMzAxIDEwNC4wMDdDMTU2LjE0IDEwMy44MDggMTU1LjkzNiAxMDMuNjQ4IDE1NS43MDQgMTAzLjUzN0wxNDYuNzIzIDk5LjI2OEMxNDYuNDY0IDk5LjE0NDcgMTQ2LjE3NyA5OS4wODc3IDE0NS44OSA5OS4xMDIyWiIgZmlsbD0id2hpdGUiLz4gPHBhdGggZD0iTTE0NS45NzkgMTAyLjM2N0MxNDUuNjgyIDEwMi4zNjcgMTQ1LjQ0MiAxMDIuNjM0IDE0NS40NDIgMTAyLjk2MkMxNDUuNDQyIDEwMi45NjcgMTQ1LjQ0MyAxMDIuOTcyIDE0NS40NDMgMTAyLjk3N0MxNDUuNDQyIDEwMy4wMjEgMTQ1LjQ0IDEwMy4wNzUgMTQ1LjQ0MiAxMDMuMTE0QzE0NS40NDkgMTAzLjMwMyAxNDUuNDkgMTAzLjQ0OCAxNDUuNTE1IDEwMy42MjNDMTQ1LjU2IDEwMy45OTYgMTQ1LjU5OCAxMDQuMzA2IDE0NS41NzUgMTA0LjU5M0MxNDUuNTUyIDEwNC43MDIgMTQ1LjQ3MiAxMDQuODAxIDE0NS40IDEwNC44N0wxNDUuMzg4IDEwNS4wOTZDMTQ1LjA2NSAxMDUuMTIzIDE0NC43NCAxMDUuMTcyIDE0NC40MTYgMTA1LjI0NUMxNDMuMDIgMTA1LjU2MSAxNDEuODE5IDEwNi4yNzYgMTQwLjkwNCAxMDcuMjQyQzE0MC44NDUgMTA3LjIwMiAxNDAuNzQxIDEwNy4xMjggMTQwLjcxIDEwNy4xMDVDMTQwLjYxNCAxMDcuMTE4IDE0MC41MTcgMTA3LjE0OCAxNDAuMzkxIDEwNy4wNzRDMTQwLjE1IDEwNi45MTMgMTM5LjkzMSAxMDYuNjkxIDEzOS42NjYgMTA2LjQyM0MxMzkuNTQ0IDEwNi4yOTQgMTM5LjQ1NyAxMDYuMTcyIDEzOS4zMTIgMTA2LjA0OUMxMzkuMjc5IDEwNi4wMjEgMTM5LjIyOSAxMDUuOTgzIDEzOS4xOTMgMTA1Ljk1NEMxMzkuMDggMTA1Ljg2NCAxMzguOTQ3IDEwNS44MTggMTM4LjgxOCAxMDUuODEzQzEzOC42NTMgMTA1LjgwOCAxMzguNDk0IDEwNS44NzIgMTM4LjM5IDEwNi4wMDJDMTM4LjIwNSAxMDYuMjMzIDEzOC4yNjQgMTA2LjU4NiAxMzguNTIyIDEwNi43OTFDMTM4LjUyNSAxMDYuNzkzIDEzOC41MjcgMTA2Ljc5NSAxMzguNTMgMTA2Ljc5N0MxMzguNTY2IDEwNi44MjUgMTM4LjYwOSAxMDYuODYyIDEzOC42NDIgMTA2Ljg4NkMxMzguNzk1IDEwNi45OTggMTM4LjkzNSAxMDcuMDU2IDEzOS4wODcgMTA3LjE0NUMxMzkuNDA5IDEwNy4zNDMgMTM5LjY3NSAxMDcuNTA3IDEzOS44ODYgMTA3LjcwNEMxMzkuOTY5IDEwNy43OTIgMTM5Ljk4MyAxMDcuOTQ2IDEzOS45OTQgMTA4LjAxM0wxNDAuMTY3IDEwOC4xNjZDMTM5LjI0NCAxMDkuNTQ4IDEzOC44MTggMTExLjI1NCAxMzkuMDcgMTEyLjk5M0wxMzguODQ1IDExMy4wNThDMTM4Ljc4NSAxMTMuMTM1IDEzOC43MDIgMTEzLjI1NSAxMzguNjE0IDExMy4yOTFDMTM4LjMzNyAxMTMuMzc3IDEzOC4wMjYgMTEzLjQwOSAxMzcuNjUgMTEzLjQ0OEMxMzcuNDc0IDExMy40NjMgMTM3LjMyMiAxMTMuNDU0IDEzNy4xMzUgMTEzLjQ5QzEzNy4wOTQgMTEzLjQ5NyAxMzcuMDM2IDExMy41MTIgMTM2Ljk5MSAxMTMuNTIzQzEzNi45OSAxMTMuNTIzIDEzNi45ODggMTEzLjUyMyAxMzYuOTg3IDExMy41MjRDMTM2Ljk4NCAxMTMuNTI0IDEzNi45ODEgMTEzLjUyNiAxMzYuOTc5IDExMy41MjZDMTM2LjY2MiAxMTMuNjAyIDEzNi40NTggMTEzLjg5MiAxMzYuNTI0IDExNC4xNzhDMTM2LjU4OSAxMTQuNDYzIDEzNi44OTkgMTE0LjYzNyAxMzcuMjE3IDExNC41NjlDMTM3LjIyIDExNC41NjggMTM3LjIyMyAxMTQuNTY4IDEzNy4yMjUgMTE0LjU2OEMxMzcuMjI5IDExNC41NjcgMTM3LjIzMiAxMTQuNTY1IDEzNy4yMzYgMTE0LjU2NEMxMzcuMjggMTE0LjU1NSAxMzcuMzM2IDExNC41NDQgMTM3LjM3NSAxMTQuNTMzQzEzNy41NTkgMTE0LjQ4NCAxMzcuNjkyIDExNC40MTIgMTM3Ljg1NyAxMTQuMzQ5QzEzOC4yMTMgMTE0LjIyMiAxMzguNTA3IDExNC4xMTYgMTM4Ljc5NCAxMTQuMDc1QzEzOC45MTQgMTE0LjA2NiAxMzkuMDQgMTE0LjE0OCAxMzkuMTAzIDExNC4xODNMMTM5LjMzNyAxMTQuMTQzQzEzOS44NzcgMTE1LjgwOCAxNDEuMDA2IDExNy4xNTIgMTQyLjQzNyAxMTcuOTk2TDE0Mi4zNCAxMTguMjNDMTQyLjM3NSAxMTguMzIgMTQyLjQxNCAxMTguNDQzIDE0Mi4zODcgMTE4LjUzMkMxNDIuMjgzIDExOC44MDIgMTQyLjEwNCAxMTkuMDg2IDE0MS45MDEgMTE5LjQwM0MxNDEuODAyIDExOS41NDkgMTQxLjcwMSAxMTkuNjYzIDE0MS42MTMgMTE5LjgzQzE0MS41OTEgMTE5Ljg3IDE0MS41NjQgMTE5LjkzMiAxNDEuNTQ0IDExOS45NzRDMTQxLjQwNiAxMjAuMjY5IDE0MS41MDcgMTIwLjYwNyAxNDEuNzcyIDEyMC43MzVDMTQyLjAzOSAxMjAuODYzIDE0Mi4zNzEgMTIwLjcyOCAxNDIuNTE0IDEyMC40MzNDMTQyLjUxNCAxMjAuNDMyIDE0Mi41MTUgMTIwLjQzMiAxNDIuNTE1IDEyMC40MzJDMTQyLjUxNSAxMjAuNDMxIDE0Mi41MTUgMTIwLjQzMSAxNDIuNTE1IDEyMC40MzFDMTQyLjUzNiAxMjAuMzg5IDE0Mi41NjUgMTIwLjMzNCAxNDIuNTgyIDEyMC4yOTRDMTQyLjY1OCAxMjAuMTIxIDE0Mi42ODMgMTE5Ljk3MiAxNDIuNzM3IDExOS44MDRDMTQyLjg3OSAxMTkuNDQ4IDE0Mi45NTcgMTE5LjA3NSAxNDMuMTUzIDExOC44NDNDMTQzLjIwNyAxMTguNzc5IDE0My4yOTQgMTE4Ljc1NSAxNDMuMzg1IDExOC43M0wxNDMuNTA2IDExOC41MTFDMTQ0Ljc1NCAxMTguOTg4IDE0Ni4xNSAxMTkuMTE1IDE0Ny41NDQgMTE4LjhDMTQ3Ljg2MyAxMTguNzI4IDE0OC4xNyAxMTguNjM1IDE0OC40NjcgMTE4LjUyNEMxNDguNTAxIDExOC41ODQgMTQ4LjU2NCAxMTguNyAxNDguNTgxIDExOC43MjlDMTQ4LjY3NCAxMTguNzU5IDE0OC43NzQgMTE4Ljc3NSAxNDguODU2IDExOC44OTVDMTQ5LjAwMiAxMTkuMTQ0IDE0OS4xMDMgMTE5LjQzOSAxNDkuMjI1IDExOS43OTVDMTQ5LjI3OCAxMTkuOTYzIDE0OS4zMDUgMTIwLjExMiAxNDkuMzgxIDEyMC4yODVDMTQ5LjM5OCAxMjAuMzI1IDE0OS40MjcgMTIwLjM4MSAxNDkuNDQ3IDEyMC40MjNDMTQ5LjU5MSAxMjAuNzE4IDE0OS45MjMgMTIwLjg1NCAxNTAuMTkgMTIwLjcyNkMxNTAuNDU2IDEyMC41OTggMTUwLjU1NyAxMjAuMjU5IDE1MC40MTkgMTE5Ljk2NUMxNTAuMzk4IDExOS45MjMgMTUwLjM3IDExOS44NjEgMTUwLjM0OSAxMTkuODIxQzE1MC4yNiAxMTkuNjU0IDE1MC4xNTkgMTE5LjU0MSAxNTAuMDYxIDExOS4zOTVDMTQ5Ljg1NyAxMTkuMDc4IDE0OS42ODggMTE4LjgxNSAxNDkuNTg0IDExOC41NDVDMTQ5LjU0IDExOC40MDYgMTQ5LjU5MSAxMTguMzIgMTQ5LjYyNSAxMTguMjNDMTQ5LjYwNSAxMTguMjA2IDE0OS41NjEgMTE4LjA3NSAxNDkuNTM2IDExOC4wMTRDMTUxLjAyMyAxMTcuMTQgMTUyLjExOSAxMTUuNzQ0IDE1Mi42MzQgMTE0LjEzM0MxNTIuNzA0IDExNC4xNDQgMTUyLjgyNSAxMTQuMTY1IDE1Mi44NjQgMTE0LjE3M0MxNTIuOTQ1IDExNC4xMiAxNTMuMDE5IDExNC4wNTEgMTUzLjE2NSAxMTQuMDYyQzE1My40NTIgMTE0LjEwNCAxNTMuNzQ2IDExNC4yMSAxNTQuMTAyIDExNC4zMzdDMTU0LjI2NyAxMTQuNCAxNTQuNDAxIDExNC40NzMgMTU0LjU4NCAxMTQuNTIyQzE1NC42MjMgMTE0LjUzMiAxNTQuNjc5IDExNC41NDIgMTU0LjcyMyAxMTQuNTUyQzE1NC43MjcgMTE0LjU1MyAxNTQuNzMgMTE0LjU1NCAxNTQuNzM0IDExNC41NTVDMTU0LjczNiAxMTQuNTU2IDE1NC43MzkgMTE0LjU1NiAxNTQuNzQyIDExNC41NTZDMTU1LjA2IDExNC42MjUgMTU1LjM3IDExNC40NTEgMTU1LjQzNSAxMTQuMTY1QzE1NS41MDEgMTEzLjg4IDE1NS4yOTcgMTEzLjU5IDE1NC45ODEgMTEzLjUxNEMxNTQuOTM1IDExMy41MDMgMTU0Ljg2OSAxMTMuNDg1IDE1NC44MjQgMTEzLjQ3N0MxNTQuNjM3IDExMy40NDIgMTU0LjQ4NSAxMTMuNDUgMTU0LjMwOSAxMTMuNDM2QzE1My45MzMgMTEzLjM5NyAxNTMuNjIyIDExMy4zNjUgMTUzLjM0NSAxMTMuMjc4QzE1My4yMzIgMTEzLjIzNCAxNTMuMTUyIDExMy4xMDEgMTUzLjExMyAxMTMuMDQ2TDE1Mi44OTYgMTEyLjk4M0MxNTMuMDA5IDExMi4xNzIgMTUyLjk3OCAxMTEuMzI5IDE1Mi43ODQgMTEwLjQ4NUMxNTIuNTg3IDEwOS42MzMgMTUyLjI0IDEwOC44NTQgMTUxLjc3NiAxMDguMTY3QzE1MS44MzIgMTA4LjExNyAxNTEuOTM3IDEwOC4wMjQgMTUxLjk2NyAxMDcuOTk3QzE1MS45NzYgMTA3LjkwMSAxNTEuOTY4IDEwNy44IDE1Mi4wNjggMTA3LjY5NEMxNTIuMjggMTA3LjQ5NiAxNTIuNTQ2IDEwNy4zMzMgMTUyLjg2NyAxMDcuMTM1QzE1My4wMiAxMDcuMDQ2IDE1My4xNjEgMTA2Ljk4OCAxNTMuMzE0IDEwNi44NzVDMTUzLjM0OSAxMDYuODUgMTUzLjM5NiAxMDYuODEgMTUzLjQzMyAxMDYuNzgxQzE1My42OSAxMDYuNTc2IDE1My43NSAxMDYuMjIzIDE1My41NjUgMTA1Ljk5MkMxNTMuMzc5IDEwNS43NjEgMTUzLjAyMSAxMDUuNzM5IDE1Mi43NjMgMTA1Ljk0NEMxNTIuNzI2IDEwNS45NzMgMTUyLjY3NiAxMDYuMDEgMTUyLjY0NCAxMDYuMDM5QzE1Mi40OTkgMTA2LjE2MiAxNTIuNDEgMTA2LjI4NCAxNTIuMjg5IDEwNi40MTJDMTUyLjAyNCAxMDYuNjggMTUxLjgwNSAxMDYuOTA0IDE1MS41NjQgMTA3LjA2NUMxNTEuNDYgMTA3LjEyNiAxNTEuMzA3IDEwNy4xMDUgMTUxLjIzOCAxMDcuMTAxTDE1MS4wMzMgMTA3LjI0NkMxNDkuODY4IDEwNi4wMjkgMTQ4LjI4MSAxMDUuMjUxIDE0Ni41NzIgMTA1LjFDMTQ2LjU2NyAxMDUuMDI5IDE0Ni41NjEgMTA0LjkgMTQ2LjU1OSAxMDQuODYxQzE0Ni40ODkgMTA0Ljc5NCAxNDYuNDA1IDEwNC43MzcgMTQ2LjM4MyAxMDQuNTkzQzE0Ni4zNiAxMDQuMzA2IDE0Ni4zOTkgMTAzLjk5NiAxNDYuNDQ0IDEwMy42MjNDMTQ2LjQ2OSAxMDMuNDQ4IDE0Ni41MTEgMTAzLjMwMyAxNDYuNTE4IDEwMy4xMTRDMTQ2LjUxOSAxMDMuMDcxIDE0Ni41MTcgMTAzLjAwOCAxNDYuNTE3IDEwMi45NjJDMTQ2LjUxNiAxMDIuNjM0IDE0Ni4yNzYgMTAyLjM2NyAxNDUuOTc5IDEwMi4zNjdIMTQ1Ljk3OVpNMTQ1LjMwNiAxMDYuNTE4TDE0NS4xNDYgMTA5LjMyNEwxNDUuMTM1IDEwOS4zM0MxNDUuMTI0IDEwOS41ODEgMTQ0LjkxNyAxMDkuNzgyIDE0NC42NjIgMTA5Ljc4MkMxNDQuNTU3IDEwOS43ODIgMTQ0LjQ2MSAxMDkuNzQ4IDE0NC4zODMgMTA5LjY5MUwxNDQuMzc4IDEwOS42OTRMMTQyLjA2NiAxMDguMDYyQzE0Mi43NzcgMTA3LjM2NyAxNDMuNjg2IDEwNi44NTMgMTQ0LjczMyAxMDYuNjE2QzE0NC45MjQgMTA2LjU3MyAxNDUuMTE2IDEwNi41NDEgMTQ1LjMwNiAxMDYuNTE4Wk0xNDYuNjUzIDEwNi41MThDMTQ3Ljg3NiAxMDYuNjY3IDE0OS4wMDcgMTA3LjIxOSAxNDkuODczIDEwOC4wNjNMMTQ3LjU3NyAxMDkuNjg1TDE0Ny41NjggMTA5LjY4MUMxNDcuMzY1IDEwOS44MjkgMTQ3LjA3NyAxMDkuNzkzIDE0Ni45MTggMTA5LjU5NEMxNDYuODUzIDEwOS41MTMgMTQ2LjgxOSAxMDkuNDE3IDE0Ni44MTUgMTA5LjMyMUwxNDYuODEzIDEwOS4zMkwxNDYuNjUzIDEwNi41MThaTTE0MS4yMjggMTA5LjExMUwxNDMuMzM5IDExMC45OUwxNDMuMzM2IDExMS4wMDJDMTQzLjUyNyAxMTEuMTY3IDE0My41NTUgMTExLjQ1MyAxNDMuMzk2IDExMS42NTFDMTQzLjMzMSAxMTEuNzMyIDE0My4yNDQgMTExLjc4NyAxNDMuMTUgMTExLjgxMkwxNDMuMTQ4IDExMS44MjFMMTQwLjQ0MiAxMTIuNTk5QzE0MC4zMDUgMTExLjM0NSAxNDAuNjAxIDExMC4xMjcgMTQxLjIyOCAxMDkuMTExWk0xNTAuNzE1IDEwOS4xMTJDMTUxLjAyOSAxMDkuNjE4IDE1MS4yNjYgMTEwLjE4MyAxNTEuNDA4IDExMC43OTZDMTUxLjU0NyAxMTEuNDAxIDE1MS41ODMgMTEyLjAwNiAxNTEuNTI1IDExMi41OUwxNDguODA1IDExMS44MUwxNDguODAzIDExMS43OTlDMTQ4LjU2IDExMS43MzIgMTQ4LjQxIDExMS40ODYgMTQ4LjQ2NyAxMTEuMjM4QzE0OC40OSAxMTEuMTM3IDE0OC41NDQgMTExLjA1MSAxNDguNjE3IDExMC45ODhMMTQ4LjYxNiAxMTAuOTgyTDE1MC43MTUgMTA5LjExMkgxNTAuNzE1Wk0xNDUuNTQ2IDExMS4xMzVIMTQ2LjQxMUwxNDYuOTQ4IDExMS44MDRMMTQ2Ljc1NSAxMTIuNjM5TDE0NS45NzkgMTEzLjAxTDE0NS4yIDExMi42MzhMMTQ1LjAwNyAxMTEuODAzTDE0NS41NDYgMTExLjEzNVpNMTQ4LjMxOCAxMTMuNDI0QzE0OC4zNTUgMTEzLjQyMiAxNDguMzkyIDExMy40MjYgMTQ4LjQyOCAxMTMuNDMyTDE0OC40MzIgMTEzLjQyN0wxNTEuMjMxIDExMy44OThDMTUwLjgyMSAxMTUuMDQzIDE1MC4wMzggMTE2LjAzNiAxNDguOTkgMTE2LjdMMTQ3LjkwNCAxMTQuMDg3TDE0Ny45MDcgMTE0LjA4M0MxNDcuODA3IDExMy44NTIgMTQ3LjkwNyAxMTMuNTgxIDE0OC4xMzcgMTEzLjQ3MUMxNDguMTk2IDExMy40NDMgMTQ4LjI1NyAxMTMuNDI3IDE0OC4zMTggMTEzLjQyNEgxNDguMzE4Wk0xNDMuNjE4IDExMy40MzZDMTQzLjgzMSAxMTMuNDM5IDE0NC4wMjMgMTEzLjU4NiAxNDQuMDczIDExMy44MDNDMTQ0LjA5NiAxMTMuOTA0IDE0NC4wODUgMTE0LjAwNCAxNDQuMDQ2IDExNC4wOTNMMTQ0LjA1NCAxMTQuMTAzTDE0Mi45NzkgMTE2LjY5QzE0MS45NzQgMTE2LjA0OCAxNDEuMTc0IDExNS4wODYgMTQwLjc0NSAxMTMuOTA3TDE0My41MiAxMTMuNDM4TDE0My41MjUgMTEzLjQ0NEMxNDMuNTU2IDExMy40MzggMTQzLjU4NyAxMTMuNDM1IDE0My42MTggMTEzLjQzNlYxMTMuNDM2Wk0xNDUuOTYyIDExNC41NjlDMTQ2LjAzNiAxMTQuNTY2IDE0Ni4xMTIgMTE0LjU4MSAxNDYuMTgzIDExNC42MTZDMTQ2LjI3OCAxMTQuNjYxIDE0Ni4zNSAxMTQuNzMyIDE0Ni4zOTYgMTE0LjgxN0gxNDYuNDA2TDE0Ny43NzQgMTE3LjI3N0MxNDcuNTk3IDExNy4zMzcgMTQ3LjQxNCAxMTcuMzg3IDE0Ny4yMjcgMTE3LjQyOUMxNDYuMTgxIDExNy42NjYgMTQ1LjEzOSAxMTcuNTk0IDE0NC4xOTQgMTE3LjI3NEwxNDUuNTU5IDExNC44MThIMTQ1LjU2MUMxNDUuNjQzIDExNC42NjYgMTQ1Ljc5OCAxMTQuNTc1IDE0NS45NjIgMTE0LjU2OVoiIGZpbGw9IiMzMjZDRTUiIHN0cm9rZT0iIzMyNkNFNSIgc3Ryb2tlLXdpZHRoPSIwLjI1Ii8+IDwvc3ZnPg==)",
      "background-image-crossorigin": "anonymous",
      backgroundImageCrossorigin: "anonymous",
      "background-image-opacity": "0",
      backgroundImageOpacity: "0",
      "background-image-containment": "inside",
      backgroundImageContainment: "inside",
      "background-image-smoothing": "yes",
      backgroundImageSmoothing: "yes",
      "background-position-x": "50%",
      backgroundPositionX: "50%",
      "background-position-y": "50%",
      backgroundPositionY: "50%",
      "background-width-relative-to": "inner",
      backgroundWidthRelativeTo: "inner",
      "background-height-relative-to": "inner",
      backgroundHeightRelativeTo: "inner",
      "background-repeat": "no-repeat",
      backgroundRepeat: "no-repeat",
      "background-fit": "contain",
      backgroundFit: "contain",
      "background-clip": "none",
      backgroundClip: "none",
      "background-width": "auto",
      backgroundWidth: "auto",
      "background-height": "auto",
      backgroundHeight: "auto",
      "background-offset-x": "0px",
      backgroundOffsetX: "0px",
      "background-offset-y": "0px",
      backgroundOffsetY: "0px",
      "pie-size": "100%",
      pieSize: "100%",
      "pie-1-background-color": "rgb(0,0,0)",
      pie1BackgroundColor: "rgb(0,0,0)",
      "pie-1-background-size": "0%",
      pie1BackgroundSize: "0%",
      "pie-1-background-opacity": "1",
      pie1BackgroundOpacity: "1",
      "pie-2-background-color": "rgb(0,0,0)",
      pie2BackgroundColor: "rgb(0,0,0)",
      "pie-2-background-size": "0%",
      pie2BackgroundSize: "0%",
      "pie-2-background-opacity": "1",
      pie2BackgroundOpacity: "1",
      "pie-3-background-color": "rgb(0,0,0)",
      pie3BackgroundColor: "rgb(0,0,0)",
      "pie-3-background-size": "0%",
      pie3BackgroundSize: "0%",
      "pie-3-background-opacity": "1",
      pie3BackgroundOpacity: "1",
      "pie-4-background-color": "rgb(0,0,0)",
      pie4BackgroundColor: "rgb(0,0,0)",
      "pie-4-background-size": "0%",
      pie4BackgroundSize: "0%",
      "pie-4-background-opacity": "1",
      pie4BackgroundOpacity: "1",
      "pie-5-background-color": "rgb(0,0,0)",
      pie5BackgroundColor: "rgb(0,0,0)",
      "pie-5-background-size": "0%",
      pie5BackgroundSize: "0%",
      "pie-5-background-opacity": "1",
      pie5BackgroundOpacity: "1",
      "pie-6-background-color": "rgb(0,0,0)",
      pie6BackgroundColor: "rgb(0,0,0)",
      "pie-6-background-size": "0%",
      pie6BackgroundSize: "0%",
      "pie-6-background-opacity": "1",
      pie6BackgroundOpacity: "1",
      "pie-7-background-color": "rgb(0,0,0)",
      pie7BackgroundColor: "rgb(0,0,0)",
      "pie-7-background-size": "0%",
      pie7BackgroundSize: "0%",
      "pie-7-background-opacity": "1",
      pie7BackgroundOpacity: "1",
      "pie-8-background-color": "rgb(0,0,0)",
      pie8BackgroundColor: "rgb(0,0,0)",
      "pie-8-background-size": "0%",
      pie8BackgroundSize: "0%",
      "pie-8-background-opacity": "1",
      pie8BackgroundOpacity: "1",
      "pie-9-background-color": "rgb(0,0,0)",
      pie9BackgroundColor: "rgb(0,0,0)",
      "pie-9-background-size": "0%",
      pie9BackgroundSize: "0%",
      "pie-9-background-opacity": "1",
      pie9BackgroundOpacity: "1",
      "pie-10-background-color": "rgb(0,0,0)",
      pie10BackgroundColor: "rgb(0,0,0)",
      "pie-10-background-size": "0%",
      pie10BackgroundSize: "0%",
      "pie-10-background-opacity": "1",
      pie10BackgroundOpacity: "1",
      "pie-11-background-color": "rgb(0,0,0)",
      pie11BackgroundColor: "rgb(0,0,0)",
      "pie-11-background-size": "0%",
      pie11BackgroundSize: "0%",
      "pie-11-background-opacity": "1",
      pie11BackgroundOpacity: "1",
      "pie-12-background-color": "rgb(0,0,0)",
      pie12BackgroundColor: "rgb(0,0,0)",
      "pie-12-background-size": "0%",
      pie12BackgroundSize: "0%",
      "pie-12-background-opacity": "1",
      pie12BackgroundOpacity: "1",
      "pie-13-background-color": "rgb(0,0,0)",
      pie13BackgroundColor: "rgb(0,0,0)",
      "pie-13-background-size": "0%",
      pie13BackgroundSize: "0%",
      "pie-13-background-opacity": "1",
      pie13BackgroundOpacity: "1",
      "pie-14-background-color": "rgb(0,0,0)",
      pie14BackgroundColor: "rgb(0,0,0)",
      "pie-14-background-size": "0%",
      pie14BackgroundSize: "0%",
      "pie-14-background-opacity": "1",
      pie14BackgroundOpacity: "1",
      "pie-15-background-color": "rgb(0,0,0)",
      pie15BackgroundColor: "rgb(0,0,0)",
      "pie-15-background-size": "0%",
      pie15BackgroundSize: "0%",
      "pie-15-background-opacity": "1",
      pie15BackgroundOpacity: "1",
      "pie-16-background-color": "rgb(0,0,0)",
      pie16BackgroundColor: "rgb(0,0,0)",
      "pie-16-background-size": "0%",
      pie16BackgroundSize: "0%",
      "pie-16-background-opacity": "1",
      pie16BackgroundOpacity: "1",
      position: "origin",
      "compound-sizing-wrt-labels": "include",
      compoundSizingWrtLabels: "include",
      "min-width": "0px",
      minWidth: "0px",
      "min-width-bias-left": "0px",
      minWidthBiasLeft: "0px",
      "min-width-bias-right": "0px",
      minWidthBiasRight: "0px",
      "min-height": "0px",
      minHeight: "0px",
      "min-height-bias-top": "0px",
      minHeightBiasTop: "0px",
      "min-height-bias-bottom": "0px",
      minHeightBiasBottom: "0px",
      "line-style": "solid",
      lineStyle: "solid",
      "line-color": "rgb(153,153,153)",
      lineColor: "rgb(153,153,153)",
      "line-fill": "solid",
      lineFill: "solid",
      "line-cap": "butt",
      lineCap: "butt",
      "line-opacity": "1",
      lineOpacity: "1",
      "line-dash-pattern": "6 3",
      lineDashPattern: "6 3",
      "line-dash-offset": "0",
      lineDashOffset: "0",
      "line-gradient-stop-colors": "rgb(153,153,153)",
      lineGradientStopColors: "rgb(153,153,153)",
      "line-gradient-stop-positions": "0%",
      lineGradientStopPositions: "0%",
      "curve-style": "haystack",
      curveStyle: "haystack",
      "haystack-radius": "0",
      haystackRadius: "0",
      "source-endpoint": "outside-to-node",
      sourceEndpoint: "outside-to-node",
      "target-endpoint": "outside-to-node",
      targetEndpoint: "outside-to-node",
      "control-point-step-size": "40px",
      controlPointStepSize: "40px",
      "control-point-weights": "0.5",
      controlPointWeights: "0.5",
      "segment-distances": "20px",
      segmentDistances: "20px",
      "segment-weights": "0.5",
      segmentWeights: "0.5",
      "taxi-turn": "50%",
      taxiTurn: "50%",
      "taxi-turn-min-distance": "10px",
      taxiTurnMinDistance: "10px",
      "taxi-direction": "auto",
      taxiDirection: "auto",
      "edge-distances": "intersection",
      edgeDistances: "intersection",
      "arrow-scale": "1",
      arrowScale: "1",
      "loop-direction": "-45deg",
      loopDirection: "-45deg",
      "loop-sweep": "-90deg",
      loopSweep: "-90deg",
      "source-distance-from-node": "0px",
      sourceDistanceFromNode: "0px",
      "target-distance-from-node": "0px",
      targetDistanceFromNode: "0px",
      "source-arrow-shape": "none",
      sourceArrowShape: "none",
      "mid-source-arrow-shape": "none",
      midSourceArrowShape: "none",
      "target-arrow-shape": "none",
      targetArrowShape: "none",
      "mid-target-arrow-shape": "none",
      midTargetArrowShape: "none",
      "source-arrow-color": "rgb(153,153,153)",
      sourceArrowColor: "rgb(153,153,153)",
      "mid-source-arrow-color": "rgb(153,153,153)",
      midSourceArrowColor: "rgb(153,153,153)",
      "target-arrow-color": "rgb(153,153,153)",
      targetArrowColor: "rgb(153,153,153)",
      "mid-target-arrow-color": "rgb(153,153,153)",
      midTargetArrowColor: "rgb(153,153,153)",
      "source-arrow-fill": "filled",
      sourceArrowFill: "filled",
      "mid-source-arrow-fill": "filled",
      midSourceArrowFill: "filled",
      "target-arrow-fill": "filled",
      targetArrowFill: "filled",
      "mid-target-arrow-fill": "filled",
      midTargetArrowFill: "filled",
      "source-arrow-width": "1px",
      sourceArrowWidth: "1px",
      "mid-source-arrow-width": "1px",
      midSourceArrowWidth: "1px",
      "target-arrow-width": "1px",
      targetArrowWidth: "1px",
      "mid-target-arrow-width": "1px",
      midTargetArrowWidth: "1px",
      "selection-box-color": "rgb(221,221,221)",
      selectionBoxColor: "rgb(221,221,221)",
      "selection-box-opacity": "0.65",
      selectionBoxOpacity: "0.65",
      "selection-box-border-color": "rgb(170,170,170)",
      selectionBoxBorderColor: "rgb(170,170,170)",
      "selection-box-border-width": "1px",
      selectionBoxBorderWidth: "1px",
      "active-bg-color": "rgb(0,0,0)",
      activeBgColor: "rgb(0,0,0)",
      "active-bg-opacity": "0.15",
      activeBgOpacity: "0.15",
      "active-bg-size": "30px",
      activeBgSize: "30px",
      "outside-texture-bg-color": "rgb(0,0,0)",
      outsideTextureBgColor: "rgb(0,0,0)",
      "outside-texture-bg-opacity": "0.125",
      outsideTextureBgOpacity: "0.125",
      content: "edge-stack",
      "control-point-weight": "0.5",
      controlPointWeight: "0.5",
      "edge-text-rotation": "none",
      edgeTextRotation: "none",
      "padding-left": "6px",
      paddingLeft: "6px",
      "padding-right": "6px",
      paddingRight: "6px",
      "padding-top": "6px",
      paddingTop: "6px",
      "padding-bottom": "6px",
      paddingBottom: "6px"
    },
    "b9702cdb-2390-4f2a-a9c7-096ef1a7d84d": {
      events: "yes",
      "text-events": "no",
      textEvents: "no",
      "transition-property": "none",
      transitionProperty: "none",
      "transition-duration": "0ms",
      transitionDuration: "0ms",
      "transition-delay": "0ms",
      transitionDelay: "0ms",
      "transition-timing-function": "linear",
      transitionTimingFunction: "linear",
      display: "element",
      visibility: "visible",
      opacity: "1",
      "text-opacity": "1",
      textOpacity: "1",
      "min-zoomed-font-size": "12px",
      minZoomedFontSize: "12px",
      "z-compound-depth": "auto",
      zCompoundDepth: "auto",
      "z-index-compare": "manual",
      zIndexCompare: "manual",
      "z-index": "4",
      zIndex: "4",
      "overlay-padding": "10px",
      overlayPadding: "10px",
      "overlay-color": "rgb(0,0,0)",
      overlayColor: "rgb(0,0,0)",
      "overlay-opacity": "0",
      overlayOpacity: "0",
      "overlay-shape": "round-rectangle",
      overlayShape: "round-rectangle",
      "underlay-padding": "10px",
      underlayPadding: "10px",
      "underlay-color": "rgb(0,0,0)",
      underlayColor: "rgb(0,0,0)",
      "underlay-opacity": "0",
      underlayOpacity: "0",
      "underlay-shape": "round-rectangle",
      underlayShape: "round-rectangle",
      ghost: "no",
      "ghost-offset-x": "0px",
      ghostOffsetX: "0px",
      "ghost-offset-y": "0px",
      ghostOffsetY: "0px",
      "ghost-opacity": "0",
      ghostOpacity: "0",
      "text-valign": "bottom",
      textValign: "bottom",
      "text-halign": "center",
      textHalign: "center",
      color: "rgb(0,0,0)",
      "text-outline-color": "rgb(0,0,0)",
      textOutlineColor: "rgb(0,0,0)",
      "text-outline-opacity": "1",
      textOutlineOpacity: "1",
      "text-background-color": "rgb(210,212,210)",
      textBackgroundColor: "rgb(210,212,210)",
      "text-background-opacity": "0.7",
      textBackgroundOpacity: "0.7",
      "text-background-padding": "2px",
      textBackgroundPadding: "2px",
      "text-border-opacity": "0",
      textBorderOpacity: "0",
      "text-border-color": "rgb(0,0,0)",
      textBorderColor: "rgb(0,0,0)",
      "text-border-width": "0px",
      textBorderWidth: "0px",
      "text-border-style": "solid",
      textBorderStyle: "solid",
      "text-background-shape": "round-rectangle",
      textBackgroundShape: "round-rectangle",
      "text-justification": "auto",
      textJustification: "auto",
      "font-family": "Qanelas Soft, sans-serif",
      fontFamily: "Qanelas Soft, sans-serif",
      "font-style": "normal",
      fontStyle: "normal",
      "font-weight": "300",
      fontWeight: "300",
      "font-size": "8px",
      fontSize: "8px",
      "text-transform": "none",
      textTransform: "none",
      "text-wrap": "ellipsis",
      textWrap: "ellipsis",
      "text-overflow-wrap": "whitespace",
      textOverflowWrap: "whitespace",
      "text-max-width": "80px",
      textMaxWidth: "80px",
      "text-outline-width": "0px",
      textOutlineWidth: "0px",
      "line-height": "1",
      lineHeight: "1",
      label: "edge-stack",
      "text-rotation": "none",
      textRotation: "none",
      "text-margin-x": "0px",
      textMarginX: "0px",
      "text-margin-y": "7px",
      textMarginY: "7px",
      "source-label": "",
      sourceLabel: "",
      "source-text-rotation": "none",
      sourceTextRotation: "none",
      "source-text-margin-x": "0px",
      sourceTextMarginX: "0px",
      "source-text-margin-y": "0px",
      sourceTextMarginY: "0px",
      "source-text-offset": "0px",
      sourceTextOffset: "0px",
      "target-label": "",
      targetLabel: "",
      "target-text-rotation": "none",
      targetTextRotation: "none",
      "target-text-margin-x": "0px",
      targetTextMarginX: "0px",
      "target-text-margin-y": "0px",
      targetTextMarginY: "0px",
      "target-text-offset": "0px",
      targetTextOffset: "0px",
      height: "20px",
      width: "20px",
      shape: "round-triangle",
      "shape-polygon-points": "-1 -1 1 -1 1 1 -1 1",
      shapePolygonPoints: "-1 -1 1 -1 1 1 -1 1",
      "background-color": "rgb(50,108,229)",
      backgroundColor: "rgb(50,108,229)",
      "background-fill": "solid",
      backgroundFill: "solid",
      "background-opacity": "1",
      backgroundOpacity: "1",
      "background-blacken": "0",
      backgroundBlacken: "0",
      "background-gradient-stop-colors": "rgb(153,153,153)",
      backgroundGradientStopColors: "rgb(153,153,153)",
      "background-gradient-stop-positions": "0%",
      backgroundGradientStopPositions: "0%",
      "background-gradient-direction": "to-bottom",
      backgroundGradientDirection: "to-bottom",
      padding: "12px",
      "padding-relative-to": "width",
      paddingRelativeTo: "width",
      "bounds-expansion": "0px",
      boundsExpansion: "0px",
      "border-color": "rgb(60,129,255)",
      borderColor: "rgb(60,129,255)",
      "border-opacity": "1",
      borderOpacity: "1",
      "border-width": "0px",
      borderWidth: "0px",
      "border-style": "solid",
      borderStyle: "solid",
      "outline-color": "rgb(153,153,153)",
      outlineColor: "rgb(153,153,153)",
      "outline-opacity": "1",
      outlineOpacity: "1",
      "outline-width": "0px",
      outlineWidth: "0px",
      "outline-style": "solid",
      outlineStyle: "solid",
      "outline-offset": "0px",
      outlineOffset: "0px",
      "background-image":
        "url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODQiIGhlaWdodD0iNzciIHZpZXdCb3g9IjAgMCA4NCA3NyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zMC4xOSAwQzI5LjY1OTYgMCAyOS4xNTA5IDAuMjEwNzE0IDI4Ljc3NTggMC41ODU3ODZDMjguNDAwNyAwLjk2MDg1OSAyOC4xOSAxLjQ2OTU3IDI4LjE5IDJWMjQuNDVDMjguMTkgMjQuOTgwNCAyOC40MDA3IDI1LjQ4OTEgMjguNzc1OCAyNS44NjQyQzI5LjE1MDkgMjYuMjM5MyAyOS42NTk2IDI2LjQ1IDMwLjE5IDI2LjQ1SDM4Ljc4VjM4LjIySDExLjE3VjUwLjU1SDJDMS40Njk1NyA1MC41NSAwLjk2MDg1OSA1MC43NjA3IDAuNTg1Nzg2IDUxLjEzNThDMC4yMTA3MTQgNTEuNTEwOSAwIDUyLjAxOTYgMCA1Mi41NUwwIDc1QzAgNzUuNTMwNCAwLjIxMDcxNCA3Ni4wMzkxIDAuNTg1Nzg2IDc2LjQxNDJDMC45NjA4NTkgNzYuNzg5MyAxLjQ2OTU3IDc3IDIgNzdIMjQuNDNDMjQuOTYwNCA3NyAyNS40NjkxIDc2Ljc4OTMgMjUuODQ0MiA3Ni40MTQyQzI2LjIxOTMgNzYuMDM5MSAyNi40MyA3NS41MzA0IDI2LjQzIDc1VjUyLjU1QzI2LjQzIDUyLjAxOTYgMjYuMjE5MyA1MS41MTA5IDI1Ljg0NDIgNTEuMTM1OEMyNS40NjkxIDUwLjc2MDcgMjQuOTYwNCA1MC41NSAyNC40MyA1MC41NUgxNS44NVY0Mi45SDY4LjQ1VjUwLjU1SDU5LjU3QzU5LjAzOTYgNTAuNTUgNTguNTMwOSA1MC43NjA3IDU4LjE1NTggNTEuMTM1OEM1Ny43ODA3IDUxLjUxMDkgNTcuNTcgNTIuMDE5NiA1Ny41NyA1Mi41NVY3NUM1Ny41NyA3NS41MzA0IDU3Ljc4MDcgNzYuMDM5MSA1OC4xNTU4IDc2LjQxNDJDNTguNTMwOSA3Ni43ODkzIDU5LjAzOTYgNzcgNTkuNTcgNzdIODJDODIuNTMwNCA3NyA4My4wMzkxIDc2Ljc4OTMgODMuNDE0MiA3Ni40MTQyQzgzLjc4OTMgNzYuMDM5MSA4NCA3NS41MzA0IDg0IDc1VjUyLjU1Qzg0IDUyLjAxOTYgODMuNzg5MyA1MS41MTA5IDgzLjQxNDIgNTEuMTM1OEM4My4wMzkxIDUwLjc2MDcgODIuNTMwNCA1MC41NSA4MiA1MC41NUg3My4xMlYzOC4yMkg0My40NlYyNi40NUg1Mi42M0M1My4xNjA0IDI2LjQ1IDUzLjY2OTEgMjYuMjM5MyA1NC4wNDQyIDI1Ljg2NDJDNTQuNDE5MyAyNS40ODkxIDU0LjYzIDI0Ljk4MDQgNTQuNjMgMjQuNDVWMkM1NC42MyAxLjQ2OTU3IDU0LjQxOTMgMC45NjA4NTkgNTQuMDQ0MiAwLjU4NTc4NkM1My42NjkxIDAuMjEwNzE0IDUzLjE2MDQgMCA1Mi42MyAwTDMwLjE5IDBaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4=)",
      backgroundImage:
        "url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODQiIGhlaWdodD0iNzciIHZpZXdCb3g9IjAgMCA4NCA3NyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zMC4xOSAwQzI5LjY1OTYgMCAyOS4xNTA5IDAuMjEwNzE0IDI4Ljc3NTggMC41ODU3ODZDMjguNDAwNyAwLjk2MDg1OSAyOC4xOSAxLjQ2OTU3IDI4LjE5IDJWMjQuNDVDMjguMTkgMjQuOTgwNCAyOC40MDA3IDI1LjQ4OTEgMjguNzc1OCAyNS44NjQyQzI5LjE1MDkgMjYuMjM5MyAyOS42NTk2IDI2LjQ1IDMwLjE5IDI2LjQ1SDM4Ljc4VjM4LjIySDExLjE3VjUwLjU1SDJDMS40Njk1NyA1MC41NSAwLjk2MDg1OSA1MC43NjA3IDAuNTg1Nzg2IDUxLjEzNThDMC4yMTA3MTQgNTEuNTEwOSAwIDUyLjAxOTYgMCA1Mi41NUwwIDc1QzAgNzUuNTMwNCAwLjIxMDcxNCA3Ni4wMzkxIDAuNTg1Nzg2IDc2LjQxNDJDMC45NjA4NTkgNzYuNzg5MyAxLjQ2OTU3IDc3IDIgNzdIMjQuNDNDMjQuOTYwNCA3NyAyNS40NjkxIDc2Ljc4OTMgMjUuODQ0MiA3Ni40MTQyQzI2LjIxOTMgNzYuMDM5MSAyNi40MyA3NS41MzA0IDI2LjQzIDc1VjUyLjU1QzI2LjQzIDUyLjAxOTYgMjYuMjE5MyA1MS41MTA5IDI1Ljg0NDIgNTEuMTM1OEMyNS40NjkxIDUwLjc2MDcgMjQuOTYwNCA1MC41NSAyNC40MyA1MC41NUgxNS44NVY0Mi45SDY4LjQ1VjUwLjU1SDU5LjU3QzU5LjAzOTYgNTAuNTUgNTguNTMwOSA1MC43NjA3IDU4LjE1NTggNTEuMTM1OEM1Ny43ODA3IDUxLjUxMDkgNTcuNTcgNTIuMDE5NiA1Ny41NyA1Mi41NVY3NUM1Ny41NyA3NS41MzA0IDU3Ljc4MDcgNzYuMDM5MSA1OC4xNTU4IDc2LjQxNDJDNTguNTMwOSA3Ni43ODkzIDU5LjAzOTYgNzcgNTkuNTcgNzdIODJDODIuNTMwNCA3NyA4My4wMzkxIDc2Ljc4OTMgODMuNDE0MiA3Ni40MTQyQzgzLjc4OTMgNzYuMDM5MSA4NCA3NS41MzA0IDg0IDc1VjUyLjU1Qzg0IDUyLjAxOTYgODMuNzg5MyA1MS41MTA5IDgzLjQxNDIgNTEuMTM1OEM4My4wMzkxIDUwLjc2MDcgODIuNTMwNCA1MC41NSA4MiA1MC41NUg3My4xMlYzOC4yMkg0My40NlYyNi40NUg1Mi42M0M1My4xNjA0IDI2LjQ1IDUzLjY2OTEgMjYuMjM5MyA1NC4wNDQyIDI1Ljg2NDJDNTQuNDE5MyAyNS40ODkxIDU0LjYzIDI0Ljk4MDQgNTQuNjMgMjQuNDVWMkM1NC42MyAxLjQ2OTU3IDU0LjQxOTMgMC45NjA4NTkgNTQuMDQ0MiAwLjU4NTc4NkM1My42NjkxIDAuMjEwNzE0IDUzLjE2MDQgMCA1Mi42MyAwTDMwLjE5IDBaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4=)",
      "background-image-crossorigin": "anonymous",
      backgroundImageCrossorigin: "anonymous",
      "background-image-opacity": "1",
      backgroundImageOpacity: "1",
      "background-image-containment": "inside",
      backgroundImageContainment: "inside",
      "background-image-smoothing": "yes",
      backgroundImageSmoothing: "yes",
      "background-position-x": "50%",
      backgroundPositionX: "50%",
      "background-position-y": "4.5px",
      backgroundPositionY: "4.5px",
      "background-width-relative-to": "inner",
      backgroundWidthRelativeTo: "inner",
      "background-height-relative-to": "inner",
      backgroundHeightRelativeTo: "inner",
      "background-repeat": "no-repeat",
      backgroundRepeat: "no-repeat",
      "background-fit": "contain",
      backgroundFit: "contain",
      "background-clip": "none",
      backgroundClip: "none",
      "background-width": "auto",
      backgroundWidth: "auto",
      "background-height": "auto",
      backgroundHeight: "auto",
      "background-offset-x": "0px",
      backgroundOffsetX: "0px",
      "background-offset-y": "0px",
      backgroundOffsetY: "0px",
      "pie-size": "100%",
      pieSize: "100%",
      "pie-1-background-color": "rgb(0,0,0)",
      pie1BackgroundColor: "rgb(0,0,0)",
      "pie-1-background-size": "0%",
      pie1BackgroundSize: "0%",
      "pie-1-background-opacity": "1",
      pie1BackgroundOpacity: "1",
      "pie-2-background-color": "rgb(0,0,0)",
      pie2BackgroundColor: "rgb(0,0,0)",
      "pie-2-background-size": "0%",
      pie2BackgroundSize: "0%",
      "pie-2-background-opacity": "1",
      pie2BackgroundOpacity: "1",
      "pie-3-background-color": "rgb(0,0,0)",
      pie3BackgroundColor: "rgb(0,0,0)",
      "pie-3-background-size": "0%",
      pie3BackgroundSize: "0%",
      "pie-3-background-opacity": "1",
      pie3BackgroundOpacity: "1",
      "pie-4-background-color": "rgb(0,0,0)",
      pie4BackgroundColor: "rgb(0,0,0)",
      "pie-4-background-size": "0%",
      pie4BackgroundSize: "0%",
      "pie-4-background-opacity": "1",
      pie4BackgroundOpacity: "1",
      "pie-5-background-color": "rgb(0,0,0)",
      pie5BackgroundColor: "rgb(0,0,0)",
      "pie-5-background-size": "0%",
      pie5BackgroundSize: "0%",
      "pie-5-background-opacity": "1",
      pie5BackgroundOpacity: "1",
      "pie-6-background-color": "rgb(0,0,0)",
      pie6BackgroundColor: "rgb(0,0,0)",
      "pie-6-background-size": "0%",
      pie6BackgroundSize: "0%",
      "pie-6-background-opacity": "1",
      pie6BackgroundOpacity: "1",
      "pie-7-background-color": "rgb(0,0,0)",
      pie7BackgroundColor: "rgb(0,0,0)",
      "pie-7-background-size": "0%",
      pie7BackgroundSize: "0%",
      "pie-7-background-opacity": "1",
      pie7BackgroundOpacity: "1",
      "pie-8-background-color": "rgb(0,0,0)",
      pie8BackgroundColor: "rgb(0,0,0)",
      "pie-8-background-size": "0%",
      pie8BackgroundSize: "0%",
      "pie-8-background-opacity": "1",
      pie8BackgroundOpacity: "1",
      "pie-9-background-color": "rgb(0,0,0)",
      pie9BackgroundColor: "rgb(0,0,0)",
      "pie-9-background-size": "0%",
      pie9BackgroundSize: "0%",
      "pie-9-background-opacity": "1",
      pie9BackgroundOpacity: "1",
      "pie-10-background-color": "rgb(0,0,0)",
      pie10BackgroundColor: "rgb(0,0,0)",
      "pie-10-background-size": "0%",
      pie10BackgroundSize: "0%",
      "pie-10-background-opacity": "1",
      pie10BackgroundOpacity: "1",
      "pie-11-background-color": "rgb(0,0,0)",
      pie11BackgroundColor: "rgb(0,0,0)",
      "pie-11-background-size": "0%",
      pie11BackgroundSize: "0%",
      "pie-11-background-opacity": "1",
      pie11BackgroundOpacity: "1",
      "pie-12-background-color": "rgb(0,0,0)",
      pie12BackgroundColor: "rgb(0,0,0)",
      "pie-12-background-size": "0%",
      pie12BackgroundSize: "0%",
      "pie-12-background-opacity": "1",
      pie12BackgroundOpacity: "1",
      "pie-13-background-color": "rgb(0,0,0)",
      pie13BackgroundColor: "rgb(0,0,0)",
      "pie-13-background-size": "0%",
      pie13BackgroundSize: "0%",
      "pie-13-background-opacity": "1",
      pie13BackgroundOpacity: "1",
      "pie-14-background-color": "rgb(0,0,0)",
      pie14BackgroundColor: "rgb(0,0,0)",
      "pie-14-background-size": "0%",
      pie14BackgroundSize: "0%",
      "pie-14-background-opacity": "1",
      pie14BackgroundOpacity: "1",
      "pie-15-background-color": "rgb(0,0,0)",
      pie15BackgroundColor: "rgb(0,0,0)",
      "pie-15-background-size": "0%",
      pie15BackgroundSize: "0%",
      "pie-15-background-opacity": "1",
      pie15BackgroundOpacity: "1",
      "pie-16-background-color": "rgb(0,0,0)",
      pie16BackgroundColor: "rgb(0,0,0)",
      "pie-16-background-size": "0%",
      pie16BackgroundSize: "0%",
      "pie-16-background-opacity": "1",
      pie16BackgroundOpacity: "1",
      position: "origin",
      "compound-sizing-wrt-labels": "include",
      compoundSizingWrtLabels: "include",
      "min-width": "0px",
      minWidth: "0px",
      "min-width-bias-left": "0px",
      minWidthBiasLeft: "0px",
      "min-width-bias-right": "0px",
      minWidthBiasRight: "0px",
      "min-height": "0px",
      minHeight: "0px",
      "min-height-bias-top": "0px",
      minHeightBiasTop: "0px",
      "min-height-bias-bottom": "0px",
      minHeightBiasBottom: "0px",
      "line-style": "solid",
      lineStyle: "solid",
      "line-color": "rgb(153,153,153)",
      lineColor: "rgb(153,153,153)",
      "line-fill": "solid",
      lineFill: "solid",
      "line-cap": "butt",
      lineCap: "butt",
      "line-opacity": "1",
      lineOpacity: "1",
      "line-dash-pattern": "6 3",
      lineDashPattern: "6 3",
      "line-dash-offset": "0",
      lineDashOffset: "0",
      "line-gradient-stop-colors": "rgb(153,153,153)",
      lineGradientStopColors: "rgb(153,153,153)",
      "line-gradient-stop-positions": "0%",
      lineGradientStopPositions: "0%",
      "curve-style": "haystack",
      curveStyle: "haystack",
      "haystack-radius": "0",
      haystackRadius: "0",
      "source-endpoint": "outside-to-node",
      sourceEndpoint: "outside-to-node",
      "target-endpoint": "outside-to-node",
      targetEndpoint: "outside-to-node",
      "control-point-step-size": "40px",
      controlPointStepSize: "40px",
      "control-point-weights": "0.5",
      controlPointWeights: "0.5",
      "segment-distances": "20px",
      segmentDistances: "20px",
      "segment-weights": "0.5",
      segmentWeights: "0.5",
      "taxi-turn": "50%",
      taxiTurn: "50%",
      "taxi-turn-min-distance": "10px",
      taxiTurnMinDistance: "10px",
      "taxi-direction": "auto",
      taxiDirection: "auto",
      "edge-distances": "intersection",
      edgeDistances: "intersection",
      "arrow-scale": "1",
      arrowScale: "1",
      "loop-direction": "-45deg",
      loopDirection: "-45deg",
      "loop-sweep": "-90deg",
      loopSweep: "-90deg",
      "source-distance-from-node": "0px",
      sourceDistanceFromNode: "0px",
      "target-distance-from-node": "0px",
      targetDistanceFromNode: "0px",
      "source-arrow-shape": "none",
      sourceArrowShape: "none",
      "mid-source-arrow-shape": "none",
      midSourceArrowShape: "none",
      "target-arrow-shape": "none",
      targetArrowShape: "none",
      "mid-target-arrow-shape": "none",
      midTargetArrowShape: "none",
      "source-arrow-color": "rgb(153,153,153)",
      sourceArrowColor: "rgb(153,153,153)",
      "mid-source-arrow-color": "rgb(153,153,153)",
      midSourceArrowColor: "rgb(153,153,153)",
      "target-arrow-color": "rgb(153,153,153)",
      targetArrowColor: "rgb(153,153,153)",
      "mid-target-arrow-color": "rgb(153,153,153)",
      midTargetArrowColor: "rgb(153,153,153)",
      "source-arrow-fill": "filled",
      sourceArrowFill: "filled",
      "mid-source-arrow-fill": "filled",
      midSourceArrowFill: "filled",
      "target-arrow-fill": "filled",
      targetArrowFill: "filled",
      "mid-target-arrow-fill": "filled",
      midTargetArrowFill: "filled",
      "source-arrow-width": "1px",
      sourceArrowWidth: "1px",
      "mid-source-arrow-width": "1px",
      midSourceArrowWidth: "1px",
      "target-arrow-width": "1px",
      targetArrowWidth: "1px",
      "mid-target-arrow-width": "1px",
      midTargetArrowWidth: "1px",
      "selection-box-color": "rgb(221,221,221)",
      selectionBoxColor: "rgb(221,221,221)",
      "selection-box-opacity": "0.65",
      selectionBoxOpacity: "0.65",
      "selection-box-border-color": "rgb(170,170,170)",
      selectionBoxBorderColor: "rgb(170,170,170)",
      "selection-box-border-width": "1px",
      selectionBoxBorderWidth: "1px",
      "active-bg-color": "rgb(0,0,0)",
      activeBgColor: "rgb(0,0,0)",
      "active-bg-opacity": "0.15",
      activeBgOpacity: "0.15",
      "active-bg-size": "30px",
      activeBgSize: "30px",
      "outside-texture-bg-color": "rgb(0,0,0)",
      outsideTextureBgColor: "rgb(0,0,0)",
      "outside-texture-bg-opacity": "0.125",
      outsideTextureBgOpacity: "0.125",
      content: "edge-stack",
      "control-point-weight": "0.5",
      controlPointWeight: "0.5",
      "edge-text-rotation": "none",
      edgeTextRotation: "none",
      "padding-left": "12px",
      paddingLeft: "12px",
      "padding-right": "12px",
      paddingRight: "12px",
      "padding-top": "12px",
      paddingTop: "12px",
      "padding-bottom": "12px",
      paddingBottom: "12px"
    },
    "6a8f392a-6d03-4376-8c41-669c513ba6bb": {
      events: "yes",
      "text-events": "yes",
      textEvents: "yes",
      "transition-property": "none",
      transitionProperty: "none",
      "transition-duration": "0ms",
      transitionDuration: "0ms",
      "transition-delay": "0ms",
      transitionDelay: "0ms",
      "transition-timing-function": "linear",
      transitionTimingFunction: "linear",
      display: "element",
      visibility: "visible",
      opacity: "1",
      "text-opacity": "1",
      textOpacity: "1",
      "min-zoomed-font-size": "0px",
      minZoomedFontSize: "0px",
      "z-compound-depth": "auto",
      zCompoundDepth: "auto",
      "z-index-compare": "manual",
      zIndexCompare: "manual",
      "z-index": "999",
      zIndex: "999",
      "overlay-padding": "10px",
      overlayPadding: "10px",
      "overlay-color": "rgb(0,0,0)",
      overlayColor: "rgb(0,0,0)",
      "overlay-opacity": "0",
      overlayOpacity: "0",
      "overlay-shape": "round-rectangle",
      overlayShape: "round-rectangle",
      "underlay-padding": "10px",
      underlayPadding: "10px",
      "underlay-color": "rgb(0,0,0)",
      underlayColor: "rgb(0,0,0)",
      "underlay-opacity": "0",
      underlayOpacity: "0",
      "underlay-shape": "round-rectangle",
      underlayShape: "round-rectangle",
      ghost: "no",
      "ghost-offset-x": "0px",
      ghostOffsetX: "0px",
      "ghost-offset-y": "0px",
      ghostOffsetY: "0px",
      "ghost-opacity": "0",
      ghostOpacity: "0",
      "text-valign": "top",
      textValign: "top",
      "text-halign": "center",
      textHalign: "center",
      color: "rgb(0,0,0)",
      "text-outline-color": "rgb(255,255,255)",
      textOutlineColor: "rgb(255,255,255)",
      "text-outline-opacity": "1",
      textOutlineOpacity: "1",
      "text-background-color": "rgb(0,0,0)",
      textBackgroundColor: "rgb(0,0,0)",
      "text-background-opacity": "0",
      textBackgroundOpacity: "0",
      "text-background-padding": "0px",
      textBackgroundPadding: "0px",
      "text-border-opacity": "0",
      textBorderOpacity: "0",
      "text-border-color": "rgb(0,0,0)",
      textBorderColor: "rgb(0,0,0)",
      "text-border-width": "0px",
      textBorderWidth: "0px",
      "text-border-style": "solid",
      textBorderStyle: "solid",
      "text-background-shape": "rectangle",
      textBackgroundShape: "rectangle",
      "text-justification": "auto",
      textJustification: "auto",
      "font-family": "Qanelas Soft, sans-serif",
      fontFamily: "Qanelas Soft, sans-serif",
      "font-style": "normal",
      fontStyle: "normal",
      "font-weight": "normal",
      fontWeight: "normal",
      "font-size": "6px",
      fontSize: "6px",
      "text-transform": "none",
      textTransform: "none",
      "text-wrap": "wrap",
      textWrap: "wrap",
      "text-overflow-wrap": "whitespace",
      textOverflowWrap: "whitespace",
      "text-max-width": "9999px",
      textMaxWidth: "9999px",
      "text-outline-width": "1px",
      textOutlineWidth: "1px",
      "line-height": "1",
      lineHeight: "1",
      label: "",
      "text-rotation": "none",
      textRotation: "none",
      "text-margin-x": "0px",
      textMarginX: "0px",
      "text-margin-y": "0px",
      textMarginY: "0px",
      "source-label": "",
      sourceLabel: "",
      "source-text-rotation": "none",
      sourceTextRotation: "none",
      "source-text-margin-x": "0px",
      sourceTextMarginX: "0px",
      "source-text-margin-y": "0px",
      sourceTextMarginY: "0px",
      "source-text-offset": "0px",
      sourceTextOffset: "0px",
      "target-label": "8877/TCP",
      targetLabel: "8877/TCP",
      "target-text-rotation": "none",
      targetTextRotation: "none",
      "target-text-margin-x": "0px",
      targetTextMarginX: "0px",
      "target-text-margin-y": "-6px",
      targetTextMarginY: "-6px",
      "target-text-offset": "16px",
      targetTextOffset: "16px",
      height: "30px",
      width: "1.5px",
      shape: "ellipse",
      "shape-polygon-points": "-1 -1 1 -1 1 1 -1 1",
      shapePolygonPoints: "-1 -1 1 -1 1 1 -1 1",
      "background-color": "rgb(153,153,153)",
      backgroundColor: "rgb(153,153,153)",
      "background-fill": "solid",
      backgroundFill: "solid",
      "background-opacity": "1",
      backgroundOpacity: "1",
      "background-blacken": "0",
      backgroundBlacken: "0",
      "background-gradient-stop-colors": "rgb(153,153,153)",
      backgroundGradientStopColors: "rgb(153,153,153)",
      "background-gradient-stop-positions": "0%",
      backgroundGradientStopPositions: "0%",
      "background-gradient-direction": "to-bottom",
      backgroundGradientDirection: "to-bottom",
      padding: "0px",
      "padding-relative-to": "width",
      paddingRelativeTo: "width",
      "bounds-expansion": "0px",
      boundsExpansion: "0px",
      "border-color": "rgb(0,0,0)",
      borderColor: "rgb(0,0,0)",
      "border-opacity": "1",
      borderOpacity: "1",
      "border-width": "0px",
      borderWidth: "0px",
      "border-style": "solid",
      borderStyle: "solid",
      "outline-color": "rgb(153,153,153)",
      outlineColor: "rgb(153,153,153)",
      "outline-opacity": "1",
      outlineOpacity: "1",
      "outline-width": "0px",
      outlineWidth: "0px",
      "outline-style": "solid",
      outlineStyle: "solid",
      "outline-offset": "0px",
      outlineOffset: "0px",
      "background-image": "url(none)",
      backgroundImage: "url(none)",
      "background-image-crossorigin": "anonymous",
      backgroundImageCrossorigin: "anonymous",
      "background-image-opacity": "1",
      backgroundImageOpacity: "1",
      "background-image-containment": "inside",
      backgroundImageContainment: "inside",
      "background-image-smoothing": "yes",
      backgroundImageSmoothing: "yes",
      "background-position-x": "50%",
      backgroundPositionX: "50%",
      "background-position-y": "50%",
      backgroundPositionY: "50%",
      "background-width-relative-to": "include-padding",
      backgroundWidthRelativeTo: "include-padding",
      "background-height-relative-to": "include-padding",
      backgroundHeightRelativeTo: "include-padding",
      "background-repeat": "no-repeat",
      backgroundRepeat: "no-repeat",
      "background-fit": "none",
      backgroundFit: "none",
      "background-clip": "node",
      backgroundClip: "node",
      "background-width": "auto",
      backgroundWidth: "auto",
      "background-height": "auto",
      backgroundHeight: "auto",
      "background-offset-x": "0px",
      backgroundOffsetX: "0px",
      "background-offset-y": "0px",
      backgroundOffsetY: "0px",
      "pie-size": "100%",
      pieSize: "100%",
      "pie-1-background-color": "rgb(0,0,0)",
      pie1BackgroundColor: "rgb(0,0,0)",
      "pie-1-background-size": "0%",
      pie1BackgroundSize: "0%",
      "pie-1-background-opacity": "1",
      pie1BackgroundOpacity: "1",
      "pie-2-background-color": "rgb(0,0,0)",
      pie2BackgroundColor: "rgb(0,0,0)",
      "pie-2-background-size": "0%",
      pie2BackgroundSize: "0%",
      "pie-2-background-opacity": "1",
      pie2BackgroundOpacity: "1",
      "pie-3-background-color": "rgb(0,0,0)",
      pie3BackgroundColor: "rgb(0,0,0)",
      "pie-3-background-size": "0%",
      pie3BackgroundSize: "0%",
      "pie-3-background-opacity": "1",
      pie3BackgroundOpacity: "1",
      "pie-4-background-color": "rgb(0,0,0)",
      pie4BackgroundColor: "rgb(0,0,0)",
      "pie-4-background-size": "0%",
      pie4BackgroundSize: "0%",
      "pie-4-background-opacity": "1",
      pie4BackgroundOpacity: "1",
      "pie-5-background-color": "rgb(0,0,0)",
      pie5BackgroundColor: "rgb(0,0,0)",
      "pie-5-background-size": "0%",
      pie5BackgroundSize: "0%",
      "pie-5-background-opacity": "1",
      pie5BackgroundOpacity: "1",
      "pie-6-background-color": "rgb(0,0,0)",
      pie6BackgroundColor: "rgb(0,0,0)",
      "pie-6-background-size": "0%",
      pie6BackgroundSize: "0%",
      "pie-6-background-opacity": "1",
      pie6BackgroundOpacity: "1",
      "pie-7-background-color": "rgb(0,0,0)",
      pie7BackgroundColor: "rgb(0,0,0)",
      "pie-7-background-size": "0%",
      pie7BackgroundSize: "0%",
      "pie-7-background-opacity": "1",
      pie7BackgroundOpacity: "1",
      "pie-8-background-color": "rgb(0,0,0)",
      pie8BackgroundColor: "rgb(0,0,0)",
      "pie-8-background-size": "0%",
      pie8BackgroundSize: "0%",
      "pie-8-background-opacity": "1",
      pie8BackgroundOpacity: "1",
      "pie-9-background-color": "rgb(0,0,0)",
      pie9BackgroundColor: "rgb(0,0,0)",
      "pie-9-background-size": "0%",
      pie9BackgroundSize: "0%",
      "pie-9-background-opacity": "1",
      pie9BackgroundOpacity: "1",
      "pie-10-background-color": "rgb(0,0,0)",
      pie10BackgroundColor: "rgb(0,0,0)",
      "pie-10-background-size": "0%",
      pie10BackgroundSize: "0%",
      "pie-10-background-opacity": "1",
      pie10BackgroundOpacity: "1",
      "pie-11-background-color": "rgb(0,0,0)",
      pie11BackgroundColor: "rgb(0,0,0)",
      "pie-11-background-size": "0%",
      pie11BackgroundSize: "0%",
      "pie-11-background-opacity": "1",
      pie11BackgroundOpacity: "1",
      "pie-12-background-color": "rgb(0,0,0)",
      pie12BackgroundColor: "rgb(0,0,0)",
      "pie-12-background-size": "0%",
      pie12BackgroundSize: "0%",
      "pie-12-background-opacity": "1",
      pie12BackgroundOpacity: "1",
      "pie-13-background-color": "rgb(0,0,0)",
      pie13BackgroundColor: "rgb(0,0,0)",
      "pie-13-background-size": "0%",
      pie13BackgroundSize: "0%",
      "pie-13-background-opacity": "1",
      pie13BackgroundOpacity: "1",
      "pie-14-background-color": "rgb(0,0,0)",
      pie14BackgroundColor: "rgb(0,0,0)",
      "pie-14-background-size": "0%",
      pie14BackgroundSize: "0%",
      "pie-14-background-opacity": "1",
      pie14BackgroundOpacity: "1",
      "pie-15-background-color": "rgb(0,0,0)",
      pie15BackgroundColor: "rgb(0,0,0)",
      "pie-15-background-size": "0%",
      pie15BackgroundSize: "0%",
      "pie-15-background-opacity": "1",
      pie15BackgroundOpacity: "1",
      "pie-16-background-color": "rgb(0,0,0)",
      pie16BackgroundColor: "rgb(0,0,0)",
      "pie-16-background-size": "0%",
      pie16BackgroundSize: "0%",
      "pie-16-background-opacity": "1",
      pie16BackgroundOpacity: "1",
      position: "origin",
      "compound-sizing-wrt-labels": "include",
      compoundSizingWrtLabels: "include",
      "min-width": "0px",
      minWidth: "0px",
      "min-width-bias-left": "0px",
      minWidthBiasLeft: "0px",
      "min-width-bias-right": "0px",
      minWidthBiasRight: "0px",
      "min-height": "0px",
      minHeight: "0px",
      "min-height-bias-top": "0px",
      minHeightBiasTop: "0px",
      "min-height-bias-bottom": "0px",
      minHeightBiasBottom: "0px",
      "line-style": "dotted",
      lineStyle: "dotted",
      "line-color": "rgb(153,153,153)",
      lineColor: "rgb(153,153,153)",
      "line-fill": "solid",
      lineFill: "solid",
      "line-cap": "butt",
      lineCap: "butt",
      "line-opacity": "1",
      lineOpacity: "1",
      "line-dash-pattern": "6 3",
      lineDashPattern: "6 3",
      "line-dash-offset": "0",
      lineDashOffset: "0",
      "line-gradient-stop-colors": "rgb(153,153,153)",
      lineGradientStopColors: "rgb(153,153,153)",
      "line-gradient-stop-positions": "0%",
      lineGradientStopPositions: "0%",
      "curve-style": "bezier",
      curveStyle: "bezier",
      "haystack-radius": "0",
      haystackRadius: "0",
      "source-endpoint": "outside-to-node",
      sourceEndpoint: "outside-to-node",
      "target-endpoint": "outside-to-node",
      targetEndpoint: "outside-to-node",
      "control-point-step-size": "40px",
      controlPointStepSize: "40px",
      "control-point-weights": "0.5",
      controlPointWeights: "0.5",
      "segment-distances": "20px",
      segmentDistances: "20px",
      "segment-weights": "0.5",
      segmentWeights: "0.5",
      "taxi-turn": "50%",
      taxiTurn: "50%",
      "taxi-turn-min-distance": "10px",
      taxiTurnMinDistance: "10px",
      "taxi-direction": "auto",
      taxiDirection: "auto",
      "edge-distances": "intersection",
      edgeDistances: "intersection",
      "arrow-scale": "1",
      arrowScale: "1",
      "loop-direction": "-45deg",
      loopDirection: "-45deg",
      "loop-sweep": "-90deg",
      loopSweep: "-90deg",
      "source-distance-from-node": "0px",
      sourceDistanceFromNode: "0px",
      "target-distance-from-node": "0px",
      targetDistanceFromNode: "0px",
      "source-arrow-shape": "none",
      sourceArrowShape: "none",
      "mid-source-arrow-shape": "none",
      midSourceArrowShape: "none",
      "target-arrow-shape": "vee",
      targetArrowShape: "vee",
      "mid-target-arrow-shape": "none",
      midTargetArrowShape: "none",
      "source-arrow-color": "rgb(153,153,153)",
      sourceArrowColor: "rgb(153,153,153)",
      "mid-source-arrow-color": "rgb(153,153,153)",
      midSourceArrowColor: "rgb(153,153,153)",
      "target-arrow-color": "rgb(153,153,153)",
      targetArrowColor: "rgb(153,153,153)",
      "mid-target-arrow-color": "rgb(153,153,153)",
      midTargetArrowColor: "rgb(153,153,153)",
      "source-arrow-fill": "filled",
      sourceArrowFill: "filled",
      "mid-source-arrow-fill": "filled",
      midSourceArrowFill: "filled",
      "target-arrow-fill": "filled",
      targetArrowFill: "filled",
      "mid-target-arrow-fill": "filled",
      midTargetArrowFill: "filled",
      "source-arrow-width": "1px",
      sourceArrowWidth: "1px",
      "mid-source-arrow-width": "1px",
      midSourceArrowWidth: "1px",
      "target-arrow-width": "1px",
      targetArrowWidth: "1px",
      "mid-target-arrow-width": "1px",
      midTargetArrowWidth: "1px",
      "selection-box-color": "rgb(221,221,221)",
      selectionBoxColor: "rgb(221,221,221)",
      "selection-box-opacity": "0.65",
      selectionBoxOpacity: "0.65",
      "selection-box-border-color": "rgb(170,170,170)",
      selectionBoxBorderColor: "rgb(170,170,170)",
      "selection-box-border-width": "1px",
      selectionBoxBorderWidth: "1px",
      "active-bg-color": "rgb(0,0,0)",
      activeBgColor: "rgb(0,0,0)",
      "active-bg-opacity": "0.15",
      activeBgOpacity: "0.15",
      "active-bg-size": "30px",
      activeBgSize: "30px",
      "outside-texture-bg-color": "rgb(0,0,0)",
      outsideTextureBgColor: "rgb(0,0,0)",
      "outside-texture-bg-opacity": "0.125",
      outsideTextureBgOpacity: "0.125",
      content: "",
      "control-point-weight": "0.5",
      controlPointWeight: "0.5",
      "edge-text-rotation": "none",
      edgeTextRotation: "none",
      "padding-left": "0px",
      paddingLeft: "0px",
      "padding-right": "0px",
      paddingRight: "0px",
      "padding-top": "0px",
      paddingTop: "0px",
      "padding-bottom": "0px",
      paddingBottom: "0px"
    },
    "18063b44-442d-4c82-923c-8c78d09f572d": {
      events: "yes",
      "text-events": "yes",
      textEvents: "yes",
      "transition-property": "none",
      transitionProperty: "none",
      "transition-duration": "0ms",
      transitionDuration: "0ms",
      "transition-delay": "0ms",
      transitionDelay: "0ms",
      "transition-timing-function": "linear",
      transitionTimingFunction: "linear",
      display: "element",
      visibility: "visible",
      opacity: "1",
      "text-opacity": "1",
      textOpacity: "1",
      "min-zoomed-font-size": "0px",
      minZoomedFontSize: "0px",
      "z-compound-depth": "auto",
      zCompoundDepth: "auto",
      "z-index-compare": "manual",
      zIndexCompare: "manual",
      "z-index": "999",
      zIndex: "999",
      "overlay-padding": "10px",
      overlayPadding: "10px",
      "overlay-color": "rgb(0,0,0)",
      overlayColor: "rgb(0,0,0)",
      "overlay-opacity": "0",
      overlayOpacity: "0",
      "overlay-shape": "round-rectangle",
      overlayShape: "round-rectangle",
      "underlay-padding": "10px",
      underlayPadding: "10px",
      "underlay-color": "rgb(0,0,0)",
      underlayColor: "rgb(0,0,0)",
      "underlay-opacity": "0",
      underlayOpacity: "0",
      "underlay-shape": "round-rectangle",
      underlayShape: "round-rectangle",
      ghost: "no",
      "ghost-offset-x": "0px",
      ghostOffsetX: "0px",
      "ghost-offset-y": "0px",
      ghostOffsetY: "0px",
      "ghost-opacity": "0",
      ghostOpacity: "0",
      "text-valign": "top",
      textValign: "top",
      "text-halign": "center",
      textHalign: "center",
      color: "rgb(0,0,0)",
      "text-outline-color": "rgb(255,255,255)",
      textOutlineColor: "rgb(255,255,255)",
      "text-outline-opacity": "1",
      textOutlineOpacity: "1",
      "text-background-color": "rgb(0,0,0)",
      textBackgroundColor: "rgb(0,0,0)",
      "text-background-opacity": "0",
      textBackgroundOpacity: "0",
      "text-background-padding": "0px",
      textBackgroundPadding: "0px",
      "text-border-opacity": "0",
      textBorderOpacity: "0",
      "text-border-color": "rgb(0,0,0)",
      textBorderColor: "rgb(0,0,0)",
      "text-border-width": "0px",
      textBorderWidth: "0px",
      "text-border-style": "solid",
      textBorderStyle: "solid",
      "text-background-shape": "rectangle",
      textBackgroundShape: "rectangle",
      "text-justification": "auto",
      textJustification: "auto",
      "font-family": "Qanelas Soft, sans-serif",
      fontFamily: "Qanelas Soft, sans-serif",
      "font-style": "normal",
      fontStyle: "normal",
      "font-weight": "normal",
      fontWeight: "normal",
      "font-size": "6px",
      fontSize: "6px",
      "text-transform": "none",
      textTransform: "none",
      "text-wrap": "wrap",
      textWrap: "wrap",
      "text-overflow-wrap": "whitespace",
      textOverflowWrap: "whitespace",
      "text-max-width": "9999px",
      textMaxWidth: "9999px",
      "text-outline-width": "1px",
      textOutlineWidth: "1px",
      "line-height": "1",
      lineHeight: "1",
      label: "",
      "text-rotation": "none",
      textRotation: "none",
      "text-margin-x": "0px",
      textMarginX: "0px",
      "text-margin-y": "0px",
      textMarginY: "0px",
      "source-label": "",
      sourceLabel: "",
      "source-text-rotation": "none",
      sourceTextRotation: "none",
      "source-text-margin-x": "0px",
      sourceTextMarginX: "0px",
      "source-text-margin-y": "0px",
      sourceTextMarginY: "0px",
      "source-text-offset": "0px",
      sourceTextOffset: "0px",
      "target-label": "80/TCP",
      targetLabel: "80/TCP",
      "target-text-rotation": "none",
      targetTextRotation: "none",
      "target-text-margin-x": "0px",
      targetTextMarginX: "0px",
      "target-text-margin-y": "-6px",
      targetTextMarginY: "-6px",
      "target-text-offset": "16px",
      targetTextOffset: "16px",
      height: "30px",
      width: "1.5px",
      shape: "ellipse",
      "shape-polygon-points": "-1 -1 1 -1 1 1 -1 1",
      shapePolygonPoints: "-1 -1 1 -1 1 1 -1 1",
      "background-color": "rgb(153,153,153)",
      backgroundColor: "rgb(153,153,153)",
      "background-fill": "solid",
      backgroundFill: "solid",
      "background-opacity": "1",
      backgroundOpacity: "1",
      "background-blacken": "0",
      backgroundBlacken: "0",
      "background-gradient-stop-colors": "rgb(153,153,153)",
      backgroundGradientStopColors: "rgb(153,153,153)",
      "background-gradient-stop-positions": "0%",
      backgroundGradientStopPositions: "0%",
      "background-gradient-direction": "to-bottom",
      backgroundGradientDirection: "to-bottom",
      padding: "0px",
      "padding-relative-to": "width",
      paddingRelativeTo: "width",
      "bounds-expansion": "0px",
      boundsExpansion: "0px",
      "border-color": "rgb(0,0,0)",
      borderColor: "rgb(0,0,0)",
      "border-opacity": "1",
      borderOpacity: "1",
      "border-width": "0px",
      borderWidth: "0px",
      "border-style": "solid",
      borderStyle: "solid",
      "outline-color": "rgb(153,153,153)",
      outlineColor: "rgb(153,153,153)",
      "outline-opacity": "1",
      outlineOpacity: "1",
      "outline-width": "0px",
      outlineWidth: "0px",
      "outline-style": "solid",
      outlineStyle: "solid",
      "outline-offset": "0px",
      outlineOffset: "0px",
      "background-image": "url(none)",
      backgroundImage: "url(none)",
      "background-image-crossorigin": "anonymous",
      backgroundImageCrossorigin: "anonymous",
      "background-image-opacity": "1",
      backgroundImageOpacity: "1",
      "background-image-containment": "inside",
      backgroundImageContainment: "inside",
      "background-image-smoothing": "yes",
      backgroundImageSmoothing: "yes",
      "background-position-x": "50%",
      backgroundPositionX: "50%",
      "background-position-y": "50%",
      backgroundPositionY: "50%",
      "background-width-relative-to": "include-padding",
      backgroundWidthRelativeTo: "include-padding",
      "background-height-relative-to": "include-padding",
      backgroundHeightRelativeTo: "include-padding",
      "background-repeat": "no-repeat",
      backgroundRepeat: "no-repeat",
      "background-fit": "none",
      backgroundFit: "none",
      "background-clip": "node",
      backgroundClip: "node",
      "background-width": "auto",
      backgroundWidth: "auto",
      "background-height": "auto",
      backgroundHeight: "auto",
      "background-offset-x": "0px",
      backgroundOffsetX: "0px",
      "background-offset-y": "0px",
      backgroundOffsetY: "0px",
      "pie-size": "100%",
      pieSize: "100%",
      "pie-1-background-color": "rgb(0,0,0)",
      pie1BackgroundColor: "rgb(0,0,0)",
      "pie-1-background-size": "0%",
      pie1BackgroundSize: "0%",
      "pie-1-background-opacity": "1",
      pie1BackgroundOpacity: "1",
      "pie-2-background-color": "rgb(0,0,0)",
      pie2BackgroundColor: "rgb(0,0,0)",
      "pie-2-background-size": "0%",
      pie2BackgroundSize: "0%",
      "pie-2-background-opacity": "1",
      pie2BackgroundOpacity: "1",
      "pie-3-background-color": "rgb(0,0,0)",
      pie3BackgroundColor: "rgb(0,0,0)",
      "pie-3-background-size": "0%",
      pie3BackgroundSize: "0%",
      "pie-3-background-opacity": "1",
      pie3BackgroundOpacity: "1",
      "pie-4-background-color": "rgb(0,0,0)",
      pie4BackgroundColor: "rgb(0,0,0)",
      "pie-4-background-size": "0%",
      pie4BackgroundSize: "0%",
      "pie-4-background-opacity": "1",
      pie4BackgroundOpacity: "1",
      "pie-5-background-color": "rgb(0,0,0)",
      pie5BackgroundColor: "rgb(0,0,0)",
      "pie-5-background-size": "0%",
      pie5BackgroundSize: "0%",
      "pie-5-background-opacity": "1",
      pie5BackgroundOpacity: "1",
      "pie-6-background-color": "rgb(0,0,0)",
      pie6BackgroundColor: "rgb(0,0,0)",
      "pie-6-background-size": "0%",
      pie6BackgroundSize: "0%",
      "pie-6-background-opacity": "1",
      pie6BackgroundOpacity: "1",
      "pie-7-background-color": "rgb(0,0,0)",
      pie7BackgroundColor: "rgb(0,0,0)",
      "pie-7-background-size": "0%",
      pie7BackgroundSize: "0%",
      "pie-7-background-opacity": "1",
      pie7BackgroundOpacity: "1",
      "pie-8-background-color": "rgb(0,0,0)",
      pie8BackgroundColor: "rgb(0,0,0)",
      "pie-8-background-size": "0%",
      pie8BackgroundSize: "0%",
      "pie-8-background-opacity": "1",
      pie8BackgroundOpacity: "1",
      "pie-9-background-color": "rgb(0,0,0)",
      pie9BackgroundColor: "rgb(0,0,0)",
      "pie-9-background-size": "0%",
      pie9BackgroundSize: "0%",
      "pie-9-background-opacity": "1",
      pie9BackgroundOpacity: "1",
      "pie-10-background-color": "rgb(0,0,0)",
      pie10BackgroundColor: "rgb(0,0,0)",
      "pie-10-background-size": "0%",
      pie10BackgroundSize: "0%",
      "pie-10-background-opacity": "1",
      pie10BackgroundOpacity: "1",
      "pie-11-background-color": "rgb(0,0,0)",
      pie11BackgroundColor: "rgb(0,0,0)",
      "pie-11-background-size": "0%",
      pie11BackgroundSize: "0%",
      "pie-11-background-opacity": "1",
      pie11BackgroundOpacity: "1",
      "pie-12-background-color": "rgb(0,0,0)",
      pie12BackgroundColor: "rgb(0,0,0)",
      "pie-12-background-size": "0%",
      pie12BackgroundSize: "0%",
      "pie-12-background-opacity": "1",
      pie12BackgroundOpacity: "1",
      "pie-13-background-color": "rgb(0,0,0)",
      pie13BackgroundColor: "rgb(0,0,0)",
      "pie-13-background-size": "0%",
      pie13BackgroundSize: "0%",
      "pie-13-background-opacity": "1",
      pie13BackgroundOpacity: "1",
      "pie-14-background-color": "rgb(0,0,0)",
      pie14BackgroundColor: "rgb(0,0,0)",
      "pie-14-background-size": "0%",
      pie14BackgroundSize: "0%",
      "pie-14-background-opacity": "1",
      pie14BackgroundOpacity: "1",
      "pie-15-background-color": "rgb(0,0,0)",
      pie15BackgroundColor: "rgb(0,0,0)",
      "pie-15-background-size": "0%",
      pie15BackgroundSize: "0%",
      "pie-15-background-opacity": "1",
      pie15BackgroundOpacity: "1",
      "pie-16-background-color": "rgb(0,0,0)",
      pie16BackgroundColor: "rgb(0,0,0)",
      "pie-16-background-size": "0%",
      pie16BackgroundSize: "0%",
      "pie-16-background-opacity": "1",
      pie16BackgroundOpacity: "1",
      position: "origin",
      "compound-sizing-wrt-labels": "include",
      compoundSizingWrtLabels: "include",
      "min-width": "0px",
      minWidth: "0px",
      "min-width-bias-left": "0px",
      minWidthBiasLeft: "0px",
      "min-width-bias-right": "0px",
      minWidthBiasRight: "0px",
      "min-height": "0px",
      minHeight: "0px",
      "min-height-bias-top": "0px",
      minHeightBiasTop: "0px",
      "min-height-bias-bottom": "0px",
      minHeightBiasBottom: "0px",
      "line-style": "dotted",
      lineStyle: "dotted",
      "line-color": "rgb(153,153,153)",
      lineColor: "rgb(153,153,153)",
      "line-fill": "solid",
      lineFill: "solid",
      "line-cap": "butt",
      lineCap: "butt",
      "line-opacity": "1",
      lineOpacity: "1",
      "line-dash-pattern": "6 3",
      lineDashPattern: "6 3",
      "line-dash-offset": "0",
      lineDashOffset: "0",
      "line-gradient-stop-colors": "rgb(153,153,153)",
      lineGradientStopColors: "rgb(153,153,153)",
      "line-gradient-stop-positions": "0%",
      lineGradientStopPositions: "0%",
      "curve-style": "bezier",
      curveStyle: "bezier",
      "haystack-radius": "0",
      haystackRadius: "0",
      "source-endpoint": "outside-to-node",
      sourceEndpoint: "outside-to-node",
      "target-endpoint": "outside-to-node",
      targetEndpoint: "outside-to-node",
      "control-point-step-size": "40px",
      controlPointStepSize: "40px",
      "control-point-weights": "0.5",
      controlPointWeights: "0.5",
      "segment-distances": "20px",
      segmentDistances: "20px",
      "segment-weights": "0.5",
      segmentWeights: "0.5",
      "taxi-turn": "50%",
      taxiTurn: "50%",
      "taxi-turn-min-distance": "10px",
      taxiTurnMinDistance: "10px",
      "taxi-direction": "auto",
      taxiDirection: "auto",
      "edge-distances": "intersection",
      edgeDistances: "intersection",
      "arrow-scale": "1",
      arrowScale: "1",
      "loop-direction": "-45deg",
      loopDirection: "-45deg",
      "loop-sweep": "-90deg",
      loopSweep: "-90deg",
      "source-distance-from-node": "0px",
      sourceDistanceFromNode: "0px",
      "target-distance-from-node": "0px",
      targetDistanceFromNode: "0px",
      "source-arrow-shape": "none",
      sourceArrowShape: "none",
      "mid-source-arrow-shape": "none",
      midSourceArrowShape: "none",
      "target-arrow-shape": "vee",
      targetArrowShape: "vee",
      "mid-target-arrow-shape": "none",
      midTargetArrowShape: "none",
      "source-arrow-color": "rgb(153,153,153)",
      sourceArrowColor: "rgb(153,153,153)",
      "mid-source-arrow-color": "rgb(153,153,153)",
      midSourceArrowColor: "rgb(153,153,153)",
      "target-arrow-color": "rgb(153,153,153)",
      targetArrowColor: "rgb(153,153,153)",
      "mid-target-arrow-color": "rgb(153,153,153)",
      midTargetArrowColor: "rgb(153,153,153)",
      "source-arrow-fill": "filled",
      sourceArrowFill: "filled",
      "mid-source-arrow-fill": "filled",
      midSourceArrowFill: "filled",
      "target-arrow-fill": "filled",
      targetArrowFill: "filled",
      "mid-target-arrow-fill": "filled",
      midTargetArrowFill: "filled",
      "source-arrow-width": "1px",
      sourceArrowWidth: "1px",
      "mid-source-arrow-width": "1px",
      midSourceArrowWidth: "1px",
      "target-arrow-width": "1px",
      targetArrowWidth: "1px",
      "mid-target-arrow-width": "1px",
      midTargetArrowWidth: "1px",
      "selection-box-color": "rgb(221,221,221)",
      selectionBoxColor: "rgb(221,221,221)",
      "selection-box-opacity": "0.65",
      selectionBoxOpacity: "0.65",
      "selection-box-border-color": "rgb(170,170,170)",
      selectionBoxBorderColor: "rgb(170,170,170)",
      "selection-box-border-width": "1px",
      selectionBoxBorderWidth: "1px",
      "active-bg-color": "rgb(0,0,0)",
      activeBgColor: "rgb(0,0,0)",
      "active-bg-opacity": "0.15",
      activeBgOpacity: "0.15",
      "active-bg-size": "30px",
      activeBgSize: "30px",
      "outside-texture-bg-color": "rgb(0,0,0)",
      outsideTextureBgColor: "rgb(0,0,0)",
      "outside-texture-bg-opacity": "0.125",
      outsideTextureBgOpacity: "0.125",
      content: "",
      "control-point-weight": "0.5",
      controlPointWeight: "0.5",
      "edge-text-rotation": "none",
      edgeTextRotation: "none",
      "padding-left": "0px",
      paddingLeft: "0px",
      "padding-right": "0px",
      paddingRight: "0px",
      "padding-top": "0px",
      paddingTop: "0px",
      "padding-bottom": "0px",
      paddingBottom: "0px"
    },
    "ffcadef7-b7f8-4fad-8f07-ebf6230c6978": {
      events: "yes",
      "text-events": "yes",
      textEvents: "yes",
      "transition-property": "none",
      transitionProperty: "none",
      "transition-duration": "0ms",
      transitionDuration: "0ms",
      "transition-delay": "0ms",
      transitionDelay: "0ms",
      "transition-timing-function": "linear",
      transitionTimingFunction: "linear",
      display: "element",
      visibility: "visible",
      opacity: "1",
      "text-opacity": "1",
      textOpacity: "1",
      "min-zoomed-font-size": "0px",
      minZoomedFontSize: "0px",
      "z-compound-depth": "auto",
      zCompoundDepth: "auto",
      "z-index-compare": "manual",
      zIndexCompare: "manual",
      "z-index": "999",
      zIndex: "999",
      "overlay-padding": "10px",
      overlayPadding: "10px",
      "overlay-color": "rgb(0,0,0)",
      overlayColor: "rgb(0,0,0)",
      "overlay-opacity": "0",
      overlayOpacity: "0",
      "overlay-shape": "round-rectangle",
      overlayShape: "round-rectangle",
      "underlay-padding": "10px",
      underlayPadding: "10px",
      "underlay-color": "rgb(0,0,0)",
      underlayColor: "rgb(0,0,0)",
      "underlay-opacity": "0",
      underlayOpacity: "0",
      "underlay-shape": "round-rectangle",
      underlayShape: "round-rectangle",
      ghost: "no",
      "ghost-offset-x": "0px",
      ghostOffsetX: "0px",
      "ghost-offset-y": "0px",
      ghostOffsetY: "0px",
      "ghost-opacity": "0",
      ghostOpacity: "0",
      "text-valign": "top",
      textValign: "top",
      "text-halign": "center",
      textHalign: "center",
      color: "rgb(0,0,0)",
      "text-outline-color": "rgb(255,255,255)",
      textOutlineColor: "rgb(255,255,255)",
      "text-outline-opacity": "1",
      textOutlineOpacity: "1",
      "text-background-color": "rgb(0,0,0)",
      textBackgroundColor: "rgb(0,0,0)",
      "text-background-opacity": "0",
      textBackgroundOpacity: "0",
      "text-background-padding": "0px",
      textBackgroundPadding: "0px",
      "text-border-opacity": "0",
      textBorderOpacity: "0",
      "text-border-color": "rgb(0,0,0)",
      textBorderColor: "rgb(0,0,0)",
      "text-border-width": "0px",
      textBorderWidth: "0px",
      "text-border-style": "solid",
      textBorderStyle: "solid",
      "text-background-shape": "rectangle",
      textBackgroundShape: "rectangle",
      "text-justification": "auto",
      textJustification: "auto",
      "font-family": "Qanelas Soft, sans-serif",
      fontFamily: "Qanelas Soft, sans-serif",
      "font-style": "normal",
      fontStyle: "normal",
      "font-weight": "normal",
      fontWeight: "normal",
      "font-size": "6px",
      fontSize: "6px",
      "text-transform": "none",
      textTransform: "none",
      "text-wrap": "wrap",
      textWrap: "wrap",
      "text-overflow-wrap": "whitespace",
      textOverflowWrap: "whitespace",
      "text-max-width": "9999px",
      textMaxWidth: "9999px",
      "text-outline-width": "1px",
      textOutlineWidth: "1px",
      "line-height": "1",
      lineHeight: "1",
      label: "",
      "text-rotation": "none",
      textRotation: "none",
      "text-margin-x": "0px",
      textMarginX: "0px",
      "text-margin-y": "0px",
      textMarginY: "0px",
      "source-label": "",
      sourceLabel: "",
      "source-text-rotation": "none",
      sourceTextRotation: "none",
      "source-text-margin-x": "0px",
      sourceTextMarginX: "0px",
      "source-text-margin-y": "0px",
      sourceTextMarginY: "0px",
      "source-text-offset": "0px",
      sourceTextOffset: "0px",
      "target-label": "80/TCP",
      targetLabel: "80/TCP",
      "target-text-rotation": "none",
      targetTextRotation: "none",
      "target-text-margin-x": "0px",
      targetTextMarginX: "0px",
      "target-text-margin-y": "-6px",
      targetTextMarginY: "-6px",
      "target-text-offset": "16px",
      targetTextOffset: "16px",
      height: "30px",
      width: "1.5px",
      shape: "ellipse",
      "shape-polygon-points": "-1 -1 1 -1 1 1 -1 1",
      shapePolygonPoints: "-1 -1 1 -1 1 1 -1 1",
      "background-color": "rgb(153,153,153)",
      backgroundColor: "rgb(153,153,153)",
      "background-fill": "solid",
      backgroundFill: "solid",
      "background-opacity": "1",
      backgroundOpacity: "1",
      "background-blacken": "0",
      backgroundBlacken: "0",
      "background-gradient-stop-colors": "rgb(153,153,153)",
      backgroundGradientStopColors: "rgb(153,153,153)",
      "background-gradient-stop-positions": "0%",
      backgroundGradientStopPositions: "0%",
      "background-gradient-direction": "to-bottom",
      backgroundGradientDirection: "to-bottom",
      padding: "0px",
      "padding-relative-to": "width",
      paddingRelativeTo: "width",
      "bounds-expansion": "0px",
      boundsExpansion: "0px",
      "border-color": "rgb(0,0,0)",
      borderColor: "rgb(0,0,0)",
      "border-opacity": "1",
      borderOpacity: "1",
      "border-width": "0px",
      borderWidth: "0px",
      "border-style": "solid",
      borderStyle: "solid",
      "outline-color": "rgb(153,153,153)",
      outlineColor: "rgb(153,153,153)",
      "outline-opacity": "1",
      outlineOpacity: "1",
      "outline-width": "0px",
      outlineWidth: "0px",
      "outline-style": "solid",
      outlineStyle: "solid",
      "outline-offset": "0px",
      outlineOffset: "0px",
      "background-image": "url(none)",
      backgroundImage: "url(none)",
      "background-image-crossorigin": "anonymous",
      backgroundImageCrossorigin: "anonymous",
      "background-image-opacity": "1",
      backgroundImageOpacity: "1",
      "background-image-containment": "inside",
      backgroundImageContainment: "inside",
      "background-image-smoothing": "yes",
      backgroundImageSmoothing: "yes",
      "background-position-x": "50%",
      backgroundPositionX: "50%",
      "background-position-y": "50%",
      backgroundPositionY: "50%",
      "background-width-relative-to": "include-padding",
      backgroundWidthRelativeTo: "include-padding",
      "background-height-relative-to": "include-padding",
      backgroundHeightRelativeTo: "include-padding",
      "background-repeat": "no-repeat",
      backgroundRepeat: "no-repeat",
      "background-fit": "none",
      backgroundFit: "none",
      "background-clip": "node",
      backgroundClip: "node",
      "background-width": "auto",
      backgroundWidth: "auto",
      "background-height": "auto",
      backgroundHeight: "auto",
      "background-offset-x": "0px",
      backgroundOffsetX: "0px",
      "background-offset-y": "0px",
      backgroundOffsetY: "0px",
      "pie-size": "100%",
      pieSize: "100%",
      "pie-1-background-color": "rgb(0,0,0)",
      pie1BackgroundColor: "rgb(0,0,0)",
      "pie-1-background-size": "0%",
      pie1BackgroundSize: "0%",
      "pie-1-background-opacity": "1",
      pie1BackgroundOpacity: "1",
      "pie-2-background-color": "rgb(0,0,0)",
      pie2BackgroundColor: "rgb(0,0,0)",
      "pie-2-background-size": "0%",
      pie2BackgroundSize: "0%",
      "pie-2-background-opacity": "1",
      pie2BackgroundOpacity: "1",
      "pie-3-background-color": "rgb(0,0,0)",
      pie3BackgroundColor: "rgb(0,0,0)",
      "pie-3-background-size": "0%",
      pie3BackgroundSize: "0%",
      "pie-3-background-opacity": "1",
      pie3BackgroundOpacity: "1",
      "pie-4-background-color": "rgb(0,0,0)",
      pie4BackgroundColor: "rgb(0,0,0)",
      "pie-4-background-size": "0%",
      pie4BackgroundSize: "0%",
      "pie-4-background-opacity": "1",
      pie4BackgroundOpacity: "1",
      "pie-5-background-color": "rgb(0,0,0)",
      pie5BackgroundColor: "rgb(0,0,0)",
      "pie-5-background-size": "0%",
      pie5BackgroundSize: "0%",
      "pie-5-background-opacity": "1",
      pie5BackgroundOpacity: "1",
      "pie-6-background-color": "rgb(0,0,0)",
      pie6BackgroundColor: "rgb(0,0,0)",
      "pie-6-background-size": "0%",
      pie6BackgroundSize: "0%",
      "pie-6-background-opacity": "1",
      pie6BackgroundOpacity: "1",
      "pie-7-background-color": "rgb(0,0,0)",
      pie7BackgroundColor: "rgb(0,0,0)",
      "pie-7-background-size": "0%",
      pie7BackgroundSize: "0%",
      "pie-7-background-opacity": "1",
      pie7BackgroundOpacity: "1",
      "pie-8-background-color": "rgb(0,0,0)",
      pie8BackgroundColor: "rgb(0,0,0)",
      "pie-8-background-size": "0%",
      pie8BackgroundSize: "0%",
      "pie-8-background-opacity": "1",
      pie8BackgroundOpacity: "1",
      "pie-9-background-color": "rgb(0,0,0)",
      pie9BackgroundColor: "rgb(0,0,0)",
      "pie-9-background-size": "0%",
      pie9BackgroundSize: "0%",
      "pie-9-background-opacity": "1",
      pie9BackgroundOpacity: "1",
      "pie-10-background-color": "rgb(0,0,0)",
      pie10BackgroundColor: "rgb(0,0,0)",
      "pie-10-background-size": "0%",
      pie10BackgroundSize: "0%",
      "pie-10-background-opacity": "1",
      pie10BackgroundOpacity: "1",
      "pie-11-background-color": "rgb(0,0,0)",
      pie11BackgroundColor: "rgb(0,0,0)",
      "pie-11-background-size": "0%",
      pie11BackgroundSize: "0%",
      "pie-11-background-opacity": "1",
      pie11BackgroundOpacity: "1",
      "pie-12-background-color": "rgb(0,0,0)",
      pie12BackgroundColor: "rgb(0,0,0)",
      "pie-12-background-size": "0%",
      pie12BackgroundSize: "0%",
      "pie-12-background-opacity": "1",
      pie12BackgroundOpacity: "1",
      "pie-13-background-color": "rgb(0,0,0)",
      pie13BackgroundColor: "rgb(0,0,0)",
      "pie-13-background-size": "0%",
      pie13BackgroundSize: "0%",
      "pie-13-background-opacity": "1",
      pie13BackgroundOpacity: "1",
      "pie-14-background-color": "rgb(0,0,0)",
      pie14BackgroundColor: "rgb(0,0,0)",
      "pie-14-background-size": "0%",
      pie14BackgroundSize: "0%",
      "pie-14-background-opacity": "1",
      pie14BackgroundOpacity: "1",
      "pie-15-background-color": "rgb(0,0,0)",
      pie15BackgroundColor: "rgb(0,0,0)",
      "pie-15-background-size": "0%",
      pie15BackgroundSize: "0%",
      "pie-15-background-opacity": "1",
      pie15BackgroundOpacity: "1",
      "pie-16-background-color": "rgb(0,0,0)",
      pie16BackgroundColor: "rgb(0,0,0)",
      "pie-16-background-size": "0%",
      pie16BackgroundSize: "0%",
      "pie-16-background-opacity": "1",
      pie16BackgroundOpacity: "1",
      position: "origin",
      "compound-sizing-wrt-labels": "include",
      compoundSizingWrtLabels: "include",
      "min-width": "0px",
      minWidth: "0px",
      "min-width-bias-left": "0px",
      minWidthBiasLeft: "0px",
      "min-width-bias-right": "0px",
      minWidthBiasRight: "0px",
      "min-height": "0px",
      minHeight: "0px",
      "min-height-bias-top": "0px",
      minHeightBiasTop: "0px",
      "min-height-bias-bottom": "0px",
      minHeightBiasBottom: "0px",
      "line-style": "dotted",
      lineStyle: "dotted",
      "line-color": "rgb(153,153,153)",
      lineColor: "rgb(153,153,153)",
      "line-fill": "solid",
      lineFill: "solid",
      "line-cap": "butt",
      lineCap: "butt",
      "line-opacity": "1",
      lineOpacity: "1",
      "line-dash-pattern": "6 3",
      lineDashPattern: "6 3",
      "line-dash-offset": "0",
      lineDashOffset: "0",
      "line-gradient-stop-colors": "rgb(153,153,153)",
      lineGradientStopColors: "rgb(153,153,153)",
      "line-gradient-stop-positions": "0%",
      lineGradientStopPositions: "0%",
      "curve-style": "bezier",
      curveStyle: "bezier",
      "haystack-radius": "0",
      haystackRadius: "0",
      "source-endpoint": "outside-to-node",
      sourceEndpoint: "outside-to-node",
      "target-endpoint": "outside-to-node",
      targetEndpoint: "outside-to-node",
      "control-point-step-size": "40px",
      controlPointStepSize: "40px",
      "control-point-weights": "0.5",
      controlPointWeights: "0.5",
      "segment-distances": "20px",
      segmentDistances: "20px",
      "segment-weights": "0.5",
      segmentWeights: "0.5",
      "taxi-turn": "50%",
      taxiTurn: "50%",
      "taxi-turn-min-distance": "10px",
      taxiTurnMinDistance: "10px",
      "taxi-direction": "auto",
      taxiDirection: "auto",
      "edge-distances": "intersection",
      edgeDistances: "intersection",
      "arrow-scale": "1",
      arrowScale: "1",
      "loop-direction": "-45deg",
      loopDirection: "-45deg",
      "loop-sweep": "-90deg",
      loopSweep: "-90deg",
      "source-distance-from-node": "0px",
      sourceDistanceFromNode: "0px",
      "target-distance-from-node": "0px",
      targetDistanceFromNode: "0px",
      "source-arrow-shape": "none",
      sourceArrowShape: "none",
      "mid-source-arrow-shape": "none",
      midSourceArrowShape: "none",
      "target-arrow-shape": "vee",
      targetArrowShape: "vee",
      "mid-target-arrow-shape": "none",
      midTargetArrowShape: "none",
      "source-arrow-color": "rgb(153,153,153)",
      sourceArrowColor: "rgb(153,153,153)",
      "mid-source-arrow-color": "rgb(153,153,153)",
      midSourceArrowColor: "rgb(153,153,153)",
      "target-arrow-color": "rgb(153,153,153)",
      targetArrowColor: "rgb(153,153,153)",
      "mid-target-arrow-color": "rgb(153,153,153)",
      midTargetArrowColor: "rgb(153,153,153)",
      "source-arrow-fill": "filled",
      sourceArrowFill: "filled",
      "mid-source-arrow-fill": "filled",
      midSourceArrowFill: "filled",
      "target-arrow-fill": "filled",
      targetArrowFill: "filled",
      "mid-target-arrow-fill": "filled",
      midTargetArrowFill: "filled",
      "source-arrow-width": "1px",
      sourceArrowWidth: "1px",
      "mid-source-arrow-width": "1px",
      midSourceArrowWidth: "1px",
      "target-arrow-width": "1px",
      targetArrowWidth: "1px",
      "mid-target-arrow-width": "1px",
      midTargetArrowWidth: "1px",
      "selection-box-color": "rgb(221,221,221)",
      selectionBoxColor: "rgb(221,221,221)",
      "selection-box-opacity": "0.65",
      selectionBoxOpacity: "0.65",
      "selection-box-border-color": "rgb(170,170,170)",
      selectionBoxBorderColor: "rgb(170,170,170)",
      "selection-box-border-width": "1px",
      selectionBoxBorderWidth: "1px",
      "active-bg-color": "rgb(0,0,0)",
      activeBgColor: "rgb(0,0,0)",
      "active-bg-opacity": "0.15",
      activeBgOpacity: "0.15",
      "active-bg-size": "30px",
      activeBgSize: "30px",
      "outside-texture-bg-color": "rgb(0,0,0)",
      outsideTextureBgColor: "rgb(0,0,0)",
      "outside-texture-bg-opacity": "0.125",
      outsideTextureBgOpacity: "0.125",
      content: "",
      "control-point-weight": "0.5",
      controlPointWeight: "0.5",
      "edge-text-rotation": "none",
      edgeTextRotation: "none",
      "padding-left": "0px",
      paddingLeft: "0px",
      "padding-right": "0px",
      paddingRight: "0px",
      "padding-top": "0px",
      paddingTop: "0px",
      "padding-bottom": "0px",
      paddingBottom: "0px"
    },
    "03351f05-31d2-4eb6-b374-4645b6889ada": {
      events: "yes",
      "text-events": "no",
      textEvents: "no",
      "transition-property": "none",
      transitionProperty: "none",
      "transition-duration": "0ms",
      transitionDuration: "0ms",
      "transition-delay": "0ms",
      transitionDelay: "0ms",
      "transition-timing-function": "linear",
      transitionTimingFunction: "linear",
      display: "element",
      visibility: "visible",
      opacity: "1",
      "text-opacity": "1",
      textOpacity: "1",
      "min-zoomed-font-size": "12px",
      minZoomedFontSize: "12px",
      "z-compound-depth": "auto",
      zCompoundDepth: "auto",
      "z-index-compare": "manual",
      zIndexCompare: "manual",
      "z-index": "4",
      zIndex: "4",
      "overlay-padding": "10px",
      overlayPadding: "10px",
      "overlay-color": "rgb(0,0,0)",
      overlayColor: "rgb(0,0,0)",
      "overlay-opacity": "0",
      overlayOpacity: "0",
      "overlay-shape": "round-rectangle",
      overlayShape: "round-rectangle",
      "underlay-padding": "10px",
      underlayPadding: "10px",
      "underlay-color": "rgb(0,0,0)",
      underlayColor: "rgb(0,0,0)",
      "underlay-opacity": "0",
      underlayOpacity: "0",
      "underlay-shape": "round-rectangle",
      underlayShape: "round-rectangle",
      ghost: "no",
      "ghost-offset-x": "0px",
      ghostOffsetX: "0px",
      "ghost-offset-y": "0px",
      ghostOffsetY: "0px",
      "ghost-opacity": "0",
      ghostOpacity: "0",
      "text-valign": "bottom",
      textValign: "bottom",
      "text-halign": "center",
      textHalign: "center",
      color: "rgb(0,0,0)",
      "text-outline-color": "rgb(0,0,0)",
      textOutlineColor: "rgb(0,0,0)",
      "text-outline-opacity": "1",
      textOutlineOpacity: "1",
      "text-background-color": "rgb(210,212,210)",
      textBackgroundColor: "rgb(210,212,210)",
      "text-background-opacity": "0.7",
      textBackgroundOpacity: "0.7",
      "text-background-padding": "2px",
      textBackgroundPadding: "2px",
      "text-border-opacity": "0",
      textBorderOpacity: "0",
      "text-border-color": "rgb(0,0,0)",
      textBorderColor: "rgb(0,0,0)",
      "text-border-width": "0px",
      textBorderWidth: "0px",
      "text-border-style": "solid",
      textBorderStyle: "solid",
      "text-background-shape": "round-rectangle",
      textBackgroundShape: "round-rectangle",
      "text-justification": "auto",
      textJustification: "auto",
      "font-family": "Qanelas Soft, sans-serif",
      fontFamily: "Qanelas Soft, sans-serif",
      "font-style": "normal",
      fontStyle: "normal",
      "font-weight": "300",
      fontWeight: "300",
      "font-size": "8px",
      fontSize: "8px",
      "text-transform": "none",
      textTransform: "none",
      "text-wrap": "ellipsis",
      textWrap: "ellipsis",
      "text-overflow-wrap": "whitespace",
      textOverflowWrap: "whitespace",
      "text-max-width": "80px",
      textMaxWidth: "80px",
      "text-outline-width": "0px",
      textOutlineWidth: "0px",
      "line-height": "1",
      lineHeight: "1",
      label: "agent",
      "text-rotation": "none",
      textRotation: "none",
      "text-margin-x": "0px",
      textMarginX: "0px",
      "text-margin-y": "7px",
      textMarginY: "7px",
      "source-label": "",
      sourceLabel: "",
      "source-text-rotation": "none",
      sourceTextRotation: "none",
      "source-text-margin-x": "0px",
      sourceTextMarginX: "0px",
      "source-text-margin-y": "0px",
      sourceTextMarginY: "0px",
      "source-text-offset": "0px",
      sourceTextOffset: "0px",
      "target-label": "",
      targetLabel: "",
      "target-text-rotation": "none",
      targetTextRotation: "none",
      "target-text-margin-x": "0px",
      targetTextMarginX: "0px",
      "target-text-margin-y": "0px",
      targetTextMarginY: "0px",
      "target-text-offset": "0px",
      targetTextOffset: "0px",
      height: "20px",
      width: "20px",
      shape: "ellipse",
      "shape-polygon-points": "-1 -1 1 -1 1 1 -1 1",
      shapePolygonPoints: "-1 -1 1 -1 1 1 -1 1",
      "background-color": "rgb(50,108,229)",
      backgroundColor: "rgb(50,108,229)",
      "background-fill": "solid",
      backgroundFill: "solid",
      "background-opacity": "1",
      backgroundOpacity: "1",
      "background-blacken": "0",
      backgroundBlacken: "0",
      "background-gradient-stop-colors": "rgb(153,153,153)",
      backgroundGradientStopColors: "rgb(153,153,153)",
      "background-gradient-stop-positions": "0%",
      backgroundGradientStopPositions: "0%",
      "background-gradient-direction": "to-bottom",
      backgroundGradientDirection: "to-bottom",
      padding: "6px",
      "padding-relative-to": "width",
      paddingRelativeTo: "width",
      "bounds-expansion": "0px",
      boundsExpansion: "0px",
      "border-color": "rgb(60,129,255)",
      borderColor: "rgb(60,129,255)",
      "border-opacity": "1",
      borderOpacity: "1",
      "border-width": "0px",
      borderWidth: "0px",
      "border-style": "solid",
      borderStyle: "solid",
      "outline-color": "rgb(153,153,153)",
      outlineColor: "rgb(153,153,153)",
      "outline-opacity": "1",
      outlineOpacity: "1",
      "outline-width": "0px",
      outlineWidth: "0px",
      "outline-style": "solid",
      outlineStyle: "solid",
      "outline-offset": "0px",
      outlineOffset: "0px",
      "background-image":
        "url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTAiIGhlaWdodD0iNjYiIHZpZXdCb3g9IjAgMCA5MCA2NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNNC4wODk5OCAwLjVDMS44MzExNSAwLjUgMCAyLjMzMTE1IDAgNC41ODk5OFY2MS40MUMwIDYzLjY2ODkgMS44MzExNSA2NS41IDQuMDg5OTggNjUuNUg4NS45MUM4OC4xNjg4IDY1LjUgOTAgNjMuNjY4OSA5MCA2MS40MVY0LjU4OTk4QzkwIDIuMzMxMTUgODguMTY4OSAwLjUgODUuOTEgMC41SDQuMDg5OThaTTE4Ljc3MyA0Ny45MjE0QzE4Ljc3MyA0OS4xNDc4IDE3Ljg1MjggNTAuMTY5OCAxNi43NDg1IDUwLjE2OThDMTUuNjQ0MiA1MC4xNjk4IDE0LjcyMzkgNDkuMTQ3OCAxNC43MjM5IDQ3LjkyMTRWMTguMjgzQzE0LjcyMzkgMTcuMDU2NiAxNS42NDQyIDE2LjAzNDYgMTYuNzQ4NSAxNi4wMzQ2QzE3Ljg1MjggMTYuMDM0NiAxOC43NzMgMTcuMDU2NiAxOC43NzMgMTguMjgzVjQ3LjkyMTRaTTM3LjczMDEgNDcuOTIxNEMzNy43MzAxIDQ5LjE0NzggMzYuODA5OCA1MC4xNjk4IDM1LjcwNTUgNTAuMTY5OEMzNC42MDEyIDUwLjE2OTggMzMuNjgxIDQ5LjE0NzggMzMuNjgxIDQ3LjkyMTRWMTguMjgzQzMzLjY4MSAxNy4wNTY2IDM0LjYwMTIgMTYuMDM0NiAzNS43MDU1IDE2LjAzNDZDMzYuODA5OCAxNi4wMzQ2IDM3LjczMDEgMTcuMDU2NiAzNy43MzAxIDE4LjI4M1Y0Ny45MjE0Wk01Ni41MDMxIDQ3LjkyMTRDNTYuNTAzMSA0OS4xNDc4IDU1LjU4MjggNTAuMTY5OCA1NC40Nzg1IDUwLjE2OThDNTMuMzc0MiA1MC4xNjk4IDUyLjQ1NCA0OS4xNDc4IDUyLjQ1NCA0Ny45MjE0VjE4LjI4M0M1Mi40NTQgMTcuMDU2NiA1My4zNzQyIDE2LjAzNDYgNTQuNDc4NSAxNi4wMzQ2QzU1LjU4MjggMTYuMDM0NiA1Ni41MDMxIDE3LjA1NjYgNTYuNTAzMSAxOC4yODNWNDcuOTIxNFpNNzUuMjc2MSA0Ny45MjE0Qzc1LjI3NjEgNDkuMTQ3OCA3NC4zNTU4IDUwLjE2OTggNzMuMjUxNSA1MC4xNjk4QzcyLjE0NzIgNTAuMTY5OCA3MS4yMjcgNDkuMTQ3OCA3MS4yMjcgNDcuOTIxNFYxOC4yODNDNzEuMjI3IDE3LjA1NjYgNzIuMTQ3MiAxNi4wMzQ2IDczLjI1MTUgMTYuMDM0NkM3NC4zNTU4IDE2LjAzNDYgNzUuMjc2MSAxNy4wNTY2IDc1LjI3NjEgMTguMjgzVjQ3LjkyMTRaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4=)",
      backgroundImage:
        "url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTAiIGhlaWdodD0iNjYiIHZpZXdCb3g9IjAgMCA5MCA2NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNNC4wODk5OCAwLjVDMS44MzExNSAwLjUgMCAyLjMzMTE1IDAgNC41ODk5OFY2MS40MUMwIDYzLjY2ODkgMS44MzExNSA2NS41IDQuMDg5OTggNjUuNUg4NS45MUM4OC4xNjg4IDY1LjUgOTAgNjMuNjY4OSA5MCA2MS40MVY0LjU4OTk4QzkwIDIuMzMxMTUgODguMTY4OSAwLjUgODUuOTEgMC41SDQuMDg5OThaTTE4Ljc3MyA0Ny45MjE0QzE4Ljc3MyA0OS4xNDc4IDE3Ljg1MjggNTAuMTY5OCAxNi43NDg1IDUwLjE2OThDMTUuNjQ0MiA1MC4xNjk4IDE0LjcyMzkgNDkuMTQ3OCAxNC43MjM5IDQ3LjkyMTRWMTguMjgzQzE0LjcyMzkgMTcuMDU2NiAxNS42NDQyIDE2LjAzNDYgMTYuNzQ4NSAxNi4wMzQ2QzE3Ljg1MjggMTYuMDM0NiAxOC43NzMgMTcuMDU2NiAxOC43NzMgMTguMjgzVjQ3LjkyMTRaTTM3LjczMDEgNDcuOTIxNEMzNy43MzAxIDQ5LjE0NzggMzYuODA5OCA1MC4xNjk4IDM1LjcwNTUgNTAuMTY5OEMzNC42MDEyIDUwLjE2OTggMzMuNjgxIDQ5LjE0NzggMzMuNjgxIDQ3LjkyMTRWMTguMjgzQzMzLjY4MSAxNy4wNTY2IDM0LjYwMTIgMTYuMDM0NiAzNS43MDU1IDE2LjAzNDZDMzYuODA5OCAxNi4wMzQ2IDM3LjczMDEgMTcuMDU2NiAzNy43MzAxIDE4LjI4M1Y0Ny45MjE0Wk01Ni41MDMxIDQ3LjkyMTRDNTYuNTAzMSA0OS4xNDc4IDU1LjU4MjggNTAuMTY5OCA1NC40Nzg1IDUwLjE2OThDNTMuMzc0MiA1MC4xNjk4IDUyLjQ1NCA0OS4xNDc4IDUyLjQ1NCA0Ny45MjE0VjE4LjI4M0M1Mi40NTQgMTcuMDU2NiA1My4zNzQyIDE2LjAzNDYgNTQuNDc4NSAxNi4wMzQ2QzU1LjU4MjggMTYuMDM0NiA1Ni41MDMxIDE3LjA1NjYgNTYuNTAzMSAxOC4yODNWNDcuOTIxNFpNNzUuMjc2MSA0Ny45MjE0Qzc1LjI3NjEgNDkuMTQ3OCA3NC4zNTU4IDUwLjE2OTggNzMuMjUxNSA1MC4xNjk4QzcyLjE0NzIgNTAuMTY5OCA3MS4yMjcgNDkuMTQ3OCA3MS4yMjcgNDcuOTIxNFYxOC4yODNDNzEuMjI3IDE3LjA1NjYgNzIuMTQ3MiAxNi4wMzQ2IDczLjI1MTUgMTYuMDM0NkM3NC4zNTU4IDE2LjAzNDYgNzUuMjc2MSAxNy4wNTY2IDc1LjI3NjEgMTguMjgzVjQ3LjkyMTRaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4=)",
      "background-image-crossorigin": "anonymous",
      backgroundImageCrossorigin: "anonymous",
      "background-image-opacity": "1",
      backgroundImageOpacity: "1",
      "background-image-containment": "inside",
      backgroundImageContainment: "inside",
      "background-image-smoothing": "yes",
      backgroundImageSmoothing: "yes",
      "background-position-x": "50%",
      backgroundPositionX: "50%",
      "background-position-y": "50%",
      backgroundPositionY: "50%",
      "background-width-relative-to": "inner",
      backgroundWidthRelativeTo: "inner",
      "background-height-relative-to": "inner",
      backgroundHeightRelativeTo: "inner",
      "background-repeat": "no-repeat",
      backgroundRepeat: "no-repeat",
      "background-fit": "contain",
      backgroundFit: "contain",
      "background-clip": "none",
      backgroundClip: "none",
      "background-width": "auto",
      backgroundWidth: "auto",
      "background-height": "auto",
      backgroundHeight: "auto",
      "background-offset-x": "0px",
      backgroundOffsetX: "0px",
      "background-offset-y": "0px",
      backgroundOffsetY: "0px",
      "pie-size": "100%",
      pieSize: "100%",
      "pie-1-background-color": "rgb(0,0,0)",
      pie1BackgroundColor: "rgb(0,0,0)",
      "pie-1-background-size": "0%",
      pie1BackgroundSize: "0%",
      "pie-1-background-opacity": "1",
      pie1BackgroundOpacity: "1",
      "pie-2-background-color": "rgb(0,0,0)",
      pie2BackgroundColor: "rgb(0,0,0)",
      "pie-2-background-size": "0%",
      pie2BackgroundSize: "0%",
      "pie-2-background-opacity": "1",
      pie2BackgroundOpacity: "1",
      "pie-3-background-color": "rgb(0,0,0)",
      pie3BackgroundColor: "rgb(0,0,0)",
      "pie-3-background-size": "0%",
      pie3BackgroundSize: "0%",
      "pie-3-background-opacity": "1",
      pie3BackgroundOpacity: "1",
      "pie-4-background-color": "rgb(0,0,0)",
      pie4BackgroundColor: "rgb(0,0,0)",
      "pie-4-background-size": "0%",
      pie4BackgroundSize: "0%",
      "pie-4-background-opacity": "1",
      pie4BackgroundOpacity: "1",
      "pie-5-background-color": "rgb(0,0,0)",
      pie5BackgroundColor: "rgb(0,0,0)",
      "pie-5-background-size": "0%",
      pie5BackgroundSize: "0%",
      "pie-5-background-opacity": "1",
      pie5BackgroundOpacity: "1",
      "pie-6-background-color": "rgb(0,0,0)",
      pie6BackgroundColor: "rgb(0,0,0)",
      "pie-6-background-size": "0%",
      pie6BackgroundSize: "0%",
      "pie-6-background-opacity": "1",
      pie6BackgroundOpacity: "1",
      "pie-7-background-color": "rgb(0,0,0)",
      pie7BackgroundColor: "rgb(0,0,0)",
      "pie-7-background-size": "0%",
      pie7BackgroundSize: "0%",
      "pie-7-background-opacity": "1",
      pie7BackgroundOpacity: "1",
      "pie-8-background-color": "rgb(0,0,0)",
      pie8BackgroundColor: "rgb(0,0,0)",
      "pie-8-background-size": "0%",
      pie8BackgroundSize: "0%",
      "pie-8-background-opacity": "1",
      pie8BackgroundOpacity: "1",
      "pie-9-background-color": "rgb(0,0,0)",
      pie9BackgroundColor: "rgb(0,0,0)",
      "pie-9-background-size": "0%",
      pie9BackgroundSize: "0%",
      "pie-9-background-opacity": "1",
      pie9BackgroundOpacity: "1",
      "pie-10-background-color": "rgb(0,0,0)",
      pie10BackgroundColor: "rgb(0,0,0)",
      "pie-10-background-size": "0%",
      pie10BackgroundSize: "0%",
      "pie-10-background-opacity": "1",
      pie10BackgroundOpacity: "1",
      "pie-11-background-color": "rgb(0,0,0)",
      pie11BackgroundColor: "rgb(0,0,0)",
      "pie-11-background-size": "0%",
      pie11BackgroundSize: "0%",
      "pie-11-background-opacity": "1",
      pie11BackgroundOpacity: "1",
      "pie-12-background-color": "rgb(0,0,0)",
      pie12BackgroundColor: "rgb(0,0,0)",
      "pie-12-background-size": "0%",
      pie12BackgroundSize: "0%",
      "pie-12-background-opacity": "1",
      pie12BackgroundOpacity: "1",
      "pie-13-background-color": "rgb(0,0,0)",
      pie13BackgroundColor: "rgb(0,0,0)",
      "pie-13-background-size": "0%",
      pie13BackgroundSize: "0%",
      "pie-13-background-opacity": "1",
      pie13BackgroundOpacity: "1",
      "pie-14-background-color": "rgb(0,0,0)",
      pie14BackgroundColor: "rgb(0,0,0)",
      "pie-14-background-size": "0%",
      pie14BackgroundSize: "0%",
      "pie-14-background-opacity": "1",
      pie14BackgroundOpacity: "1",
      "pie-15-background-color": "rgb(0,0,0)",
      pie15BackgroundColor: "rgb(0,0,0)",
      "pie-15-background-size": "0%",
      pie15BackgroundSize: "0%",
      "pie-15-background-opacity": "1",
      pie15BackgroundOpacity: "1",
      "pie-16-background-color": "rgb(0,0,0)",
      pie16BackgroundColor: "rgb(0,0,0)",
      "pie-16-background-size": "0%",
      pie16BackgroundSize: "0%",
      "pie-16-background-opacity": "1",
      pie16BackgroundOpacity: "1",
      position: "origin",
      "compound-sizing-wrt-labels": "include",
      compoundSizingWrtLabels: "include",
      "min-width": "0px",
      minWidth: "0px",
      "min-width-bias-left": "0px",
      minWidthBiasLeft: "0px",
      "min-width-bias-right": "0px",
      minWidthBiasRight: "0px",
      "min-height": "0px",
      minHeight: "0px",
      "min-height-bias-top": "0px",
      minHeightBiasTop: "0px",
      "min-height-bias-bottom": "0px",
      minHeightBiasBottom: "0px",
      "line-style": "solid",
      lineStyle: "solid",
      "line-color": "rgb(153,153,153)",
      lineColor: "rgb(153,153,153)",
      "line-fill": "solid",
      lineFill: "solid",
      "line-cap": "butt",
      lineCap: "butt",
      "line-opacity": "1",
      lineOpacity: "1",
      "line-dash-pattern": "6 3",
      lineDashPattern: "6 3",
      "line-dash-offset": "0",
      lineDashOffset: "0",
      "line-gradient-stop-colors": "rgb(153,153,153)",
      lineGradientStopColors: "rgb(153,153,153)",
      "line-gradient-stop-positions": "0%",
      lineGradientStopPositions: "0%",
      "curve-style": "haystack",
      curveStyle: "haystack",
      "haystack-radius": "0",
      haystackRadius: "0",
      "source-endpoint": "outside-to-node",
      sourceEndpoint: "outside-to-node",
      "target-endpoint": "outside-to-node",
      targetEndpoint: "outside-to-node",
      "control-point-step-size": "40px",
      controlPointStepSize: "40px",
      "control-point-weights": "0.5",
      controlPointWeights: "0.5",
      "segment-distances": "20px",
      segmentDistances: "20px",
      "segment-weights": "0.5",
      segmentWeights: "0.5",
      "taxi-turn": "50%",
      taxiTurn: "50%",
      "taxi-turn-min-distance": "10px",
      taxiTurnMinDistance: "10px",
      "taxi-direction": "auto",
      taxiDirection: "auto",
      "edge-distances": "intersection",
      edgeDistances: "intersection",
      "arrow-scale": "1",
      arrowScale: "1",
      "loop-direction": "-45deg",
      loopDirection: "-45deg",
      "loop-sweep": "-90deg",
      loopSweep: "-90deg",
      "source-distance-from-node": "0px",
      sourceDistanceFromNode: "0px",
      "target-distance-from-node": "0px",
      targetDistanceFromNode: "0px",
      "source-arrow-shape": "none",
      sourceArrowShape: "none",
      "mid-source-arrow-shape": "none",
      midSourceArrowShape: "none",
      "target-arrow-shape": "none",
      targetArrowShape: "none",
      "mid-target-arrow-shape": "none",
      midTargetArrowShape: "none",
      "source-arrow-color": "rgb(153,153,153)",
      sourceArrowColor: "rgb(153,153,153)",
      "mid-source-arrow-color": "rgb(153,153,153)",
      midSourceArrowColor: "rgb(153,153,153)",
      "target-arrow-color": "rgb(153,153,153)",
      targetArrowColor: "rgb(153,153,153)",
      "mid-target-arrow-color": "rgb(153,153,153)",
      midTargetArrowColor: "rgb(153,153,153)",
      "source-arrow-fill": "filled",
      sourceArrowFill: "filled",
      "mid-source-arrow-fill": "filled",
      midSourceArrowFill: "filled",
      "target-arrow-fill": "filled",
      targetArrowFill: "filled",
      "mid-target-arrow-fill": "filled",
      midTargetArrowFill: "filled",
      "source-arrow-width": "1px",
      sourceArrowWidth: "1px",
      "mid-source-arrow-width": "1px",
      midSourceArrowWidth: "1px",
      "target-arrow-width": "1px",
      targetArrowWidth: "1px",
      "mid-target-arrow-width": "1px",
      midTargetArrowWidth: "1px",
      "selection-box-color": "rgb(221,221,221)",
      selectionBoxColor: "rgb(221,221,221)",
      "selection-box-opacity": "0.65",
      selectionBoxOpacity: "0.65",
      "selection-box-border-color": "rgb(170,170,170)",
      selectionBoxBorderColor: "rgb(170,170,170)",
      "selection-box-border-width": "1px",
      selectionBoxBorderWidth: "1px",
      "active-bg-color": "rgb(0,0,0)",
      activeBgColor: "rgb(0,0,0)",
      "active-bg-opacity": "0.15",
      activeBgOpacity: "0.15",
      "active-bg-size": "30px",
      activeBgSize: "30px",
      "outside-texture-bg-color": "rgb(0,0,0)",
      outsideTextureBgColor: "rgb(0,0,0)",
      "outside-texture-bg-opacity": "0.125",
      outsideTextureBgOpacity: "0.125",
      content: "agent",
      "control-point-weight": "0.5",
      controlPointWeight: "0.5",
      "edge-text-rotation": "none",
      edgeTextRotation: "none",
      "padding-left": "6px",
      paddingLeft: "6px",
      "padding-right": "6px",
      paddingRight: "6px",
      "padding-top": "6px",
      paddingTop: "6px",
      "padding-bottom": "6px",
      paddingBottom: "6px"
    },
    "d69e6c5e-8101-48ec-85db-f08daed73b36": {
      events: "yes",
      "text-events": "no",
      textEvents: "no",
      "transition-property": "none",
      transitionProperty: "none",
      "transition-duration": "0ms",
      transitionDuration: "0ms",
      "transition-delay": "0ms",
      transitionDelay: "0ms",
      "transition-timing-function": "linear",
      transitionTimingFunction: "linear",
      display: "element",
      visibility: "visible",
      opacity: "1",
      "text-opacity": "1",
      textOpacity: "1",
      "min-zoomed-font-size": "12px",
      minZoomedFontSize: "12px",
      "z-compound-depth": "auto",
      zCompoundDepth: "auto",
      "z-index-compare": "manual",
      zIndexCompare: "manual",
      "z-index": "4",
      zIndex: "4",
      "overlay-padding": "10px",
      overlayPadding: "10px",
      "overlay-color": "rgb(0,0,0)",
      overlayColor: "rgb(0,0,0)",
      "overlay-opacity": "0",
      overlayOpacity: "0",
      "overlay-shape": "round-rectangle",
      overlayShape: "round-rectangle",
      "underlay-padding": "10px",
      underlayPadding: "10px",
      "underlay-color": "rgb(0,0,0)",
      underlayColor: "rgb(0,0,0)",
      "underlay-opacity": "0",
      underlayOpacity: "0",
      "underlay-shape": "round-rectangle",
      underlayShape: "round-rectangle",
      ghost: "no",
      "ghost-offset-x": "0px",
      ghostOffsetX: "0px",
      "ghost-offset-y": "0px",
      ghostOffsetY: "0px",
      "ghost-opacity": "0",
      ghostOpacity: "0",
      "text-valign": "bottom",
      textValign: "bottom",
      "text-halign": "center",
      textHalign: "center",
      color: "rgb(0,0,0)",
      "text-outline-color": "rgb(0,0,0)",
      textOutlineColor: "rgb(0,0,0)",
      "text-outline-opacity": "1",
      textOutlineOpacity: "1",
      "text-background-color": "rgb(210,212,210)",
      textBackgroundColor: "rgb(210,212,210)",
      "text-background-opacity": "0.7",
      textBackgroundOpacity: "0.7",
      "text-background-padding": "2px",
      textBackgroundPadding: "2px",
      "text-border-opacity": "0",
      textBorderOpacity: "0",
      "text-border-color": "rgb(0,0,0)",
      textBorderColor: "rgb(0,0,0)",
      "text-border-width": "0px",
      textBorderWidth: "0px",
      "text-border-style": "solid",
      textBorderStyle: "solid",
      "text-background-shape": "round-rectangle",
      textBackgroundShape: "round-rectangle",
      "text-justification": "auto",
      textJustification: "auto",
      "font-family": "Qanelas Soft, sans-serif",
      fontFamily: "Qanelas Soft, sans-serif",
      "font-style": "normal",
      fontStyle: "normal",
      "font-weight": "300",
      fontWeight: "300",
      "font-size": "8px",
      fontSize: "8px",
      "text-transform": "none",
      textTransform: "none",
      "text-wrap": "ellipsis",
      textWrap: "ellipsis",
      "text-overflow-wrap": "whitespace",
      textOverflowWrap: "whitespace",
      "text-max-width": "80px",
      textMaxWidth: "80px",
      "text-outline-width": "0px",
      textOutlineWidth: "0px",
      "line-height": "1",
      lineHeight: "1",
      label: "aes",
      "text-rotation": "none",
      textRotation: "none",
      "text-margin-x": "0px",
      textMarginX: "0px",
      "text-margin-y": "7px",
      textMarginY: "7px",
      "source-label": "",
      sourceLabel: "",
      "source-text-rotation": "none",
      sourceTextRotation: "none",
      "source-text-margin-x": "0px",
      sourceTextMarginX: "0px",
      "source-text-margin-y": "0px",
      sourceTextMarginY: "0px",
      "source-text-offset": "0px",
      sourceTextOffset: "0px",
      "target-label": "",
      targetLabel: "",
      "target-text-rotation": "none",
      targetTextRotation: "none",
      "target-text-margin-x": "0px",
      targetTextMarginX: "0px",
      "target-text-margin-y": "0px",
      targetTextMarginY: "0px",
      "target-text-offset": "0px",
      targetTextOffset: "0px",
      height: "20px",
      width: "20px",
      shape: "ellipse",
      "shape-polygon-points": "-1 -1 1 -1 1 1 -1 1",
      shapePolygonPoints: "-1 -1 1 -1 1 1 -1 1",
      "background-color": "rgb(50,108,229)",
      backgroundColor: "rgb(50,108,229)",
      "background-fill": "solid",
      backgroundFill: "solid",
      "background-opacity": "1",
      backgroundOpacity: "1",
      "background-blacken": "0",
      backgroundBlacken: "0",
      "background-gradient-stop-colors": "rgb(153,153,153)",
      backgroundGradientStopColors: "rgb(153,153,153)",
      "background-gradient-stop-positions": "0%",
      backgroundGradientStopPositions: "0%",
      "background-gradient-direction": "to-bottom",
      backgroundGradientDirection: "to-bottom",
      padding: "6px",
      "padding-relative-to": "width",
      paddingRelativeTo: "width",
      "bounds-expansion": "0px",
      boundsExpansion: "0px",
      "border-color": "rgb(60,129,255)",
      borderColor: "rgb(60,129,255)",
      "border-opacity": "1",
      borderOpacity: "1",
      "border-width": "0px",
      borderWidth: "0px",
      "border-style": "solid",
      borderStyle: "solid",
      "outline-color": "rgb(153,153,153)",
      outlineColor: "rgb(153,153,153)",
      "outline-opacity": "1",
      outlineOpacity: "1",
      "outline-width": "0px",
      outlineWidth: "0px",
      "outline-style": "solid",
      outlineStyle: "solid",
      "outline-offset": "0px",
      outlineOffset: "0px",
      "background-image":
        "url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTAiIGhlaWdodD0iNjYiIHZpZXdCb3g9IjAgMCA5MCA2NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNNC4wODk5OCAwLjVDMS44MzExNSAwLjUgMCAyLjMzMTE1IDAgNC41ODk5OFY2MS40MUMwIDYzLjY2ODkgMS44MzExNSA2NS41IDQuMDg5OTggNjUuNUg4NS45MUM4OC4xNjg4IDY1LjUgOTAgNjMuNjY4OSA5MCA2MS40MVY0LjU4OTk4QzkwIDIuMzMxMTUgODguMTY4OSAwLjUgODUuOTEgMC41SDQuMDg5OThaTTE4Ljc3MyA0Ny45MjE0QzE4Ljc3MyA0OS4xNDc4IDE3Ljg1MjggNTAuMTY5OCAxNi43NDg1IDUwLjE2OThDMTUuNjQ0MiA1MC4xNjk4IDE0LjcyMzkgNDkuMTQ3OCAxNC43MjM5IDQ3LjkyMTRWMTguMjgzQzE0LjcyMzkgMTcuMDU2NiAxNS42NDQyIDE2LjAzNDYgMTYuNzQ4NSAxNi4wMzQ2QzE3Ljg1MjggMTYuMDM0NiAxOC43NzMgMTcuMDU2NiAxOC43NzMgMTguMjgzVjQ3LjkyMTRaTTM3LjczMDEgNDcuOTIxNEMzNy43MzAxIDQ5LjE0NzggMzYuODA5OCA1MC4xNjk4IDM1LjcwNTUgNTAuMTY5OEMzNC42MDEyIDUwLjE2OTggMzMuNjgxIDQ5LjE0NzggMzMuNjgxIDQ3LjkyMTRWMTguMjgzQzMzLjY4MSAxNy4wNTY2IDM0LjYwMTIgMTYuMDM0NiAzNS43MDU1IDE2LjAzNDZDMzYuODA5OCAxNi4wMzQ2IDM3LjczMDEgMTcuMDU2NiAzNy43MzAxIDE4LjI4M1Y0Ny45MjE0Wk01Ni41MDMxIDQ3LjkyMTRDNTYuNTAzMSA0OS4xNDc4IDU1LjU4MjggNTAuMTY5OCA1NC40Nzg1IDUwLjE2OThDNTMuMzc0MiA1MC4xNjk4IDUyLjQ1NCA0OS4xNDc4IDUyLjQ1NCA0Ny45MjE0VjE4LjI4M0M1Mi40NTQgMTcuMDU2NiA1My4zNzQyIDE2LjAzNDYgNTQuNDc4NSAxNi4wMzQ2QzU1LjU4MjggMTYuMDM0NiA1Ni41MDMxIDE3LjA1NjYgNTYuNTAzMSAxOC4yODNWNDcuOTIxNFpNNzUuMjc2MSA0Ny45MjE0Qzc1LjI3NjEgNDkuMTQ3OCA3NC4zNTU4IDUwLjE2OTggNzMuMjUxNSA1MC4xNjk4QzcyLjE0NzIgNTAuMTY5OCA3MS4yMjcgNDkuMTQ3OCA3MS4yMjcgNDcuOTIxNFYxOC4yODNDNzEuMjI3IDE3LjA1NjYgNzIuMTQ3MiAxNi4wMzQ2IDczLjI1MTUgMTYuMDM0NkM3NC4zNTU4IDE2LjAzNDYgNzUuMjc2MSAxNy4wNTY2IDc1LjI3NjEgMTguMjgzVjQ3LjkyMTRaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4=)",
      backgroundImage:
        "url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTAiIGhlaWdodD0iNjYiIHZpZXdCb3g9IjAgMCA5MCA2NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNNC4wODk5OCAwLjVDMS44MzExNSAwLjUgMCAyLjMzMTE1IDAgNC41ODk5OFY2MS40MUMwIDYzLjY2ODkgMS44MzExNSA2NS41IDQuMDg5OTggNjUuNUg4NS45MUM4OC4xNjg4IDY1LjUgOTAgNjMuNjY4OSA5MCA2MS40MVY0LjU4OTk4QzkwIDIuMzMxMTUgODguMTY4OSAwLjUgODUuOTEgMC41SDQuMDg5OThaTTE4Ljc3MyA0Ny45MjE0QzE4Ljc3MyA0OS4xNDc4IDE3Ljg1MjggNTAuMTY5OCAxNi43NDg1IDUwLjE2OThDMTUuNjQ0MiA1MC4xNjk4IDE0LjcyMzkgNDkuMTQ3OCAxNC43MjM5IDQ3LjkyMTRWMTguMjgzQzE0LjcyMzkgMTcuMDU2NiAxNS42NDQyIDE2LjAzNDYgMTYuNzQ4NSAxNi4wMzQ2QzE3Ljg1MjggMTYuMDM0NiAxOC43NzMgMTcuMDU2NiAxOC43NzMgMTguMjgzVjQ3LjkyMTRaTTM3LjczMDEgNDcuOTIxNEMzNy43MzAxIDQ5LjE0NzggMzYuODA5OCA1MC4xNjk4IDM1LjcwNTUgNTAuMTY5OEMzNC42MDEyIDUwLjE2OTggMzMuNjgxIDQ5LjE0NzggMzMuNjgxIDQ3LjkyMTRWMTguMjgzQzMzLjY4MSAxNy4wNTY2IDM0LjYwMTIgMTYuMDM0NiAzNS43MDU1IDE2LjAzNDZDMzYuODA5OCAxNi4wMzQ2IDM3LjczMDEgMTcuMDU2NiAzNy43MzAxIDE4LjI4M1Y0Ny45MjE0Wk01Ni41MDMxIDQ3LjkyMTRDNTYuNTAzMSA0OS4xNDc4IDU1LjU4MjggNTAuMTY5OCA1NC40Nzg1IDUwLjE2OThDNTMuMzc0MiA1MC4xNjk4IDUyLjQ1NCA0OS4xNDc4IDUyLjQ1NCA0Ny45MjE0VjE4LjI4M0M1Mi40NTQgMTcuMDU2NiA1My4zNzQyIDE2LjAzNDYgNTQuNDc4NSAxNi4wMzQ2QzU1LjU4MjggMTYuMDM0NiA1Ni41MDMxIDE3LjA1NjYgNTYuNTAzMSAxOC4yODNWNDcuOTIxNFpNNzUuMjc2MSA0Ny45MjE0Qzc1LjI3NjEgNDkuMTQ3OCA3NC4zNTU4IDUwLjE2OTggNzMuMjUxNSA1MC4xNjk4QzcyLjE0NzIgNTAuMTY5OCA3MS4yMjcgNDkuMTQ3OCA3MS4yMjcgNDcuOTIxNFYxOC4yODNDNzEuMjI3IDE3LjA1NjYgNzIuMTQ3MiAxNi4wMzQ2IDczLjI1MTUgMTYuMDM0NkM3NC4zNTU4IDE2LjAzNDYgNzUuMjc2MSAxNy4wNTY2IDc1LjI3NjEgMTguMjgzVjQ3LjkyMTRaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4=)",
      "background-image-crossorigin": "anonymous",
      backgroundImageCrossorigin: "anonymous",
      "background-image-opacity": "1",
      backgroundImageOpacity: "1",
      "background-image-containment": "inside",
      backgroundImageContainment: "inside",
      "background-image-smoothing": "yes",
      backgroundImageSmoothing: "yes",
      "background-position-x": "50%",
      backgroundPositionX: "50%",
      "background-position-y": "50%",
      backgroundPositionY: "50%",
      "background-width-relative-to": "inner",
      backgroundWidthRelativeTo: "inner",
      "background-height-relative-to": "inner",
      backgroundHeightRelativeTo: "inner",
      "background-repeat": "no-repeat",
      backgroundRepeat: "no-repeat",
      "background-fit": "contain",
      backgroundFit: "contain",
      "background-clip": "none",
      backgroundClip: "none",
      "background-width": "auto",
      backgroundWidth: "auto",
      "background-height": "auto",
      backgroundHeight: "auto",
      "background-offset-x": "0px",
      backgroundOffsetX: "0px",
      "background-offset-y": "0px",
      backgroundOffsetY: "0px",
      "pie-size": "100%",
      pieSize: "100%",
      "pie-1-background-color": "rgb(0,0,0)",
      pie1BackgroundColor: "rgb(0,0,0)",
      "pie-1-background-size": "0%",
      pie1BackgroundSize: "0%",
      "pie-1-background-opacity": "1",
      pie1BackgroundOpacity: "1",
      "pie-2-background-color": "rgb(0,0,0)",
      pie2BackgroundColor: "rgb(0,0,0)",
      "pie-2-background-size": "0%",
      pie2BackgroundSize: "0%",
      "pie-2-background-opacity": "1",
      pie2BackgroundOpacity: "1",
      "pie-3-background-color": "rgb(0,0,0)",
      pie3BackgroundColor: "rgb(0,0,0)",
      "pie-3-background-size": "0%",
      pie3BackgroundSize: "0%",
      "pie-3-background-opacity": "1",
      pie3BackgroundOpacity: "1",
      "pie-4-background-color": "rgb(0,0,0)",
      pie4BackgroundColor: "rgb(0,0,0)",
      "pie-4-background-size": "0%",
      pie4BackgroundSize: "0%",
      "pie-4-background-opacity": "1",
      pie4BackgroundOpacity: "1",
      "pie-5-background-color": "rgb(0,0,0)",
      pie5BackgroundColor: "rgb(0,0,0)",
      "pie-5-background-size": "0%",
      pie5BackgroundSize: "0%",
      "pie-5-background-opacity": "1",
      pie5BackgroundOpacity: "1",
      "pie-6-background-color": "rgb(0,0,0)",
      pie6BackgroundColor: "rgb(0,0,0)",
      "pie-6-background-size": "0%",
      pie6BackgroundSize: "0%",
      "pie-6-background-opacity": "1",
      pie6BackgroundOpacity: "1",
      "pie-7-background-color": "rgb(0,0,0)",
      pie7BackgroundColor: "rgb(0,0,0)",
      "pie-7-background-size": "0%",
      pie7BackgroundSize: "0%",
      "pie-7-background-opacity": "1",
      pie7BackgroundOpacity: "1",
      "pie-8-background-color": "rgb(0,0,0)",
      pie8BackgroundColor: "rgb(0,0,0)",
      "pie-8-background-size": "0%",
      pie8BackgroundSize: "0%",
      "pie-8-background-opacity": "1",
      pie8BackgroundOpacity: "1",
      "pie-9-background-color": "rgb(0,0,0)",
      pie9BackgroundColor: "rgb(0,0,0)",
      "pie-9-background-size": "0%",
      pie9BackgroundSize: "0%",
      "pie-9-background-opacity": "1",
      pie9BackgroundOpacity: "1",
      "pie-10-background-color": "rgb(0,0,0)",
      pie10BackgroundColor: "rgb(0,0,0)",
      "pie-10-background-size": "0%",
      pie10BackgroundSize: "0%",
      "pie-10-background-opacity": "1",
      pie10BackgroundOpacity: "1",
      "pie-11-background-color": "rgb(0,0,0)",
      pie11BackgroundColor: "rgb(0,0,0)",
      "pie-11-background-size": "0%",
      pie11BackgroundSize: "0%",
      "pie-11-background-opacity": "1",
      pie11BackgroundOpacity: "1",
      "pie-12-background-color": "rgb(0,0,0)",
      pie12BackgroundColor: "rgb(0,0,0)",
      "pie-12-background-size": "0%",
      pie12BackgroundSize: "0%",
      "pie-12-background-opacity": "1",
      pie12BackgroundOpacity: "1",
      "pie-13-background-color": "rgb(0,0,0)",
      pie13BackgroundColor: "rgb(0,0,0)",
      "pie-13-background-size": "0%",
      pie13BackgroundSize: "0%",
      "pie-13-background-opacity": "1",
      pie13BackgroundOpacity: "1",
      "pie-14-background-color": "rgb(0,0,0)",
      pie14BackgroundColor: "rgb(0,0,0)",
      "pie-14-background-size": "0%",
      pie14BackgroundSize: "0%",
      "pie-14-background-opacity": "1",
      pie14BackgroundOpacity: "1",
      "pie-15-background-color": "rgb(0,0,0)",
      pie15BackgroundColor: "rgb(0,0,0)",
      "pie-15-background-size": "0%",
      pie15BackgroundSize: "0%",
      "pie-15-background-opacity": "1",
      pie15BackgroundOpacity: "1",
      "pie-16-background-color": "rgb(0,0,0)",
      pie16BackgroundColor: "rgb(0,0,0)",
      "pie-16-background-size": "0%",
      pie16BackgroundSize: "0%",
      "pie-16-background-opacity": "1",
      pie16BackgroundOpacity: "1",
      position: "origin",
      "compound-sizing-wrt-labels": "include",
      compoundSizingWrtLabels: "include",
      "min-width": "0px",
      minWidth: "0px",
      "min-width-bias-left": "0px",
      minWidthBiasLeft: "0px",
      "min-width-bias-right": "0px",
      minWidthBiasRight: "0px",
      "min-height": "0px",
      minHeight: "0px",
      "min-height-bias-top": "0px",
      minHeightBiasTop: "0px",
      "min-height-bias-bottom": "0px",
      minHeightBiasBottom: "0px",
      "line-style": "solid",
      lineStyle: "solid",
      "line-color": "rgb(153,153,153)",
      lineColor: "rgb(153,153,153)",
      "line-fill": "solid",
      lineFill: "solid",
      "line-cap": "butt",
      lineCap: "butt",
      "line-opacity": "1",
      lineOpacity: "1",
      "line-dash-pattern": "6 3",
      lineDashPattern: "6 3",
      "line-dash-offset": "0",
      lineDashOffset: "0",
      "line-gradient-stop-colors": "rgb(153,153,153)",
      lineGradientStopColors: "rgb(153,153,153)",
      "line-gradient-stop-positions": "0%",
      lineGradientStopPositions: "0%",
      "curve-style": "haystack",
      curveStyle: "haystack",
      "haystack-radius": "0",
      haystackRadius: "0",
      "source-endpoint": "outside-to-node",
      sourceEndpoint: "outside-to-node",
      "target-endpoint": "outside-to-node",
      targetEndpoint: "outside-to-node",
      "control-point-step-size": "40px",
      controlPointStepSize: "40px",
      "control-point-weights": "0.5",
      controlPointWeights: "0.5",
      "segment-distances": "20px",
      segmentDistances: "20px",
      "segment-weights": "0.5",
      segmentWeights: "0.5",
      "taxi-turn": "50%",
      taxiTurn: "50%",
      "taxi-turn-min-distance": "10px",
      taxiTurnMinDistance: "10px",
      "taxi-direction": "auto",
      taxiDirection: "auto",
      "edge-distances": "intersection",
      edgeDistances: "intersection",
      "arrow-scale": "1",
      arrowScale: "1",
      "loop-direction": "-45deg",
      loopDirection: "-45deg",
      "loop-sweep": "-90deg",
      loopSweep: "-90deg",
      "source-distance-from-node": "0px",
      sourceDistanceFromNode: "0px",
      "target-distance-from-node": "0px",
      targetDistanceFromNode: "0px",
      "source-arrow-shape": "none",
      sourceArrowShape: "none",
      "mid-source-arrow-shape": "none",
      midSourceArrowShape: "none",
      "target-arrow-shape": "none",
      targetArrowShape: "none",
      "mid-target-arrow-shape": "none",
      midTargetArrowShape: "none",
      "source-arrow-color": "rgb(153,153,153)",
      sourceArrowColor: "rgb(153,153,153)",
      "mid-source-arrow-color": "rgb(153,153,153)",
      midSourceArrowColor: "rgb(153,153,153)",
      "target-arrow-color": "rgb(153,153,153)",
      targetArrowColor: "rgb(153,153,153)",
      "mid-target-arrow-color": "rgb(153,153,153)",
      midTargetArrowColor: "rgb(153,153,153)",
      "source-arrow-fill": "filled",
      sourceArrowFill: "filled",
      "mid-source-arrow-fill": "filled",
      midSourceArrowFill: "filled",
      "target-arrow-fill": "filled",
      targetArrowFill: "filled",
      "mid-target-arrow-fill": "filled",
      midTargetArrowFill: "filled",
      "source-arrow-width": "1px",
      sourceArrowWidth: "1px",
      "mid-source-arrow-width": "1px",
      midSourceArrowWidth: "1px",
      "target-arrow-width": "1px",
      targetArrowWidth: "1px",
      "mid-target-arrow-width": "1px",
      midTargetArrowWidth: "1px",
      "selection-box-color": "rgb(221,221,221)",
      selectionBoxColor: "rgb(221,221,221)",
      "selection-box-opacity": "0.65",
      selectionBoxOpacity: "0.65",
      "selection-box-border-color": "rgb(170,170,170)",
      selectionBoxBorderColor: "rgb(170,170,170)",
      "selection-box-border-width": "1px",
      selectionBoxBorderWidth: "1px",
      "active-bg-color": "rgb(0,0,0)",
      activeBgColor: "rgb(0,0,0)",
      "active-bg-opacity": "0.15",
      activeBgOpacity: "0.15",
      "active-bg-size": "30px",
      activeBgSize: "30px",
      "outside-texture-bg-color": "rgb(0,0,0)",
      outsideTextureBgColor: "rgb(0,0,0)",
      "outside-texture-bg-opacity": "0.125",
      outsideTextureBgOpacity: "0.125",
      content: "aes",
      "control-point-weight": "0.5",
      controlPointWeight: "0.5",
      "edge-text-rotation": "none",
      edgeTextRotation: "none",
      "padding-left": "6px",
      paddingLeft: "6px",
      "padding-right": "6px",
      paddingRight: "6px",
      "padding-top": "6px",
      paddingTop: "6px",
      "padding-bottom": "6px",
      paddingBottom: "6px"
    }
  }
};

const addStyles = () => {
  var css = ` 
    
    .embed-design-container {
        position: relative;
        height: 100%;
        width: 100%;
        font-family:   "Open Sans", sans-serif;
    }

    .embed-canvas-container p {
        margin: 0;
        padding: 0;
    }

    #embedded-design-7b01cebf-b0f9-4c11-87e7-612d8fad10c8 .embed-canvas-container {
        height: 100%;
        width: 100%;
        background-color: "inheirt";
    }
   #embedded-design-7b01cebf-b0f9-4c11-87e7-612d8fad10c8 .water-mark{
        background: "transparent";
        padding: 0.5rem;
        color : inherit !important;
        font-size: 1.5rem !important;
        border: none;
        cursor: pointer;
        display: flex !important;
        align-items: center;
        gap: 0.5rem;
        font-family:   "Open Sans", sans-serif !important;
        text-decoration: none !important; 
        outline: none !important; 
    }

    #embedded-design-7b01cebf-b0f9-4c11-87e7-612d8fad10c8 .toolbar {
       
        pointer-events: auto ;
        padding: 0.5rem;
        cursor: pointer;
        color : inherit;
        display: flex;
        gap: 0.5rem;
        justify-content: space-between;
        align-items: center;
        font-size: 1.25rem;
   }
     `,
    head = document.head || document.getElementsByTagName("head")[0],
    style = document.createElement("style");

  head.appendChild(style);

  style.type = "text/css";
  if (style.styleSheet) {
    // This is required for IE8 and below.
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
};

const CreateToolBar = () => {
  const cyContainer = document.getElementById(
    "embedded-design-7b01cebf-b0f9-4c11-87e7-612d8fad10c8"
  );
  const toolbar = document.createElement("div");
  toolbar.innerHTML = `
    <div class="toolbar ">
        <a class="water-mark" href="https://meshery.io" target="_blank">
          <span> 
<svg xmlns="http://www.w3.org/2000/svg" width="auto" height="1.9rem" viewBox="0 0 97 17" fill="none">
  <path d="M8.62109 4.55884V8.26808L11.9 6.40375L8.62109 4.55884Z" fill="#00D3A9"/>
  <path d="M8.62109 9.04541V12.7838L11.9297 10.9195L8.62109 9.04541Z" fill="#00D3A9"/>
  <path d="M8.15725 8.2498V4.58911L4.91797 6.4146L8.15725 8.2498Z" fill="#00B39F"/>
  <path d="M1.63672 12.764C2.27071 13.7642 3.13255 14.6187 4.15288 15.2498V11.3367L1.63672 12.764Z" fill="#00B39F"/>
  <path d="M8.15154 12.7638V9.07397L4.90234 10.9189L8.15154 12.7638Z" fill="#00B39F"/>
  <path d="M4.64062 15.0169L7.92943 13.1719L4.64062 11.3076V15.0169Z" fill="#00D3A9"/>
  <path d="M12.1599 15.0366V11.3274L8.87109 13.1723L12.1599 15.0366Z" fill="#00B39F"/>
  <path d="M15.3635 12.3371C15.9282 11.3079 16.2452 10.1718 16.2947 9.00659L12.8672 10.9292L15.3635 12.3371Z" fill="#00B39F"/>
  <path d="M12.6484 10.5305L15.9571 8.67591L12.6484 6.82129V10.5305Z" fill="#00D3A9"/>
  <path d="M12.1713 6.0158V2.33569L8.90234 4.17089L12.1713 6.0158Z" fill="#00B39F"/>
  <path d="M12.1656 10.5115V6.80225L8.88672 8.65687L12.1656 10.5115Z" fill="#00B39F"/>
  <path d="M4.64062 6.79272V10.5408L7.94926 8.65705L4.64062 6.79272Z" fill="#00D3A9"/>
  <path d="M8.16662 0.888916C6.94817 0.918046 5.75945 1.22877 4.67969 1.79195L8.16662 3.75338V0.888916Z" fill="#00B39F"/>
  <path d="M4.64062 2.30664V6.0353L7.94926 4.17097L4.64062 2.30664Z" fill="#00D3A9"/>
  <path d="M4.15288 2.08325C3.13255 2.71441 2.27071 3.55918 1.63672 4.56903L4.15288 5.9964V2.09296V2.08325Z" fill="#00B39F"/>
  <path d="M12.1377 1.81137C11.058 1.23848 9.84945 0.927756 8.62109 0.888916V3.78251L12.1377 1.81137Z" fill="#00D3A9"/>
  <path d="M0.460938 8.93848C0.500562 10.1425 0.827455 11.3077 1.41191 12.3661L3.95779 10.9193L0.460938 8.93848Z" fill="#00D3A9"/>
  <path d="M1.41191 4.96655C0.827455 6.01524 0.510468 7.19016 0.460938 8.38449L3.95779 6.41335L1.402 4.96655H1.41191Z" fill="#00D3A9"/>
  <path d="M4.67969 15.5317C5.75945 16.0949 6.94817 16.4056 8.16662 16.4348V13.5703L4.67969 15.522V15.5317Z" fill="#00B39F"/>
  <path d="M15.1448 4.57836C14.5108 3.57822 13.6589 2.73345 12.6484 2.10229V5.99603L15.1448 4.57836Z" fill="#00D3A9"/>
  <path d="M12.6484 15.2405C13.6688 14.6094 14.5207 13.7549 15.1547 12.7451L12.6484 11.3274V15.2503V15.2405Z" fill="#00D3A9"/>
  <path d="M16.3343 8.35615C16.2848 7.17152 15.9678 6.01603 15.3932 4.97705L12.8672 6.40443L16.3343 8.35615Z" fill="#00B39F"/>
  <path d="M8.62109 16.4447C9.83954 16.4155 11.0283 16.1048 12.108 15.5416L8.62109 13.5608V16.4447Z" fill="#00D3A9"/>
  <path d="M4.16717 10.5017V6.8313L0.917969 8.65679L4.16717 10.5017Z" fill="#00B39F"/>
  <path d="M67.2734 5.67018V6.08592V7.9221V10.174V13.5H76.2156V11.6291H69.1467V10.174V9.79294H74.5898V7.9221H69.1467V6.08592H76.2156V4.21509H67.2734V5.67018Z" fill="currentColor"/>
  <path d="M32.7852 5.67018V6.08592V7.9221V10.174V13.5H41.7627V11.6291H34.6938V10.174V9.79294H40.1368V7.9221H34.6938V6.08592H41.7627V4.21509H32.7852V5.67018Z" fill="currentColor"/>
  <path d="M54.1501 11.075C54.1501 11.4215 54.0794 11.7333 53.938 12.0105C53.7966 12.3223 53.6199 12.5648 53.4079 12.7727C53.1958 12.9805 52.913 13.1537 52.6303 13.2923C52.3122 13.4309 51.9941 13.5002 51.676 13.5002H42.8398V11.5601H51.676C51.8173 11.5601 51.9234 11.5254 52.0294 11.4215C52.1354 11.3176 52.1708 11.2136 52.1708 11.075V10.3129C52.1708 10.1743 52.1354 10.0703 52.0294 9.9664C51.9234 9.86247 51.8173 9.82782 51.676 9.82782H45.314C44.9605 9.82782 44.6424 9.75853 44.3597 9.61995C44.0416 9.48137 43.7941 9.30815 43.5821 9.10028C43.37 8.89241 43.1933 8.61525 43.0519 8.33809C42.9105 8.06093 42.8398 7.74912 42.8398 7.40267V6.64048C42.8398 6.29403 42.9105 5.98223 43.0519 5.70507C43.1933 5.42791 43.37 5.15075 43.5821 4.94288C43.7941 4.73501 44.0769 4.56178 44.3597 4.4232C44.6424 4.28462 44.9605 4.21533 45.314 4.21533H54.1501V6.1901H45.314C45.1726 6.1901 45.0665 6.22474 44.9605 6.32868C44.8545 6.43261 44.8191 6.53655 44.8191 6.67513V7.43732C44.8191 7.5759 44.8545 7.67983 44.9605 7.78377C45.0665 7.8877 45.1726 7.92235 45.314 7.92235H51.676C52.0294 7.92235 52.3475 7.99164 52.6303 8.13022C52.913 8.2688 53.1958 8.44202 53.4079 8.64989C53.6199 8.85776 53.7966 9.13492 53.938 9.41208C54.0794 9.72389 54.1501 10.0357 54.1501 10.3475V11.075Z" fill="currentColor"/>
  <path d="M66.0567 13.5002H64.2541V9.86247H57.2205V13.5002H55.418V7.8877H64.2541V4.21533H66.0567V13.5002ZM57.2205 7.02158H55.418V4.24998H57.2205V7.02158Z" fill="currentColor"/>
  <path d="M91.7908 7.47172L89.4228 4.21509H87.0547L90.8366 9.79294V13.5H92.7452V9.79294L96.527 4.21509H94.1943L91.7908 7.47172Z" fill="currentColor"/>
  <path d="M79.4356 5.98198H84.2778V6.64024V7.29849V7.95675H80.3899V9.72364H81.2735L84.7019 13.5346H87.0346L83.6062 9.72364H84.8079C84.8433 9.72364 84.8786 9.72364 84.9493 9.72364C85.7622 9.72364 86.4338 9.06539 86.4338 8.26855V7.29849V6.64024V5.67018C86.4338 4.87334 85.7622 4.21509 84.9493 4.21509C84.914 4.21509 84.8786 4.21509 84.8079 4.21509H79.4002H79.3649H77.5977V13.4653H79.4709L79.4356 5.98198Z" fill="currentColor"/>
  <path d="M31.1557 5.77447C30.7669 4.8737 29.8126 4.21544 28.7876 4.25009H19.5273V6.22485V13.5349H21.542V6.19021C24.2989 6.19021 28.8936 6.15556 28.9997 6.22485C29.7066 6.01698 29.2117 13.2231 29.3531 13.4657H31.3678C31.2617 12.842 31.5445 6.19021 31.1557 5.77447Z" fill="currentColor"/>
  <path d="M26.4482 7.22925H24.4336V13.5H26.4482V7.22925Z" fill="currentColor"/>
</svg>
 </span>
        </a>
    </div>

    `;
  toolbar.style.cssText =
    "position: absolute;z-index: 99999;right: 0.5rem;bottom: 0.5rem;margin: 0.5rem";
  cyContainer.appendChild(toolbar);
};

document.addEventListener("DOMContentLoaded", function () {
  const embedContainer = document.getElementById(
    "embedded-design-7b01cebf-b0f9-4c11-87e7-612d8fad10c8"
  );
  embedContainer.classList.add("embed-design-container");
  const cyContainer = document.createElement("div");
  cyContainer.id = "embedded-design-7b01cebf-b0f9-4c11-87e7-612d8fad10c8-cy";
  cyContainer.classList.add("embed-canvas-container");
  embedContainer.appendChild(cyContainer);
  addStyles();

  var cy = (window.cy = cytoscape({
    container: document.getElementById(
      "embedded-design-7b01cebf-b0f9-4c11-87e7-612d8fad10c8-cy"
    ),

    autounselectify: true,

    boxSelectionEnabled: false,
    minZoom: 0.5,
    maxZoom: 6.6,
    layout: {
      name: "preset"
    },
    elements: data.elements,
    style: data.style
  }));

  Object.keys(data.elementStyles).forEach(id => {
    cy.getElementById(id).style(data.elementStyles[id]);
  });

  cy.style().update();
  CreateToolBar();
});
