// Script to generate mock statistics data for weeks 202501-202516
const fs = require('fs');
const path = require('path');

// Helper function to generate random values within realistic ranges
function generateRandomValue(min, max, decimals = 0) {
  const value = Math.random() * (max - min) + min;
  return decimals > 0 ? Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals) : Math.round(value);
}

// Generate statistics for a given week
function generateWeeklyStats(week) {
  return {
    "wmweek": week,
    "statistics": { // Fixed typo from "sataistics"
      "otif": {
        "description": "On Time In Full - A measure of delivery performance.",
        "value": generateRandomValue(85, 98, 1),
        "unit": "%"
      },
      "ontimedelivery": {
        "description": "Percentage of orders delivered on time.",
        "value": generateRandomValue(80, 95, 1),
        "unit": "%"
      },
      "instock": {
        "description": "Percentage of items in stock.",
        "value": generateRandomValue(75, 92, 1),
        "unit": "%"
      },
      "ordercreation_qty": {
        "description": "order creation in week",
        "value": generateRandomValue(18000, 28000),
        "unit": ""
      },
      "ordercreation_cost": {
        "description": "order creation by cost in week",
        "value": generateRandomValue(1800000, 3200000),
        "unit": "$"
      },
      "sales_qty": {
        "description": "sales in week",
        "value": generateRandomValue(15000, 25000),
        "unit": ""
      },
      "sales_price": {
        "description": "sales by price in week",
        "value": generateRandomValue(1500000, 2800000),
        "unit": "$"
      }
    }
  };
}

// Generate data for all weeks
const allData = [];

// Generate weeks 202501 to 202516
for (let week = 1; week <= 16; week++) {
  const weekString = `2025${week.toString().padStart(2, '0')}`;
  allData.push(generateWeeklyStats(weekString));
}

// Add the existing week 202517 with corrected spelling
allData.push({
  "wmweek": "202517",
  "statistics": { // Fixed typo from "sataistics"
    "otif": {
      "description": "On Time In Full - A measure of delivery performance.",
      "value": 95.5,
      "unit": "%"
    },
    "ontimedelivery": {
      "description": "Percentage of orders delivered on time.",
      "value": 92.3,
      "unit": "%"
    },
    "instock": {
      "description": "Percentage of items in stock.",
      "value": 88.7,
      "unit": "%"
    },
    "ordercreation_qty": {
      "description": "order creation in week",
      "value": 25000,
      "unit": ""
    },
    "ordercreation_cost": {
      "description": "order creation by cost in week",
      "value": 2500000,
      "unit": "$"
    },
    "sales_qty": {
      "description": "sales in week",
      "value": 20000,
      "unit": ""
    },
    "sales_price": {
      "description": "sales by price in week",
      "value": 2000000,
      "unit": "$"
    }
  }
});

// Write to file
const outputPath = path.join(__dirname, 'statistics.json');
fs.writeFileSync(outputPath, JSON.stringify(allData, null, 2));

console.log(`Generated statistics data for weeks 202501-202517`);
console.log(`Total records: ${allData.length}`);
console.log(`Data written to: ${outputPath}`);
