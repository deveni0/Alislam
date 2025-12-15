export async function Tasbih() {
    const res = await fetch("https://raw.githubusercontent.com/deveni0/deen-storage/refs/heads/main/TEXTS/tasbih.json");
const txt = await res.json();
return { 
      name_ar: "تسابيح",
      name_en: "Tasbih",
      image: "https://raw.githubusercontent.com/deveni0/deen-storage/refs/heads/main/images/9d62581100f32b696582f06505148aff.jpg",
      array: txt
      };
}

export default Tasbih;