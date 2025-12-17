/*
 Azkar Categories:
 1 → morning
 2 → evening
 3 → sleeping
 4 → food
 5 → prayer
*/

type AzkarType = 1 | 2 | 3 | 4 | 5 | 'morning' | 'evening' | 'sleeping' | 'food' | 'prayer';

export const getAzkar = async (type: AzkarType): Promise<any[]> => {
  const azkar: any[][] = await (await fetch(
    "https://raw.githubusercontent.com/deveni0/deen-storage/refs/heads/main/TEXTS/Azkar.json"
  )).json();
  
  const index = typeof type === 'string' 
    ? { morning: 0, evening: 1, sleeping: 2, food: 3, prayer: 4 }[type]
    : type - 1;
    
  return azkar[index];
};
