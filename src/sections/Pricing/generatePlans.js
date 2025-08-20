import featureData from "./feature_data.json";
import comingSoon from "./icons/coming-soon.webp";
import React from "react";

function generatePlans(data) {

  const tiers = {
    "Free": {
      tier: "Personal",
      featured: false,
      monthlyprice: 0,
      yearlyprice: 0,
      byline: "The basics for individuals and organizations",
      byline2: " Everything from Open Source, plus...",
      button: ["Join for Free", "https://cloud.layer5.io"]
    },
    "TeamDesigner": {
      tier: "Team Designer",
      featured: false,
      monthlyprice: 16,
      yearlyprice: 164,
      byline: "Advanced collaboration for declarative DevOps",
      byline2: "← Everything included in Free, plus...",
      button: ["Start Free Trial", "https://cloud.layer5.io"],
    },
    "TeamOperator": {
      tier: "Team Operator",
      featured: false,
      monthlyprice: 16,
      yearlyprice: 164,
      // pricing_coming_soon: <img src={comingSoon} alt="Coming Soon" />,
      byline: "Advanced collaboration for imperative DevOps",
      byline2: "← Everything included in Free, plus...",
      button: ["Start Free Trial", "https://cloud.layer5.io"],
    },
    "Enterprise": {
      tier: "Enterprise",
      featured: true,
      monthlyprice: 44,
      yearlyprice: 449,
      pricing_coming_soon: <img src={comingSoon} alt="Coming Soon" />,
      byline: "Flexible deployment, and MSP multi-tenancy.",
      byline2: "← Everything included in Team, plus...",
      button: [
        "Contact Sales",
        "https://us15.list-manage.com/contact-form?u=6b50be5aea3dfe1fd4c041d80&form_id=d0ffe17c92d8014ede6b721aa16096e8",
      ],
      addOnPricing: {
        learnerOptions: [
          { learners: 0, monthlyPerUser: 44 }, 
          { learners: 50, monthlyPerUser: 1.73}, 
          { learners: 150, monthlyPerUser: 1.73}, 
          { learners: 250, monthlyPerUser: 1.38 }, 
          { learners: 500, monthlyPerUser: 0.87 }, 
          { learners: 1000, monthlyPerUser: 0.59 }, 
        ],
      },
    },
  };

  const plans = Object.entries(tiers).map(([tierName, tierInfo]) => {

    const summary = data
      .flatMap((item) => {
        const tiers = item.subscription_tier.split("|");
        return tiers.map((tier) => ({
          ...item,
          subscription_tier: tier.trim()
        }));
      })
      .filter((item) => {
        const matches =
          item.subscription_tier === tierName  && item.categoryOrder !== "add-on"; //&& !item.exclude === "x";
        return matches;
      })
      .map((item, index) => {
        const mappedItem = {
          id: index,
          categoryOrder: item.categoryOrder,
          category: item.function,
          functionOrder: item.functionOrder,
          description: item.feature,
          tier: item.subscription_tier,
        };

        return mappedItem;
      })
      .sort((a, b) => a.categoryOrder - b.categoryOrder || a.functionOrder - b.functionOrder);

    const addOns = tierName === "Enterprise"
      ? data
          .filter((item) => item.categoryOrder === "add-on")
          .map((item, index) => ({
            id: index,
            name: item.function,
            description: item.feature,
            docs: item.docs,
          }))
      : [];

    return {
      ...tierInfo,
      summary: summary.length > 0 ? summary : [],
      addOns,
    };
  });
  return plans;
}

const plans = generatePlans(featureData);

export default plans;
