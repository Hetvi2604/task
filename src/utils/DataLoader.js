import * as XLSX from 'xlsx';

export const loadExcelData = async (filePath) => {
  const file = await fetch(filePath);
  const data = await file.arrayBuffer();
  const workbook = XLSX.read(data, { type: 'array' });
  return XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);
};

export const loadAllData = async () => {
  const products = await loadExcelData(require('../../assets/data/products.xlsx'));
  const pincodes = await loadExcelData(require('../../assets/data/pincodes.xlsx'));
  const stock = await loadExcelData(require('../../assets/data/stock.xlsx'));
  return { products, pincodes, stock };
};
