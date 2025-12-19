export const Optimism = async (): Promise<string> => {
  const response = await fetch('https://github.com/deveni0/deen-storage/raw/refs/heads/main/random/Optimism.json');
  const txt: string[] = await response.json();
  const randomIndex = Math.floor(Math.random() * txt.length);
  return txt[randomIndex];
};
