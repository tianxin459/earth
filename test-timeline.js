// Test script to verify timeline data
import fs from 'fs';

// Read the wmweekData.json file
const wmweekData = JSON.parse(fs.readFileSync('./src/data/wmweekData.json', 'utf8'));

console.log('Available weeks in data:');
wmweekData.forEach((item, index) => {
  console.log(`${index + 1}. ${item.wmweek}`);
});

console.log('\nChecking for weeks 202519, 202520, 202521:');
const targetWeeks = ['202519', '202520', '202521'];
targetWeeks.forEach(week => {
  const found = wmweekData.find(item => item.wmweek === week);
  console.log(`${week}: ${found ? '✓ Found' : '✗ Not found'}`);
});

console.log('\nLast 5 weeks:');
wmweekData.slice(-5).forEach(item => {
  console.log(`- ${item.wmweek}`);
});
