#!/usr/bin/env node

const fs = require("fs").promises; // Use fs.promises
const csv = require("csvtojson");
const [major, minor, patch] = process.versions.node.split(".").map(Number);
console.log(`Node.js version: ${major}.${minor}.${patch}`);

const headers = [
  "Theme",
  "Category",
  "Function",
  "Feature",
  "Subscription Tier",
  "Free Tier",
  "TeamDesigner Tier",
  "TeamOperator Tier",
  "Enterprise Tier",
  "Pricing Page?",
  "Docs",
];


async function processCSV() {
  try {
    const rows = await csv({
      noheader: true,
      headers: headers,
      output: "json",
    }).fromFile(".github/build/spreadsheet.csv");

    const filteredData = rows.map(row => {
      try {
        const pricingPage = row["Pricing Page?"]?.toLowerCase() || "";
        const hasXTier = [
          "Free Tier",
          "TeamDesigner Tier",
          "TeamOperator Tier",
          "Enterprise Tier"]
          .some(tier => row[tier]?.trim().toLowerCase() === "x");
        const includeRow = hasXTier || (pricingPage && ["x", "X"].includes(pricingPage.toLowerCase()));

        if (!includeRow) return null;

        return {
          theme: row["Theme"],
          category: row["Category"],
          function: row["Function"],
          feature: row["Feature"],
          subscription_tier: row["Subscription Tier"],
          comparison_tiers: {
            free: row["Free Tier"],
            teamDesigner: row["TeamDesigner Tier"],
            teamOperator: row["TeamOperator Tier"],
            enterprise: row["Enterprise Tier"],
          },
          pricing_page: row["Pricing Page?"],
          docs: row["Docs"]
        };
      } catch (error) {
        console.error("Error processing row:", row, error);
        return null;
      }
    }).filter(Boolean);
    
    // Read existing JSON data
    // const featuresFile = process.env.FEATURES_FILE;
    const featuresFile = "src/sections/Pricing/feature_data.json";
    let existingData = [];
    if (await fs.access(featuresFile).then(() => true, () => false)) {
      existingData = JSON.parse(await fs.readFile(featuresFile, "utf8"));
    }
console.log('filteredData',filteredData)

    // Identify new updates
    const newUpdates = filteredData.filter(
      newRow =>
        !existingData.some(
          existingRow =>
            existingRow.function === newRow.function &&
            existingRow.feature === newRow.feature
        )
    );

    console.log('newUpdates',newUpdates)
    // Set output for has-updates
    // if (newUpdates.length > 0) {
    //   fs.appendFileSync(process.env.GITHUB_ENV, "has-updates=true\n");
    // } else {
    //   fs.appendFileSync(process.env.GITHUB_ENV, "has-updates=false\n");
    // }

    // Merge new updates into existing data
    const updatedData = [...existingData, ...newUpdates];

    // Write updated data to file
    try {
      await fs.writeFile(featuresFile, JSON.stringify(filteredData, null, 2));
    } catch (error) {
      console.error("Error writing to feature_data.json:", error);
    }
  } catch (error) {
    console.error("Error processing CSV:", error);
    process.exit(1);
  }
}

processCSV();
