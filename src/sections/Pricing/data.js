import React from "react";
import { GiCheckMark } from "@react-icons/all-files/gi/GiCheckMark";
import { MdClose } from "@react-icons/all-files/md/MdClose";
import MeshMap from "./icons/meshmap-icon.svg";
import Support from "./icons/support.svg";
import Collab from "./icons/collaboration.svg";
import Lifecycle from "./icons/lifecycle.svg";
import Identity from "./icons/identity.svg";
import Notification from "./icons/notification.svg";
import Configuration from "./icons/configuration.svg";
import Perforamance from "./icons/perf.svg";

export const details = [
  {
    id: 0,
    category: "Configuration Management",
    icon: Configuration,
    features: [
      {
        feature: "Cloud Native Designs",
        description: "Import and export your designs using your local filesystem or remote URL.",
        free: <GiCheckMark className="yes-icon" />,
        team: <GiCheckMark className="yes-icon" />,
        enterprise: <GiCheckMark className="yes-icon" />,
      },
      {
        feature: "Cloud Native Patterns",
        description: "Combine designs into well-curated, reusable patterns imbued with your customized best practices.",
        free: <MdClose className="no-icon" />,
        team: <GiCheckMark className="yes-icon" />,
        enterprise: <GiCheckMark className="yes-icon" />,
      },
      {
        feature: "Design Dry-run",
        description: "Test and verify configuration changes in a separate environment.",
        free: <MdClose className="no-icon" />,
        team: <GiCheckMark className="yes-icon" />,
        enterprise: <GiCheckMark className="yes-icon" />,
      },
    ],
  },
  {
    id: 2,
    category: "Lifecycle Management",
    icon: Lifecycle,
    features: [
      {
        feature: "Configure and deploy any service mesh",
        description: "Meshery adapters provision, configure, and manage 10 different service meshes.",
        free: <GiCheckMark className="yes-icon" />,
        team: <GiCheckMark className="yes-icon" />,
        enterprise: <GiCheckMark className="yes-icon" />,
      },
      {
        feature: "Cluster discovery",
        description: "Day 2 support for ongoing synchronization of Kubernetes configuration, workloads and service mesh changes.",
        free: <GiCheckMark className="yes-icon" />,
        team: <GiCheckMark className="yes-icon" />,
        enterprise: <GiCheckMark className="yes-icon" />,
      },
      {
        feature: "Multiple Kubernetes Clusters",
        description: "Ongoing synchronization of Kubernetes configuration, workloads and service mesh changes across any number of Kubernetes clusters.",
        free: <GiCheckMark className="yes-icon" />,
        team: <GiCheckMark className="yes-icon" />,
        enterprise: <GiCheckMark className="yes-icon" />,
      },
    ],
  },
  {
    id: 3,
    category: "MeshMap",
    icon: MeshMap,
    features: [
      {
        feature: "Timeline (DVR)",
        description: "Playback service transactions. Scrub over the history of changes to your deployments. ",
        free: <MdClose className="no-icon" />,
        team: <MdClose className="no-icon" />,
        enterprise: <GiCheckMark className="yes-icon" />,
      },
      {
        feature: "Service Performance",
        description: "Continuous visibility across all of your clusters and workloads.",
        free: <GiCheckMark className="yes-icon" />,
        team: <GiCheckMark className="yes-icon" />,
        enterprise: <GiCheckMark className="yes-icon" />,
      },
      {
        feature: "Application Import",
        description: "Import your existing Kubernetes, Helm, or Docker Compose applications.",
        free: <GiCheckMark className="yes-icon" />,
        team: <GiCheckMark className="yes-icon" />,
        enterprise: <GiCheckMark className="yes-icon" />,
      },
      {
        feature: "Visual Design",
        description: "Drag-n-drop cloud native infrastructure designer to configure, model, and deploy your workloads",
        free: <MdClose className="no-icon" />,
        team: <GiCheckMark className="yes-icon" />,
        enterprise: <GiCheckMark className="yes-icon" />,
      },
    ],
  },
  {
    id: 4,
    category: "Performance Management",
    icon: Perforamance,
    features: [
      {
        feature: "Parallel Load Generation",
        description: "Single Load Generator: Support testing multiple endpoints simultaneously.",
        free: <GiCheckMark className="yes-icon" />,
        team: <GiCheckMark className="yes-icon" />,
        enterprise: <GiCheckMark className="yes-icon" />,
      },
      {
        feature: "Distributed Load Generation",
        description: "Distributed Load Generator: Support multiple Meshery clients generating load, collecting and coalescing results into a single report.",
        free: <MdClose className="no-icon" />,
        team: <GiCheckMark className="no-icon" />,
        enterprise: <GiCheckMark className="yes-icon" />,
      },
      {
        feature: "Performance Profiles",
        description: "Define, name, and save performance profiles.",
        free: <GiCheckMark className="yes-icon" />,
        team: <GiCheckMark className="yes-icon" />,
        enterprise: <GiCheckMark className="yes-icon" />,
      },
      {
        feature: "GitOps - Service Mesh Performance GitHub Action",
        description: "Integrate performance analysis as a gate in your GitOps pipeline, using performance profiles to run repeatable tests and avoid regression issues before they start. Configure this action to trigger with each of your releases, on every pull request. or any GitHub workflow trigger event.",
        free: <MdClose className="no-icon" />,
        team: <GiCheckMark className="yes-icon" />,
        enterprise: <GiCheckMark className="yes-icon" />,
      },
      {
        feature: "Service Mesh Interface Conformance GitHub Action",
        description: "Using Meshery as the offical SMI Conformance validation tool, configure this action to trigger with each of your releases, on every pull request. or any GitHub workflow trigger event.",
        free: <MdClose className="yes-icon" />,
        team: <GiCheckMark className="yes-icon" />,
        enterprise: <GiCheckMark className="yes-icon" />,
      },
      {
        feature: "MeshMark",
        description: "Identify the cost of a specific network function.",
        free: <GiCheckMark className="no-icon" />,
        team: <GiCheckMark className="no-icon" />,
        enterprise: <GiCheckMark className="yes-icon" />,
      },
    ],
  },
  {
    id: 1,
    category: "Collaboration",
    icon: Collab,
    features: [
      {
        feature: "Collaborators for public designs",
        description: "Invite any Meshery Cloud user, or all Meshery users, to work with you on a public design that you control – including making changes and releasing new versions.",
        free: <MdClose className="yes-icon" />,
        team: <GiCheckMark className="yes-icon" />,
        enterprise: <GiCheckMark className="yes-icon" />,
      },
      {
        feature: "Collaborators for private designs",
        description: "Invite any Meshery Cloud user to work with you on a private design that you control – including making changes and releasing new versions.",
        free: <MdClose className="no-icon" />,
        team: <MdClose className="yes-icon" />,
        enterprise: <GiCheckMark className="yes-icon" />,
      },
      {
        feature: "Design Reviews",
        description: "Discuss any design by leaving review comments or notes on a specific design. Control who has access, notify discussion participants with updates, and link from anywhere.",
        free: <MdClose className="no-icon" />,
        team: <GiCheckMark className="yes-icon" />,
        enterprise: <GiCheckMark className="yes-icon" />,
      },
      {
        feature: "Team Chat",
        description: "Message in real-time, unattached to a specific design. Control who can participate in the discussion.",
        free: <MdClose className="no-icon" />,
        team: <MdClose className="no-icon" />,
        enterprise: <GiCheckMark className="yes-icon" />,
      },
      {
        feature: "Organization and Team Management",
        description: "Manage access to designs on a team-by-team, or individual user, basis.",
        free: <MdClose className="no-icon" />,
        team: <MdClose className="no-icon" />,
        enterprise: <GiCheckMark className="yes-icon" />,
      },
      {
        feature: "Collaborative Design",
        description: "Create and collaborate in online designs in real-time.",
        free: <MdClose className="no-icon" />,
        team: <MdClose className="no-icon" />,
        enterprise: <GiCheckMark className="yes-icon" />,
      },
      {
        feature: "Add-ons",
        description: "Access a variety of third-party applications, right from MeshMap. Send a message to Slack, identify an on-duty team to page, or raise an alarm in Meshery Cloud.",
        free: <MdClose className="no-icon" />,
        team: <MdClose className="no-icon" />,
        enterprise: <GiCheckMark className="yes-icon" />,
      },
    ],
  },
  {
    id: 5,
    category: "Identity & Access Management",
    icon: Identity,
    features: [
      {
        feature: "Single User",
        description: "Implicit user; implicit role (admin)",
        free: <GiCheckMark className="yes-icon" />,
        team: <GiCheckMark className="yes-icon" />,
        enterprise: <GiCheckMark className="yes-icon" />,
      },
      {
        feature: "Multiple Users",
        description: "Multi-tenancy",
        free: <GiCheckMark className="yes-icon" />,
        team: <GiCheckMark className="yes-icon" />,
        enterprise: <GiCheckMark className="yes-icon" />,
      },
      {
        feature: "Individual User",
        description: "Preferences	Allows preferences to be set per user.",
        free: <GiCheckMark className="yes-icon" />,
        team: <GiCheckMark className="yes-icon" />,
        enterprise: <GiCheckMark className="yes-icon" />,
      },
      {
        feature: "Built-in Roles",
        description: "Static - out of the box",
        free: <MdClose className="no-icon" />,
        team: <GiCheckMark className="yes-icon" />,
        enterprise: <GiCheckMark className="yes-icon" />,
      },
      {
        feature: "User-defined Roles",
        description: "Customizable roles for specific permission assignments",
        free: <MdClose className="no-icon" />,
        team: <MdClose className="no-icon" />,
        enterprise: <GiCheckMark className="yes-icon" />,
      },
      {
        feature: "Authentication: LDAP",
        description: "Access Meshery using your existing accounts and centrally manage repository access.",
        free: <MdClose className="no-icon" />,
        team: <MdClose className="no-icon" />,
        enterprise: <GiCheckMark className="yes-icon" />,
      },
      {
        feature: "Authentication: SAML",
        description: "Use an identity provider to manage the identities Meshery users and applications.",
        free: <MdClose className="no-icon" />,
        team: <MdClose className="no-icon" />,
        enterprise: <GiCheckMark className="yes-icon" />,
      },
      {
        feature: "Authorization",
        description: "Own and control the user accounts of your enterprise members through your identity provider (IdP).",
        free: <MdClose className="no-icon" />,
        team: <MdClose className="no-icon" />,
        enterprise: <GiCheckMark className="yes-icon" />,
      },
    ],
  },
  {
    id: 6,
    category: "Incident Management",
    icon: Notification,
    features: [
      {
        feature: "Notification Center",
        description: "Events: Reporting of Meshery provisioning aand managagement events.",
        free: <GiCheckMark className="yes-icon" />,
        team: <GiCheckMark className="yes-icon" />,
        enterprise: <GiCheckMark className="yes-icon" />,
      },
      {
        feature: "Audit Trail",
        description: "Detailed accounting of user activity. Historical record or each action taken.",
        free: <GiCheckMark className="no-icon" />,
        team: <GiCheckMark className="yes-icon" />,
        enterprise: <GiCheckMark className="yes-icon" />,
      },
      {
        feature: "Traffic Replay",
        description: "Visual event replay in MeshMap",
        free: <MdClose className="no-icon" />,
        team: <MdClose className="no-icon" />,
        enterprise: <GiCheckMark className="yes-icon" />,
      },
    ],
  },
  {
    id: 7,
    category: "Support and Deployment",
    icon: Support,
    features: [
      {
        feature: "Community Support",
        description: "Get help with most of your Meshery questions and issues in our community discussion forum.",
        free: <GiCheckMark className="yes-icon" />,
        team: <GiCheckMark className="yes-icon" />,
        enterprise: <GiCheckMark className="yes-icon" />,
      },
      {
        feature: "Standard Support",
        description: "Layer5 Support can help you troubleshoot issues you run into while using Meshery. Get support via the web.",
        free: <MdClose className="no-icon" />,
        team: <GiCheckMark className="yes-icon" />,
        enterprise: <GiCheckMark className="yes-icon" />,
      },
      {
        feature: "Premium and Premium Plus Support",
        description: "With Premium, get a 30-minute SLA and 24/7 web and phone support. With Premium Plus, get everything in Premium plus your own Support Account Manager and more.",
        free: <MdClose className="no-icon" />,
        team: <MdClose className="no-icon" />,
        enterprise: <GiCheckMark className="yes-icon" />,
      },
      {
        feature: "Self-hosted Deployment",
        description: "Self-hosted Meshery Cloud for on-prem appliances or self-managed cloud tenants.",
        free: <MdClose className="no-icon" />,
        team: <MdClose className="no-icon" />,
        enterprise: <GiCheckMark className="yes-icon" />,
      },
      {
        feature: "Phone Support",
        description: "Layer5 Support can help you troubleshoot issues you run into while using Meshery. Get support via phone.",
        free: <MdClose className="no-icon" />,
        team: <MdClose className="no-icon" />,
        enterprise: <GiCheckMark className="yes-icon" />,
      },
      {
        feature: "Invoice Billing",
        description: "Pay bills via invoice, rather than using your credit card.",
        free: <MdClose className="no-icon" />,
        team: <MdClose className="no-icon" />,
        enterprise: <GiCheckMark className="yes-icon" />,
      },
    ],
  },
];

