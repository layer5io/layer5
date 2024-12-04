import featureData from "../../../feature_data.json";
import comingSoon from "./icons/coming-soon.webp";
import React from "react";

function generateOptions(data) {
  const tiers = {
    Free: {
      tier: "Personal",
      featured: false,
      monthlyprice: 0,
      yearlyprice: 0,
      byline: "The basics for individuals and organizations",
      button: ["Join for Free", "https://cloud.layer5.io"],
    },
    Team: {
      tier: "Team",
      featured: true,
      monthlyprice: 5,
      yearlyprice: 100,
      byline: "Collaboration for teams and organizations",
      button: ["Start Free Trial", "https://cloud.layer5.io"],
    },
    Enterprise: {
      tier: "Enterprise",
      featured: false,
      monthlyprice: 21,
      yearlyprice: 180,
      pricing_coming_soon: <img src={comingSoon} alt="Coming Soon" />,
      byline: "Flexible deployment, and MSP multi-tenancy.",
      button: [
        "Contact Sales",
        "https://us15.list-manage.com/contact-form?u=6b50be5aea3dfe1fd4c041d80&form_id=d0ffe17c92d8014ede6b721aa16096e8",
      ],
    },
    TeamOperatorAndDesigner: {
      tier: "Team Operator & Designer",
      featured: true,
      monthlyprice: 10,
      yearlyprice: 200,
      byline: "Advanced tools for team operators and designers.",
      button: ["Start Free Trial", "https://cloud.layer5.io"],
    },
  };

  const options = Object.entries(tiers).map(([tierName, tierInfo]) => {
    const summary = data
      .filter((item) => {
        const subscriptionTier = item["Subscription Tier"];
        if (tierName === "TeamOperatorAndDesigner") {
          // Separate logic for TeamOperator and TeamDesigner
          return (
            subscriptionTier === "TeamOperator" ||
            subscriptionTier === "TeamDesigner"
          );
        }
        // Logic for other tiers
        return (
          subscriptionTier === tierName ||
          (tierName === "Team" &&
            (subscriptionTier === "Team" ||
              subscriptionTier === "Team-Beta")) // Keep "Team" logic
        );
      })
      .map((item, index) => ({
        id: index,
        category: item.Function || "N/A", // Fallback for missing Function
        description: item.Feature || "No description available", // Fallback for missing Feature
        tier: item["Subscription Tier"] || "Unknown Tier", // Fallback for missing tier
      }));

    return {
      ...tierInfo,
      summary: summary.length > 0 ? summary : [],
    };
  });

  return options;
}

const options = generateOptions(featureData);

export default options;
