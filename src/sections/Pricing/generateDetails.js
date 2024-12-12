import React from "react";
import { GiCheckMark } from "@react-icons/all-files/gi/GiCheckMark";
import { MdClose } from "@react-icons/all-files/md/MdClose";
import featureData from "./feature_data.json";
import Configuration from "./icons/configuration.svg";
import Lifecycle from "./icons/lifecycle.svg";
import Kanvas from "./icons/kanvas-icon.svg";
import Perforamance from "./icons/perf.svg";
import Collab from "./icons/collaboration.svg";
import Spaces from "./icons/spaces.svg";
import Identity from "./icons/identity.svg";
// import Notification from "./icons/notification.svg";
import Support from "./icons/support.svg";
import Catalog from "./icons/catalog.svg";
import Security from "./icons/security.svg";
import Docs from "./icons/docs.js";

function generateDetails(data) {
  const categories = [
    { id: 0, name: "Configuration Management", icon: Configuration },
    { id: 1, name: "Lifecycle Management", icon: Lifecycle },
    { id: 2, name: "Kanvas", icon: Kanvas },
    { id: 3, name: "Performance Management", icon: Perforamance },
    { id: 4, name: "Collaboration", icon: Collab },
    { id: 5, name: "Identity & Access Management", icon: Identity },
    { id: 6, name: "Workspaces", icon: Spaces },
    // { id: 6, name: "Incident Management", icon: Notification },
    { id: 7, name: "Catalog", icon: Catalog },
    { id: 8, name: "Security", icon: Security },
    { id: 9, name: "Managed Service Provider", icon: Support },
    { id: 10, name: "Support and Deployment", icon: Support },
    // { id: 11, name: "Support and Deployment", icon: Support },
  ];

  return categories.map(category => {
    const features = data
      .filter(
        item =>
          item.category === category.name)
      .map(item => {
        const featureName = item.function;
        const description = item.feature;
        const documentedLink = item.docs;
        const featureWithLink = documentedLink ? (
          <div className="feature-link-container">
            <span className="feature-name">{featureName}{" "}</span>
            <a
              href={documentedLink}
              target="_blank"
              rel="noopener noreferrer"
              className="feature-link"
            >
              <Docs className="docs"/>
            </a>
          </div>
        ) : (
          featureName
        );

        return {
          feature: featureWithLink,
          description,
          free:
            item.comparison_tiers.free === "X" || item.comparison_tiers.free === "x" ? (
              <GiCheckMark className="yes-icon" />
            ) : (
              <MdClose className="no-icon" />
            ),
          teamDesigner:
            item.comparison_tiers.teamDesigner === "X" || item.comparison_tiers.teamDesigner === "x" ? (
              <GiCheckMark className = "yes-icon" />
            ) : (
              <MdClose className="no-icon" />
            ),
          teamOperator:
            item.comparison_tiers.teamOperator === "X" || item.comparison_tiers.teamOperator === "x" ? (
              <GiCheckMark className="yes-icon" />
            ) : (
              <MdClose className="no-icon" />
            ),
          enterprise:
          item.comparison_tiers.enterprise === "X" || item.comparison_tiers.enterprise === "x" ? (
            <GiCheckMark className="yes-icon" />
          ) : (
            <MdClose className="no-icon" />
          ),
        };
      });

    return {
      id: category.id,
      category: category.name,
      icon: category.icon,
      features: features,
    };
  });
}

const details = generateDetails(featureData);

export default details;