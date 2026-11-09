#!/usr/bin/env node

const fs = require("fs").promises;
const csv = require("csvtojson");
const [major, minor, patch] = process.versions.node.split(".").map(Number);
console.log(`Using Node.js version: ${major}.${minor}.${patch}`);

const headers = [
  "Theme",
  "Category Order",
  "Category",
  "Function Order",
  "Function",
  "Feature",
  "Subscription Tier",
  "Free",
  "Team Designer",
  "Team Operator",
  "Enterprise",
  "Exclude",
  "Docs",
];


async function processCSV() {
  try {
    const csvFilePath = process.argv[2] || ".github/build/spreadsheet.csv";
      if (process.argv[2]) {
        console.log("Downloading features to: " + process.argv[2]);
      }
    const rows = await csv({
      noheader: true,
      headers: headers,
      output: "json",
    }).fromFile(csvFilePath);

    const filteredData = rows.map(row => {
      try {
        const exclude = row["Exclude"]?.toLowerCase();
        const hasXTier = [
          "Free",
          "Team Designer",
          "Team Operator",
          "Enterprise"]
          .some(tier => row[tier]?.trim().toLowerCase() === "x");
        // const includeRow = hasXTier && !(exclude && ["x", "X"].includes(exclude.toLowerCase()));

        // if (!includeRow) return null;
        if (!exclude) {
          return {
            theme: row["Theme"],
            categoryOrder: row["Category Order"],
            category: row["Category"],
            functionOrder: row["Function Order"],
            function: row["Function"],
            feature: row["Feature"],
            subscription_tier: row["Subscription Tier"],
            comparison_tiers: {
              free: row["Free"],
              teamDesigner: row["Team Designer"],
              teamOperator: row["Team Operator"],
              enterprise: row["Enterprise"],
            },
            docs: row["Docs"]
          };
        }
      } catch (error) {
        console.error("Error processing row:", row, error);
        return null;
      }
    }).filter(Boolean);
    
    // Read existing JSON data
    // const featuresFile = process.env.FEATURES_FILE;
  
    const featuresFile = process.argv[3] || "src/sections/Pricing/feature_data.json";
    if (process.argv[3]) {
      console.log("Converting CSV to JSON in: " + process.argv[3]);
    }
    // const featuresFile = "src/sections/Pricing/feature_data.json";


    if (await fs.access(featuresFile).then(() => true, () => false)) {
      existingData = JSON.parse(await fs.readFile(featuresFile, "utf8"));
    }

    // Identify new updates
    const newUpdates = filteredData.filter(
      newRow =>
        !existingData.some(
          existingRow =>
            existingRow.function === newRow.function &&
            existingRow.feature === newRow.feature
        )
    );

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
