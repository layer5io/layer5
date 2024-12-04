import featureData from "./feature_data.json";
import comingSoon from "./icons/coming-soon.webp";
import React from "react";

function generateOptions(data) {
  const tiers = {
    "Free": {
      tier: "Personal",
      featured: true,
      monthlyprice: 0,
      yearlyprice: 0,
      byline: "The basics for individuals and organizations",
      button: ["Join for Free", "https://cloud.layer5.io"]
    },
    "TeamDesigner": {
      tier: "Team Designer",
      featured: true,
      monthlyprice: 5,
      yearlyprice: 100,
      byline: "Advanced collaboration for individuals and organizations",
      button: ["Start Free Trial", "https://cloud.layer5.io"],
    },
    "TeamOperator": {
      tier: "Team Operator",
      featured: true,
      monthlyprice: 5,
      yearlyprice: 100,
      byline: "Advanced collaboration for individuals and organizations",
      button: ["Start Free Trial", "https://cloud.layer5.io"],
    },
    "Enterprise": {
      tier: "Enterprise",
      featured: false,
      monthlyprice: 21,
      yearlyprice: 180,
      byline: "Flexible deployment, and MSP multi-tenancy.",
      button: ["Contact Sales", "https://us15.list-manage.com/contact-form?u=6b50be5aea3dfe1fd4c041d80&form_id=d0ffe17c92d8014ede6b721aa16096e8"],
      //button: ["Coming Soon", ""]
    },
  };

  const options = Object.entries(tiers).map(([tierName, tierInfo]) => {
    const summary = data
      .filter((item) =>
        (tierName === "Team" &&
          (item.entire_row["Subscription Tier"] === "Team" || item.entire_row["Subscription Tier"] === "Team-Beta")) ||
        (item.entire_row["Subscription Tier"] === tierName && item.pricing_page === "true")
      )
      .map((item, index) => ({
        id: index,
        category: item.entire_row.Function,
        description: item.entire_row.Feature,
        tier: item.entire_row["Subscription Tier"]
      }));

    return {
      ...tierInfo,
      summary: summary.length > 0 ? summary : []
    };
  });

  return options;
}

const options = generateOptions(featureData);

export default options;
