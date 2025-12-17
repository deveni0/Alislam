interface Hadith {
  id: number;
  book: string;
  author: string;
  deathYear: string;
  status: string;
  volume: string;
  hadithNumber: string;
  chapter: string;
  heading: string;
  arabic: string;
  english: string;
  urdu: string;
}

export const Hadith = async (num: number): Promise<Hadith> => {
  const hadiths: Hadith[] = await (await fetch(
    "https://raw.githubusercontent.com/deveni0/deen-storage/refs/heads/main/TEXTS/hadiths.json"
  )).json();
  
  return hadiths[num - 1]; // limited to number -> 7000
};
