import { CONFIG } from "../../config";

interface ApiResponse {
  code: number;
  status: string;
  data: {
    status: string;
    result_url: string;
    task_id: string;
  };
}

interface Image2IslamOptions {
  style?: 'men' | 'hijab' | 'niqab' | 'islamic' | 'ramadan';
  prompt?: string;
}

const defaultPrompts: Record<string, string> = {
  men: `Transform into Islamic modest style for men. Preserve face, expression, pose, background. Add thobe or bisht. Respectful, clean.`,
  hijab: `Transform into Islamic modest style with hijab. Preserve face, expression, pose. Add hijab covering all hair. Modest dress.`,
  niqab: `Transform into Islamic modest style with niqab. Preserve expression, pose. Add niqab covering face except eyes. Full modest dress.`,
  islamic: `Transform into complete Islamic style. Preserve subject, expression, pose. Add Islamic modest attire and artistic elements.`,
  ramadan: `Transform into Ramadan style. Preserve subject, expression, pose. Add Islamic attire with Ramadan theme elements.`
};

export const image2islam = async (image_url: string, options: Image2IslamOptions = {}): Promise<ApiResponse['data']> => {
  const { style = 'islamic', prompt: customPrompt } = options;
  
  const finalPrompt = customPrompt || defaultPrompts[style] || defaultPrompts.islamic;
  
  const response = await fetch(`${CONFIG.QURAN_API}/nano-banana`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      prompt: finalPrompt,
      image_urls: image_url
    })
  });

  const result: ApiResponse = await response.json();
  return result.data;
};