export const QuranText = async (): Promise<string> => {
  const response = await fetch('https://github.com/deveni0/deen-storage/raw/refs/heads/main/random/Quran_text.json');
  const texts: string[] = await response.json();
  
  const randomIndex = Math.floor(Math.random() * texts.length);
  return texts[randomIndex];
};
