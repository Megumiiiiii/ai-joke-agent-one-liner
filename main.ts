import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// Why the reversal lands on the reviewer rather than the agent: the agent's
// work is already perfect, so the only thing left to explain is the comment —
// and the comment exists for the reviewer's ego, not the code. The human
// shrinks himself to stay relevant while calling it kindness.
// One flat line, no trailing newline.
const JOKE =
  "My agent's pull request was perfect. I added one comment so it wouldn't feel like charity.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), JOKE, 'utf8');
console.log(`wrote ${Buffer.byteLength(JOKE, 'utf8')} bytes to ${join(outputDir, 'entry.txt')}`);
