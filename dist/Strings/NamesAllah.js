export async function NamesAllah(number) {
    const response = await fetch("https://raw.githubusercontent.com/deveni0/deen-storage/refs/heads/main/TEXTS/Names_Allah.json");
    const data = await response.json();
    return data[number - 1];
}

export default NamesAllah;