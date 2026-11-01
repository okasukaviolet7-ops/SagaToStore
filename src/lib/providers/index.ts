import { mockProvider } from './mock';
import { openaiProvider } from './openai';
import type { ImageProvider, ProviderInput, ProviderOutput } from './types';

function pickProvider(): { name: string; run: ImageProvider } {
  const wanted = (process.env.AI_PROVIDER || 'mock').toLowerCase();
  if (wanted === 'openai' && process.env.OPENAI_API_KEY) {
    return { name: 'openai', run: openaiProvider };
  }
  return { name: 'mock', run: mockProvider };
}

/**
 * Menjalankan provider terpilih. Bila provider AI gagal, otomatis jatuh ke
 * mode simulasi agar pengguna tetap mendapat hasil + panduan.
 */
export async function generateVisual(input: ProviderInput): Promise<ProviderOutput> {
  const { name, run } = pickProvider();
  try {
    return await run(input);
  } catch (error) {
    console.error(`[upcyclo] provider "${name}" gagal:`, error);
    return {
      mode: 'mock',
      imageUrl: null,
      notice: 'Generator AI sedang tidak tersedia, jadi yang ditampilkan adalah mockup simulasi.',
    };
  }
}
