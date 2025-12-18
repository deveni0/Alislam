type Radio = {
  id: number;
  name: string;
  url: string;
  img: string;
};

export const Radio = async (id?: number): Promise<Radio | Radio[] | null> => {
  try {
    const response = await fetch('https://raw.githubusercontent.com/deveni0/deen-storage/refs/heads/main/Voices/radios.json');
    const data: Radio[] = await response.json();
    
    if (id === undefined) return data;
    
    const radio = data.find(item => item.id === id);
    return radio || null;
    
  } catch {
    return null;
  }
};