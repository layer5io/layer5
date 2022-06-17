import React from "react";
import { GiCheckMark } from "@react-icons/all-files/gi/GiCheckMark";
import {MdClose} from "@react-icons/all-files/md/MdClose";

export const details = [
  { id: 0, category: "Load Generation", description: "Single Load Generator: Support testing multiple endpoints simultaneously." },
  { id: 1, category: "Account", description: "Own and control the user accounts of your enterprise members through your identity provider (IdP)" },
  { id: 2, category: "Performance", description: "Baseline and track your service mesh performance from release to release" },
  { id: 3, category: "Visual Design", description: "Drag-n-drop cloud native infrastructure designer to configure, model, and deploy your workloads" },
  { id: 4, category: "Application Import", description: "Import your existing Kubernetes, Helm, or Docker Compose applications." },
  { id: 5, category: "Dry-run", description: "Test and verify configuration changes in a separate environment" },
  { id: 6, category: "Patterns", description: "Connect your favorite git provider and version your designs." },
  { id: 7, category: "Collaborators", description: "Invite any Meshery Cloud user, or all Meshery users, to work with you on a public design that control – including making changes and releasing new versions." },
  { id: 8, category: "Timeline (DVR)", description: "Playback service transactions. Scrub over the history of changes to your deployments. " },
];


export const options = [
  {
    tier: "Free (Personal)",
    featured: true,
    monthlyprice: 0,
    yearlyprice: 0,
    byline: "Open Source features, plus:",
    button: ["Join for Free", "https://meshery.layer5.io"],
    summary: ["Multi-mesh", "MeshMark", "MeshMonkey", "Comparative Testing", "Single Team"],
    subdata: [
      { id: 0, category: "Load Generation", description: "", value: <GiCheckMark className="icon" /> },
      { id: 1, category: "Account", description: "", value: "Single Team" },
      { id: 2, category: "Performance", description: "", value: "Comparative Testing" },
      { id: 3, category: "Visual Design", description: "", value: <MdClose className="no-icon" /> },
      { id: 4, category: "Application Import", description: "", value:  <GiCheckMark className="icon" /> },
      { id: 5, category: "Dry-run", description: "", value: <MdClose className="no-icon" /> },
      { id: 6, category: "Patterns", description: "", value: <MdClose className="no-icon" /> },
      { id: 7, category: "Collaborators", description: "", value: <MdClose className="no-icon" /> },
      { id: 8, category: "Timeline (DVR)", description: "", value:  <MdClose className="no-icon" /> }]
  },
  {
    tier: "Team",
    featured: false,
    monthlyprice: 9.99,
    yearlyprice: 100,
    byline: "Everything in Free, plus:",
    button: ["Coming Soon", ""],
    summary: ["MeshMap", "Share Results", "Continuous Optimizer", "Automated Canary", "Single Organization"],
    subdata: [
      { id: 0, category: "Load Generation", value: <GiCheckMark className="icon" /> },
      { id: 1, category: "Account", value: "Single Organization" },
      { id: 2, category: "Performance", value: "Continuous Optimizer" },
      { id: 3, category: "Visual Design", value: <GiCheckMark className="icon" /> },
      { id: 4, category: "Application Import", value:  <GiCheckMark className="icon" /> },
      { id: 5, category: "Dry-run", value: <GiCheckMark className="icon" /> },
      { id: 6, category: "Patterns", value: <GiCheckMark className="icon" /> },
      { id: 7, category: "Collaborators", value: <GiCheckMark className="icon" /> },
      { id: 8, category: "Timeline (DVR)", value:  <MdClose className="no-icon" /> }]
  },
  {
    tier: "Enterprise",
    featured: false,
    monthlyprice: 15.99,
    yearlyprice: 180,
    byline: "Everything in Team, plus:",
    button: ["Contact Sales", "https://us15.list-manage.com/contact-form?u=6b50be5aea3dfe1fd4c041d80&form_id=d0ffe17c92d8014ede6b721aa16096e8"],
    summary: ["Catalog Federation", "Pipelined Chaos", "Customizable Optimizer", "Multivariate Feature Flags", "Multi-organization"],
    subdata: [
      { id: 0, category: "Load Generation", value: <GiCheckMark className="icon" /> },
      { id: 1, category: "Account", value: "Multiple Organizations" },
      { id: 2, category: "Performance", value: "Automatically suggest optimal resiliency settings for a given service." },
      { id: 3, category: "Visual Design", value: <GiCheckMark className="icon" /> },
      { id: 4, category: "Application Import", value:  <GiCheckMark className="icon" /> },
      { id: 5, category: "Audit Log", value: <GiCheckMark className="icon" /> },
      { id: 6, category: "LDAP", description: "Access Meshery Cloud using your existing accounts and centrally manage access.", value: <GiCheckMark className="icon" /> },
      { id: 7, category: "SAML", description: "", value: <GiCheckMark className="icon" /> },
      { id: 8, category: "Role-based access control", description: "Define users' level of access to your infra, data, and settings", value: <GiCheckMark className="icon" /> }]
  },
];

