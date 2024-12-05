import React from "react";
import { GiCheckMark } from "@react-icons/all-files/gi/GiCheckMark";
import { MdClose } from "@react-icons/all-files/md/MdClose";
import featureData from "./feature_data.json";
import Configuration from "./icons/configuration.svg";
import Lifecycle from "./icons/lifecycle.svg";
import Kanvas from "./icons/kanvas-icon.svg";
import Perforamance from "./icons/perf.svg";
import Collab from "./icons/collaboration.svg";
import Identity from "./icons/identity.svg";
import Notification from "./icons/notification.svg";
import Support from "./icons/support.svg";

function generateDetails(data) {
  const categories = [
    { id: 0, name: "Configuration Management", icon: Configuration },
    { id: 1, name: "Lifecycle Management", icon: Lifecycle },
    { id: 2, name: "Kanvas", icon: Kanvas },
    { id: 3, name: "Performance Management", icon: Perforamance },
    { id: 4, name: "Collaboration", icon: Collab },
    { id: 5, name: "Identity & Access Management", icon: Identity },
    { id: 6, name: "Incident Management", icon: Notification },
    { id: 7, name: "Support and Deployment", icon: Support },
  ];

  return categories.map(category => {
    const features = data
      .filter(item => item.theme === category.name)
      .map(item => {
        const featureName = item.function;
        const description = item.feature;
        const documentedLink = item.documented;
        const featureWithLink = documentedLink ? (
          <a href={documentedLink} target="_blank" rel="noopener noreferrer" className="feature-link">
            {featureName}
          </a>
        ) : (
          featureName
        );

        return {
          feature: featureWithLink,
          description,
          free: item.subscription_tier === "Free" ? <GiCheckMark className="yes-icon" /> : <MdClose className="no-icon" />,
          teamDesigner: item.subscription_tier === "TeamDesigner" || item.subscription_tier === "Free" ? <GiCheckMark className="yes-icon" /> : <MdClose className="no-icon" />,
          teamOperator: item.subscription_tier === "TeamOperator" || item.subscription_tier === "Free" ? <GiCheckMark className="yes-icon" /> : <MdClose className="no-icon" />,
          enterprise: <GiCheckMark className="yes-icon" />,
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
