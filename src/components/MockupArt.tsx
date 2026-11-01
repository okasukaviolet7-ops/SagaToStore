import { useId } from 'react';
import { MATERIAL_PALETTE, getCategory, getMaterial } from '@/lib/catalog';
import type { CategoryId, MaterialId } from '@/types';

type Palette = { main: string; light: string; dark: string; accent: string };

const LEAF = '#4f9a3c';
const LEAF_DARK = '#2f6f2a';
const SOIL = '#5c4030';

function Leaves({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  const angles = [-62, -32, 0, 32, 62];
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      {angles.map((a, i) => (
        <ellipse key={a} cx={0} cy={-38} rx={13} ry={36} fill={i % 2 ? LEAF : LEAF_DARK} transform={`rotate(${a})`} />
      ))}
    </g>
  );
}

function Shadow({ cy = 340, rx = 110 }: { cy?: number; rx?: number }) {
  return <ellipse cx={200} cy={cy} rx={rx} ry={12} fill="#1d3a1a" opacity={0.1} />;
}

/* ---------------------------- POT TANAMAN ---------------------------- */
function PlantArt({ material: m, p }: { material: MaterialId; p: Palette }) {
  switch (m) {
    case 'plastic_bottle':
      return (
        <g>
          <line x1={150} y1={198} x2={200} y2={64} stroke={p.dark} strokeWidth={4} strokeLinecap="round" />
          <line x1={270} y1={198} x2={200} y2={64} stroke={p.dark} strokeWidth={4} strokeLinecap="round" />
          <circle cx={200} cy={56} r={9} fill="none" stroke={p.dark} strokeWidth={5} />
          <rect x={96} y={226} width={34} height={38} rx={9} fill={p.main} />
          <rect x={80} y={233} width={18} height={24} rx={5} fill={p.dark} />
          <rect x={120} y={198} width={172} height={96} rx={30} fill={p.light} stroke={p.main} strokeWidth={5} />
          {[150, 176, 202, 228, 254].map((x) => (
            <line key={x} x1={x} y1={214} x2={x} y2={278} stroke={p.main} strokeWidth={3} opacity={0.35} />
          ))}
          <ellipse cx={206} cy={200} rx={64} ry={12} fill={SOIL} />
          <Leaves x={206} y={202} />
        </g>
      );
    case 'cardboard':
      return (
        <g>
          <Shadow cy={338} />
          <rect x={120} y={214} width={160} height={118} rx={6} fill={p.main} />
          {Array.from({ length: 7 }, (_, i) => (
            <line key={i} x1={136 + i * 22} y1={214} x2={136 + i * 22} y2={332} stroke={p.dark} strokeWidth={3} opacity={0.25} />
          ))}
          <rect x={120} y={262} width={160} height={16} fill={p.accent} />
          <rect x={112} y={204} width={176} height={16} rx={4} fill={p.dark} />
          <Leaves x={200} y={206} scale={1.1} />
        </g>
      );
    case 'old_clothes':
      return (
        <g>
          <Shadow cy={338} />
          <path d="M126 214 H274 L256 318 Q254 334 238 334 H162 Q146 334 144 318 Z" fill={p.main} />
          <path
            d="M160 222 Q168 280 154 326 M200 222 Q206 282 200 332 M240 222 Q232 280 246 326"
            stroke={p.dark}
            strokeWidth={4}
            fill="none"
            opacity={0.35}
            strokeLinecap="round"
          />
          <rect x={120} y={204} width={160} height={18} rx={9} fill={p.dark} />
          <Leaves x={200} y={206} scale={1.1} />
        </g>
      );
    case 'tin_can':
    default:
      return (
        <g>
          <Shadow cy={338} />
          <rect x={140} y={212} width={120} height={122} rx={10} fill={p.light} />
          {[230, 246, 262, 278, 294, 310].map((y) => (
            <line key={y} x1={140} y1={y} x2={260} y2={y} stroke={p.main} strokeWidth={2} opacity={0.5} />
          ))}
          <rect x={140} y={256} width={120} height={40} fill={p.accent} />
          {[158, 182, 206, 230, 246].map((x) => (
            <circle key={x} cx={x} cy={276} r={5} fill="#fff" opacity={0.85} />
          ))}
          <ellipse cx={200} cy={212} rx={60} ry={10} fill={p.main} />
          <Leaves x={200} y={210} scale={1.05} />
        </g>
      );
  }
}

