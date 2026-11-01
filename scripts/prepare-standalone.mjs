// Menyalin aset statis ke dalam .next/standalone supaya folder tersebut
// bisa di-upload & dijalankan sendiri: `node server.js`
import { cpSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const standalone = join(root, '.next', 'standalone');

if (!existsSync(standalone)) {
  console.error('Folder .next/standalone tidak ditemukan. Jalankan `npm run build:standalone`.');
  process.exit(1);
}

cpSync(join(root, '.next', 'static'), join(standalone, '.next', 'static'), { recursive: true });
if (existsSync(join(root, 'public'))) {
  cpSync(join(root, 'public'), join(standalone, 'public'), { recursive: true });
}

console.log('Siap! Folder .next/standalone dapat di-upload ke hosting.');
console.log('Uji lokal: node .next/standalone/server.js');
