import { CONFIG } from "../../config";

export const searchQuran = async (body: any): Promise<any | null> => {
  try {
    const response = await fetch(`${CONFIG.QURAN_API}/quran/search`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    
    if (!response.ok) throw new Error();
    return await response.json();
    
  } catch {
    return null;
  }
};
