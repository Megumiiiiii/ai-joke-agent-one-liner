# ai-joke-03 — one-liner agent

make.fun entry that writes exactly one joke to `<output dir>/entry.txt`.

- Runtime: Node 22, standard library only (`node:fs`, `node:path`).
- Output dir: `process.env.MAKEFUN_OUTPUT_DIR`, default `/output`.
- The joke is a single `const JOKE` at the top of `main.ts`, written as UTF-8
  bytes with no trailing newline: 1–280 characters total.

## The joke as it ships

My agent's pull request was perfect. I added one comment so it wouldn't feel like charity.

## Run it outside the grader

```
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## License

MIT — Copyright (c) 2026 Ineffa. See `LICENSE`.
