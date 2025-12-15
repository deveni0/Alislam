/*
 Azkar Order:
 0 → morning
 1 → evening
 2 → sleeping
 3 → food
 4 → prayer
*/

export async function AzkAr(vel) {
  const res = await fetch(
    "https://raw.githubusercontent.com/deveni0/deen-storage/refs/heads/main/TEXTS/Surahs.json"
  );

  const txt = await res.json();
  return txt[0][vel];
}

export default AzkAr;