import React from "react";
import { GiCheckMark } from "@react-icons/all-files/gi/GiCheckMark";

export const details = [
  { id: 0, category: "Lifecycle", description: "aLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt" },
  { id: 1, category: "Chaos", description: "bLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt" },
  { id: 2, category: "Performance", description: "cLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt" },
  { id: 3, category: "Management", description: "dLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt" },
  { id: 4, category: "Account", description: "eLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt" },
  { id: 5, category: "Feature1", description: "fLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt" },
  { id: 6, category: "Feature2", description: "gLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt" },
  { id: 7, category: "Feature3", description: "hLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt" },
  { id: 8, category: "Feature4", description: null },
];


export const options = [
  {
    tier: "Free",
    featured: true,
    monthlyprice: 0,
    yearlyprice: 0,
    byline: "Open Source features, plus:",
    button: ["Join for Free", "https://meshery.layer5.io"],
    summary: ["Multi-mesh", "MeshMark", "MeshMonkey", "Comparative Testing", "Single Team"],
    subdata: [
      { id: 0, category: "Lifecycle", value: "Multi-mesh" },
      { id: 1, category: "Chaos", value: "MeshMonkey" },
      { id: 2, category: "Performance", value: "Comparative Testing" },
      { id: 3, category: "Management", value: "MeshMark" },
      { id: 4, category: "Account", value: "Single Team" },
      { id: 5, category: "Feature1", value: <GiCheckMark className="icon" /> },
      { id: 6, category: "Feature2", value: <GiCheckMark className="icon" /> },
      { id: 7, category: "Feature3", value: <GiCheckMark className="icon" /> },
      { id: 8, category: "Feature4", value: <GiCheckMark className="icon" /> }]
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
      { id: 0, category: "Lifecycle", value: "MeshMap" },
      { id: 1, category: "Chaos", value: "Share Results" },
      { id: 2, category: "Performance", value: "Continuous Optimizer" },
      { id: 3, category: "Management", value: "Automated Canary" },
      { id: 4, category: "Account", value: "Single Organization" },
      { id: 5, category: "Feature1", value: <GiCheckMark className="icon" /> },
      { id: 6, category: "Feature2", value: <GiCheckMark className="icon" /> },
      { id: 7, category: "Feature3", value: <GiCheckMark className="icon" /> },
      { id: 8, category: "Feature4", value: <GiCheckMark className="icon" /> }]
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
      { id: 0, category: "Lifecycle", value: "Article" },
      { id: 1, category: "Chaos", value: "Blog" },
      { id: 2, category: "Performance", value: "News" },
      { id: 3, category: "Management", value: "Workshop" },
      { id: 4, category: "Account", value: "Event" },
      { id: 5, category: "Feature1", value: <GiCheckMark className="icon" /> },
      { id: 6, category: "Feature2", value: <GiCheckMark className="icon" /> },
      { id: 7, category: "Feature3", value: <GiCheckMark className="icon" /> },
      { id: 8, category: "Feature4", value: <GiCheckMark className="icon" /> }]
  },
];

