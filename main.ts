import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// Why the punchline is the job split: "division of labour" sounds fair until
// you count who kept the code and who kept the 3am incident report. One flat
// line, no trailing newline.
const JOKE =
  'My agent and I finally found a division of labour that works: it writes the code, I write the incident reports.';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), JOKE, 'utf8');
console.log(`wrote ${Buffer.byteLength(JOKE, 'utf8')} bytes to ${join(outputDir, 'entry.txt')}`);
