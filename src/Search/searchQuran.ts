export const searchQuran = async (body: any): Promise<any | null> => {
  try {
    const response = await fetch('https://quran-muslims.vercel.app/api/quran/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    
    if (!response.ok) throw new Error();
    return await response.json();
    
  } catch {
    return null;
  }
};
