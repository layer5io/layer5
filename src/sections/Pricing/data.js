import React from "react";
import  { GiCheckMark } from "@react-icons/all-files/gi/GiCheckMark";

export const options =  [
  {
    tier: "Free",
    featured: true,
    price: 0,
    byline: "Open Source features, plus:",
    summary: ["Multi-mesh", "MeshMark", "MeshMonkey","Comparative Testing", "Single Team"],
    subdata: [
      { id: 0, category: "Lifecycle", value: "Multi-mesh" },
      { id: 1, category: "Chaos", value: "MeshMonkey" },
      { id: 2, category: "Performance", value: "Comparative Testing" },
      { id: 3, category: "Management", value: "MeshMark" },
      { id: 4, category: "Account", value: "Single Team" },
      { id: 5, category: "Feature1", value: <GiCheckMark className="icon"/> },
      { id: 6, category: "Feature2", value: <GiCheckMark className="icon"/> },
      { id: 7, category: "Feature3", value: <GiCheckMark className="icon"/> },
      { id: 8, category: "Feature4", value: <GiCheckMark className="icon"/> }]
  },
  {
    tier: "Team",
    featured: false,
    price: 9.99,
    byline: "Everything in Free, plus:",
    summary: ["MeshMap", "Share Results", "Continuous Optimizer","Automated Canary", "Single Organization"],
    subdata: [
      { id: 0, category: "Lifecycle", value: "MeshMap" },
      { id: 1, category: "Chaos", value: "Share Results" },
      { id: 2, category: "Performance", value: "Continuous Optimizer" },
      { id: 3, category: "Management", value: "Automated Canary" },
      { id: 4, category: "Account", value: "Single Organization" },
      { id: 5, category: "Feature1", value: <GiCheckMark className="icon"/> },
      { id: 6, category: "Feature2", value: <GiCheckMark className="icon"/> },
      { id: 7, category: "Feature3", value: <GiCheckMark className="icon"/> },
      { id: 8, category: "Feature4", value: <GiCheckMark className="icon"/> }]
  },
  {
    tier: "Enterprise",
    featured: false,
    price: 12.99,
    byline: "Everything in Team, plus:",
    summary: ["Catalog Federation", "Pipelined Chaos", "Customizable Optimizer","Multivariate Feature Flags", "Multi-organization"],
    subdata: [
      { id: 0, category: "Lifecycle", value: "Article" },
      { id: 1, category: "Chaos", value: "Blog" },
      { id: 2, category: "Performance", value: "News" },
      { id: 3, category: "Management", value: "Workshop" },
      { id: 4, category: "Account", value: "Event" },
      { id: 5, category: "Feature1", value: <GiCheckMark className="icon"/> },
      { id: 6, category: "Feature2", value: <GiCheckMark className="icon"/> },
      { id: 7, category: "Feature3", value: <GiCheckMark className="icon"/> },
      { id: 8, category: "Feature4", value: <GiCheckMark className="icon"/> }]
  },
];
  