import pricingData from "./pricing_data.json";
import comingSoon from "./icons/coming-soon.webp";
import React from "react";

function generateOptions(data) {
  const tiers = {
    "Free": {
      tier: "Personal",
      featured: true,
      monthlyprice: 0,
      yearlyprice: 0,
      byline: "Open Source features, plus:",
      button: ["Join for Free", "https://meshery.layer5.io"]
    },
    "Team": {
      tier: "Team",
      featured: false,
      monthlyprice: 9.99,
      yearlyprice: 100,
      byline: "Everything in Free, plus:",
      button: [
        "Contact Sales",
        "https://us15.list-manage.com/contact-form?u=6b50be5aea3dfe1fd4c041d80&form_id=d0ffe17c92d8014ede6b721aa16096e8"
      ]
    },
    "Enterprise": {
      tier: "Enterprise",
      featured: false,
      monthlyprice: 15.99,
      yearlyprice: 180,
      pricing_coming_soon: <img src={comingSoon} alt="Coming Soon" />,
      byline: "Everything in Team, plus:",
      button: ["Coming Soon", ""]
    }
  };

  const options = Object.entries(tiers).map(([tierName, tierInfo]) => {
    const summary = data
      .filter(
        (item) =>
          item.entire_row["Subscription Tier"] === tierName &&
          item.pricing_page === "true"
      )
      .map((item, index) => ({
        id: index,
        category: item.entire_row.Function,
        description: item.entire_row.Feature
      }));

    return {
      ...tierInfo,
      summary: summary.length > 0 ? summary : []
    };
  });

  return options;
}

const options = generateOptions(pricingData);

export default options;
