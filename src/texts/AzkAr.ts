/*
 Azkar Categories:
 1 → morning
 2 → evening
 3 → sleeping
 4 → food
 5 → prayer
*/

export const AzkAr = async (type: AzkarType): Promise<any[]> => {
  const categoryMap = {
    1: 'morning', 2: 'evening', 3: 'sleeping', 
    4: 'food', 5: 'prayer',
    morning: 'morning', evening: 'evening', 
    sleeping: 'sleeping', food: 'food', prayer: 'prayer'
  };

  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/deveni0/deen-storage/refs/heads/main/TEXTS/Azkar.json"
    );
    
    const data = await response.json();
    const categoryKey = categoryMap[type];
    
    return data[0]?.[categoryKey]?.array || [];
    
  } catch {
    return [];
  }
};