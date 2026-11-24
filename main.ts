// "The make.fun cycle" — entry for Post the Meme, Win the Feed
// (u-myronera-post-the-meme-win-the-feed-2de960bf, Node 22, stdlib only).
// Copies POST.json from the repository root to /output/POST.json, where the
// gate reads it. That is all the program has to do. The entry is the post
// itself: a meme picture about make.fun, posted natively on X from a public
// account with @_myronera and one of the entrant's play codes in its text.
// POST.json names the post, and the house reads the post's counts from X.
// Nothing this program writes about the post is scored.
//
// The POST.json this repo ships holds a placeholder address, so the gate
// refuses it as it stands (valid 0). Replace it with the post's address
// before submitting — the post goes up first, then POST.json, then submit.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
