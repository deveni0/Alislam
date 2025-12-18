import { CONFIG } from "../../config";

export const PrayerTimings = async (body: any): Promise<any | null> => {
  try {
    const response = await fetch(`${CONFIG.QURAN_API}/timingsByCity`, {
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