export const options = [
  {
    tier: "Personal",
    featured: true,
    monthlyprice: 0,
    yearlyprice: 0,
    byline: "Open Source features, plus:",
    button: ["Join for Free", "https://meshery.layer5.io"],
    summary: [
      { id: 0, category: "Cloud Native Design Patterns", description: "Import and export your designs using your local filesystem or remote URL." },
      { id: 1, category: "Multiple Kubernetes Clusters", description: "Ongoing synchronization of Kubernetes configuration, workloads and service mesh changes across any number of Kubernetes clusters." },
      { id: 2, category: "Cluster Discovery", description: "Day 2 support for ongoing synchronization of Kubernetes configuration, workloads and service mesh changes." },
      { id: 3, category: "Microservices Performance", description: "Continuous visibility across all of your clusters and workloads." },
      { id: 4, category: "Load Generation", description: "Single Load Generator: Support testing multiple endpoints simultaneously." },
      { id: 5, category: "MeshMark", description: "Identify the cost of a specific network function." }]
  },

  {
    tier: "Team",
    featured: false,
    monthlyprice: 9.99,
    yearlyprice: 100,
    byline: "Everything in Free, plus:",
    button: ["Contact Sales", "https://us15.list-manage.com/contact-form?u=6b50be5aea3dfe1fd4c041d80&form_id=d0ffe17c92d8014ede6b721aa16096e8"],
    summary: [
      { id: 0, category: "Dry-run", description: "Test and verify configuration changes in a separate environment." },
      { id: 1, category: "Design Reviews", description: "Discuss any design by leaving review comments or notes on a specific design. Control who has access, notify discussion participants with updates, and link from anywhere." },
      { id: 2, category: "Visual Design", description: "Drag-n-drop cloud native infrastructure designer to configure, model, and deploy your workloads" },
      { id: 3, category: "Performance Profiles", description: "Share performance profiles and test results with individual users or teams." },
      { id: 4, category: "Built-in Roles", description: "Static - out of the box" },
      { id: 5, category: "Standard Support", description: "Layer5 Support can help you troubleshoot issues you run into while using Meshery. Get support via the web." }]
  },
  {
    tier: "Enterprise",
    featured: false,
    monthlyprice: 15.99,
    yearlyprice: 180,
    pricing_coming_soon: <img src="https://user-images.githubusercontent.com/7570704/222531680-8f711edc-c4bd-4812-aa25-307fa78191ac.png"></img>,
    byline: "Everything in Team, plus:",
    button: ["Coming Soon", ""],
    summary: [
      { id: 0, category: "User-defined Roles", description: "Customizable roles for specific permission assignments" },
      { id: 1, category: "Authentication: LDAP", description: "Access Meshery  using your existing accounts and centrally manage repository access." },
      { id: 2, category: "Authentication: SAML", description: "Use an identity provider to manage the identities of Meshery users and applications." },
      { id: 3, category: "Self-hosted Deployment", description: "Self-hosted Meshery Cloud for on-prem appliances or self-managed cloud tenants." },
      { id: 4, category: "Traffic Replay", description: "Visual event replay in MeshMap" },
      { id: 5, category: "Phone Support", description: "Layer5 Support can help you troubleshoot issues you run into while using Meshery. Get support via phone." }]
  },
];
