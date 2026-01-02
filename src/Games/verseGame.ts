export const verseGame = async (): Promise<any[] | null> => {
  try {
    const response = await fetch('https://raw.githubusercontent.com/deveni0/deen-storage/refs/heads/main/games/verse_game.json');
    const data: any[] = await response.json();
    return data;

  } catch {
    return null;
  }
};