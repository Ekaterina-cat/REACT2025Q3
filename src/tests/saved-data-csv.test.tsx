import { describe, expect, it, vi } from 'vitest';

import { convertToCSV, downloadCSV } from '../utils/saved-data-csv';

describe('convertToCSV', () => {
  it('should correctly convert data to CSV format', () => {
    const data = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
    ];
    const fields = ['id', 'name'];
    const csv = convertToCSV(data, fields);
    const expectedCSV = ['id,name', '"1","John"', '"2","Jane"'].join('\n');
    expect(csv).toBe(expectedCSV);
  });

  it('should escape quotes in values', () => {
    const data = [{ note: 'This is a "quoted" text' }];
    const fields = ['note'];
    const csv = convertToCSV(data, fields);
    const expectedCSV = ['note', '"This is a \\"quoted\\" text"'].join('\n');
    expect(csv).toBe(expectedCSV);
  });
});

describe('downloadCSV', () => {
  it('should create and click a download link', () => {
    const csv = ['id,name', '1,John'].join('\n');
    const rowCount = '2';
    const createObjectURLMock = vi.fn();
    const appendChildMock = vi.fn();
    const removeChildMock = vi.fn();
    const clickMock = vi.fn();

    URL.createObjectURL = createObjectURLMock;
    document.body.appendChild = appendChildMock;
    document.body.removeChild = removeChildMock;

    const link = { href: '', download: '', click: clickMock };
    const createElementMock = vi
      .spyOn(document, 'createElement')
      .mockReturnValue(link as unknown as HTMLAnchorElement);

    downloadCSV(csv, rowCount);

    expect(createElementMock).toHaveBeenCalledWith('a');
    expect(createObjectURLMock).toHaveBeenCalled();
    expect(appendChildMock).toHaveBeenCalled();
    expect(link.download).toBe('2-items.csv');
    expect(clickMock).toHaveBeenCalled();
    expect(removeChildMock).toHaveBeenCalled();

    createElementMock.mockRestore();
  });
});
