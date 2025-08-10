export const TooltipLogic = async <T>(url: string): Promise<T | null> => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data: T = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching details: ', error);
    return null;
  }
};
