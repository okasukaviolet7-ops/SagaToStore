import { NextResponse } from 'next/server';
import { isCategoryId, isMaterialId } from '@/lib/catalog';
import { generateVisual } from '@/lib/providers';
import { isRateLimited } from '@/lib/rateLimit';
import { getIdea } from '@/lib/tutorials';
import type { GenerateResponse } from '@/types';

export const runtime = 'nodejs';
export const maxDuration = 60;

const MAX_IMAGE_CHARS = 8 * 1024 * 1024; // ±6 MB data biner
const IMAGE_PATTERN = /^data:image\/(?:jpeg|png|webp);base64,[A-Za-z0-9+/=]+$/;

function clientKey(req: Request): string {
  const forwarded = req.headers.get('x-forwarded-for');
  return forwarded?.split(',')[0]?.trim() || req.headers.get('x-real-ip') || 'anonymous';
}

export async function POST(req: Request) {
  if (isRateLimited(clientKey(req))) {
    return NextResponse.json(
      { error: 'Terlalu banyak permintaan. Tunggu sebentar lalu coba lagi.' },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Format permintaan tidak valid.' }, { status: 400 });
  }

  const { image, material, category } = (body ?? {}) as Record<string, unknown>;

  if (typeof image !== 'string' || image.length > MAX_IMAGE_CHARS || !IMAGE_PATTERN.test(image)) {
    return NextResponse.json(
      { error: 'Foto tidak valid. Gunakan JPG, PNG, atau WebP berukuran wajar.' },
      { status: 400 },
    );
  }
  if (!isMaterialId(material)) {
    return NextResponse.json({ error: 'Jenis bahan tidak dikenal.' }, { status: 400 });
  }
  if (!isCategoryId(category)) {
    return NextResponse.json({ error: 'Kategori hasil tidak dikenal.' }, { status: 400 });
  }

  const visual = await generateVisual({ image, material, category });

  const payload: GenerateResponse = {
    mode: visual.mode,
    imageUrl: visual.imageUrl,
    notice: visual.notice,
    category,
    material,
    idea: getIdea(category, material),
    createdAt: new Date().toISOString(),
  };

  return NextResponse.json(payload, { headers: { 'Cache-Control': 'no-store' } });
}
