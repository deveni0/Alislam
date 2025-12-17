export const surah = async (num: number): Promise<any> => {
  const surahs: any[] = await (await fetch(
    "https://raw.githubusercontent.com/deveni0/deen-storage/refs/heads/main/TEXTS/Surahs.json"
  )).json();
  
  return surahs[num - 1];
};
