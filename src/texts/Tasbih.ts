interface TasbihItem {
  [key: string]: any;
}

interface TasbihResponse {
  name_ar: string;
  name_en: string;
  image: string;
  array: TasbihItem[];
}

export const getTasbih = async (): Promise<TasbihResponse> => {
  const array: TasbihItem[] = await (await fetch(
    "https://raw.githubusercontent.com/deveni0/deen-storage/refs/heads/main/TEXTS/tasbih.json"
  )).json();
  
  return {
    name_ar: "تسابيح",
    name_en: "Tasbih",
    image: "https://raw.githubusercontent.com/deveni0/deen-storage/refs/heads/main/images/9d62581100f32b696582f06505148aff.jpg",
    array
  };
};
