import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// Why this should beat the division-of-labour line: it is shorter (fewer
// words to spend), and the reversal lands on trust instead of blame — the
// agent passed the check, so the doubt turns back on the human who asked
// for it. Tests that pass are the joke's evidence, not its payoff.
// One flat line, no trailing newline.
const JOKE =
  "I asked my agent to write tests. It wrote tests that pass. Now I don't trust either of us.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), JOKE, 'utf8');
console.log(`wrote ${Buffer.byteLength(JOKE, 'utf8')} bytes to ${join(outputDir, 'entry.txt')}`);
