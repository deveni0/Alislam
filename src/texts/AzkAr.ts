/*
 Azkar Categories:
 1 → morning
 2 → evening
 3 → sleeping
 4 → food
 5 → prayer
*/


type AzkarType = 1 | 2 | 3 | 4 | 5 | 'morning' | 'evening' | 'sleeping' | 'food' | 'prayer';

const categoryMap: Record<AzkarType, string> = {
  1: 'morning', 2: 'evening', 3: 'sleeping',
  4: 'food', 5: 'prayer',
  morning: 'morning', evening: 'evening',
  sleeping: 'sleeping', food: 'food', prayer: 'prayer'
};

export const AzkAr = async (type: AzkarType): Promise<any[]> => {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/deveni0/deen-storage/refs/heads/main/TEXTS/Azkar.json"
    );
    const data = await response.json();
    return data[0]?.[categoryMap[type]]?.array || [];
  } catch {
    return [];
  }
};