/* ------------------------------- FASHION ------------------------------ */
function ClothesArt({ material: m, p }: { material: MaterialId; p: Palette }) {
  switch (m) {
    case 'plastic_bottle':
      return (
        <g transform="translate(200 196)">
          {Array.from({ length: 8 }, (_, i) => (
            <ellipse key={`a${i}`} cx={0} cy={-58} rx={26} ry={44} fill={p.light} stroke={p.main} strokeWidth={4} opacity={0.95} transform={`rotate(${i * 45})`} />
          ))}
          {Array.from({ length: 8 }, (_, i) => (
            <ellipse key={`b${i}`} cx={0} cy={-34} rx={16} ry={26} fill={p.main} opacity={0.55} transform={`rotate(${i * 45 + 22.5})`} />
          ))}
          <circle r={22} fill={p.accent} />
          <circle r={9} fill={p.dark} opacity={0.35} />
        </g>
      );
    case 'cardboard':
      return (
        <g>
          <path d="M105 110 Q200 330 295 110" fill="none" stroke={p.dark} strokeWidth={5} strokeLinecap="round" />
          {[
            { x: 133, y: 166, r: 58, s: 1 },
            { x: 166, y: 206, r: 40, s: 1 },
            { x: 200, y: 224, r: 0, s: 1.25 },
            { x: 234, y: 206, r: -40, s: 1 },
            { x: 267, y: 166, r: -58, s: 1 },
          ].map((d, i) => (
            <g key={i} transform={`translate(${d.x} ${d.y}) rotate(${d.r}) scale(${d.s})`}>
              <rect x={-17} y={-17} width={34} height={34} rx={5} fill={i % 2 ? p.light : p.main} stroke={p.dark} strokeWidth={3} />
              <circle r={7} fill={p.accent} />
            </g>
          ))}
        </g>
      );
    case 'old_clothes':
      return (
        <g>
          <Shadow cy={346} rx={96} />
          <path
            d="M165 90 L188 90 Q200 150 212 90 L235 90 Q236 142 254 168 L258 290 L142 290 L146 168 Q164 142 165 90 Z"
            fill={p.main}
          />
          {[200, 224, 248].map((y) => (
            <line key={y} x1={152} y1={y} x2={248} y2={y} stroke={p.dark} strokeWidth={5} opacity={0.2} />
          ))}
          {Array.from({ length: 10 }, (_, i) => (
            <line key={i} x1={148 + i * 11.5} y1={290} x2={148 + i * 11.5} y2={318} stroke={p.main} strokeWidth={6} strokeLinecap="round" />
          ))}
        </g>
      );
    case 'tin_can':
    default:
      return (
        <g>
          {[150, 250].map((x) => (
            <g key={x} transform={`translate(${x} 0)`}>
              <path d="M0 92 q-18 0 -18 18 q0 16 18 16" fill="none" stroke={p.dark} strokeWidth={4} strokeLinecap="round" />
              <line x1={0} y1={126} x2={0} y2={150} stroke={p.dark} strokeWidth={4} strokeLinecap="round" />
              <rect x={-17} y={150} width={34} height={62} rx={17} fill={p.light} stroke={p.main} strokeWidth={4} />
              <ellipse cx={0} cy={172} rx={8} ry={11} fill={p.main} />
              <line x1={0} y1={212} x2={0} y2={232} stroke={p.dark} strokeWidth={4} strokeLinecap="round" />
              <circle cx={0} cy={248} r={15} fill={p.accent} />
            </g>
          ))}
        </g>
      );
  }
}

