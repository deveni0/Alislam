export const QuranImage = async (): Promise<string> => {
  const response = await fetch('https://raw.githubusercontent.com/deveni0/deen-storage/refs/heads/main/random/Images_Quran.json');
  const images: string[] = await response.json();
  
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};
