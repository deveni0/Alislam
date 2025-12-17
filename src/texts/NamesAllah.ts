interface AllahName {
  id: number;
  name: string;
  text: string;
  name_en: string;
  text_en: string;
}

export const getNameOfAllah = async (num: number): Promise<AllahName> => {
  const names: AllahName[] = await (await fetch(
    "https://raw.githubusercontent.com/deveni0/deen-storage/refs/heads/main/TEXTS/Names_Allah.json"
  )).json();
  
  return names[num - 1];
};