/* --------------------------------- TAS -------------------------------- */
function BagsArt({ material: m, p }: { material: MaterialId; p: Palette }) {
  switch (m) {
    case 'plastic_bottle':
      return (
        <g>
          <Shadow cy={316} rx={120} />
          <rect x={95} y={170} width={210} height={124} rx={36} fill={p.light} stroke={p.main} strokeWidth={5} />
          {Array.from({ length: 7 }, (_, i) => (
            <line key={i} x1={135 + i * 22} y1={196} x2={135 + i * 22} y2={280} stroke={p.main} strokeWidth={3} opacity={0.3} />
          ))}
          <rect x={112} y={170} width={176} height={14} rx={7} fill={p.dark} />
          <line x1={124} y1={177} x2={276} y2={177} stroke="#fff" strokeWidth={4} strokeDasharray="3 4" opacity={0.85} />
          <rect x={108} y={168} width={28} height={18} rx={9} fill={p.accent} />
        </g>
      );
    case 'cardboard':
      return (
        <g>
          <Shadow cy={340} rx={100} />
          <rect x={125} y={170} width={150} height={160} rx={6} fill={p.main} />
          {Array.from({ length: 6 }, (_, i) => (
            <line key={i} x1={140 + i * 24} y1={170} x2={140 + i * 24} y2={330} stroke={p.dark} strokeWidth={3} opacity={0.2} />
          ))}
          <rect x={145} y={222} width={110} height={84} rx={8} fill={p.light} />
          <rect x={145} y={256} width={110} height={14} fill={p.accent} />
          <path d="M160 172 Q160 92 200 92 Q240 92 240 172" fill="none" stroke={p.dark} strokeWidth={8} strokeLinecap="round" />
          <circle cx={160} cy={180} r={5} fill={p.accent} />
          <circle cx={240} cy={180} r={5} fill={p.accent} />
        </g>
      );
    case 'old_clothes':
      return (
        <g>
          <Shadow cy={346} rx={100} />
          <path d="M160 152 C160 58 240 58 240 152" fill="none" stroke={p.dark} strokeWidth={14} strokeLinecap="butt" />
          <rect x={135} y={150} width={130} height={150} rx={4} fill={p.main} />
          {[190, 214, 238, 262].map((y) => (
            <line key={y} x1={135} y1={y} x2={265} y2={y} stroke={p.dark} strokeWidth={5} opacity={0.2} />
          ))}
          {Array.from({ length: 11 }, (_, i) => (
            <g key={i}>
              <line x1={141 + i * 11.8} y1={300} x2={141 + i * 11.8} y2={332} stroke={p.main} strokeWidth={7} strokeLinecap="round" />
              <circle cx={141 + i * 11.8} cy={306} r={4} fill={p.dark} opacity={0.4} />
            </g>
          ))}
        </g>
      );
    case 'tin_can':
    default:
      return (
        <g>
          <Shadow cy={338} rx={110} />
          <path d="M130 172 C130 90 270 90 270 172" fill="none" stroke={p.dark} strokeWidth={7} strokeDasharray="10 6" strokeLinecap="round" />
          {Array.from({ length: 6 }, (_, r) =>
            Array.from({ length: 7 }, (_, c) => (
              <g key={`${r}-${c}`}>
                <rect
                  x={110 + c * 26 + (r % 2) * 6}
                  y={172 + r * 24}
                  width={22}
                  height={14}
                  rx={7}
                  fill={(r + c) % 3 === 0 ? p.accent : p.light}
                  stroke={p.main}
                  strokeWidth={2}
                />
                <ellipse cx={121 + c * 26 + (r % 2) * 6} cy={179 + r * 24} rx={4} ry={2.6} fill={p.main} />
              </g>
            )),
          )}
        </g>
      );
  }
}

interface MockupArtProps {
  category: CategoryId;
  material: MaterialId;
  className?: string;
  /** Tanpa latar kartu (untuk dipakai di atas latar lain) */
  bare?: boolean;
}

/** Ilustrasi vektor mockup hasil upcycling (dipakai sebagai mode simulasi AI). */
export default function MockupArt({ category, material, className, bare = false }: MockupArtProps) {
  const rawId = useId();
  const id = `bg${rawId.replace(/:/g, '')}`;
  const p = MATERIAL_PALETTE[material];
  const label = `Ilustrasi ${getCategory(category).label} dari ${getMaterial(material).label}`;

  return (
    <svg viewBox="0 0 400 400" role="img" aria-label={label} className={className} xmlns="http://www.w3.org/2000/svg">
      {!bare && (
        <>
          <defs>
            <radialGradient id={id} cx="50%" cy="38%" r="75%">
              <stop offset="0%" stopColor="#fffdf6" />
              <stop offset="100%" stopColor="#e4efd8" />
            </radialGradient>
          </defs>
          <rect width={400} height={400} rx={36} fill={`url(#${id})`} />
          <circle cx={340} cy={70} r={44} fill="#c2e0b1" opacity={0.45} />
          <circle cx={58} cy={340} r={60} fill="#e7dfc8" opacity={0.55} />
        </>
      )}
      {category === 'plant' && <PlantArt material={material} p={p} />}
      {category === 'clothes' && <ClothesArt material={material} p={p} />}
      {category === 'bags' && <BagsArt material={material} p={p} />}
    </svg>
  );
}
