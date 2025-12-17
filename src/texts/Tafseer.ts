interface TafseerRequest {
  surah: number;
  ayah?: number;
}

interface TafseerResponse {
  [key: string]: any;
}

export const Tafseer = async (request: TafseerRequest): Promise<TafseerResponse> => {
  const response = await fetch("https://quran-muslims.vercel.app/api/tafseer", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  });

  return response.json();
};
