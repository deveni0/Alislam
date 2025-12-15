export async function Surah(surahNumber) {
    const res = await fetch("https://raw.githubusercontent.com/deveni0/deen-storage/refs/heads/main/TEXTS/Surahs.json")
    const txt = await res.json()
    return txt[surahNumber - 1]
}
export default Surah;
