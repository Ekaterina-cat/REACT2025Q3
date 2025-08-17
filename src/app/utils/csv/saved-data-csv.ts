import { DetailsRowCSV } from '../types';

export const convertToCSV = (data: DetailsRowCSV[], fields: string[]) => {
  const headers = fields.join(',');
  const csvRows = [];
  csvRows.push(headers);
  for (const row of data) {
    const values = fields.map((header) => {
      const escapedValue = ('' + row[header]).replace(/"/g, '\\"');
      return `"${escapedValue}"`;
    });
    csvRows.push(values.join(','));
  }

  return csvRows.join('\n');
};

export const downloadCSV = (csv: string, rowCount: string) => {
  const filename = `${rowCount}-items.csv`;
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
