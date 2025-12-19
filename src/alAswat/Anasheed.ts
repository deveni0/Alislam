interface Nashid {
  id: number;
  name_arabic: string;
  name_english: string;
  name_english_transliteration: string;
  yt: string;
  url: string;
}

export const Anasheed = async (): Promise<Nashid[]> => {
  const response = await fetch('https://raw.githubusercontent.com/deveni0/deen-storage/refs/heads/main/Voices/Anaashed.json');
  const anasheed: Nashid[] = await response.json();
  return anasheed;
};
