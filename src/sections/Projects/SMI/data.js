
const data = {
  features: [
    {
      name: "Project Goals",
      link: "#",
      services: [
        {
          content: "Provide users with a compatibility matrix identifying the SMI features that are supported per service mesh.",
          className: "--on"
        },
        {
          content: "An easy-to-use, service mesh and SMI-specific tool to give service mesh projects and users a suite of repeatable conformance tests.",
          className: "--on"
        }
      ]
    },{
      name: "Project Objectives",
      link: "#",
      services: [
        {
          content: "Define what it means to be in conformance with the SMI specifications.",
          className: "--on"
        },
        {
          content: "Define a set of conformance tests and what behavior is expected of a conforming service mesh implementation.",
          className: "--on"
        },
        {
          content: "Built into each participating service mesh project’s release tooling.",
          className: "--on"
        }
      ],
    },
  ],
  testDetails: {
    "0.6.0": [
      {
        test_no: "TA - 1.1.1",
        spec: "Traffic Access",
        test_type: "Presence",
        desc: "Assert the presence of CRDs for Traffic Targets",
      },
      {
        test_no: "TA - 1.1.2",
        spec: "Traffic Access",
        test_type: "Presence",
        desc: " Create service accounts for each service",
      },
      {
        test_no: "TA - 1.2.3",
        spec: "Traffic Access",
        test_type: "Assertion",
        desc: "Assert that traffic is blocked by default",
      },
      {
        test_no: "TA - 1.2.4",
        spec: "Traffic Access",
        test_type: "Target Access",
        desc: "Apply Traffic Target CRDs to enable traffic access by a service",
      },
      {
        test_no: "TA - 1.2.5",
        spec: "Traffic Access",
        test_type: "Assertion",
        desc: "Assert that traffic is allowed for the said services",
      },
      {
        test_no: "TA - 1.2.6",
        spec: "Traffic Access",
        test_type: "Target Block",
        desc: "Apply Traffic Target CRDs to block traffic to a service",
      },
      {
        test_no: "TA - 1.2.7",
        spec: "Traffic Access",
        test_type: "Assertion",
        desc: "Assert that traffic is blocked for the said services",
      },

      //TS
      {
        test_no: "TS - 1.1.1",
        spec: "Traffic Split",
        test_type: "Presence",
        desc: " Asserts if the TrafficSplit CRD exists",
      },
      {
        test_no: "TS - 1.1.2",
        spec: "Traffic Split",
        test_type: "Presence",
        desc: "Deploy the app and assert that it is deployed",
      },
      {
        test_no: "TS - 1.2.3",
        spec: "Traffic Split",
        test_type: "Random Split",
        desc: "Custom test which verifies that if in default scenario the traffic to app-svc is split randomly between app-b and app-c",
      },
      {
        test_no: "TS - 1.2.4",
        spec: "Traffic Split",
        test_type: "Single Split 1",
        desc: "Configure a TrafficSplit CRD such that all traffic to `app-svc` is sent to only `app-b` and none to `app-c`",
      },
      {
        test_no: "TS - 1.2.5",
        spec: "Traffic Split",
        test_type: "Assertion",
        desc: " Assert that traffic sent to `app-svc` is sent to only `app-b`",
      },
      {
        test_no: "TS - 1.2.6",
        spec: "Traffic Split",
        test_type: "Single Split 2",
        desc: "Configure a TrafficSplit CRD such that all traffic to `app-svc` is sent to only `app-c` and none to `app-b`",
      },
      {
        test_no: "TS - 1.2.7",
        spec: "Traffic Split",
        test_type: "Assertion",
        desc: "Assert that traffic sent to `app-svc` is sent to only `app-c`",
      },
      {
        test_no: "TS - 1.2.8",
        spec: "Traffic Split",
        test_type: "Partial Split 1",
        desc: "Configure a TrafficSplit CRD such that all traffic to `app-svc` is split between the two such that `app-b` gets more traffic (75%) than `app-c` (25%)",
      },
      {
        test_no: "TS - 1.2.9",
        spec: "Traffic Split",
        test_type: "Assertion",
        desc: "Assert that traffic sent to `app-svc` is sent to `app-b` (75%) and `app-c` (25%)",
      },
      {
        test_no: "TS - 1.2.10",
        spec: "Traffic Split",
        test_type: "Partial Split 2",
        desc: "Configure a TrafficSplit CRD such that all traffic to `app-svc` is split between the two such that `app-c` gets more traffic (75%) than `app-b` (25%)",
      },
      {
        test_no: "TS - 1.2.11",
        spec: "Traffic Split",
        test_type: "Assertion",
        desc: "Assert that traffic sent to `app-svc` is sent to `app-c` (75%) and `app-b` (25%)",
      },

      //TSc
      {
        test_no: "TSC - 1.1.1",
        spec: "Traffic Spec",
        test_type: "Presence",
        desc: "Assert that HTTPRouteGroup CRD exists",
      },
      {
        test_no: "TSC - 1.1.2",
        spec: "Traffic Spec",
        test_type: "Presence",
        desc: "Create Service Account for each service",
      },
      {
        test_no: "TSC - 1.2.3",
        spec: "Traffic Spec",
        test_type: "Target Spec 1",
        desc: "Configure HTTPRouteGroup such that traffic from `service-a` to only `service-b:PORT/metrics` (all HTTP methods) is allowed and all other requests are denied",
      },
      {
        test_no: "TSC - 1.2.4",
        spec: "Traffic Spec",
        test_type: "Assertion",
        desc: "Assert that traffic is is only allowed in ‘service-b:PORT/metrics’ port",
      },
      {
        test_no: "TSC - 1.2.5",
        spec: "Traffic Spec",
        test_type: "Target Spec 2",
        desc: "Configures the above created HTTPRouteGroup such that traffic from `service-a` to `service-b:PORT/*` (only GET HTTP Method) is allowed and all other requests are denied",
      },
      {
        test_no: "TSC - 1.2.6",
        spec: "Traffic Spec",
        test_type: "Assertion",
        desc: "Assert that traffic with only GET HTTP Method is allowed  from `service-a` to `service-b:PORT/*`",
      },
    ],
  }
};
export default data;
