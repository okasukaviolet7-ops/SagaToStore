import { getIdea } from '@/lib/tutorials';
import type { CategoryId, MaterialId } from '@/types';
import type { ImageProvider } from './types';

const ENDPOINT = 'https://api.openai.com/v1/images/edits';

// Prompt dalam bahasa Inggris memberi hasil yang lebih konsisten pada model gambar.
const MATERIAL_EN: Record<MaterialId, string> = {
  plastic_bottle: 'plastic bottle',
  cardboard: 'cardboard',
  old_clothes: 'old clothes / fabric',
  tin_can: 'tin can',
};

const OUTPUT_EN: Record<CategoryId, string> = {
  plant: 'a decorative plant pot with a living plant in it',
  clothes: 'a stylish upcycled fashion piece or accessory',
  bags: 'a practical eco-friendly bag',
};

export function buildPrompt(material: MaterialId, category: CategoryId): string {
  const idea = getIdea(category, material);
  return [
    `Photorealistic product mockup of an upcycled item made from the object in the reference photo (${MATERIAL_EN[material]}).`,
    `The finished item is ${OUTPUT_EN[category]}, inspired by the idea "${idea.title}".`,
    'Keep the original material, colour and texture clearly recognisable, but show it transformed into the finished craft item.',
    'Clean studio shot, soft natural light, neutral warm background, item centered, handmade look.',
    'No text, no watermark, no logos, no people.',
  ].join(' ');
}

function dataUrlToBlob(dataUrl: string): Blob {
  const match = /^data:(image\/(?:jpeg|png|webp));base64,(.+)$/.exec(dataUrl);
  if (!match) throw new Error('Format gambar tidak valid');
  const bytes = Buffer.from(match[2], 'base64');
  return new Blob([bytes], { type: match[1] });
}

/**
 * Mengubah foto menjadi mockup hasil upcycling lewat OpenAI Image Edits.
 * Jika gagal (kuota, jaringan, dll.), pemanggil akan fallback ke mode simulasi.
 */
export const openaiProvider: ImageProvider = async ({ image, material, category }) => {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) throw new Error('OPENAI_API_KEY belum diisi');

  const blob = dataUrlToBlob(image);
  const form = new FormData();
  form.append('model', process.env.OPENAI_IMAGE_MODEL || 'gpt-image-1');
  form.append('prompt', buildPrompt(material, category));
  form.append('image', blob, blob.type === 'image/png' ? 'input.png' : 'input.jpg');
  form.append('size', '1024x1024');
  form.append('n', '1');
  // JPEG jauh lebih kecil dari PNG sehingga respons & penyimpanan sesi lebih ringan
  form.append('output_format', 'jpeg');
  form.append('quality', 'medium');

  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}` },
    body: form,
    signal: AbortSignal.timeout(90_000),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`OpenAI ${res.status}: ${text.slice(0, 300)}`);
  }

  const json = (await res.json()) as { data?: { b64_json?: string; url?: string }[] };
  const first = json.data?.[0];
  if (first?.b64_json) {
    return { mode: 'ai', imageUrl: `data:image/jpeg;base64,${first.b64_json}` };
  }
  if (first?.url) {
    return { mode: 'ai', imageUrl: first.url };
  }
  throw new Error('Respons OpenAI tidak berisi gambar');
};
