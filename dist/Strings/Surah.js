export async function Surah(surahNumber) {
    const formattedNumber = surahNumber.toString().padStart(3, '0');
    const url = `https://raw.githubusercontent.com/deveni0/deen-storage/refs/heads/main/TEXTS/Surahs/${formattedNumber}.json`;
    
    const response = await fetch(url);
    const data = await response.json();
    
    return data;
}
export default Surah;
