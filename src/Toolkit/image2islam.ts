import { API_CONFIG } from "../../config";
interface IslamicClothingResult {
  status: string;
  result_url: string;
  task_id: string;
}

interface StyleConfig {
  prompt: string;
}

const styles: Record<string, StyleConfig> = {
  men: {
    prompt: `Transform into Islamic modest style for men. Preserve face, expression, pose, background. Add thobe or bisht. Respectful, clean.`
  },
  hijab: {
    prompt: `Transform into Islamic modest style with hijab. Preserve face, expression, pose. Add hijab covering all hair. Modest dress.`
  },
  niqab: {
    prompt: `Transform into Islamic modest style with niqab. Preserve expression, pose. Add niqab covering face except eyes. Full modest dress.`
  },
  islamic: {
    prompt: `Transform into complete Islamic style. Preserve subject, expression, pose. Add Islamic modest attire and artistic elements.`
  },
  ramadan: {
    prompt: `Transform into Ramadan style. Preserve subject, expression, pose. Add Islamic attire with Ramadan theme elements.`
  }
};

export const image2islam = async (image_url: string, style: keyof typeof styles): Promise<IslamicClothingResult> => {
  const response = await fetch(`${CONFIG.QURAN_API}/nano-banana`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      prompt: styles[style].prompt,
      image_urls: image_url
    })
  });

  return response.json();
};