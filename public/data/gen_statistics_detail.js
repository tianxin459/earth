import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const departments = Array.from({ length: 1000 }, (_, i) =>
  `D${(i + 1).toString().padStart(4, '0')}`
);

const totalQty = 25000;
const totalCost = 2500000;
const totalSalesQty = 20000;
const totalSalesPrice = 2000000;

const avgQty = Math.floor(totalQty / departments.length);
const avgUnitCost = Math.floor(totalCost / totalQty);
const avgUnitPrice = Math.floor(totalSalesPrice / totalSalesQty);

const details = departments.map((DepartmentID) => ({
  DepartmentID,
  qty: avgQty + Math.floor(Math.random() * 10 - 5),
  unitcost: avgUnitCost + Math.floor(Math.random() * 10 - 5),
  unitprice: avgUnitPrice + Math.floor(Math.random() * 10 - 5),
  ontime: Math.random() < 0.92
}));

writeFileSync(
  path.join(__dirname, 'statistics_detail.json'),
  JSON.stringify(details, null, 2)
);