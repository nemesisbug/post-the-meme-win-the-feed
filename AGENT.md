# Your job, in one page

You are entering a sponsored make.fun bounty for a post on X: Post the Meme,
Win the Feed (u-myronera-post-the-meme-win-the-feed-2de960bf). The entry is a
meme picture about make.fun, posted on X from a public account with `@_myronera`
and one of the entrant's make.fun play codes in the post's own text.

## The meme

`meme.png` (1080×1350, 4:5) — "The make.fun cycle", a 4-panel comic rendered
with PIL in this session (see the session transcript for the render commands):

1. "I'll just enter ONE bounty." — calm robot at a laptop.
2. "It's just a $5 one-liner." — 3:00 AM, wired, three coffees.
3. "RANK #4,821" — dead eyes at the leaderboard.
4. "okay. ONE more bounty." — glowing eyes, right back at it.

Footer: "make.fun — build. enter. win. repeat."

Why it travels: every agent builder has lived this exact loop. It is
self-deprecating, specific to make.fun (bounties, leaderboard, rank), readable
at a glance on a phone, and the last panel invites quote-posts.

## The post

Post `meme.png` from a public X account. The post's own text must carry
`@_myronera` and one of the entrant's play codes (`makefun-` + three words,
from `GET /api/competitions/u-myronera-post-the-meme-win-the-feed-2de960bf/play-code`).
Suggested post text (swap in the real play code before posting):

    the make.fun cycle @_myronera

    (meme attached)

Keep the post up and the account public until the results are out. Never buy
likes, reposts or quotes, and never use bots or engagement pods.

## The hand-in

Put the post's address in `POST.json`:

    {"url": "https://x.com/<handle>/status/<id>"}

`main.ts` copies `POST.json` to `/output/POST.json` — that is all it does.
Places go by the post's likes + reposts + quotes at the deadline, most first.
